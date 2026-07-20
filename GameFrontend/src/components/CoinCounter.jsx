import React from 'react';
import HealthBar from '../components/HealthBar';
import Button from '../components/Button';
import CoinCounter from '../components/CoinCounter';

const GameScreen = ({ onPause }) => {
  return (
    <div className="relative w-full h-screen bg-slate-800 overflow-hidden">
      {/* HUD Layer */}
      <div className="absolute top-4 left-4 flex items-center gap-6">
        <HealthBar currentHealth={100} />
        <CoinCounter count={0} />
      </div>

      <div className="absolute top-4 right-4">
        <Button onClick={onPause} variant="danger">Pause</Button>
      </div>

      {/* Game Canvas */}
      <div className="flex items-center justify-center w-full h-full">
        <canvas 
          id="gameCanvas" 
          className="bg-sky-300 border-4 border-slate-900 rounded-lg shadow-2xl" 
          width={800} 
          height={600}
        />
      </div>
    </div>
  );
};

export default GameScreen;