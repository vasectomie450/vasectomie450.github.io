#!/bin/bash

# Quick Restart Script for Vasectomy Clinic
# This script quickly rebuilds and restarts the application without full deployment process

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

main() {
    log_info "🚀 Quick restart initiated..."
    
    # Check if .env exists
    if [ ! -f ".env" ]; then
        log_warning ".env file not found, using .env.example"
        cp .env.example .env
    fi
    
    # Quick build
    log_info "Building application..."
    npm run build
    
    # Restart containers
    log_info "Restarting Docker containers..."
    docker-compose down
    docker-compose up -d --build
    
    # Quick health check
    log_info "Waiting for services to start..."
    sleep 15
    
    if curl -f -s http://localhost:3001/health > /dev/null 2>&1; then
        log_success "✅ Application restarted successfully!"
        log_info "🌐 Application is available at:"
        log_info "   - Frontend: http://localhost"
        log_info "   - API: http://localhost:3001"
        log_info "   - Health: http://localhost:3001/health"
    else
        log_warning "⚠️  Health check failed, but services may still be starting..."
        log_info "Check logs with: docker-compose logs -f"
    fi
}

# Handle arguments
case "${1:-restart}" in
    "restart"|"")
        main
        ;;
    "build-only")
        log_info "Building application only..."
        npm run build
        log_success "Build completed"
        ;;
    "docker-only")
        log_info "Restarting Docker containers only..."
        docker-compose restart
        log_success "Docker containers restarted"
        ;;
    *)
        echo "Usage: $0 {restart|build-only|docker-only}"
        echo ""
        echo "Commands:"
        echo "  restart     - Build and restart (default)"
        echo "  build-only  - Only build the application"
        echo "  docker-only - Only restart Docker containers"
        exit 1
        ;;
esac
