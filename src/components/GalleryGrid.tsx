import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";

// Images now loaded from public/image folder

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  span?: string;
}

const images: GalleryImage[] = [
  { id: 1, src: "/image/Folder2/DSC04189 (1).webp", alt: "Pre-wedding in misty forest", category: "pre-wedding", span: "row-span-2" },
  { id: 2, src: "/image/Folder2/DSC04231.webp", alt: "Bridal bouquet details", category: "details" },
  { id: 3, src: "/image/Folder2/DSC04279.webp", alt: "Wedding ceremony at sunset", category: "wedding", span: "col-span-2" },
  { id: 4, src: "/image/Folder2/DSC04999.webp", alt: "Destination wedding on yacht", category: "destination", span: "row-span-2" },
  { id: 5, src: "/image/Folder2/DSC05030.webp", alt: "Bride getting ready", category: "wedding" },
  { id: 6, src: "/image/Folder2/DSC09235.webp", alt: "First dance under lights", category: "wedding" },
  { id: 7, src: "/image/Folder2/IMG_5300.webp", alt: "Villa wedding moment", category: "destination", span: "row-span-2" },
  { id: 8, src: "/image/Folder1/DSC04511.webp", alt: "Bride in lavender field", category: "pre-wedding" },
  { id: 9, src: "/image/Folder1/DSC05633.webp", alt: "Amalfi coast wedding", category: "destination", span: "col-span-2" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "wedding", label: "Weddings" },
  { id: "pre-wedding", label: "Pre-Weddings" },
  { id: "destination", label: "Destinations" },
  { id: "details", label: "Details" },
];

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`text-caption px-4 py-2 transition-all duration-300 ${
              activeCategory === cat.id
                ? "text-accent border-b border-accent"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {filteredImages.map((image, index) => (
          <motion.div
            layout
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`image-hover cursor-pointer ${image.span || ""}`}
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-square overflow-hidden h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <Lightbox
        images={filteredImages.map((img) => ({ src: img.src, alt: img.alt }))}
        isOpen={lightboxOpen}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setCurrentIndex((prev) => (prev + 1) % filteredImages.length)}
        onPrev={() =>
          setCurrentIndex(
            (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
          )
        }
      />
    </>
  );
};

export default GalleryGrid;
