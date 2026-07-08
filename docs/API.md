# Video-Neutre API Documentation

## Base URL
```
http://localhost:5000/api
```

## Endpoints

### 1. Upload Media

**POST** `/upload/`

Upload a file or provide a URL for processing.

**Request (Form Data):**
```
file: File              (optional) - Video/Image file
url: String             (optional) - YouTube/TikTok/Direct URL
source: String          (optional) - 'local', 'youtube', 'tiktok', 'url'
```

**Response:**
```json
{
  "job_id": "uuid-string",
  "status": "queued",
  "message": "Upload received, processing will start soon",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### 2. Start Processing

**POST** `/process/`

Configure and start the neutralization process.

**Request (JSON):**
```json
{
  "job_id": "uuid-string",
  "options": {
    "neutralize_phash": true,
    "neutralize_audio_fingerprint": true,
    "remove_metadata": true,
    "upscale_quality": true,
    "interpolate_frames": false,
    "speed_variation": 1.0,
    "chromatic_variation": 0.05
  }
}
```

**Response:**
```json
{
  "job_id": "uuid-string",
  "status": "processing",
  "options": {...},
  "estimated_duration": "5-15 minutes",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### 3. Check Processing Status

**GET** `/process/status/{job_id}`

**Response:**
```json
{
  "job_id": "uuid-string",
  "status": "processing",
  "progress": 65,
  "current_stage": "audio_fingerprint_neutralization",
  "eta_seconds": 120
}
```

### 4. Download Processed Media

**GET** `/download/{job_id}`

Download the processed video/image.

**Response:** Binary file stream

### 5. Get Analytics

**GET** `/analytics/{job_id}`

Retrieve AI detection analytics.

**Response:**
```json
{
  "job_id": "uuid-string",
  "ai_detection_score": 0.87,
  "phash_similarity": 0.12,
  "audio_fingerprint_similarity": 0.08,
  "metadata_preserved": false,
  "quality_index": 0.95,
  "recommendations": [
    "Add more variation to avoid pattern detection",
    "Consider frame interpolation for better results"
  ]
}
```

## Status Codes

| Code | Meaning |
|------|----------|
| 200 | Success |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 429 | Too Many Requests |
| 500 | Server Error |

## Rate Limiting

- **Free tier**: 3 uploads/day, max 500MB each
- **Premium**: Unlimited uploads, 5GB max each
- **Enterprise**: Custom limits
