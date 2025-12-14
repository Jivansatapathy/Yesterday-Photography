import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import InteractiveContactForm from "@/components/InteractiveContactForm";

const Contact = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Contact | Yesterday Wedding Photography</title>
        <meta
          name="description"
          content="Get in touch with Yesterday to discuss your wedding photography needs. Based worldwide, available for destination weddings across the globe."
        />
        <meta property="og:title" content="Contact | Yesterday Wedding Photography" />
        <meta property="og:description" content="Get in touch with Yesterday to discuss your wedding photography needs. Based worldwide, available for destination weddings across the globe." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yesterday-indol.vercel.app/og-image.svg" />
        <meta property="og:url" content="https://yesterday-indol.vercel.app/contact" />
        <meta property="og:site_name" content="Yesterday Studio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Yesterday Wedding Photography" />
        <meta name="twitter:description" content="Get in touch with Yesterday to discuss your wedding photography needs." />
        <meta name="twitter:image" content="https://yesterday-indol.vercel.app/og-image.svg" />
      </Helmet>

      <section className="pt-32 pb-16 bg-secondary relative overflow-hidden">
        <div className="container-luxury text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-caption text-accent mb-4 tracking-[0.3em]"
          >
            Let's Connect
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-hero mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-editorial text-muted-foreground max-w-2xl mx-auto"
          >
            We'd love to hear your story. Tell us about your vision, and let's
            create something beautiful together.
          </motion.p>
        </div>
      </section>

      <section className="section-luxury bg-background relative">
        <div className="container-luxury relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-caption text-accent mb-4 tracking-[0.3em]">Contact Details</p>
              <h2 className="text-display mb-8">Reach Out</h2>

              <div className="space-y-8 mb-12">
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-accent transition-all duration-300">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-caption text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:hello@yesterday.studio"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      hello@yesterday.studio
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-accent transition-all duration-300">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-caption text-muted-foreground mb-1">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-accent transition-all duration-300">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-caption text-muted-foreground mb-1">Based In</p>
                    <p className="text-foreground">
                      Los Angeles, California
                      <br />
                      <span className="text-muted-foreground text-sm">
                        Available worldwide
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="p-8 bg-secondary border border-border">
                <p className="text-caption text-accent mb-3">Response Time</p>
                <p className="text-body-luxury text-muted-foreground">
                  We respond to all inquiries within 24 hours. For urgent
                  matters, please call us directly.
                </p>
              </div>
            </motion.div>

            <div>
              <p className="text-caption text-accent mb-4 tracking-[0.3em]">Inquiry Form</p>
              <h2 className="text-display mb-8">Send a Message</h2>
              <InteractiveContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="h-[400px] bg-muted relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Yesterday Studio Location"
        />
      </section>
    </MainLayout>
  );
};

export default Contact;
