# Stage de build
FROM docker.io/library/node:18-alpine AS builder

WORKDIR /app

# Copier les fichiers de configuration npm
COPY package*.json ./

# Installer TOUTES les dépendances (y compris devDependencies pour vite)
RUN npm ci

# Copier le code source
COPY . .

# Construire l'application
RUN npm run build

# Stage de production
FROM docker.io/library/nginx:alpine

# Copier la configuration nginx
COPY <<EOF /etc/nginx/nginx.conf
events {
    worker_connections 1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;
    
    server {
        listen 80;
        server_name localhost;
        
        location / {
            root /usr/share/nginx/html;
            index index.html index.htm;
            try_files \$uri \$uri/ /index.html;
        }
    }
}
EOF

# Copier les fichiers buildés depuis le stage précédent
COPY --from=builder /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
