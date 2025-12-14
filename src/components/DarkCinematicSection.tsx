import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const DarkCinematicSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-stone-900 text-white relative overflow-hidden">
      {/* Abstract shapes in background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-l from-gold/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <div className="relative">
            <div className="absolute -inset-4 border border-gold/30 rounded-t-full rounded-b-lg animate-[spin_15s_linear_infinite]" />
            <img
              src="/image/Folder2/DSC03792.webp"
              alt="Cinematic shot"
              className="w-full h-auto object-cover opacity-90 shadow-2xl rounded-t-full rounded-b-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gold rounded-full flex items-center justify-center text-stone-900 hover:scale-110 transition-transform cursor-pointer">
              <Play size={20} className="sm:w-6 sm:h-6 md:w-6 md:h-6" fill="currentColor" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2"
        >
          <span className="text-gold text-xs uppercase tracking-widest mb-6 block">
            The Experience
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight">
            Motion. Emotion.
            <br />
            Perfection.
          </h3>
          <p className="text-stone-400 font-light mb-8 md:mb-10 leading-relaxed text-base sm:text-lg">
            Our approach combines the intimacy of documentary filmmaking with the grandeur of cinema.
            Using state-of-the-art 4K cameras and drone technology, we capture every angle of your
            love story.
          </p>
          <Link to="/services">
            <Button
              variant="default"
              className="bg-white text-stone-900 hover:bg-gold-light hover:text-stone-900 border-none px-8 py-3 sm:px-10 sm:py-4"
            >
              Explore Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DarkCinematicSection;

