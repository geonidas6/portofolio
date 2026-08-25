# Stage 1: Build the React/Vite application
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci || npm install

# Build production assets
COPY . .
RUN npm run build

# Stage 2: Serve with pure Node.js (No Nginx required)
FROM node:20-alpine

WORKDIR /app

# Install high-performance production static file server (serve)
RUN npm install -g serve

# Copy compiled SPA dist from builder stage
COPY --from=builder /app/dist ./dist

# Expose port 80 (matches Traefik container port)
EXPOSE 80

# Serve SPA on port 80 with single-page app fallback routing (-s)
CMD ["serve", "-s", "dist", "-l", "80"]
