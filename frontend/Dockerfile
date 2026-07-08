FROM node:18-alpine

WORKDIR /app

# Installer les dépendances npm
COPY package*.json ./
RUN npm install --legacy-peer-deps || npm install

# Copier le code
COPY . .

# Exposer le port
EXPOSE 3000

# Lancer l'application
CMD ["npm", "start"]
