import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/layouts/MainLayout";
// import Preloader from "@/components/Preloader"; // Kept for potential future use
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
  return (
    <>
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
