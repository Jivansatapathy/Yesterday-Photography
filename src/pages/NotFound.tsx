import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/layouts/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <MainLayout>
      <Helmet>
        <title>404 - Page Not Found | Yesterday Wedding Photography</title>
        <meta name="description" content="The page you're looking for could not be found." />
        <meta property="og:title" content="404 - Page Not Found | Yesterday Wedding Photography" />
        <meta property="og:description" content="The page you're looking for could not be found." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yesterday-indol.vercel.app/og-image.svg" />
        <meta property="og:url" content="https://yesterday-indol.vercel.app" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex min-h-[80vh] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-6"
        >
          <p className="text-caption text-accent mb-4">Page Not Found</p>
          <h1 className="text-hero mb-6">404</h1>
          <p className="text-editorial text-muted-foreground mb-10 max-w-md mx-auto">
            The page you're looking for seems to have wandered off into the sunset.
          </p>
          <Link to="/" className="btn-luxury">
            Return Home
          </Link>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
