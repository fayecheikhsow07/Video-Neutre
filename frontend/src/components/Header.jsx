import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          🎬 Video-Neutre
        </Link>
        <nav className="flex gap-6">
          <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">Home</Link>
          <Link to="/upload" className="text-gray-700 hover:text-indigo-600 transition">Upload</Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 transition">Dashboard</Link>
          <a href="#docs" className="text-gray-700 hover:text-indigo-600 transition">Docs</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
