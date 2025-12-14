import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preloader visibility is controlled by parent component
    // Just start the animation when mounted

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    particlesRef.current.forEach((particle, index) => {
      if (particle) {
        gsap.set(particle, {
          x: Math.random() * 400 - 200,
          y: Math.random() * 400 - 200,
          scale: Math.random() * 0.5 + 0.5,
          opacity: 0,
        });

        gsap.to(particle, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 2,
          delay: index * 0.1,
          ease: "power3.out",
        });
      }
    });

    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { scale: 0.8, opacity: 0, rotationY: -180 },
        { scale: 1, opacity: 1, rotationY: 0, duration: 1.5, ease: "power4.out", delay: 0.5 }
      );
    }

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  useEffect(() => {
    if (progress >= 100 && shouldShow) {
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 800);
      }, 500);
    }
  }, [progress, onComplete, shouldShow]);

  if (!shouldShow) return null;

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-rich-black overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) particlesRef.current[i] = el;
                }}
                className="absolute left-1/2 top-1/2 w-1 h-1 rounded-full"
                style={{
                  background: `hsl(${38 + i * 2}, ${45 + i}%, ${65 - i * 2}%)`,
                  boxShadow: `0 0 ${10 + i * 2}px hsl(38, 45%, 65%)`,
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute w-64 h-64 rounded-full border border-accent/20"
            />
            <motion.div
              animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute w-80 h-80 rounded-full border border-accent/10"
            />
            <motion.div
              animate={{ rotate: 180, scale: [1, 1.05, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-96 h-96 rounded-full border border-accent/5"
            />
          </div>

          {/* 3D Floating geometric shapes */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ 
                rotateX: [0, 360],
                rotateY: [0, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 left-1/4 w-8 h-8 border border-accent/30"
              style={{ transformStyle: "preserve-3d" }}
            />
            <motion.div
              animate={{ 
                rotateZ: [0, -360],
                y: [0, -20, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 right-1/4 w-6 h-6 border border-accent/20 rotate-45"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-accent/20"
            />
          </div>

          <div ref={logoRef} className="relative z-10 mb-12">
            <h1 className="font-serif text-5xl md:text-7xl text-warm-white tracking-wider">
              Yesterday
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="h-px bg-gradient-to-r from-transparent via-accent to-transparent mt-4"
            />
          </div>

          <div className="relative z-10 w-48 h-px bg-warm-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent via-gold-light to-accent"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-caption text-warm-white/60"
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 text-caption text-warm-white/40 tracking-[0.3em]"
          >
            Timeless Wedding Stories
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
