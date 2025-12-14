import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Yesterday didn't just photograph our wedding—they captured our souls. Every image feels like a piece of art we'll treasure forever.",
    couple: "Sarah & James",
    location: "Tuscany, Italy",
  },
  {
    id: 2,
    quote:
      "The team at Yesterday made us feel like the most important people in the world. Their artistry is unmatched, and the experience was pure magic.",
    couple: "Emma & Michael",
    location: "Provence, France",
  },
  {
    id: 3,
    quote:
      "Working with Yesterday was a dream. They understood our vision perfectly and exceeded every expectation. Our photos are absolutely breathtaking.",
    couple: "Isabella & David",
    location: "Amalfi Coast, Italy",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-luxury bg-primary text-primary-foreground">
      <div className="container-luxury">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-caption text-accent text-center mb-12"
        >
          Love Letters
        </motion.p>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <blockquote className="text-editorial text-primary-foreground/90 mb-8 leading-relaxed">
                "{testimonials[current].quote}"
              </blockquote>
              <div>
                <p className="font-serif text-xl mb-1">
                  {testimonials[current].couple}
                </p>
                <p className="text-sm text-primary-foreground/60">
                  {testimonials[current].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <button
              onClick={prev}
              className="p-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    index === current
                      ? "bg-accent w-8"
                      : "bg-primary-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
