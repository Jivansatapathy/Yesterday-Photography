import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Images are now loaded from public/image folder

gsap.registerPlugin(ScrollTrigger);

const videos = [
  "/videos/Srikanth Reception Reel 2 (1).mp4",
  "/videos/dp indoor 2.mov"
];

const HorizontalScroll = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });

  useEffect(() => {
    if (!sectionRef.current || !pinWrapRef.current) return;

    const pinWrap = pinWrapRef.current;
    const section = sectionRef.current;

    // Wait for images to load to get accurate scrollWidth
    const initScroll = () => {
      // Force a layout recalculation
      pinWrap.offsetHeight; // Trigger reflow
      
      // Calculate horizontal scroll distance
      // Add extra padding to ensure last image is fully visible
      const extraPadding = 100; // Add 100px padding to ensure last image is fully visible
      const horizontalScrollLength = Math.max(0, pinWrap.scrollWidth - window.innerWidth + extraPadding);

      // Animate horizontal scroll
      const animation = gsap.to(pinWrap, {
        x: -horizontalScrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${horizontalScrollLength}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      scrollTriggerRef.current = animation.scrollTrigger;

      return animation;
    };

    // Check if images are loaded
    const images = pinWrap.querySelectorAll("img");
    let loadedImages = 0;
    const totalImages = images.length;

    if (totalImages === 0) {
      initScroll();
      return;
    }

    const checkImagesLoaded = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        // Longer delay to ensure all images are rendered and layout is calculated
        setTimeout(() => {
          // Force a layout recalculation before initializing scroll
          pinWrap.offsetHeight;
          ScrollTrigger.refresh();
          initScroll();
          // Refresh again after a short delay to ensure everything is calculated
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 200);
        }, 200);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkImagesLoaded();
      } else {
        img.addEventListener("load", checkImagesLoaded);
        img.addEventListener("error", checkImagesLoaded);
      }
    });

    // Handle window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      images.forEach((img) => {
        img.removeEventListener("load", checkImagesLoaded);
        img.removeEventListener("error", checkImagesLoaded);
      });
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Video looping logic - play videos one after another
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      // Switch to next video
      setCurrentVideoIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % videos.length;
        return nextIndex;
      });
    };

    video.addEventListener("ended", handleVideoEnd);

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  // Update video source when currentVideoIndex changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Load and play video
    const loadVideo = () => {
      video.src = videos[currentVideoIndex];
      video.load();
      video.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    };

    // Small delay to ensure smooth transition
    const timer = setTimeout(loadVideo, 100);
    return () => clearTimeout(timer);
  }, [currentVideoIndex]);

  // Pause video when section is out of viewport to save resources
  useEffect(() => {
    const video = videoRef.current;
    const section = firstSectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Ignore play errors
          });
        } else {
          video.pause();
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  // 3D mouse tracking for first section
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!firstSectionRef.current) return;
      
      const rect = firstSectionRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const x = (e.clientX - centerX) / rect.width;
      const y = (e.clientY - centerY) / rect.height;
      
      mouseX.set(x * 20);
      mouseY.set(y * 20);
      rotateX.set(y * 5);
      rotateY.set(-x * 5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, rotateX, rotateY]);

  return (
    <div className="relative w-full bg-[#b9b3a9] text-[#111] overflow-x-hidden">
      {/* SECTION 1 - Introduction */}
      <section 
        ref={firstSectionRef}
        className="min-h-screen grid place-items-center px-4 sm:px-6 md:px-[10vw] py-12 sm:py-16 md:py-20 relative overflow-hidden"
        style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      >
        {/* 3D Floating Shapes */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Large rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-[10%] w-64 h-64 md:w-80 md:h-80 rounded-full border border-accent/10"
            style={{ transformStyle: "preserve-3d" }}
          />
          
          {/* 3D Cube */}
          <motion.div
            animate={{ 
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[30%] left-[15%] w-16 h-16 md:w-20 md:h-20"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 border-2 border-accent/20 transform rotate-0" />
            <div className="absolute inset-0 border-2 border-accent/20 transform rotate-45" />
            <div className="absolute inset-0 border-2 border-accent/20 transform rotate-90" />
          </motion.div>

          {/* Floating diamond */}
          <motion.div
            animate={{ 
              y: [-30, 30, -30],
              rotateZ: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] right-[20%] w-12 h-12 md:w-16 md:h-16 border-2 border-accent/15 rotate-45"
          />

          {/* Glowing orb */}
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[50%] left-[25%] w-6 h-6 md:w-8 md:h-8 rounded-full bg-accent/40 blur-md"
          />

          {/* Animated line */}
          <motion.div
            animate={{ 
              x: [-50, 50, -50],
              rotate: [0, 45, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[30%] left-[10%] w-32 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent overflow-hidden"
            style={{ maxWidth: 'calc(100% - 20%)' }}
          />
        </div>

        {/* Background Video with 3D Parallax */}
        <motion.div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{
            x: mouseX,
            y: mouseY,
            scale: 1.05,
          }}
        >
          <video
            ref={videoRef}
            src={videos[currentVideoIndex]}
            autoPlay
            muted
            playsInline
            preload="none"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black/60" />
        
        <motion.div 
          className="relative w-full z-10"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl md:text-[6rem] lg:text-[7rem] xl:text-[8rem] font-extrabold leading-none absolute top-0 sm:top-2 md:top-[1vw] lg:top-[0.5vw] xl:top-0 left-4 sm:left-6 md:left-[10vw] text-white"
          >
            <motion.span
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Timeless
            </motion.span>
            <motion.span
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="block text-accent"
            >
              Wedding
            </motion.span>
            <motion.span
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Stories
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 sm:bottom-12 md:bottom-[5vw] right-4 sm:right-6 md:right-[10vw] w-[200px] sm:w-[220px] md:w-[280px] lg:w-[300px] text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed text-white/80"
          >
            Capturing moments that last forever with cinematic elegance
          </motion.p>
        </motion.div>
      </section>

      {/* HORIZONTAL SECTION */}
      <section
        ref={sectionRef}
        className="h-screen text-[#b9b3a9] overflow-hidden relative"
        style={{
          backgroundImage: "url('/image/DSC02043.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div
          ref={pinWrapRef}
          className="h-screen flex items-center gap-4 sm:gap-6 md:gap-[5vw] px-4 sm:px-6 md:px-[10vw] py-8 sm:py-12 md:py-[50px] lg:pt-[100px] will-change-transform relative z-10"
          style={{ width: "max-content" }}
        >
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-[300px] sm:max-w-[350px] md:max-w-[400px] min-w-[85vw] sm:min-w-[70vw] md:min-w-[50vw] lg:min-w-[40vw] text-warm-white flex-shrink-0">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-5 md:mb-6 text-accent">
              Every Love Story is Unique
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-warm-white/80">
              We don't just photograph weddings—we craft visual narratives that
              preserve the essence of your special day. Each frame tells a story,
              each moment becomes a memory.
            </p>
          </div>

          <img
            className="h-[70vh] sm:h-[75vh] md:h-[80vh] w-auto object-cover min-w-[85vw] sm:min-w-[75vw] md:min-w-[60vw] lg:min-w-[50vw] rounded-lg flex-shrink-0"
            src={"/image/Folder2/DSC01236.webp"}
            alt="Elegant wedding moment"
            loading="lazy"
            decoding="async"
          />

<img
            className="h-[70vh] sm:h-[75vh] md:h-[80vh] w-auto object-cover min-w-[85vw] sm:min-w-[75vw] md:min-w-[60vw] lg:min-w-[50vw] rounded-lg flex-shrink-0"
            src={"/image/Folder1/Traditional.webp"}
            alt="Elegant wedding moment"
            loading="lazy"
            decoding="async"
          />

<img
  className="
    h-[70vh] sm:h-[75vh] md:h-[80vh]
    w-auto
    object-cover
    rounded-lg
    flex-shrink-0
    mx-auto
    block
    object-top
  "
  src="/image/Folder1/DSC02440.webp"
  alt="Elegant wedding moment"
  loading="lazy"
  decoding="async"
/>

          <img
            className="h-[70vh] sm:h-[75vh] md:h-[80vh] w-auto object-cover min-w-[85vw] sm:min-w-[75vw] md:min-w-[60vw] lg:min-w-[50vw] rounded-lg flex-shrink-0"
            src="/image/Folder1/DSC00419.webp"
            alt="Romantic wedding celebration"
            loading="lazy"
            decoding="async"
          />

          <img
            className="h-[70vh] sm:h-[75vh] md:h-[80vh] w-auto object-cover min-w-[85vw] sm:min-w-[75vw] md:min-w-[60vw] lg:min-w-[50vw] rounded-lg flex-shrink-0"
            src="/image/Folder1/DSC00462.webp"
            alt="Beautiful wedding ceremony"
            loading="lazy"
            decoding="async"
          />

          <img
            className="h-[70vh] sm:h-[75vh] md:h-[80vh] w-auto object-cover min-w-[85vw] sm:min-w-[75vw] md:min-w-[60vw] lg:min-w-[50vw] rounded-lg flex-shrink-0"
            src={"/image/Folder1/mom.webp"}
            alt="Godbharai Moment"
            loading="lazy"
            decoding="async"
          />

          <img
  className="
    h-[70vh] sm:h-[75vh] md:h-[80vh]
    w-auto
    object-cover
    rounded-lg
    flex-shrink-0
    mx-auto
    block
    object-top
  "
  src="/image/Folder1/13.webp"
  alt="Elegant wedding moment"
  loading="lazy"
  decoding="async"
/>

          <img
            className="h-[70vh] sm:h-[75vh] md:h-[80vh] w-auto object-cover min-w-[85vw] sm:min-w-[75vw] md:min-w-[60vw] lg:min-w-[50vw] rounded-lg flex-shrink-0"
            src={"/image/Folder1/harish-22.webp"}
            alt="Luxury wedding moment"
            loading="lazy"
            decoding="async"
          />

<img
            className="h-[70vh] sm:h-[75vh] md:h-[80vh] w-auto object-cover min-w-[85vw] sm:min-w-[75vw] md:min-w-[60vw] lg:min-w-[50vw] rounded-lg flex-shrink-0"
            src={"/image/Folder1/DSC05633.webp"}
            alt="Luxury wedding moment"
            loading="lazy"
            decoding="async"
          />

<img
            className="h-[70vh] sm:h-[75vh] md:h-[80vh] w-auto object-cover min-w-[85vw] sm:min-w-[75vw] md:min-w-[60vw] lg:min-w-[50vw] rounded-lg flex-shrink-0"
            src={"/image/Folder1/DSC04511.webp"}
            alt="Luxury wedding moment"
            loading="lazy"
            decoding="async"
          />

<img
            className="h-[70vh] sm:h-[75vh] md:h-[80vh] w-auto object-cover min-w-[85vw] sm:min-w-[75vw] md:min-w-[60vw] lg:min-w-[50vw] rounded-lg flex-shrink-0"
            src={"/image/Folder1/harish-16.webp"}
            alt="Luxury wedding moment"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>
    </div>
  );
};

export default HorizontalScroll;

