import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg">
        <h1 className="text-5xl font-bold mb-4">Video-Neutre</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Neutralize video fingerprints and increase your content visibility across all platforms
        </p>
        <Link
          to="/upload"
          className="inline-block px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-xl font-bold mb-3 text-indigo-600">📹 Multi-Format Support</h3>
          <p className="text-gray-600">Upload videos or images locally, or from YouTube, TikTok, or direct URLs</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-xl font-bold mb-3 text-indigo-600">🛡️ Advanced Neutralization</h3>
          <p className="text-gray-600">Bypass pHash, audio fingerprinting, metadata detection, and sequence analysis</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-xl font-bold mb-3 text-indigo-600">🤖 AI Optimization</h3>
          <p className="text-gray-600">AI-powered enhancement to maximize visibility and detection scores</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">1</div>
            <h3 className="font-bold mb-2">Upload</h3>
            <p className="text-gray-600 text-sm">Upload your video or image</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">2</div>
            <h3 className="font-bold mb-2">Configure</h3>
            <p className="text-gray-600 text-sm">Set neutralization options</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">3</div>
            <h3 className="font-bold mb-2">Process</h3>
            <p className="text-gray-600 text-sm">We neutralize fingerprints</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">4</div>
            <h3 className="font-bold mb-2">Download</h3>
            <p className="text-gray-600 text-sm">Get your optimized file</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
