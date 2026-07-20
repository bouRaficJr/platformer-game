import React from 'react';

const PauseMenu = ({ onResume, onQuit }) => {
  return (
    <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 text-center">
        <h2 className="text-4xl text-white mb-8 font-bold">PAUSED</h2>
        <div className="flex flex-col gap-4">
          <button onClick={onResume} className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500">Resume</button>
          <button onClick={onQuit} className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-500">Quit to Menu</button>
        </div>
      </div>
    </div>
  );
};

export default PauseMenu;