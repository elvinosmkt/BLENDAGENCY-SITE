import React, { useEffect, useRef, useState } from 'react';

interface Star {
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
    twinkleSpeed: number;
}

interface MouseTrailStar {
    x: number;
    y: number;
    size: number;
    opacity: number;
    life: number;
}

const SpaceBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const starsRef = useRef<Star[]>([]);
    const mouseTrailRef = useRef<MouseTrailStar[]>([]);
    const animationFrameRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Initialize stars
        const initStars = () => {
            starsRef.current = [];
            for (let i = 0; i < 300; i++) {
                starsRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5,
                    speed: Math.random() * 0.5 + 0.1,
                    opacity: Math.random() * 0.5 + 0.5,
                    twinkleSpeed: Math.random() * 0.02 + 0.01
                });
            }
        };
        initStars();

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            updatePos(e.clientX, e.clientY);
        };

        // Touch move handler
        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                updatePos(e.touches[0].clientX, e.touches[0].clientY);
            }
        };

        const updatePos = (x: number, y: number) => {
            setMousePos({ x, y });

            // Add trail stars (for both mouse and touch)
            for (let i = 0; i < 3; i++) {
                mouseTrailRef.current.push({
                    x: x + (Math.random() - 0.5) * 30,
                    y: y + (Math.random() - 0.5) * 30,
                    size: Math.random() * 3 + 1,
                    opacity: 1,
                    life: 1
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchstart', handleTouchMove, { passive: true });

        // Animation loop
        let time = 0;
        const animate = () => {
            time += 0.01;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw nebula effects (gradient blobs)
            const nebulas = [
                { x: canvas.width * 0.2, y: canvas.height * 0.3, size: canvas.width < 768 ? 200 : 400, color: 'rgba(99, 102, 241, 0.08)' },
                { x: canvas.width * 0.8, y: canvas.height * 0.6, size: canvas.width < 768 ? 250 : 500, color: 'rgba(192, 132, 252, 0.06)' },
                { x: canvas.width * 0.5, y: canvas.height * 0.5, size: canvas.width < 768 ? 300 : 600, color: 'rgba(129, 140, 248, 0.04)' }
            ];

            nebulas.forEach(nebula => {
                const gradient = ctx.createRadialGradient(nebula.x, nebula.y, 0, nebula.x, nebula.y, nebula.size);
                gradient.addColorStop(0, nebula.color);
                gradient.addColorStop(1, 'transparent');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            });

            // Draw and update stars
            starsRef.current.forEach((star, index) => {
                // Parallax effect based on mouse/touch position
                const parallaxX = (mousePos.x - canvas.width / 2) * 0.01;
                const parallaxY = (mousePos.y - canvas.height / 2) * 0.01;

                // Twinkling effect
                star.opacity = 0.5 + Math.sin(time * star.twinkleSpeed + index) * 0.5;

                // Draw star
                ctx.beginPath();
                ctx.arc(
                    star.x + parallaxX * star.speed,
                    star.y + parallaxY * star.speed,
                    star.size,
                    0,
                    Math.PI * 2
                );
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.shadowBlur = 4;
                ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
                ctx.fill();
                ctx.shadowBlur = 0;

                // Slow drift
                star.y += star.speed * 0.2;
                if (star.y > canvas.height + 10) {
                    star.y = -10;
                    star.x = Math.random() * canvas.width;
                }
            });

            // Draw and update trail stars
            mouseTrailRef.current = mouseTrailRef.current.filter(star => {
                star.life -= 0.02;
                star.opacity = star.life;
                star.size *= 0.98;

                if (star.life > 0) {
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);

                    // Colorful trail stars
                    const hue = 220 + Math.random() * 40; // Blue to purple range
                    ctx.fillStyle = `hsla(${hue}, 70%, 70%, ${star.opacity})`;
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = `hsla(${hue}, 70%, 70%, ${star.opacity})`;
                    ctx.fill();
                    ctx.shadowBlur = 0;

                    return true;
                }
                return false;
            });

            // Draw shooting stars occasionally
            if (Math.random() < 0.003) {
                drawShootingStar(ctx, canvas);
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchstart', handleTouchMove);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [mousePos.x, mousePos.y]);

    const drawShootingStar = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
        const startX = Math.random() * canvas.width;
        const startY = Math.random() * canvas.height * 0.5;
        const length = Math.random() * 80 + 40;
        const angle = Math.PI / 4 + Math.random() * 0.5;

        const gradient = ctx.createLinearGradient(
            startX,
            startY,
            startX + Math.cos(angle) * length,
            startY + Math.sin(angle) * length
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX + Math.cos(angle) * length, startY + Math.sin(angle) * length);
        ctx.stroke();
    };

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ background: 'transparent' }}
        />
    );
};

export default SpaceBackground;
