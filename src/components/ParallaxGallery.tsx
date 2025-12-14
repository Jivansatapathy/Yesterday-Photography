import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

// Limited to 15 images for better performance (converted to WebP)
const images = [
  "/image/Folder1/11.webp",
  "/image/Folder1/13.webp",
  "/image/Folder1/8.webp",
  "/image/Folder1/9.webp",
  "/image/Folder1/DSC00419.webp",
  "/image/Folder1/DSC00462.webp",
  "/image/Folder1/DSC02440.webp",
  "/image/Folder1/DSC02960.webp",
  "/image/Folder1/DSC04511.webp",
  "/image/Folder1/DSC05633.webp",
  "/image/Folder1/harish-16.webp",
  "/image/Folder1/harish-22.webp",
  "/image/Folder1/mom.webp",
  "/image/Folder1/Traditional.webp",
  "/image/Folder2/DSC01236.webp",
];

// Text content for text cards
const textCards = [
  "Every moment tells a story",
  "Timeless memories captured",
  "Love in every frame",
];

// Create mixed array of images and text cards with specific placements
// 1st text card: after 1st 3 images (position 3)
// 2nd text card: 2nd row, 2nd column (position 5)
// 3rd text card: 3rd row, last column (position 11)
const createGalleryItems = () => {
  const items: Array<{ type: 'image' | 'text'; src?: string; text?: string; index: number }> = [];
  let imageIndex = 0;
  const textPositions = [3, 5, 11]; // Specific positions for text cards
  
  for (let i = 0; i < images.length + textCards.length; i++) {
    const textCardIndex = textPositions.indexOf(i);
    
    if (textCardIndex !== -1 && textCardIndex < textCards.length) {
      // Place text card at specified position
      items.push({ type: 'text', text: textCards[textCardIndex], index: textCardIndex });
    } else if (imageIndex < images.length) {
      // Place image
      items.push({ type: 'image', src: images[imageIndex], index: imageIndex });
      imageIndex++;
    }
  }
  
  return items;
};

const ParallaxGallery = () => {
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});
  const galleryItems = createGalleryItems();

  return (
    <main className="hidden md:block w-full bg-[hsl(40 20% 98% / 1)] text-white">
      {/* Top Section with Content and Gallery */}
      <div className="font-geist relative bg-gradient-to-b from-[hsl(40 20% 98% / 1)] to-black px-4 sm:px-6 py-16">
        <div className="container-luxury relative z-10">
          {/* Heading and Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-caption text-accent mb-6 tracking-[0.3em]">Our Gallery</p>
            <h2 className="text-display mb-8 text-foreground">
              Moments captured in time
            </h2>
            <p className="text-editorial text-muted-foreground mb-12">
              Each image tells a story, each frame preserves a memory. 
              Scroll through our collection of timeless wedding moments, 
              where artistry meets emotion.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="relative bg-transparent py-12 px-4 md:px-8 rounded-lg">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
              {galleryItems.map((item, index) => {
                if (item.type === 'image' && item.src) {
                  return (
                    <motion.div
                      key={`image-${item.index}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.5) }}
                      className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-100"
                    >
                      {/* Enhanced Skeleton Placeholder with Shimmer Effect */}
                      {!imageLoaded[item.index] && (
                        <div className="absolute inset-0 z-20 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer">
                          <div className="absolute inset-0 bg-gray-200/50" />
                        </div>
                      )}
                      <img
                        src={item.src}
                        alt={`Gallery image ${item.index + 1}`}
                        width="500"
                        height="625"
                        className={`w-full h-full object-cover transition-opacity duration-500 ${
                          imageLoaded[item.index] ? "opacity-100" : "opacity-0"
                        }`}
                        loading={item.index < 8 ? "eager" : "lazy"}
                        decoding="async"
                        fetchPriority={item.index < 5 ? "high" : "low"}
                        onLoad={() => setImageLoaded((prev) => ({ ...prev, [item.index]: true }))}
                        onError={() => setImageLoaded((prev) => ({ ...prev, [item.index]: true }))}
                      />
                    </motion.div>
                  );
                } else if (item.type === 'text' && item.text) {
                  return (
                    <motion.div
                      key={`text-${item.index}`}
                      initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
                      whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                      whileHover={{ 
                        rotateY: 5,
                        rotateX: -5,
                        scale: 1.02,
                        z: 20
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        duration: 0.5, 
                        delay: Math.min(index * 0.02, 0.5),
                        type: "spring",
                        stiffness: 100
                      }}
                      style={{ 
                        transformStyle: "preserve-3d",
                        perspective: "1000px"
                      }}
                      className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gradient-to-br from-[hsl(40 20% 98% / 1)] to-black flex items-center justify-center p-6 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-shadow duration-300"
                    >
                      <motion.p 
                        className="text-center text-lg md:text-xl lg:text-2xl font-serif text-foreground leading-relaxed"
                        style={{ transform: "translateZ(20px)" }}
                      >
                        {item.text}
                      </motion.p>
                      {/* 3D depth effect with pseudo-element */}
                      <div 
                        className="absolute inset-0 rounded-lg opacity-20"
                        style={{
                          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.3) 100%)",
                          transform: "translateZ(-10px)",
                          pointerEvents: "none"
                        }}
                      />
                    </motion.div>
                  );
                }
                return null;
              })}
            </div>
            
            {/* View Portfolio Button */}
            <div className="flex justify-center mt-12">
              <Link
                to="/portfolio"
                className="btn-luxury-gold"
              >
                View Full Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
};


export default ParallaxGallery;

/**
 * Parallax Gallery Component
 * Inspired by and adapted from https://www.siena.film/films/my-project-x
 * 
 * Features:
 * - Smooth scroll with Lenis
 * - Parallax effect with Framer Motion
 * - Fully responsive design
 * - Optimized for mobile, tablet, and desktop
 * 
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * 
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */

