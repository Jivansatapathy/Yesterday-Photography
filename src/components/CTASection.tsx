import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-foreground/40 z-10" />
        <img
          src="/image/Folder2/DSC03307.webp"
          alt="Romantic destination wedding at sunset"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-caption text-warm-white/80 mb-6"
        >
          Begin Your Story
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display text-warm-white max-w-3xl mb-8"
        >
          Let's create something beautiful together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-body-luxury text-warm-white/80 max-w-xl mb-10"
        >
          We'd love to hear about your vision, your story, and your dreams. Let's
          start a conversation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link
            to="/contact"
            className="btn-luxury border-warm-white text-warm-white hover:bg-warm-white hover:text-foreground"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
