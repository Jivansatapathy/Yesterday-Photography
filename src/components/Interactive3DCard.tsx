import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-router-dom";

interface Interactive3DCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
  href?: string;
}

const Interactive3DCard = ({ image, title, description, index, href = "/contact" }: Interactive3DCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    const imageEl = imageRef.current;
    const glow = glowRef.current;
    if (!card || !imageEl || !glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      gsap.to(card, {
        rotateX,
        rotateY,
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 1000,
      });

      gsap.to(imageEl, {
        scale: 1.1,
        x: (x - centerX) * 0.02,
        y: (y - centerY) * 0.02,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(glow, {
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        opacity: 0.6,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(imageEl, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(glow, {
        opacity: 0,
        duration: 0.3,
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      <div
        ref={cardRef}
        className="relative overflow-hidden transform-gpu cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={glowRef}
          className="absolute w-40 h-40 rounded-full pointer-events-none opacity-0 z-10"
          style={{
            background: "radial-gradient(circle, hsl(38 45% 65%) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        <div className="aspect-[4/5] overflow-hidden bg-muted relative">
          <img
            ref={imageRef}
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 will-change-transform"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-rich-black/80 via-rich-black/40 to-transparent"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 border-2 border-accent/50"
          />
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 text-warm-white transform-gpu"
          style={{ transform: "translateZ(30px)" }}
        >
          <motion.h3
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="font-serif text-2xl lg:text-3xl mb-2"
          >
            {title}
          </motion.h3>
          <motion.p
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-warm-white/80 text-sm leading-relaxed mb-4 line-clamp-2"
          >
            {description}
          </motion.p>
          <motion.div
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link
              to={href}
              className="inline-block text-caption text-accent border-b border-accent pb-1"
            >
              Request Pricing
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-6 space-y-2">
        <h3 className="font-serif text-xl lg:text-2xl group-hover:text-accent transition-colors duration-500">
          {title}
        </h3>
        <div className="w-0 group-hover:w-12 h-px bg-accent transition-all duration-500" />
      </div>
    </motion.article>
  );
};

export default Interactive3DCard;
