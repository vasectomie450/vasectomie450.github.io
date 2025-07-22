# Vasectomy Clinic - Production Deployment Guide

This guide covers the Docker-based production deployment of the Vasectomy Clinic website.

## 🏗️ Architecture

The application uses a multi-container Docker setup with:

- **Application Container**: Node.js server serving both API and static files
- **Nginx Container**: Reverse proxy with SSL termination and security headers
- **Multi-stage Dockerfile**: Optimized build process with security best practices

## 📋 Prerequisites

- Docker Engine 20.10+
- Docker Compose 2.0+
- Domain name (for SSL)
- SSL certificates (optional, for HTTPS)

## 🚀 Quick Start

1. **Clone and setup environment**:
   ```bash
   git clone <your-repo>
   cd vasectomie450.github.io
   cp .env.production .env
   # Edit .env with your configuration
   ```

2. **Deploy**:
   ```bash
   ./deploy.sh
   ```

3. **Quick restart** (for code changes):
   ```bash
   ./quick-restart.sh
   ```

## ⚙️ Configuration

### Environment Variables

Copy `.env.production` to `.env` and configure:

```bash
# Required
NODE_ENV=production
VITE_GOOGLE_PLACES_API_KEY=your_api_key
VITE_GOOGLE_PLACE_ID=your_place_id
DOMAIN_URL=https://your-domain.com

# Optional
SESSION_SECRET=your_session_secret
ALLOWED_ORIGINS=https://your-domain.com
```

### SSL Configuration

For HTTPS, place your certificates in the `ssl/` directory:
```
ssl/
├── cert.pem
└── key.pem
```

Then uncomment the HTTPS server block in `nginx.conf`.

## 🛠️ Deployment Scripts

### Main Deployment (`deploy.sh`)

Full production deployment with:
- Dependency check
- Security audit
- Application build
- Docker image build
- Health checks
- Automatic rollback on failure

```bash
./deploy.sh                 # Full deployment
./deploy.sh rollback        # Rollback to previous version
./deploy.sh health          # Health check only
./deploy.sh logs            # View logs
./deploy.sh stop            # Stop services
./deploy.sh restart         # Restart services
```

### Quick Restart (`quick-restart.sh`)

Fast restart for code changes:
```bash
./quick-restart.sh          # Build and restart
./quick-restart.sh build-only    # Build only
./quick-restart.sh docker-only   # Restart containers only
```

## 🔒 Security Features

### Application Security
- **Helmet.js**: Security headers (CSP, HSTS, etc.)
- **CORS**: Configurable origin restrictions
- **Rate limiting**: API endpoint protection
- **Input validation**: Request size limits
- **Non-root user**: Container runs as unprivileged user

### Container Security
- **Multi-stage build**: Minimal production image
- **Security updates**: Automatic Alpine security patches
- **No new privileges**: Container security options
- **Resource limits**: CPU and memory constraints
- **Health checks**: Application monitoring

### Network Security
- **Reverse proxy**: Nginx handles external traffic
- **Internal network**: Isolated Docker network
- **SSL termination**: HTTPS support
- **Security headers**: XSS, CSRF protection

## 📊 Monitoring

### Health Checks
- Application: `http://localhost:3001/health`
- API: `http://localhost:3001/api/health`
- Container health checks every 30 seconds

### Logging
- Application logs: `./logs/`
- Nginx logs: `./logs/nginx/`
- Docker logs: `docker-compose logs`

### Metrics
```bash
# Container stats
docker stats

# Resource usage
docker system df

# Container health
docker-compose ps
```

## 🔧 Maintenance

### Updates
```bash
# Update application
git pull
./deploy.sh

# Update base images
docker-compose pull
./deploy.sh
```

### Backups
Automatic backups are created before each deployment in `./backups/`

### Cleanup
```bash
# Remove unused images
docker image prune -f

# Remove unused volumes
docker volume prune -f

# Full cleanup
docker system prune -af
```

## 🐛 Troubleshooting

### Common Issues

1. **Port conflicts**:
   ```bash
   # Check what's using ports 80/443/3001
   lsof -i :80
   lsof -i :443
   lsof -i :3001
   ```

2. **Permission issues**:
   ```bash
   # Fix script permissions
   chmod +x deploy.sh quick-restart.sh
   
   # Fix log directory permissions
   sudo chown -R $USER:$USER logs/
   ```

3. **SSL issues**:
   ```bash
   # Verify certificate
   openssl x509 -in ssl/cert.pem -text -noout
   
   # Test SSL
   openssl s_client -connect your-domain.com:443
   ```

### Debug Commands

```bash
# View all logs
docker-compose logs -f

# Shell into container
docker exec -it vasectomy-clinic sh

# Check container health
docker inspect vasectomy-clinic | grep Health -A 10

# Network debugging
docker network ls
docker network inspect vasectomie450githubio_vasectomy-network
```

## 🚀 VPS Deployment

### Server Requirements
- **OS**: Ubuntu 20.04+ or similar
- **RAM**: 1GB minimum, 2GB recommended
- **Storage**: 10GB minimum
- **Network**: Public IP with ports 80/443 open

### Initial Server Setup
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Reboot to apply group changes
sudo reboot
```

### Deploy to VPS
```bash
# Clone repository
git clone <your-repo>
cd vasectomie450.github.io

# Configure environment
cp .env.production .env
nano .env  # Edit configuration

# Deploy
./deploy.sh
```

### Firewall Configuration
```bash
# UFW (Ubuntu)
sudo ufw allow 22/tcp   # SSH
sudo ufw allow 80/tcp   # HTTP
sudo ufw allow 443/tcp  # HTTPS
sudo ufw enable

# Or iptables
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
```

## 📈 Performance Optimization

### Production Optimizations
- Gzip compression enabled
- Static file caching
- Resource limits configured
- Multi-worker Nginx setup
- Connection keep-alive

### Scaling Options
- **Horizontal**: Multiple app containers behind load balancer
- **Vertical**: Increase container resource limits
- **CDN**: Static asset delivery
- **Database**: External database for data persistence

## 🆘 Support

For issues:
1. Check logs: `docker-compose logs -f`
2. Verify health: `curl http://localhost:3001/health`
3. Review configuration: `.env` file
4. Check firewall: ports 80/443/3001
5. Verify SSL: certificate files and nginx config

## 📝 License

This deployment configuration is part of the Vasectomy Clinic project.
