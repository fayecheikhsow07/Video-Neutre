import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Results() {
  const { jobId } = useParams();

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Processing Complete!</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <p className="text-2xl mb-4">✓</p>
          <p className="text-lg font-bold mb-4">Your content has been successfully neutralized</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="font-bold mb-4">Analytics</h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-gray-600">pHash Similarity</p>
              <p className="text-2xl font-bold text-red-600">12%</p>
            </div>
            <div>
              <p className="text-gray-600">Audio Fingerprint Similarity</p>
              <p className="text-2xl font-bold text-red-600">8%</p>
            </div>
            <div>
              <p className="text-gray-600">Quality Index</p>
              <p className="text-2xl font-bold text-green-600">95%</p>
            </div>
            <div>
              <p className="text-gray-600">AI Detection Score</p>
              <p className="text-2xl font-bold text-green-600">87%</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 py-2 px-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition">
            Download
          </button>
          <Link to="/upload" className="flex-1 py-2 px-4 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 transition text-center">
            Process Another
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Results;
