#!/bin/bash

# Resrishti API Proxy Setup Script
# Run this on your EC2 Instance (Ubuntu)

DOMAIN="www.resrishti.com"

echo "--- Updating Nginx Config for API Proxy ---"

# Overwrite Nginx config with API Proxy block added
sudo tee /etc/nginx/sites-available/resrishti > /dev/null <<EOF
server {
    server_name $DOMAIN resrishti.com;

    location / {
        proxy_pass http://localhost:5173;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }

    # NEW: Proxy API requests to Backend Port 4000
    location /api {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }

    # NEW: Proxy Uploads to Backend Port 4000
    location /uploads {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }

    # NEW: Server-Side OG Tags for Bots
    location /blogs/ {
        error_page 418 = @bot_backend;
        recursive_error_pages on;

        # Detect Social Media Bots
        if (\$http_user_agent ~* "facebookexternalhit|linkedinbot|twitterbot|whatsapp|telegrambot|googlebot|bingbot|discordbot") {
            return 418;
        }

        # For Humans: Serve React App
        try_files \$uri \$uri/ /index.html;
    }

    location @bot_backend {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/www.resrishti.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/www.resrishti.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
    if (\$host = resrishti.com) {
        return 301 https://\$host\$request_uri;
    } # managed by Certbot


    if (\$host = $DOMAIN) {
        return 301 https://\$host\$request_uri;
    } # managed by Certbot


    listen 80;
    server_name $DOMAIN resrishti.com;
    return 404; # managed by Certbot
}
EOF

# Test Config
sudo nginx -t

# Reload
sudo systemctl reload nginx

echo "--- API Proxy Configured! ---"
echo "Requests to https://$DOMAIN/api will now be sent to Port 4000."
