#!/bin/bash
# Install necessary packages
apt-get update
apt-get install -y nginx nodejs npm

# Set up Firebase
npm install -g firebase-tools
firebase login

# Deploy the app
firebase deploy

# Configure Nginx
cat <<EOL > /etc/nginx/sites-available/default
server {
    listen 80;
    server_name your_domain;

    root /var/www/bitcoin-brokerage-app/frontend;
    index index.html;

    location / {
        try_files \$uri \$uri/ =404;
    }
}
EOL

# Restart Nginx
systemctl restart nginx
