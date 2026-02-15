
import React from 'react';

const ConstellationBg: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <pattern id="constellation" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="#1E2A38" />
          <circle cx="100" cy="50" r="1" fill="#1E2A38" />
          <circle cx="150" cy="150" r="1" fill="#1E2A38" />
          <circle cx="50" cy="120" r="1" fill="#1E2A38" />
          <circle cx="180" cy="40" r="1" fill="#1E2A38" />
          <line x1="20" y1="20" x2="100" y2="50" stroke="#1E2A38" strokeWidth="0.5" />
          <line x1="100" y1="50" x2="150" y2="150" stroke="#1E2A38" strokeWidth="0.5" />
          <line x1="150" y1="150" x2="50" y2="120" stroke="#1E2A38" strokeWidth="0.5" />
          <line x1="50" y1="120" x2="20" y2="20" stroke="#1E2A38" strokeWidth="0.5" />
          <line x1="100" y1="50" x2="180" y2="40" stroke="#1E2A38" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#constellation)" />
      </svg>
    </div>
  );
};

export default ConstellationBg;
