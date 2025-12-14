import { useState, useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/layouts/MainLayout";
import Preloader from "@/components/Preloader";
import ParallaxGallery from "@/components/ParallaxGallery";
import EnhancedHeroSection from "@/components/EnhancedHeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import FeaturedWeddings from "@/components/FeaturedWeddings";
import VideoShowcase from "@/components/VideoShowcase";
import EnhancedWhyChooseUs from "@/components/EnhancedWhyChooseUs";
import DarkCinematicSection from "@/components/DarkCinematicSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import Floating3DShapes from "@/components/Floating3DShapes";

// Lazy load heavy components that use GSAP/Lenis
const HorizontalScroll = lazy(() => import("@/components/HorizontalScroll"));
// const ParallaxGallery = lazy(() => import("@/components/ParallaxGallery")); // Commented out for now, will use later
const MobileGallery = lazy(() => import("@/components/MobileGallery"));

const Index = () => {
  const location = useLocation();
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Only show preloader on the home page
    if (location.pathname !== "/") {
      return;
    }

    // Check if we navigated from another page (React Router navigation)
    const navigatedFromOtherPage = sessionStorage.getItem("navigatedFromOtherPage") === "true";
    
    // If navigating from another page, don't show preloader
    if (navigatedFromOtherPage) {
      sessionStorage.removeItem("navigatedFromOtherPage");
      return;
    }

    // Check navigation type and ensure we're on home page
    const navigationEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const navigationType = navigationEntries.length > 0 ? navigationEntries[0].type : null;
    
    // Get the previous path to check if we were on home page before refresh
    const previousPath = sessionStorage.getItem("previousPath");
    
    // Show preloader only on:
    // 1. Page reload (when user refreshes the home page specifically)
    // 2. Initial page load (first visit to the site, landing on home page)
    if (navigationType === "reload") {
      // Only show if we were on home page before refresh
      // If previousPath is null or "/", it means we were on home page
      if (!previousPath || previousPath === "/") {
        setShowPreloader(true);
      }
    } else if (navigationType === "navigate") {
      // Initial page load - only show if landing on home page
      // Check if this is the first visit and we're on home page
      const hasVisitedHome = sessionStorage.getItem("hasVisitedHome");
      if (!hasVisitedHome && location.pathname === "/") {
        setShowPreloader(true);
        sessionStorage.setItem("hasVisitedHome", "true");
      }
    }
    
    // Clear the navigation flag after checking
    sessionStorage.removeItem("navigatedFromOtherPage");
  }, [location.pathname]);

  return (
    <>
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}
      <MainLayout>
        <Helmet>
          <title>Yesterday | Luxury Wedding Photography & Cinematic Films</title>
          <meta
            name="description"
            content="Yesterday creates timeless wedding stories through luxury photography and cinematic films. Fine art wedding photographer available for destination weddings worldwide."
          />
          <meta property="og:title" content="Yesterday | Luxury Wedding Photography & Cinematic Films" />
          <meta property="og:description" content="Timeless wedding stories captured with artistry and emotion. Fine art photography for discerning couples worldwide." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://yesterday-indol.vercel.app/og-image.svg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Yesterday - Luxury Wedding Photography" />
          <meta property="og:url" content="https://yesterday-indol.vercel.app" />
          <meta property="og:site_name" content="Yesterday Studio" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Yesterday | Luxury Wedding Photography" />
          <meta name="twitter:description" content="Timeless wedding stories captured with artistry and emotion." />
          <meta name="twitter:image" content="https://yesterday-indol.vercel.app/og-image.svg" />
        </Helmet>

        {/* Floating 3D shapes across the page */}
        <Floating3DShapes />

        <Suspense fallback={<div className="min-h-screen" />}>
          <HorizontalScroll />
        </Suspense>
        <EnhancedHeroSection />
        <PhilosophySection />
        <FeaturedWeddings />
        <Suspense fallback={<div className="min-h-screen" />}>
          <ParallaxGallery />
          <MobileGallery />
        </Suspense>
        <VideoShowcase />
        <EnhancedWhyChooseUs />
        <DarkCinematicSection />
        <TestimonialSection />
        <CTASection />
      </MainLayout>
    </>
  );
};

export default Index;
