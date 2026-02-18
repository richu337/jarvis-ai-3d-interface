# JARVIS AI - 3D Helmet Interface 🤖

A cinematic 3D AI assistant interface inspired by Iron Man's JARVIS, featuring an animated helmet with holographic face and Telegram bot integration.

![JARVIS Interface](https://img.shields.io/badge/Status-Prototype-yellow)
![React](https://img.shields.io/badge/React-18.2-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.158-green)

## ✨ Features

- 🎬 **Cinematic 3D Animations** - Helmet flies in/out with GSAP-powered smooth transitions
- 🎨 **Red/Gold Iron Man Theme** - Authentic color scheme with metallic materials
- 🌟 **Holographic AI Face** - Abstract particle system with rotating rings and glow effects
- 💬 **Chat Interface** - Ready for Telegram bot integration
- 📱 **Responsive Design** - Works on desktop and mobile
- 🎯 **HUD Elements** - Futuristic corner brackets and status indicators
- ⚡ **Performance Optimized** - Smooth 60fps animations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/richu337/jarvis-ai-3d-interface.git
cd jarvis-ai-3d-interface

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🔧 Telegram Bot Integration

To connect your existing JARVIS Telegram bot:

1. **Get your bot API endpoint** from your Telegram bot setup

2. **Update ChatInterface.tsx** (line 20-30):

```typescript
// Replace the setTimeout simulation with:
const response = await fetch('YOUR_TELEGRAM_BOT_API_URL', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_BOT_TOKEN' // if needed
  },
  body: JSON.stringify({ 
    message,
    userId: 'web-user-id' 
  })
});

const data = await response.json();
setChatHistory(prev => [...prev, { 
  role: 'assistant', 
  content: data.response 
}]);
```

3. **Test the integration** by sending a message

## 📁 Project Structure

```
jarvis-ai-3d-interface/
├── src/
│   ├── components/
│   │   ├── Scene.tsx          # 3D scene setup & animations
│   │   ├── Helmet.tsx         # 3D helmet model
│   │   ├── AIFace.tsx         # Holographic face effect
│   │   ├── ChatInterface.tsx  # Chat UI component
│   │   └── ChatInterface.css  # Chat styles
│   ├── App.tsx                # Main app component
│   ├── App.css                # App styles
│   ├── index.css              # Global styles
│   └── main.tsx               # Entry point
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🎨 Customization

### Change Colors

Edit `src/components/Helmet.tsx`:
```typescript
// Main helmet color
color="#8B0000"  // Dark red

// Gold accents
color="#ffd700"  // Gold

// Eye glow
color="#00ffff"  // Cyan
```

### Adjust Animations

Edit `src/components/Scene.tsx`:
```typescript
// Entry speed
duration: 1.5  // seconds

// Rotation
y: Math.PI * 2  // Full rotation
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Three.js helpers
- **GSAP** - Animation library
- **Framer Motion** - UI animations
- **Vite** - Build tool

## 📱 Mobile App (Coming Soon)

The mobile version will use:
- **React Native** + **Expo GL**
- Shared component architecture
- Native performance optimizations

## 🎯 Roadmap

### Phase 1: Prototype ✅
- [x] Basic 3D helmet
- [x] Fly-in/out animations
- [x] Holographic face
- [x] Chat interface
- [x] Telegram bot integration ready

### Phase 2: Full Cinematic (Next)
- [ ] Custom GLTF helmet model
- [ ] Rigged mask opening animation
- [ ] Advanced camera choreography
- [ ] Text-to-speech (TTS)
- [ ] Speech-to-text (STT)
- [ ] Sound effects
- [ ] Post-processing effects

### Phase 3: Mobile App
- [ ] React Native version
- [ ] Cross-platform deployment
- [ ] Performance optimizations

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

MIT License - feel free to use this project for your own JARVIS!

## 🙏 Acknowledgments

- Inspired by Marvel's Iron Man JARVIS interface
- Built with amazing open-source libraries
- Community feedback and support

---

**Built with ❤️ for AI enthusiasts**

For questions or support, open an issue on GitHub!