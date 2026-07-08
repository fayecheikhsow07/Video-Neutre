FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build 2>/dev/null || echo "Build script not defined, skipping build"

FROM node:18-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public  
COPY --from=builder /app/src ./src
COPY --from=builder /app/package*.json ./
COPY .env.example .env 2>/dev/null || true

EXPOSE 3000

CMD ["npm", "start"]
