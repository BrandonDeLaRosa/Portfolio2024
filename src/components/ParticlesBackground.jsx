import React, { useEffect, useRef } from 'react';
import './ParticlesBackground.css';

const ParticleBackground = ({ dark }) => {
  const canvasRef = useRef(null);
  let ctx;
  let particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let particleCount;

    if (width <= 768) {
      particleCount = 30; // Mobile size
    } else if (width <= 1024) {
      particleCount = 50; // Tablet size
    } else {
      particleCount = 70; // Desktop and larger
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.random() - 0.5, // Reducir la velocidad horizontal
        vy: Math.random() - 0.5, // Reducir la velocidad vertical
        radius: Math.random() * 2 + 1,
        color: dark ? "darkGray" : "gray",
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
        }

        particles.forEach(p => {
          const dx = particle.x - p.x;
          const dy = particle.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.1)' : 'darkgrey';
            ctx.stroke();
            ctx.closePath();
          }
        });
      });

      requestAnimationFrame(draw);
    };

    draw();

    const resizeHandler = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []); // dark es una dependencia

  return <canvas ref={canvasRef} className="particle-canvas"></canvas>;
};

export default ParticleBackground;
