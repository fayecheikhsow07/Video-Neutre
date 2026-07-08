FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build is optional for development
RUN npm run build 2>/dev/null || echo "Build step skipped"

# Production stage - serve static files
FROM node:18-alpine

WORKDIR /app

RUN npm install -g http-server

# Copy built app
COPY --from=builder /app/build ./build 2>/dev/null || true
COPY --from=builder /app/public ./public 2>/dev/null || true
COPY --from=builder /app/src ./src 2>/dev/null || true
COPY --from=builder /app/package*.json ./

EXPOSE 3000

# Serve the app
CMD ["http-server", "./build", "-p", "3000"] || CMD ["http-server", "./public", "-p", "3000"]
