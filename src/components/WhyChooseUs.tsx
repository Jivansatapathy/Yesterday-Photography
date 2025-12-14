import { motion } from "framer-motion";
import { Camera, Sparkles, Heart } from "lucide-react";

const pillars = [
  {
    icon: Camera,
    title: "Timeless Storytelling",
    description:
      "We capture the essence of your day through a cinematic lens, creating images that transcend trends and speak to the heart for generations.",
  },
  {
    icon: Sparkles,
    title: "Artistic Direction",
    description:
      "With a background in fine art and fashion photography, we bring an editorial eye to every wedding, crafting visuals worthy of the world's finest magazines.",
  },
  {
    icon: Heart,
    title: "Luxury Experience",
    description:
      "From our first conversation to the delivery of your gallery, every touchpoint is designed to feel effortless, personal, and utterly exceptional.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-luxury bg-background">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-caption text-accent mb-4">The Yesterday Experience</p>
          <h2 className="text-display max-w-3xl mx-auto">
            Why couples choose us for their most cherished day
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-accent/30 text-accent">
                <pillar.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl mb-4">{pillar.title}</h3>
              <p className="text-body-luxury text-muted-foreground">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
