import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import MainLayout from "@/layouts/MainLayout";
import Enhanced3DGallery from "@/components/Enhanced3DGallery";
import VideoShowcase from "@/components/VideoShowcase";
import Floating3DShapes from "@/components/Floating3DShapes";

const Portfolio = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Portfolio | Yesterday Wedding Photography</title>
        <meta
          name="description"
          content="Explore our collection of luxury wedding photography and cinematic films. View destination weddings, pre-wedding sessions, and intimate celebrations."
        />
        <meta property="og:title" content="Portfolio | Yesterday Wedding Photography" />
        <meta property="og:description" content="Explore our collection of luxury wedding photography and cinematic films. View destination weddings, pre-wedding sessions, and intimate celebrations." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yesterday-indol.vercel.app/og-image.svg" />
        <meta property="og:url" content="https://yesterday-indol.vercel.app/portfolio" />
        <meta property="og:site_name" content="Yesterday Studio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | Yesterday Wedding Photography" />
        <meta name="twitter:description" content="Explore our collection of luxury wedding photography and cinematic films." />
        <meta name="twitter:image" content="https://yesterday-indol.vercel.app/og-image.svg" />
      </Helmet>

      {/* Floating 3D elements */}
      <Floating3DShapes />

      {/* Hero Header */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 bg-background relative overflow-hidden">
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
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-hero mb-4 sm:mb-6"
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-editorial text-muted-foreground max-w-2xl mx-auto px-4"
          >
            A curated collection of love stories, each one unique, all of them
            timeless.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-8"
          />
        </div>
      </section>

      {/* Main Gallery */}
      <section className="section-luxury bg-background pt-4 sm:pt-6 md:pt-8 relative">
        <div className="container-luxury px-0 sm:px-4">
          <Enhanced3DGallery />
        </div>
      </section>

      {/* Video Showcase Section */}
      <VideoShowcase />

      {/* Stats Section */}
      <section className="section-luxury bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full border border-accent/5"
          />
        </div>

        <div className="container-luxury relative z-10 px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { number: "500+", label: "Weddings Captured" },
              { number: "50+", label: "Destinations" },
              { number: "15", label: "Years Experience" },
              { number: "100%", label: "Happy Couples" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="space-y-2"
              >
                <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground">
                  {stat.number}
                </p>
                <p className="text-xs sm:text-sm md:text-caption text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Portfolio;
