import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-3">Video-Neutre</h3>
            <p className="text-gray-400">Professional fingerprint neutralization platform</p>
          </div>
          <div>
            <h3 className="font-bold mb-3">Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">API Docs</a></li>
              <li><a href="#" className="hover:text-white">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Legal</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Video-Neutre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
