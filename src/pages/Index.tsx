
import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="text-center max-w-2xl bg-white/60 backdrop-blur-md rounded-xl shadow-2xl p-12 transition-all duration-300 hover:scale-[1.02]">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-800 tracking-tight">
          Welcome to Your New Project
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          This is a blank canvas. Ready to bring your ideas to life? 
          Start by copying your git repository.
        </p>
        <Link 
          to="/about" 
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Index;
