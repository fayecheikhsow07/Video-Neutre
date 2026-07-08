# Deployment Guide

## Local Development

```bash
docker-compose up -d
```

## Production Deployment

### Prerequisites
- Server with Docker & Docker Compose
- Domain name (for SSL/TLS)
- Sufficient storage for media files

### Steps

1. Clone the repository
2. Update environment variables in `.env`
3. Set up SSL certificates
4. Deploy with Docker Compose
5. Configure Nginx reverse proxy
6. Set up monitoring and logging
