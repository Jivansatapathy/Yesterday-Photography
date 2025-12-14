import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import MainLayout from "@/layouts/MainLayout";
import CTASection from "@/components/CTASection";

// Images now loaded from public/image folder

const milestones = [
  { year: "2015", event: "Yesterday was founded" },
  { year: "2017", event: "First international destination wedding" },
  { year: "2019", event: "Featured in Vogue Weddings" },
  { year: "2021", event: "100th wedding captured" },
  { year: "2023", event: "Expanded to cinematic films" },
];

const About = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>About | Yesterday Wedding Photography</title>
        <meta
          name="description"
          content="Meet the artist behind Yesterday. Learn about our journey, philosophy, and passion for creating timeless wedding photography and cinematic films."
        />
        <meta property="og:title" content="About | Yesterday Wedding Photography" />
        <meta property="og:description" content="Meet the artist behind Yesterday. Learn about our journey, philosophy, and passion for creating timeless wedding photography and cinematic films." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yesterday-indol.vercel.app/og-image.svg" />
        <meta property="og:url" content="https://yesterday-indol.vercel.app/about" />
        <meta property="og:site_name" content="Yesterday Studio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Yesterday Wedding Photography" />
        <meta name="twitter:description" content="Meet the artist behind Yesterday. Learn about our journey and philosophy." />
        <meta name="twitter:image" content="https://yesterday-indol.vercel.app/og-image.svg" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="image-hover order-2 lg:order-1"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/image/Folder2/DSC09235.webp"
                  alt="The photographer behind Yesterday"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 lg:order-2"
            >
              <p className="text-caption text-accent mb-4">The Artist</p>
              <h1 className="text-hero mb-8">About Yesterday</h1>
              <div className="space-y-6 text-body-luxury text-muted-foreground">
                <p>
                  Behind every frame at Yesterday is a deep passion for
                  storytelling and an unwavering commitment to artistry. What
                  began as a love affair with light and emotion has evolved into
                  a pursuit of creating the most beautiful wedding imagery in
                  the world.
                </p>
                <p>
                  Our name, "Yesterday," speaks to the heart of what we do—we
                  preserve the fleeting moments of today so they can be
                  cherished for all the tomorrows to come.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-luxury bg-secondary">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-caption text-accent mb-4">Our Story</p>
              <h2 className="text-display mb-8">Why "Yesterday"?</h2>
              <div className="space-y-6 text-body-luxury text-muted-foreground">
                <p>
                  The name was inspired by the realization that every wedding
                  day, no matter how carefully planned, becomes "yesterday" by
                  the time the sun sets. The laughter, the tears, the stolen
                  glances—they all slip into memory.
                </p>
                <p>
                  But photographs and films have the power to stop time. They
                  allow us to revisit those precious moments, to feel the same
                  butterflies, to hear the same music in our minds.
                </p>
                <p>
                  That's why we pour our hearts into every wedding. Because we
                  know that what we create today will be the treasured
                  "yesterday" of generations to come.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-caption text-accent mb-4">Our Approach</p>
              <h2 className="text-display mb-8">The Yesterday Style</h2>
              <div className="space-y-6 text-body-luxury text-muted-foreground">
                <p>
                  Our visual language draws from fine art, fashion editorial,
                  and cinematic filmmaking. We believe wedding photography
                  should be as beautiful as any image in a museum or
                  magazine—but with the soul and authenticity of documentary
                  work.
                </p>
                <p>
                  We use natural light whenever possible, gravitating toward the
                  golden hour's warm embrace. Our editing style is timeless:
                  soft, warm tones with rich blacks and creamy highlights that
                  will never look dated.
                </p>
                <p>
                  Most importantly, we prioritize genuine moments over posed
                  perfection. The best photographs happen when people forget
                  they're being photographed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-luxury bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-caption text-accent mb-4">Our Journey</p>
            <h2 className="text-display">Milestones</h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center gap-8 py-6 border-b border-border last:border-0"
              >
                <span className="font-serif text-3xl text-accent min-w-[80px]">
                  {milestone.year}
                </span>
                <span className="text-body-luxury text-foreground">
                  {milestone.event}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes Gallery */}
      <section className="section-luxury bg-secondary">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-caption text-accent mb-4">Behind the Lens</p>
            <h2 className="text-display">Moments from Our Journey</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "/image/Folder2/DSC04279.webp",
              "/image/Folder2/DSC04999.webp",
              "/image/Folder2/DSC05030.webp"
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="image-hover"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={img}
                    alt="Behind the scenes wedding photography"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
};

export default About;
