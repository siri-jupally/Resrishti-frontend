
# Build stage

FROM node:18-alpine3.18 AS build

# Build-time args (pass via `docker build --build-arg ...`)
ARG VITE_NODE_ENV=production
ARG VITE_SERVER_BASE_URL=""

# Expose to build stage environment so Vite can pick them up while building
ENV VITE_NODE_ENV=${VITE_NODE_ENV}
ENV VITE_SERVER_BASE_URL=${VITE_SERVER_BASE_URL}
# Keep NODE_ENV for npm behaviour
ENV NODE_ENV=production

WORKDIR /app

# Copy package files first (cache layer)
COPY package.json package-lock.json* ./

# Install dependencies. Vite's build requires devDependencies.
# Use npm ci to get reproducible installs; include dev deps for build.
RUN npm ci --include=dev

# Copy rest of project
COPY . .

# Build the Vite app (assumes "build" script in package.json)
RUN npm run build

########################################
# Nginx stage (serve static files)
########################################
FROM nginx:1.23-alpine

# Remove default contents and copy build outputs
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY --from=build /app/dist .

# Optional: copy a custom nginx.conf if you have SPA routing (history API fallback)
# Example to add if you need client-side routing:
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

# Start nginx in foreground
ENTRYPOINT ["nginx", "-g", "daemon off;"]
