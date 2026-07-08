from fastapi import FastAPI, UploadFile, File, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from contextlib import asynccontextmanager
import os
from dotenv import load_dotenv
import logging

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize app
app = FastAPI(
    title="Video-Neutre API",
    description="Platform for neutralizing video/image fingerprints",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
from routes import upload, process, download, analytics, health

app.include_router(health.router, prefix="/api", tags=["Health"])
app.include_router(upload.router, prefix="/api/upload", tags=["Upload"])
app.include_router(process.router, prefix="/api/process", tags=["Processing"])
app.include_router(download.router, prefix="/api/download", tags=["Download"])
app.include_router(analytics.router, prefix="/api/analytics", tags=["Analytics"])

@app.get("/")
async def root():
    return {
        "message": "Welcome to Video-Neutre API",
        "version": "1.0.0",
        "docs": "/docs"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
