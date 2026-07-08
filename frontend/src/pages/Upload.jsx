import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import DropZone from '../components/DropZone';

function Upload() {
  const navigate = useNavigate();
  const [uploadMethod, setUploadMethod] = useState('local'); // local, url
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (files) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', files[0]);
      formData.append('source', 'local');

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/upload/`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('File uploaded successfully!');
        navigate(`/processing/${data.job_id}`);
      } else {
        toast.error('Upload failed');
      }
    } catch (error) {
      toast.error('Error uploading file');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleUrlUpload = async () => {
    if (!url) {
      toast.error('Please enter a URL');
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('url', url);
      formData.append('source', url.includes('youtube') ? 'youtube' : url.includes('tiktok') ? 'tiktok' : 'url');

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/upload/`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('URL processed!');
        navigate(`/processing/${data.job_id}`);
      } else {
        toast.error('Failed to process URL');
      }
    } catch (error) {
      toast.error('Error processing URL');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Upload Your Content</h1>

      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Upload Method Toggle */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setUploadMethod('local')}
            className={`flex-1 py-2 px-4 rounded-lg font-bold transition ${
              uploadMethod === 'local'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            📁 Local File
          </button>
          <button
            onClick={() => setUploadMethod('url')}
            className={`flex-1 py-2 px-4 rounded-lg font-bold transition ${
              uploadMethod === 'url'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            🔗 URL
          </button>
        </div>

        {/* Local File Upload */}
        {uploadMethod === 'local' && (
          <div>
            <DropZone onFilesAdded={handleFileUpload} />
          </div>
        )}

        {/* URL Upload */}
        {uploadMethod === 'url' && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Paste YouTube, TikTok, or direct URL..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
              disabled={loading}
            />
            <button
              onClick={handleUrlUpload}
              disabled={loading}
              className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Process URL'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Upload;
