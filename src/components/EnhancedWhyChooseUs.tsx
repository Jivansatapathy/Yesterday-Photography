import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Camera, Heart, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Camera,
    title: "Timeless Storytelling",
    description:
      "We capture the essence of your love story with artistic vision and emotional depth that transcends time.",
  },
  {
    icon: Star,
    title: "Artistic Direction",
    description:
      "Every frame is carefully composed with the eye of a fine artist, creating imagery worthy of galleries.",
  },
  {
    icon: Heart,
    title: "Luxury Experience",
    description:
      "From first consultation to final delivery, we provide a seamless, premium experience you'll treasure.",
  },
];

const EnhancedWhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 80, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.15,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-luxury bg-secondary relative overflow-hidden">
      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-caption text-accent mb-4 tracking-[0.3em]">Why Choose Us</p>
          <h2 className="text-display mb-6">The Yesterday Difference</h2>
          <p className="text-editorial text-muted-foreground max-w-2xl mx-auto">
            We don't just take photographs. We craft heirlooms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative p-8 lg:p-10 bg-background border border-border h-full group hover:border-accent/30 transition-colors duration-500">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-radial from-accent/5 to-transparent" />

                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative mb-8"
                >
                  <div className="w-16 h-16 flex items-center justify-center border border-accent/30 group-hover:border-accent transition-colors duration-500">
                    <feature.icon className="w-7 h-7 text-accent" />
                  </div>
                </motion.div>

                <h3 className="font-serif text-2xl mb-4 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-body-luxury text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-8 w-0 group-hover:w-full h-px bg-gradient-to-r from-accent via-gold-light to-transparent transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedWhyChooseUs;
