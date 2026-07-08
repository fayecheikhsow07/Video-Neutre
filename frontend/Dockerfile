FROM node:18-alpine

WORKDIR /app

# Installer les dépendances npm
COPY package*.json ./
RUN npm install --verbose

# Vérifier que react-scripts est installé
RUN ls -la node_modules | grep react-scripts || echo "WARNING: react-scripts not found"

# Copier le code source
COPY . .

# Exposer le port
EXPOSE 3000

# Lancer l'application en mode développement
CMD ["npm", "start"]
