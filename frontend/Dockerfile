FROM node:18-alpine

WORKDIR /app

# Installer les dépendances npm
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copier le code source
COPY . .

# Exposer le port
EXPOSE 3000

# Lancer l'application en mode développement
CMD ["npm", "start"]
