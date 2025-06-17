import React from 'react';

const TailwindTest: React.FC = () => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
        ✅ Tailwind CSS fonctionne !
      </div>
    </div>
  );
};

export default TailwindTest; 