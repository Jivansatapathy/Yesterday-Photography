import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Send, Sparkles } from "lucide-react";

const InteractiveContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
      });
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll be in touch within 24 hours.",
    });

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        location: "",
        message: "",
      });
      setIsSuccess(false);
    }, 3000);
  };

  useEffect(() => {
    if (!activeField) return;

    const input = document.getElementById(activeField);
    if (input?.parentElement) {
      gsap.to(input.parentElement, {
        y: -5,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    return () => {
      if (input?.parentElement) {
        gsap.to(input.parentElement, {
          y: 0,
          duration: 0.3,
        });
      }
    };
  }, [activeField]);

  const inputClasses =
    "bg-transparent border-0 border-b border-border focus:border-accent rounded-none px-0 py-4 text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-500";

  const labelClasses = "text-caption text-muted-foreground transition-colors duration-300";

  return (
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div whileHover={{ scale: 1.01 }} className="relative group">
          <label htmlFor="name" className={`${labelClasses} ${activeField === "name" ? "text-accent" : ""}`}>
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setActiveField("name")}
            onBlur={() => setActiveField(null)}
            required
            className={inputClasses}
            placeholder="Your name"
          />
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-accent origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: activeField === "name" ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.01 }} className="relative group">
          <label htmlFor="email" className={`${labelClasses} ${activeField === "email" ? "text-accent" : ""}`}>
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setActiveField("email")}
            onBlur={() => setActiveField(null)}
            required
            className={inputClasses}
            placeholder="your@email.com"
          />
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-accent origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: activeField === "email" ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.01 }} className="relative group">
          <label htmlFor="phone" className={`${labelClasses} ${activeField === "phone" ? "text-accent" : ""}`}>
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            onFocus={() => setActiveField("phone")}
            onBlur={() => setActiveField(null)}
            className={inputClasses}
            placeholder="+1 (234) 567-890"
          />
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-accent origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: activeField === "phone" ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.01 }} className="relative group">
          <label htmlFor="eventDate" className={`${labelClasses} ${activeField === "eventDate" ? "text-accent" : ""}`}>
            Event Date
          </label>
          <Input
            id="eventDate"
            name="eventDate"
            type="date"
            value={formData.eventDate}
            onChange={handleChange}
            onFocus={() => setActiveField("eventDate")}
            onBlur={() => setActiveField(null)}
            className={inputClasses}
          />
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-accent origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: activeField === "eventDate" ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      <motion.div whileHover={{ scale: 1.005 }} className="relative group">
        <label htmlFor="location" className={`${labelClasses} ${activeField === "location" ? "text-accent" : ""}`}>
          Event Location
        </label>
        <Input
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          onFocus={() => setActiveField("location")}
          onBlur={() => setActiveField(null)}
          className={inputClasses}
          placeholder="City, Country or Venue"
        />
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-accent origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: activeField === "location" ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <motion.div whileHover={{ scale: 1.005 }} className="relative group">
        <label htmlFor="message" className={`${labelClasses} ${activeField === "message" ? "text-accent" : ""}`}>
          Tell Us About Your Vision
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setActiveField("message")}
          onBlur={() => setActiveField(null)}
          required
          rows={5}
          className={`${inputClasses} resize-none`}
          placeholder="Share your dreams for the day..."
        />
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-accent origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: activeField === "message" ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <motion.button
        ref={buttonRef}
        type="submit"
        disabled={isSubmitting || isSuccess}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative btn-luxury-filled w-full md:w-auto overflow-hidden disabled:opacity-70 group"
      >
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.span
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              Sent Successfully
            </motion.span>
          ) : isSubmitting ? (
            <motion.span
              key="submitting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              Sending...
            </motion.span>
          ) : (
            <motion.span
              key="default"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.form>
  );
};

export default InteractiveContactForm;
