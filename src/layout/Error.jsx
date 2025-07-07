import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Error = () => {
  const location = useLocation();
  const errorCode = location.state?.code || 404;
  const errorMessage = location.state?.message || "The page you're looking for doesn't exist or an unexpected error has occurred.";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-4 rounded-full">
            <AlertTriangle size={48} className="text-red-500" />
          </div>
        </div>

        <h1 className="text-6xl font-bold text-red-600 mb-2">
          {errorCode}
        </h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Oops! Something went wrong.
        </h2>
        <p className="text-gray-600 mb-8">
          {errorMessage}
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;
