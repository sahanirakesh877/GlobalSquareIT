import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex space-x-2">
        {/* Animated Spinner */}
        <div className="w-8 h-8 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
        <span className="text-blue-600 text-lg font-semibold">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
