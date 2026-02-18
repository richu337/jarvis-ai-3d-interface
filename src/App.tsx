import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene';
import ChatInterface from './components/ChatInterface';
import './App.css';

function App() {
  const [isHelmetActive, setIsHelmetActive] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleSendMessage = (message: string) => {
    setCurrentMessage(message);
    setIsHelmetActive(true);
    
    // Simulate AI response (you'll connect to your Telegram bot here)
    setTimeout(() => {
      setIsHelmetActive(false);
    }, 5000);
  };

  return (
    <div className="app">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene isActive={isHelmetActive} message={currentMessage} />
      </Canvas>

      {/* UI Overlay */}
      <ChatInterface onSendMessage={handleSendMessage} isActive={isHelmetActive} />
      
      {/* HUD Elements */}
      <div className="hud">
        <div className="hud-corner top-left"></div>
        <div className="hud-corner top-right"></div>
        <div className="hud-corner bottom-left"></div>
        <div className="hud-corner bottom-right"></div>
      </div>

      {/* Title */}
      <div className="title">
        <h1>J.A.R.V.I.S.</h1>
        <p>Just A Rather Very Intelligent System</p>
      </div>
    </div>
  );
}

export default App;