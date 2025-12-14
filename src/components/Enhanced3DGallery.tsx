import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { X, ChevronLeft, ChevronRight, Play, Pause, ExternalLink } from "lucide-react";

// Images now loaded from public/image folder

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  span?: string;
  type: "image" | "video";
  videoId?: string;
  couple?: string;
  location?: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: "/image/Folder2/DSC04189 (1).webp", alt: "Pre-wedding in misty forest", category: "pre-wedding", span: "col-span-2 row-span-2", type: "image", couple: "Sarah & James", location: "Tuscany" },
  { id: 2, src: "/image/Folder2/DSC04231.webp", alt: "Bridal bouquet details", category: "details", type: "image", couple: "Emma & Michael", location: "Paris" },
  { id: 3, src: "https://img.youtube.com/vi/4xd8MFBvXm8/maxresdefault.jpg", alt: "Wedding highlight film", category: "films", type: "video", videoId: "4xd8MFBvXm8", couple: "Isabella & David", location: "Amalfi Coast" },
  { id: 4, src: "/image/Folder2/DSC04279.webp", alt: "Wedding ceremony at sunset", category: "wedding", type: "image", couple: "Olivia & William", location: "Santorini" },
  { id: 5, src: "/image/Folder2/DSC04999.webp", alt: "Destination wedding on yacht", category: "destination", span: "row-span-2", type: "image", couple: "Sophia & Alexander", location: "Monaco" },
  { id: 6, src: "https://img.youtube.com/vi/OXvDyE3uGt0/maxresdefault.jpg", alt: "Cinematic wedding film", category: "films", type: "video", videoId: "OXvDyE3uGt0", couple: "Mia & Ethan", location: "Lake Como" },
  { id: 7, src: "/image/Folder2/DSC05030.webp", alt: "Bride getting ready", category: "wedding", type: "image", couple: "Ava & Lucas", location: "Provence" },
  { id: 8, src: "/image/Folder2/DSC09235.webp", alt: "First dance under lights", category: "wedding", span: "col-span-2", type: "image", couple: "Charlotte & Henry", location: "Chateau de Chantilly" },
  { id: 9, src: "/image/Folder2/IMG_5300.webp", alt: "Villa wedding moment", category: "destination", type: "image", couple: "Amelia & Oliver", location: "Florence" },
  { id: 10, src: "/image/Folder1/8.webp", alt: "Bride in lavender field", category: "pre-wedding", span: "row-span-2", type: "image", couple: "Grace & Benjamin", location: "Provence" },
  { id: 11, src: "/image/Folder1/11.webp", alt: "Amalfi coast wedding", category: "destination", span: "col-span-2", type: "image", couple: "Lily & Sebastian", location: "Positano" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "wedding", label: "Weddings" },
  { id: "pre-wedding", label: "Pre-Weddings" },
  { id: "destination", label: "Destinations" },
  { id: "films", label: "Films" },
  { id: "details", label: "Details" },
];

const Enhanced3DGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    imageRefs.current.forEach((el) => {
      if (!el) return;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        gsap.to(el, {
          rotateX,
          rotateY,
          scale: 1.02,
          duration: 0.4,
          ease: "power2.out",
          transformPerspective: 1000,
        });

        // Move inner image for parallax effect
        const img = el.querySelector("img");
        if (img) {
          gsap.to(img, {
            x: (x - centerX) * 0.03,
            y: (y - centerY) * 0.03,
            scale: 1.1,
            duration: 0.4,
          });
        }

        // Glow effect
        const glow = el.querySelector(".glow-effect");
        if (glow) {
          gsap.to(glow, {
            opacity: 1,
            duration: 0.3,
          });
        }
      };

      const handleMouseLeave = () => {
        gsap.to(el, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        });

        const img = el.querySelector("img");
        if (img) {
          gsap.to(img, { x: 0, y: 0, scale: 1, duration: 0.6 });
        }

        const glow = el.querySelector(".glow-effect");
        if (glow) {
          gsap.to(glow, { opacity: 0, duration: 0.3 });
        }
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, [filteredItems]);

  useEffect(() => {
    if (!isAutoPlaying || !lightboxOpen) return;

    const interval = setInterval(() => {
      const currentItem = filteredItems[currentIndex];
      if (currentItem?.type === "image") {
        setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, lightboxOpen, filteredItems, currentIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === "Escape") {
        setLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, filteredItems.length]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const currentItem = filteredItems[currentIndex];

  return (
    <>
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16 px-4">
        {categories.map((cat) => (
          <motion.button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className="relative px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 transition-all duration-300 rounded-full border"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categories.indexOf(cat) * 0.1 }}
          >
            <span
              className={`text-sm sm:text-base md:text-caption font-medium transition-colors ${
                activeCategory === cat.id
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </span>
            {activeCategory === cat.id && (
              <motion.div
                layoutId="categoryIndicator"
                className="absolute inset-0 border-2 border-accent rounded-full bg-accent/10"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* 3D Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 auto-rows-[250px] sm:auto-rows-[220px] md:auto-rows-[250px] lg:auto-rows-[280px] px-4 sm:px-0"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              ref={(el) => (imageRefs.current[index] = el)}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
              className={`relative cursor-pointer overflow-hidden transform-gpu rounded-lg group ${item.span || ""} ${
                item.span ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
              onClick={() => openLightbox(index)}
              onMouseEnter={() => item.type === "video" && setHoveredVideo(item.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              {/* 3D border glow effect */}
              <div className="glow-effect absolute inset-0 opacity-0 pointer-events-none z-10">
                <div className="absolute inset-0 border-2 border-accent/60 shadow-[0_0_30px_rgba(205,170,125,0.3)]" />
              </div>

              <div className="aspect-square overflow-hidden h-full relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-all duration-700 will-change-transform group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Video play indicator */}
                {item.type === "video" && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                      scale: hoveredVideo === item.id ? 1.1 : 1, 
                      opacity: 1 
                    }}
                    className="absolute inset-0 flex items-center justify-center z-20"
                  >
                    <div className="w-16 h-16 rounded-full bg-rich-black/60 backdrop-blur-sm flex items-center justify-center border border-accent/40 group-hover:border-accent group-hover:bg-accent/20 transition-all duration-300">
                      <Play className="w-6 h-6 text-warm-white ml-1" />
                    </div>
                  </motion.div>
                )}

                {/* Info overlay */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-20"
                >
                  <p className="text-warm-white font-serif text-base sm:text-lg">{item.couple}</p>
                  <p className="text-warm-white/70 text-xs sm:text-caption">{item.location}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-rich-black/98 backdrop-blur-xl"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-warm-white/20 text-warm-white hover:border-accent hover:text-accent transition-colors rounded-full bg-rich-black/50 backdrop-blur-sm"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Autoplay button (only for images) */}
            {currentItem.type === "image" && (
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsAutoPlaying(!isAutoPlaying);
                }}
                className="absolute top-6 right-24 z-50 w-12 h-12 flex items-center justify-center border border-warm-white/20 text-warm-white hover:border-accent hover:text-accent transition-colors"
              >
                {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </motion.button>
            )}

            {/* Navigation arrows */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
              }}
              className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-warm-white/20 text-warm-white hover:border-accent hover:text-accent transition-colors rounded-full bg-rich-black/50 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
              }}
              className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-warm-white/20 text-warm-white hover:border-accent hover:text-accent transition-colors rounded-full bg-rich-black/50 backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-20" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                {currentItem.type === "video" ? (
                  <motion.div
                    key={`video-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-5xl aspect-video"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${currentItem.videoId}?autoplay=1&rel=0`}
                      title={currentItem.alt}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </motion.div>
                ) : (
                  <motion.img
                    key={`image-${currentIndex}`}
                    src={currentItem.src}
                    alt={currentItem.alt}
                    initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-full max-h-full object-contain"
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Info bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 md:gap-8 px-4"
            >
              <div className="text-center">
                <p className="text-warm-white font-serif text-lg sm:text-xl">{currentItem.couple}</p>
                <p className="text-warm-white/60 text-xs sm:text-caption">{currentItem.location}</p>
              </div>
              <span className="text-warm-white/30 hidden sm:inline">|</span>
              <span className="text-xs sm:text-caption text-warm-white/60">
                {currentIndex + 1} / {filteredItems.length}
              </span>
              {currentItem.type === "video" && (
                <>
                  <span className="text-warm-white/30">|</span>
                  <a
                    href={`https://www.youtube.com/watch?v=${currentItem.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-caption text-warm-white/60 hover:text-accent transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Watch on YouTube <ExternalLink className="w-3 h-3" />
                  </a>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Enhanced3DGallery;
