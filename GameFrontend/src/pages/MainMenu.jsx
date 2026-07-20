import React from 'react';

const MainMenu = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
      <h1 className="text-6xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
        2D PLATFORMER
      </h1>
      <button 
        onClick={onStart}
        className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-2xl font-bold shadow-lg transform hover:scale-105 transition-all"
      >
        START GAME
      </button>
    </div>
  );
};

export default MainMenu;