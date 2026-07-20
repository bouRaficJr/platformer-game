import React from 'react';

const HealthBar = ({ currentHealth, maxHealth = 100 }) => {
  const percentage = (currentHealth / maxHealth) * 100;

  return (
    <div className="w-48 h-6 bg-slate-900 rounded-full border-2 border-slate-700 overflow-hidden">
      <div 
        className="h-full bg-red-500 transition-all duration-300" 
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default HealthBar;