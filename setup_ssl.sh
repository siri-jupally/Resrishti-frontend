#!/bin/bash

# Resrishti SSL Setup Script
# Run this on your EC2 Instance (Ubuntu)

DOMAIN="www.resrishti.com"
EMAIL="admin@resrishti.com" # Replace with your email if you want

echo "--- 1. update system packages ---"
sudo apt-get update

echo "--- 2. Install Nginx and Certbot ---"
sudo apt-get install -y nginx certbot python3-certbot-nginx

echo "--- 3. Ensure Nginx is Running ---"
sudo systemctl start nginx
sudo systemctl enable nginx

echo "--- 4. Configure Nginx Reverse Proxy ---"
# Create Nginx config for forwarding traffic to Docker (Port 5173)
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
}
EOF

# Enable the site
sudo ln -sf /etc/nginx/sites-available/resrishti /etc/nginx/sites-enabled/
# Remove default if present
sudo rm -f /etc/nginx/sites-enabled/default

# Test Config
sudo nginx -t

# Reload
sudo systemctl reload nginx

echo "--- 5. Obtaining SSL Certificate ---"
sudo certbot --nginx -d $DOMAIN -d resrishti.com --non-interactive --agree-tos -m $EMAIL --redirect

echo "--- Setup Complete! ---"
echo "Your site should now be accessible at https://$DOMAIN"
