export default function ModernApproachSection() {
  return (
    <section className="relative bg-[#f4eee4] py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Right Image at Top */}
        <div className="absolute -top-16 right-6 group z-0">
          <img
            src="/image/Folder1/9.webp"
            alt="Scenic wedding"
            width="400"
            height="550"
            className="w-[400px] h-[550px] object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700 ease-out"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* ===================== */}
        {/* Floating Editorial Heading */}
        {/* ===================== */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-30 text-center select-none">
          <h1 className="text-[42px] md:text-[64px] tracking-wide text-neutral-800 leading-none whitespace-nowrap font-semibold" style={{ fontFamily: "var(--font-garamond)", fontWeight: 600 }}>
            A MODERN APPROACH
          </h1>
          <p className="italic text-[24px] md:text-[32px] text-neutral-600 -mt-4 whitespace-nowrap font-medium" style={{ fontFamily: "var(--font-garamond)", fontWeight: 500 }}>
            to an AGE OLD TRADITION
          </p>
        </div>

        {/* Spacer to allow overlap */}
        <div className="h-32 md:h-36" />

        {/* ===================== */}
        {/* Main Editorial Grid */}
        {/* ===================== */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_0.9fr_1fr] gap-16 z-10">

          {/* Left Image (Lowered) */}
          <div className="relative mt-8 group">
            <img
              src="/image/Folder1/DSC00462.webp"
              alt="Bride portrait"
              width="400"
              height="450"
              className="w-[400px] h-[450px] object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700 ease-out"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Center Text Column */}
          <div className="text-neutral-700 text-[15px] md:text-[17px] leading-relaxed pt-8 space-y-6 relative z-20" style={{ fontFamily: "var(--font-garamond)" }}>
            <p>
              Considered to be the epitome of Modern Photography and Filmmaking,
              HOTC has transformed the Indian Wedding landscape on a regular basis.
              For almost a decade House On The Clouds has been creating photographs
              and films which are timeless and have been etched in memories of
              thousands of people forever.
            </p>

            <p>
              Awarded as the Wedding Filmmaker of the year for four consecutive
              years at the WeddingSutra awards along with numerous other awards,
              HOTC is the only company listed on IMDB for its award winning films.
            </p>
          </div>

          {/* Empty space where right image was */}
          <div></div>

        </div>

      </div>
    </section>
  );
}
