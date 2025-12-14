import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const weddings = [
  {
    id: 1,
    title: "Sarah & James",
    location: "Tuscany, Italy",
    image: "/image/Folder2/DSC01283.webp",
    category: "Destination Wedding",
  },
  {
    id: 2,
    title: "Emma & Michael",
    location: "Provence, France",
    image: "/image/Folder2/DSC01316.webp",
    category: "Pre-Wedding",
  },
  {
    id: 3,
    title: "Isabella & David",
    location: "Amalfi Coast, Italy",
    image: "/image/Folder2/DSC01764.webp",
    category: "Wedding Day",
  },
];

const FeaturedWeddings = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-luxury bg-secondary">
      <div className="container-luxury mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="text-caption text-accent mb-4">Featured Stories</p>
            <h2 className="text-display">Recent Wedding Films</h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-caption text-foreground/70 hover:text-foreground transition-colors group"
          >
            View All Work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar px-[max(1.5rem,calc((100vw-1400px)/2+1.5rem))] pb-4"
      >
        {weddings.map((wedding, index) => (
          <motion.article
            key={wedding.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] max-w-[500px] group cursor-pointer"
          >
            <Link to="/portfolio">
              <div className="image-hover mb-6">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={wedding.image}
                    alt={`${wedding.title} wedding in ${wedding.location}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-caption text-muted-foreground mb-2">
                {wedding.category}
              </p>
              <h3 className="font-serif text-2xl mb-1 group-hover:text-accent transition-colors duration-500">
                {wedding.title}
              </h3>
              <p className="text-sm text-muted-foreground">{wedding.location}</p>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWeddings;
