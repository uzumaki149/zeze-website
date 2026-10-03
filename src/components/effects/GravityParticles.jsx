"use client";

import { useEffect, useRef } from "react";

function GravityParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame;
    let particles = [];
    let width = 0;
    let height = 0;

    const settings = {
      density: 7000,

      minRadius: 1,
      maxRadius: 2.8,

      driftSpeed: 0.05,

      gravityStrength: 0.05,
      interactionRadius: 150,

      maxVelocity: 0.9,
      friction: 0.98,
    };

    const mouse = {
      x: 0,
      y: 0,
      active: false,
    };

    const createParticle = () => ({
      x: Math.random() * width,
      y: Math.random() * height,

      vx: (Math.random() - 0.5) * settings.driftSpeed,
      vy: (Math.random() - 0.5) * settings.driftSpeed,

      angle: Math.random() * Math.PI * 2,
      angleVelocity:
        (Math.random() - 0.5) * 0.015,

      radius:
        Math.random() *
          (settings.maxRadius - settings.minRadius) +
        settings.minRadius,

      opacity: Math.random() * 0.4 + 0.15,
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const particleCount = Math.floor(
        (width * height) / settings.density
      );

      particles = Array.from(
        { length: particleCount },
        createParticle
      );
    };

    const handlePointerMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark =
        document.documentElement.classList.contains("dark");

      particles.forEach((particle) => {
        /*
         * Organic wandering
         */
        particle.angle += particle.angleVelocity;

        particle.vx +=
          Math.cos(particle.angle) * 0.003;

        particle.vy +=
          Math.sin(particle.angle) * 0.003;

        /*
         * Cursor gravity
         */
        if (mouse.active) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (
            distance > 0 &&
            distance < settings.interactionRadius
          ) {
            const influence =
              1 -
              distance /
                settings.interactionRadius;

            const force =
              settings.gravityStrength *
              influence *
              influence;

            particle.vx +=
              (dx / distance) * force;

            particle.vy +=
              (dy / distance) * force;
          }
        }

        /*
         * Preserve natural movement
         */
        particle.vx *= settings.friction;
        particle.vy *= settings.friction;

        /*
         * Limit maximum velocity
         */
        const velocity = Math.sqrt(
          particle.vx * particle.vx +
            particle.vy * particle.vy
        );

        if (
          velocity > settings.maxVelocity
        ) {
          particle.vx =
            (particle.vx / velocity) *
            settings.maxVelocity;

          particle.vy =
            (particle.vy / velocity) *
            settings.maxVelocity;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        /*
         * Wrap particles around viewport
         */
        if (particle.x < -10) {
          particle.x = width + 10;
        }

        if (particle.x > width + 10) {
          particle.x = -10;
        }

        if (particle.y < -10) {
          particle.y = height + 10;
        }

        if (particle.y > height + 10) {
          particle.y = -10;
        }

        let radius = particle.radius;
        let opacity = particle.opacity;
        let isGlowing = false;

        /*
         * Cursor glow
         */
        if (mouse.active) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < 100) {
            const glow =
              1 - distance / 100;

            radius += glow * 1.5;
            opacity += glow * 0.65;

            isGlowing = true;
          }
        }

        /*
         * Draw particle
         */
        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = isDark
          ? `rgba(255, 255, 255, ${opacity})`
          : `rgba(24, 24, 27, ${opacity})`;

        if (isGlowing) {
          ctx.shadowBlur = 12;

          ctx.shadowColor = isDark
            ? "rgba(255, 255, 255, 0.8)"
            : "rgba(24, 24, 27, 0.4)";
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      });

      ctx.shadowBlur = 0;

      animationFrame =
        requestAnimationFrame(animate);
    };

    resize();

    window.addEventListener(
      "resize",
      resize
    );

    window.addEventListener(
      "pointermove",
      handlePointerMove
    );

    window.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen"
    />
  );
}

export default GravityParticles;