import React, { useEffect, useRef } from 'react';
import HealthBar from '../components/HealthBar';
import Button from '../components/Button';
import CoinCounter from '../components/CoinCounter';

const GameScreen = ({ onPause }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const render = () => {
      // 1. Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 2. Update logic (Physics, Position, Collision)
      // TODO: Add your player object, gravity, and movement here

      // 3. Draw objects
      ctx.fillStyle = '#10b981'; // Tailwind emerald-500
      ctx.fillRect(50, 50, 50, 50); // Dummy player

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative w-full h-screen bg-slate-800 overflow-hidden">
      <div className="absolute top-4 left-4 flex items-center gap-6">
        <HealthBar currentHealth={100} />
        <CoinCounter count={0} />
      </div>
      <div className="absolute top-4 right-4">
        <Button onClick={onPause} variant="danger">Pause</Button>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <canvas 
          ref={canvasRef} 
          width={800} 
          height={600}
          className="bg-sky-300 border-4 border-slate-900 rounded-lg shadow-2xl" 
        />
      </div>
    </div>
  );
};

export default GameScreen;