FROM node:lts-alpine AS build

ARG REACT_APP_MODE_ENV
ARG VITE_API_URL_SERVER
ARG VITE_ADMIN_PASSWORD

ENV REACT_APP_MODE_ENV=${REACT_APP_MODE_ENV}
ENV VITE_API_URL_SERVER=${VITE_API_URL_SERVER}
ENV VITE_ADMIN_PASSWORD=${VITE_ADMIN_PASSWORD}

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ---- NGINX ----
FROM nginx:1.29.1-alpine

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Copy our SPA config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]