#!/bin/bash

# Vasectomy Clinic - Production Deployment Script
# This script rebuilds and restarts the application with zero-downtime deployment

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
APP_NAME="vasectomy-clinic"
COMPOSE_FILE="docker-compose.yml"
BACKUP_DIR="./backups"
LOG_DIR="./logs"

# Functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker and Docker Compose are installed
check_dependencies() {
    log_info "Checking dependencies..."
    
    if ! command -v docker &> /dev/null; then
        log_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        log_error "Docker Compose is not installed. Please install Docker Compose first."
        exit 1
    fi
    
    log_success "Dependencies check passed"
}

# Create necessary directories
setup_directories() {
    log_info "Setting up directories..."
    mkdir -p "$BACKUP_DIR" "$LOG_DIR" "$LOG_DIR/nginx"
    log_success "Directories created"
}

# Backup current deployment
backup_deployment() {
    log_info "Creating backup..."
    
    TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
    BACKUP_FILE="$BACKUP_DIR/backup_$TIMESTAMP.tar.gz"
    
    if [ -d "dist" ]; then
        tar -czf "$BACKUP_FILE" dist/ server/ package*.json .env 2>/dev/null || true
        log_success "Backup created: $BACKUP_FILE"
    else
        log_warning "No previous build found, skipping backup"
    fi
}

# Build the application
build_app() {
    log_info "Building application..."
    
    # Install dependencies
    log_info "Installing dependencies..."
    npm ci --silent
    
    # Run security audit
    log_info "Running security audit..."
    npm audit --audit-level moderate || log_warning "Security audit found issues"
    
    # Type check
    log_info "Running type check..."
    npm run type-check
    
    # Build the application
    log_info "Building production bundle..."
    npm run build
    
    log_success "Application built successfully"
}

# Health check function
health_check() {
    local max_attempts=30
    local attempt=1
    
    log_info "Performing health check..."
    
    while [ $attempt -le $max_attempts ]; do
        if curl -f -s http://localhost:3001/health > /dev/null 2>&1; then
            log_success "Health check passed"
            return 0
        fi
        
        log_info "Health check attempt $attempt/$max_attempts failed, retrying in 5 seconds..."
        sleep 5
        ((attempt++))
    done
    
    log_error "Health check failed after $max_attempts attempts"
    return 1
}

# Deploy with Docker Compose
deploy() {
    log_info "Starting deployment..."
    
    # Pull latest base images
    log_info "Pulling latest base images..."
    docker-compose pull --ignore-pull-failures
    
    # Build and start services
    log_info "Building and starting services..."
    docker-compose up -d --build --remove-orphans
    
    # Wait for services to be ready
    sleep 10
    
    # Perform health check
    if health_check; then
        log_success "Deployment completed successfully"
        
        # Clean up old images
        log_info "Cleaning up old Docker images..."
        docker image prune -f
        
        # Show running containers
        log_info "Running containers:"
        docker-compose ps
        
        return 0
    else
        log_error "Deployment failed health check"
        return 1
    fi
}

# Rollback function
rollback() {
    log_warning "Rolling back to previous version..."
    
    # Stop current containers
    docker-compose down
    
    # Find latest backup
    LATEST_BACKUP=$(ls -t "$BACKUP_DIR"/backup_*.tar.gz 2>/dev/null | head -n1)
    
    if [ -n "$LATEST_BACKUP" ]; then
        log_info "Restoring from backup: $LATEST_BACKUP"
        tar -xzf "$LATEST_BACKUP"
        
        # Restart with previous version
        docker-compose up -d --build
        
        if health_check; then
            log_success "Rollback completed successfully"
        else
            log_error "Rollback failed"
            exit 1
        fi
    else
        log_error "No backup found for rollback"
        exit 1
    fi
}

# Main deployment process
main() {
    log_info "Starting Vasectomy Clinic deployment process..."
    
    # Check for .env file
    if [ ! -f ".env" ]; then
        log_error ".env file not found. Please create one based on .env.example"
        exit 1
    fi
    
    check_dependencies
    setup_directories
    backup_deployment
    
    # Build application
    if build_app; then
        log_success "Build completed successfully"
    else
        log_error "Build failed"
        exit 1
    fi
    
    # Deploy
    if deploy; then
        log_success "🎉 Deployment completed successfully!"
        log_info "Application is running at:"
        log_info "  - HTTP: http://localhost"
        log_info "  - API: http://localhost:3001"
        log_info "  - Health: http://localhost:3001/health"
    else
        log_error "Deployment failed, attempting rollback..."
        rollback
    fi
}

# Handle script arguments
case "${1:-deploy}" in
    "deploy")
        main
        ;;
    "rollback")
        rollback
        ;;
    "health")
        health_check
        ;;
    "logs")
        docker-compose logs -f
        ;;
    "stop")
        log_info "Stopping services..."
        docker-compose down
        log_success "Services stopped"
        ;;
    "restart")
        log_info "Restarting services..."
        docker-compose restart
        log_success "Services restarted"
        ;;
    *)
        echo "Usage: $0 {deploy|rollback|health|logs|stop|restart}"
        echo ""
        echo "Commands:"
        echo "  deploy   - Build and deploy the application (default)"
        echo "  rollback - Rollback to previous version"
        echo "  health   - Check application health"
        echo "  logs     - Show application logs"
        echo "  stop     - Stop all services"
        echo "  restart  - Restart all services"
        exit 1
        ;;
esac
