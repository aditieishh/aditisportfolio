import React, { useEffect, useRef } from 'react';

export const Subtle3DBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes for subtle floating 3D spheres
    const particleCount = 28;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 500 + 100, // 3D depth dimension
      radius: Math.random() * 8 + 4,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      dz: (Math.random() - 0.5) * 0.5,
      color: [
        'rgba(244, 114, 182, 0.15)', // soft rose
        'rgba(253, 230, 138, 0.15)', // soft beige/amber
        'rgba(249, 168, 212, 0.18)', // soft pink
        'rgba(254, 205, 211, 0.15)'  // soft peach
      ][Math.floor(Math.random() * 4)]
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Move particle
        p.x += p.dx;
        p.y += p.dy;
        p.z += p.dz;

        // Bounce bounds
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
        if (p.z < 50 || p.z > 600) p.dz *= -1;

        // Parallax offset based on mouse
        const parallaxX = (mouseX - width / 2) * (150 / p.z) * 0.05;
        const parallaxY = (mouseY - height / 2) * (150 / p.z) * 0.05;

        // Perspective scale
        const scale = 200 / p.z;
        const renderX = p.x + parallaxX;
        const renderY = p.y + parallaxY;
        const renderRadius = p.radius * scale;

        ctx.beginPath();
        ctx.arc(renderX, renderY, Math.max(1, renderRadius), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none -z-20 opacity-70"
    />
  );
};
