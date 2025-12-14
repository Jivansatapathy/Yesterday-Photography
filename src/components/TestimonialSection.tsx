import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Yesterday didn't just photograph our wedding—they captured our souls. Every image feels like a piece of art we'll treasure forever.",
    author: "Sarah & James",
    location: "Tuscany, Italy",
  },
  {
    id: 2,
    quote:
      "The team at Yesterday made us feel like the most important people in the world. Their artistry is unmatched, and the experience was pure magic.",
    author: "Emma & Michael",
    location: "Provence, France",
  },
  {
    id: 3,
    quote:
      "Working with Yesterday was a dream. They understood our vision perfectly and exceeded every expectation. Our photos are absolutely breathtaking.",
    author: "Isabella & David",
    location: "Amalfi Coast, Italy",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-stone-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 max-w-4xl text-center"
      >
        <Star className="w-6 h-6 text-gold mx-auto mb-6 md:mb-8 animate-pulse" fill="currentColor" />

        <div className="relative">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic text-stone-800 mb-8 md:mb-10 leading-tight">
            "{TESTIMONIALS[0].quote}"
          </p>
          <div className="flex flex-col items-center">
            <span className="font-bold tracking-[0.2em] uppercase text-xs sm:text-sm border-b border-gold pb-2">
              {TESTIMONIALS[0].author}
            </span>
            <span className="text-stone-500 text-xs mt-3 uppercase tracking-wider">
              {TESTIMONIALS[0].location}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;

