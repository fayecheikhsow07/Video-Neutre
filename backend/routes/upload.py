from fastapi import APIRouter, UploadFile, File, HTTPException, Form
from typing import Optional
import os
import uuid
from datetime import datetime

router = APIRouter()

@router.post("/")
async def upload_media(
    file: Optional[UploadFile] = File(None),
    url: Optional[str] = Form(None),
    source: Optional[str] = Form("local")  # local, youtube, tiktok
):
    """
    Upload vidéo/image locally or from URL
    
    - **file**: Upload local file
    - **url**: YouTube/TikTok/Direct URL
    - **source**: Source type (local, youtube, tiktok)
    """
    
    if not file and not url:
        raise HTTPException(status_code=400, detail="File or URL required")
    
    job_id = str(uuid.uuid4())
    
    return {
        "job_id": job_id,
        "status": "queued",
        "message": "Upload received, processing will start soon",
        "timestamp": datetime.utcnow().isoformat()
    }

@router.get("/status/{job_id}")
async def upload_status(job_id: str):
    """Get upload status"""
    return {
        "job_id": job_id,
        "status": "processing",
        "progress": 45
    }
