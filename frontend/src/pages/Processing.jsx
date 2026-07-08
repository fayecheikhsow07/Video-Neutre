import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Processing() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('processing');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 15;
        if (next >= 100) {
          setStatus('completed');
          navigate(`/results/${jobId}`);
          return 100;
        }
        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [jobId, navigate]);

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-8">Processing Your Content</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-indigo-600 h-4 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 text-lg font-bold">{Math.round(progress)}%</p>
        </div>

        <div className="space-y-4 text-left">
          <div className="flex items-center">
            <span className="text-2xl mr-3">✓</span>
            <span>Metadata removal</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-3">{progress > 25 ? '✓' : '...'}</span>
            <span>pHash neutralization</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-3">{progress > 50 ? '✓' : '...'}</span>
            <span>Audio fingerprint modification</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-3">{progress > 75 ? '✓' : '...'}</span>
            <span>Quality optimization</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Processing;
