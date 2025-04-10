
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-red-200 p-6">
      <div className="text-center max-w-md bg-white/60 backdrop-blur-md rounded-xl shadow-2xl p-12 transition-all duration-300 hover:scale-[1.02]">
        <h1 className="text-6xl font-black mb-4 text-red-600">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          Oops! The page you're looking for seems to have wandered off.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
