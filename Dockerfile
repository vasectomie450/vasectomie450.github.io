# Multi-stage Dockerfile for Vasectomy Clinic Website
# Stage 1: Build stage
FROM node:20-alpine AS builder

# Build arguments for environment variables
ARG VITE_GOOGLE_PLACES_API_KEY
ARG VITE_GOOGLE_PLACE_ID

# Set environment variables from build args
ENV VITE_GOOGLE_PLACES_API_KEY=$VITE_GOOGLE_PLACES_API_KEY
ENV VITE_GOOGLE_PLACE_ID=$VITE_GOOGLE_PLACE_ID

# Set working directory
WORKDIR /app

# Install security updates and build dependencies
RUN apk update && apk upgrade && \
    apk add --no-cache \
    python3 \
    make \
    g++ \
    && rm -rf /var/cache/apk/*

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including devDependencies) for building
RUN npm ci --silent && \
    npm cache clean --force

# Copy source code
COPY . .

# Build the application (environment variables are already set from build args)
RUN npm run build

# Stage 2: Production stage
FROM node:20-alpine AS production

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S vasectomy -u 1001

# Set working directory
WORKDIR /app

# Install security updates and runtime dependencies only
RUN apk update && apk upgrade && \
    apk add --no-cache \
    dumb-init \
    && rm -rf /var/cache/apk/*

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production --silent && \
    npm cache clean --force && \
    rm -rf /tmp/*

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server
COPY --from=builder /app/public ./public

# Copy environment example file
COPY .env.example ./.env.example

# Change ownership to non-root user
RUN chown -R vasectomy:nodejs /app

# Switch to non-root user
USER vasectomy

# Expose port
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "const http = require('http'); \
    const options = { hostname: 'localhost', port: 3001, path: '/health', timeout: 2000 }; \
    const req = http.request(options, (res) => { \
        if (res.statusCode === 200) process.exit(0); \
        else process.exit(1); \
    }); \
    req.on('error', () => process.exit(1)); \
    req.end();"

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

# Start the application
CMD ["node", "server/index.js"]
