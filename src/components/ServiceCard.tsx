import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ image, title, description, index }: ServiceCardProps) => {
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
      className="group"
    >
      <div className="image-hover mb-6">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-serif text-2xl lg:text-3xl group-hover:text-accent transition-colors duration-500">
          {title}
        </h3>
        <p className="text-body-luxury text-muted-foreground leading-relaxed">
          {description}
        </p>
        <Link
          to="/contact"
          className="inline-block text-caption text-accent gold-underline pt-2"
        >
          Request Pricing
        </Link>
      </div>
    </motion.article>
  );
};

export default ServiceCard;
