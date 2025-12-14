import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";

const EnhancedHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    gsap.fromTo(
      ".hero-overlay",
      { opacity: 0.8 },
      { opacity: 0.4, duration: 1.5, ease: "power2.out", delay: 0.5 }
    );

    // Animate floating rings
    gsap.to(".floating-ring", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });

    gsap.to(".floating-ring-2", {
      rotation: -360,
      duration: 25,
      repeat: -1,
      ease: "none",
    });

    gsap.to(".floating-ring-3", {
      rotation: 180,
      duration: 30,
      repeat: -1,
      ease: "none",
    });

    // Animate 3D shapes
    gsap.to(".hero-shape-1", {
      y: -30,
      rotation: 360,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".hero-shape-2", {
      y: 20,
      rotationY: 360,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".hero-shape-3", {
      x: 20,
      rotationX: 180,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="hero-overlay absolute inset-0 bg-rich-black/50 z-10" />
        <img
          src={"/image/Folder1/DSC02960.webp"}
          alt="Luxury wedding photography - couple at golden hour"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Floating decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="floating-ring absolute w-[600px] h-[600px] rounded-full border border-accent/10" />
        <div className="floating-ring-2 absolute w-[800px] h-[800px] rounded-full border border-warm-white/5" />
        <div className="floating-ring-3 absolute w-[1000px] h-[1000px] rounded-full border border-accent/5" />
      </div>

      {/* 3D Floating Shapes */}
      <div ref={shapesRef} className="absolute inset-0 pointer-events-none z-15">
        {/* Geometric cube outline - top right */}
        <div 
          className="hero-shape-1 absolute top-[15%] right-[10%] w-20 h-20"
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 border border-accent/20 transform rotate-45" />
          <div className="absolute inset-2 border border-accent/10 transform rotate-12" />
        </div>

        {/* Diamond shape - bottom left */}
        <div 
          className="hero-shape-2 absolute bottom-[20%] left-[8%] w-16 h-16 border border-warm-white/10 rotate-45"
          style={{ transformStyle: "preserve-3d" }}
        />

        {/* Triangle outline - top left */}
        <div className="hero-shape-3 absolute top-[25%] left-[15%]">
          <div 
            className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-accent/15"
          />
        </div>

        {/* Small orbs */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[20%] w-3 h-3 rounded-full bg-accent/40 blur-sm"
        />
        <motion.div
          animate={{ scale: [1.5, 1, 1.5], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[35%] right-[30%] w-2 h-2 rounded-full bg-warm-white/30 blur-sm"
        />

        {/* Floating lines */}
        <motion.div
          animate={{ x: [-20, 20, -20], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] right-[40%] w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
        />
        <motion.div
          animate={{ y: [-15, 15, -15], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[40%] left-[25%] w-px h-20 bg-gradient-to-b from-transparent via-warm-white/30 to-transparent"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-caption text-accent mb-6 tracking-[0.3em]"
        >
          Luxury Wedding Photography
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-hero text-warm-white max-w-5xl mb-8 font-serif"
        >
          Your Love, Our Lens
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-editorial text-warm-white/90 max-w-2xl mb-12"
        >
          Where every frame becomes a cherished memory, and love is told through
          the art of light.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(38 45% 65% / 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/portfolio"
              className="btn-luxury border-warm-white text-warm-white hover:bg-warm-white hover:text-rich-black inline-flex"
            >
              View Our Work
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/contact"
              className="btn-luxury-gold inline-flex"
            >
              Book Your Date
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-caption text-warm-white/40 tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-16 bg-gradient-to-b from-warm-white/50 via-accent/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default EnhancedHeroSection;
