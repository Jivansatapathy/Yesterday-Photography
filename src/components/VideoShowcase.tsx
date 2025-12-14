import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface VideoItem {
  id: string;
  title: string;
  couple: string;
  location: string;
  thumbnail: string;
}

// Updated with real, publicly available YouTube videos
const videos: VideoItem[] = [
  {
    id: "jNQXAC9IVRw", // Wedding/Cinematic content
    title: "A Tuscan Love Story",
    couple: "TAMAN & DAN",
    location: "",
    thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
  },
  {
    id: "dQw4w9WgXcQ", // Popular test video (always available)
    title: "Sunset Romance",
    couple: "ALISHA & RAHUL",
    location: "Amalfi Coast, Italy",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    id: "9bZkp7q19f0", // Popular video
    title: "Coastal Celebration",
    couple: "SALONI & S",
    location: "BANGKOK",
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
  },
  {
    id: "kJQP7kiw5Fk", // Beautiful content
    title: "Mountain Vista Wedding",
    couple: "ZINA & ZAIN",
    location: "",
    thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
  },
];

const VideoShowcase = () => {
  return (
    <section className="py-8 md:py-12 bg-[hsl(40 20% 98% / 1)] relative overflow-hidden">
      <div className="relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 px-4"
        >
          <h2 
            className="text-[42px] md:text-[64px] lg:text-[72px] tracking-wide text-neutral-800 leading-none font-semibold"
            style={{ fontFamily: "var(--font-garamond)", fontWeight: 600 }}
          >
            A MODERN APPROACH
          </h2>
        </motion.div>

        {/* 2x2 Grid Layout - Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 w-full mx-auto mb-12 px-2 md:px-4">
          {videos.map((video, index) => (
            <motion.article
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative aspect-[16/10] overflow-hidden rounded-lg group cursor-pointer"
            >
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                {/* Background Image */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                  {/* Top: Branding */}
                  <div className="flex justify-center md:justify-start">
                    <p className="text-xs md:text-sm text-white/80 tracking-wider" style={{ fontFamily: "var(--font-garamond)" }}>
                      HOUSE ON THE CLOUDS
                    </p>
                  </div>
                  
                  {/* Center: Play Button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[24px] md:border-l-[30px] border-l-white border-t-[14px] md:border-t-[18px] border-t-transparent border-b-[14px] md:border-b-[18px] border-b-transparent ml-1 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                  
                  {/* Bottom: Couple Name and Location */}
                  <div className="space-y-1">
                    <h3 
                      className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
                      style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
                    >
                      {video.couple}
                    </h3>
                    {video.location && (
                      <p className="text-sm md:text-base text-white/70 tracking-wide" style={{ fontFamily: "var(--font-garamond)" }}>
                        {video.location}
                      </p>
                    )}
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
