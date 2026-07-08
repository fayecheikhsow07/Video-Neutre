# Video-Neutre Architecture

## System Overview

```
┌─────────────────────────────────────────────────────┐
│                   React Frontend                     │
│         (Upload, Processing, Dashboard)             │
└────────────────────┬────────────────────────────────┘
                     │ HTTP/REST
┌────────────────────▼────────────────────────────────┐
│              FastAPI Backend                        │
│  ├── Upload Handler                                 │
│  ├── Processing Orchestrator                        │
│  ├── Download Manager                               │
│  └── Analytics Engine                               │
└─┬──────────┬──────────┬──────────┬──────────────────┘
  │          │          │          │
  ▼          ▼          ▼          ▼
┌──────┐ ┌───────┐ ┌────────┐ ┌─────────┐
│  DB  │ │ Redis │ │ MinIO  │ │ Worker  │
│(Psql)│ │(Cache)│ │(Storage)│ │Process │
└──────┘ └───────┘ └────────┘ └─────────┘
```

## Core Components

### 1. Upload Module
- **Local Upload**: Direct file handling
- **URL Download**: YouTube/TikTok extraction (yt-dlp)
- **Validation**: Size, format, duration checks
- **Storage**: Temporary staging in MinIO

### 2. Processing Pipeline

#### 2.1 Perceptual Hash (pHash) Neutralization
```python
# Approach: Subtle pixel manipulation
1. Extract pHash from original
2. Apply minimal chromatic variation (±5%)
3. Imperceptible color shifts
4. Verify new pHash differs significantly
```

#### 2.2 Audio Fingerprinting Neutralization
```python
# Approach: Audio compression + temporal shifts
1. Extract audio fingerprint (librosa)
2. Apply compression (MP3 128kbps → WAV → re-export)
3. Add minimal silence padding (100ms start/end)
4. Speed variation (98-102%) - imperceptible
5. Verify new fingerprint differs
```

#### 2.3 Metadata Removal
```python
# Approach: Strip all EXIF/IPTC data
1. Remove EXIF data (Pillow)
2. Reset creation/modification timestamps
3. Remove GPS coordinates
4. Clear author/copyright tags
5. Strip video codec metadata
```

#### 2.4 AI Quality Optimization
```python
# Approach: Upscaling + Enhancement
1. Upscale 2x with Real-ESRGAN
2. Denoise with adaptive filters
3. Enhance contrast/saturation
4. Maintain aspect ratio
```

### 3. Storage Architecture
- **MinIO**: S3-compatible object storage
- **PostgreSQL**: Job metadata, user history
- **Redis**: Cache processing status, temp data

### 4. Processing Workers
- **Celery/Huey**: Async task queue
- **GPU Support**: CUDA-enabled processing
- **Scaling**: Horizontal worker scaling

## Data Flow

```
1. User Upload
   ↓
2. Validation & Staging
   ↓
3. Job Creation (Redis + DB)
   ↓
4. Worker Assignment
   ↓
5. Processing Pipeline:
   ├── pHash Neutralization
   ├── Audio Fingerprint Removal
   ├── Metadata Stripping
   └── Quality Optimization
   ↓
6. Output Storage (MinIO)
   ↓
7. Analytics Generation
   ↓
8. Download Link Generation
```

## Security Considerations

1. **Rate Limiting**: Per-user upload limits
2. **Authentication**: JWT tokens
3. **Encryption**: TLS for transit, AES for storage
4. **Sanitization**: Input validation on all endpoints
5. **CORS**: Strict origin policies
