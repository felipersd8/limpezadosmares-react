import React from 'react';

const DeepSeaWrapper = ({ children }) => {
  // Generate some random bubbles and fish positions
  const bubbles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 15 + 5}px`,
    duration: `${Math.random() * 10 + 10}s`,
    delay: `${Math.random() * 15}s`
  }));

  const fish = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 80 + 10}%`,
    size: Math.random() * 0.5 + 0.5,
    duration: `${Math.random() * 20 + 20}s`,
    delay: `${Math.random() * 10}s`,
    reverse: i % 2 === 0
  }));

  return (
    <div className="relative overflow-hidden bg-[#01274f]">
      {/* Transition Wave from Hero (Video) */}
      <div className="absolute top-0 left-0 w-full h-32 z-10 pointer-events-none rotate-180 opacity-40">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path fill="#020617" d="M0,160L40,176C80,192,160,224,240,213.3C320,203,400,149,480,160C560,171,640,245,720,250.7C800,256,880,192,960,160C1040,128,1120,128,1200,149.3C1280,171,1360,213,1400,234.7L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>
      </div>

      {/* Bubbles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="animate-bubble absolute bg-white/10 rounded-full backdrop-blur-[1px] border border-white/5"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animationDuration: b.duration,
              animationDelay: b.delay,
              bottom: '-50px'
            }}
          />
        ))}
      </div>

      {/* Fish */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {fish.map((f) => (
          <div
            key={f.id}
            className={f.reverse ? 'animate-swim-reverse' : 'animate-swim'}
            style={{
              position: 'absolute',
              top: f.top,
              animationDuration: f.duration,
              animationDelay: f.delay,
              transform: `scale(${f.size})`,
              opacity: 0.4
            }}
          >
            <svg width="60" height="30" viewBox="0 0 60 30" fill="currentColor" className="text-secondary/30">
              <path d="M50,15 C50,22 40,28 25,28 C10,28 0,22 0,15 C0,8 10,2 25,2 C40,2 50,8 50,15 Z" />
              <path d="M45,15 L60,5 L60,25 Z" />
              <circle cx="15" cy="12" r="2" fill="white" opacity="0.5" />
            </svg>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Bottom Wave to Footer */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none opacity-20">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path fill="#2a2a6b" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default DeepSeaWrapper;
