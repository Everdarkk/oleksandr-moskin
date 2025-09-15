import React, { useEffect, useRef, useCallback } from 'react'
import styles from '../../styles/animatedbackground.module.css'
import { Star, Point } from '../../lib/types'

export default function PassiveStarfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);

  const draw = useCallback(() => {
    const STAR_COUNT = 400;
    const SPEED = 0.05;
    const MAX_DEPTH = 32;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    let stars: Star[] = [];
    let width: number, height: number, center: Point;

    function createStar(): Star {
      return {
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
        z: Math.random() * MAX_DEPTH,
        px: 0,
        py: 0,
        color: `hsl(${Math.random() * 360}, 100%, 75%)`,
      };
    }

    function generate() {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push(createStar());
      }
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      center = { x: width / 2, y: height / 2 };
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    }

    function update() {
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.z -= SPEED;
        if (star.z <= 0) {
          stars[i] = createStar();
        }
      }
    }

    function render() {
      if (!context) return;
      context.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        const k = 128 / star.z;
        // Точка зникнення завжди в центрі
        const sx = star.x * k + center.x;
        const sy = star.y * k + center.y;
        const size = (1 - star.z / MAX_DEPTH) * 2;
        const alpha = 1 - star.z / MAX_DEPTH;

        if (star.px !== 0) {
          context.beginPath();
          context.moveTo(sx, sy);
          context.lineTo(star.px, star.py);
          context.strokeStyle = star.color;
          context.lineWidth = size;
          context.globalAlpha = alpha;
          context.stroke();
        }
        star.px = sx;
        star.py = sy;
      });
    }
    
    function step() {
      update();
      render();
      animationFrameId.current = requestAnimationFrame(step);
    }

    generate();
    resize();
    step();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cleanup = draw();
      return cleanup;
    }
  }, [draw]);

  return <canvas ref={canvasRef} className={styles.container} />;
};
