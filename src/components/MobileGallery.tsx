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

const MobileGallery = () => {
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});
  return (
    <main className="block md:hidden w-full bg-[hsl(40 20% 98% / 1)] text-white">
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
          <div className="relative bg-white py-12 px-4 rounded-lg">
            <div className="grid grid-cols-2 gap-2 max-w-2xl mx-auto">
              {images.map((src, index) => {
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.5) }}
                  className="relative aspect-square overflow-hidden rounded-lg bg-gray-100"
                >
                  {/* Enhanced Skeleton Placeholder with Shimmer Effect */}
                  {!imageLoaded[index] && (
                    <div className="absolute inset-0 z-20 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer">
                      <div className="absolute inset-0 bg-gray-200/50" />
                    </div>
                  )}
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    width="400"
                    height="400"
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      imageLoaded[index] ? "opacity-100" : "opacity-0"
                    }`}
                    loading={index < 6 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index < 4 ? "high" : "low"}
                    onLoad={() => setImageLoaded((prev) => ({ ...prev, [index]: true }))}
                    onError={() => setImageLoaded((prev) => ({ ...prev, [index]: true }))}
                  />
                </motion.div>
                );
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

      {/* Bottom Section with Content */}
      <div className="font-geist relative flex min-h-screen items-center justify-center gap-2 bg-gradient-to-b from-white to-[#eee] px-4 sm:px-6">
        <div className="container-luxury relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-caption text-accent mb-6 tracking-[0.3em]">Continue Your Journey</p>
            <h2 className="text-display mb-8 text-foreground">
              Every love story deserves to be told
            </h2>
            <p className="text-editorial text-muted-foreground mb-12">
              These moments are just the beginning. Discover more of our work 
              and let us help you create memories that will last a lifetime.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default MobileGallery;

