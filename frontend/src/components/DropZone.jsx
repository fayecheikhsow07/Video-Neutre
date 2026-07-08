import React, { useRef, useState } from 'react';

function DropZone({ onFilesAdded }) {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    onFilesAdded(files);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition ${
        isDragging
          ? 'border-indigo-600 bg-indigo-50'
          : 'border-gray-300 bg-gray-50 hover:border-indigo-600'
      }`}
      onClick={() => fileInputRef.current?.click()}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*,image/*"
        onChange={(e) => onFilesAdded(Array.from(e.target.files))}
        className="hidden"
      />
      <p className="text-2xl mb-2">📤</p>
      <p className="text-lg font-bold text-gray-700">Drag and drop your file here</p>
      <p className="text-gray-500 mt-2">or click to select (MP4, WebM, JPG, PNG, etc.)</p>
    </div>
  );
}

export default DropZone;
