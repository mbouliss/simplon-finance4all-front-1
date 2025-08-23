# Dockerfile pour simplon-finance4all-front-1
# Multi-stage build pour optimiser la taille de l'image

# Stage 1: Build de l'application
FROM node:18-alpine AS builder

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm ci --only=production

# Copier le code source
COPY . .

# Builder l'application
RUN npm run build

# Stage 2: Serveur de production
FROM nginx:alpine

# Copier la configuration nginx personnalisée (optionnel)
COPY nginx.conf /etc/nginx/nginx.conf

# Copier les fichiers buildés depuis le stage précédent
COPY --from=builder /app/build /usr/share/nginx/html
# Si vous utilisez dist/ au lieu de build/, utilisez cette ligne:
# COPY --from=builder /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Ajouter des labels pour la traçabilité
LABEL maintainer="simplon-finance4all-front-1"
LABEL version="1.0"
LABEL description="Frontend application for Finance4All - front-1"

# Commande par défaut
CMD ["nginx", "-g", "daemon off;"]