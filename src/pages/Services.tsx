import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Camera, Film, MapPin, BookOpen, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import Interactive3DCard from "@/components/Interactive3DCard";
import CTASection from "@/components/CTASection";
import Floating3DShapes from "@/components/Floating3DShapes";
import { Button } from "@/components/ui/button";

// Images now loaded from public/image folder

const services = [
  {
    image: "/image/Folder2/DSC01764.webp",
    title: "Pre-Wedding Sessions",
    description:
      "Capture your love story against the backdrop of India's most beautiful locations—from the palaces of Rajasthan to the beaches of Goa. We create stunning portraits that celebrate your unique bond.",
    icon: Camera,
    features: ["3-4 hour session", "Iconic Indian locations", "100+ edited images", "Online gallery"],
  },
  {
    image: "/image/Folder2/DSC03307.webp",
    title: "Wedding Day Coverage",
    description:
      "Complete coverage of your Indian wedding celebrations—from Haldi and Mehendi ceremonies to the grand reception. We capture every ritual, emotion, and moment of your special day.",
    icon: Camera,
    features: ["Multi-day coverage", "Second photographer", "800+ edited images", "Sneak peek within 24h"],
  },
  {
    image: "/image/Folder2/DSC03792.webp",
    title: "Destination Weddings in India",
    description:
      "From the royal palaces of Udaipur to the serene backwaters of Kerala, we travel across India to capture your destination wedding in the most breathtaking locations.",
    icon: MapPin,
    features: ["Pan-India travel", "Location scouting", "Extended coverage", "Travel & stay included"],
  },
  {
    image: "/image/Folder2/DSC04189 (1).webp",
    title: "Cinematic Wedding Films",
    description:
      "A cinematic masterpiece that brings your Indian wedding to life. Our films capture the vibrant colors, rich traditions, and emotional moments of your celebration in stunning 4K.",
    icon: Film,
    features: ["4K resolution", "Highlight film", "Full ceremony coverage", "Drone footage"],
  },
  {
    image: "/image/Folder2/DSC04231.webp",
    title: "Albums & Fine Art Prints",
    description:
      "Luxury handcrafted albums and fine art prints that will be treasured for generations. Made with premium materials and traditional Indian craftsmanship.",
    icon: BookOpen,
    features: ["Luxury albums", "Fine art prints", "Custom design", "Lifetime warranty"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We begin with a detailed discussion about your wedding rituals, traditions, and vision. Understanding your family customs helps us create a personalized photography experience.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Together, we'll plan every detail—from Haldi and Mehendi ceremonies to the main wedding and reception. We ensure all important rituals are beautifully documented.",
  },
  {
    step: "03",
    title: "Your Wedding Day",
    description: "We capture every moment with artistry and care—from the morning rituals to the evening celebrations. Working discreetly to preserve authentic emotions and traditions.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Within 6-10 weeks, you'll receive your beautifully edited images and films, ready to be shared with family and treasured for generations.",
  },
];

const faqs = [
  {
    question: "How far in advance should we book?",
    answer: "We recommend booking 12-18 months in advance, especially for peak wedding season (October to March). However, we occasionally have availability for last-minute bookings during off-season.",
  },
  {
    question: "Do you travel for destination weddings across India?",
    answer: "Absolutely! We travel across India—from the royal palaces of Rajasthan to the beaches of Goa, the mountains of Himachal to the backwaters of Kerala. Travel and accommodation costs are included in our destination wedding packages.",
  },
  {
    question: "What's included in your packages?",
    answer: "All packages include high-resolution edited images, online gallery, and personal consultation. Additional services like albums, films, second photographer, and extended coverage for multiple ceremonies can be added.",
  },
  {
    question: "How long until we receive our photos?",
    answer: "You'll receive a sneak peek within 24 hours, and your complete gallery will be delivered within 6-10 weeks of your wedding date. Rush delivery options are available for an additional fee.",
  },
  {
    question: "Do you cover all Indian wedding ceremonies?",
    answer: "Yes! We cover all ceremonies including Haldi, Mehendi, Sangeet, Wedding, Reception, and any other rituals specific to your community or region. We understand the importance of each ceremony.",
  },
];

const Services = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Services | Yesterday Wedding Photography</title>
        <meta
          name="description"
          content="Luxury wedding photography services including pre-wedding sessions, full day coverage, destination weddings, cinematic films, and fine art albums."
        />
        <meta property="og:title" content="Services | Yesterday Wedding Photography" />
        <meta property="og:description" content="Luxury wedding photography services including pre-wedding sessions, full day coverage, destination weddings, cinematic films, and fine art albums." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yesterday-indol.vercel.app/og-image.svg" />
        <meta property="og:url" content="https://yesterday-indol.vercel.app/services" />
        <meta property="og:site_name" content="Yesterday Studio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | Yesterday Wedding Photography" />
        <meta name="twitter:description" content="Luxury wedding photography services for your special day." />
        <meta name="twitter:image" content="https://yesterday-indol.vercel.app/og-image.svg" />
      </Helmet>

      <Floating3DShapes />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 bg-secondary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-[10%] w-32 h-32 rounded-full border border-accent/10"
          />
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 left-[15%] w-8 h-8 border border-accent/20 rotate-45"
          />
        </div>

        <div className="container-luxury text-center relative z-10 px-4 sm:px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs sm:text-caption text-accent mb-3 sm:mb-4 tracking-[0.3em]"
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-hero mb-4 sm:mb-6"
          >
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-editorial text-muted-foreground max-w-2xl mx-auto px-4"
          >
            Tailored experiences designed to capture your love story with the
            care and artistry it deserves.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-luxury bg-background">
        <div className="container-luxury px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Interactive3DCard
                  image={service.image}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
                <div className="mt-6 space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-luxury bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full border border-accent/5"
          />
        </div>

        <div className="container-luxury relative z-10 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-caption text-accent mb-4 tracking-[0.3em]">Our Process</p>
            <h2 className="text-display mb-4">How We Work</h2>
            <p className="text-body-luxury text-muted-foreground max-w-2xl mx-auto">
              A seamless journey from first consultation to final delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative"
              >
                <div className="mb-6">
                  <span className="text-6xl md:text-7xl font-serif text-accent/20">{step.step}</span>
                  <h3 className="font-serif text-2xl md:text-3xl -mt-4 mb-4">{step.title}</h3>
                </div>
                <p className="text-body-luxury text-muted-foreground leading-relaxed">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-5 w-10 h-px bg-accent/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-luxury bg-background relative overflow-hidden">
        <div className="container-luxury px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-caption text-accent mb-4 tracking-[0.3em]">Investment</p>
            <h2 className="text-display mb-6">Bespoke Pricing</h2>
            <p className="text-body-luxury text-muted-foreground mb-8 leading-relaxed">
              Every wedding is unique, and so is our approach. We create custom
              packages tailored to your specific needs, traditions, and vision. Our wedding
              collections begin at ₹5,00,000. All prices are inclusive of GST.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
              {[
                { label: "Starting at", price: "₹5,00,000", note: "Wedding Collections" },
                { label: "From", price: "₹1,50,000", note: "Pre-Wedding Sessions" },
                { label: "From", price: "₹3,00,000", note: "Cinematic Films" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 border border-accent/20 bg-secondary/50"
                >
                  <p className="text-caption text-muted-foreground mb-2">{item.label}</p>
                  <p className="font-serif text-3xl md:text-4xl text-foreground mb-2">{item.price}</p>
                  <p className="text-sm text-muted-foreground">{item.note}</p>
                </motion.div>
              ))}
            </div>

            <Link to="/contact">
              <Button className="bg-accent text-foreground hover:bg-accent/90 px-8 py-6 text-base">
                Request Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-luxury bg-secondary relative overflow-hidden">
        <div className="container-luxury px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-caption text-accent mb-4 tracking-[0.3em]">Questions</p>
            <h2 className="text-display mb-4">Frequently Asked</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-accent/10 pb-6 last:border-0"
              >
                <h3 className="font-serif text-xl md:text-2xl mb-3 text-foreground">{faq.question}</h3>
                <p className="text-body-luxury text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
};

export default Services;
