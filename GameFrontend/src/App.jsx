import React, { useState } from 'react';
import MainMenu from './pages/MainMenu';
import GameScreen from './pages/GameScreen';
import PauseMenu from './pages/PauseMenu';

function App() {
  const [gameState, setGameState] = useState('MENU'); // 'MENU', 'PLAYING', 'PAUSED'

  return (
    <div className="w-full h-screen bg-black">
      {gameState === 'MENU' && <MainMenu onStart={() => setGameState('PLAYING')} />}
      
      {gameState === 'PLAYING' && (
        <GameScreen onPause={() => setGameState('PAUSED')} />
      )}
      
      {gameState === 'PAUSED' && (
        <PauseMenu 
          onResume={() => setGameState('PLAYING')} 
          onQuit={() => setGameState('MENU')} 
        />
      )}
    </div>
  );
}

export default App;