from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse

router = APIRouter()

@router.get("/{job_id}")
async def download_processed(job_id: str):
    """
    Download processed video/image
    """
    return {
        "message": "Download endpoint - implementation pending",
        "job_id": job_id
    }
