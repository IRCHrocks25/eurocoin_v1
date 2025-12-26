import { ArrowRight } from 'lucide-react';
import bgImage from 'figma:asset/b4ea384d8eb8e231c5607c87c40b03297346549d.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background with uploaded image */}
      <div className="absolute inset-0">
        <img 
          src={bgImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
        {/* Subtitle */}
        <div className="mb-6 md:mb-8">
          <span className="text-cyan-400 tracking-wider uppercase text-sm md:text-base font-medium">
            EUROCOIN (EURDT)
          </span>
        </div>

        {/* Main Heading */}
        <h1 
          style={{ 
            marginBottom: '2rem',
            fontWeight: '900',
            letterSpacing: '-0.02em'
          }}
          className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent px-4 md:px-0"
        >
          The Next-Gen Euro Stablecoin
        </h1>

        {/* Subheading */}
        <p 
          style={{ marginBottom: '1rem' }}
          className="text-xl md:text-2xl text-white/95 font-medium px-4 md:px-0"
        >
          A new era in digital finance starts here.
        </p>

        {/* Description */}
        <p 
          style={{ marginBottom: '4rem' }}
          className="text-white/80 max-w-3xl mx-auto leading-relaxed text-base md:text-lg px-4 md:px-0"
        >
          Eurocoin is the world's first fully MiCA-compliant, euro-backed stablecoin engineered for real-time settlement, gas-free payments, and true institutional trust.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 px-4 md:px-0">
          {/* Primary Button - Premium Gradient with Holographic Effect */}
          <button 
            style={{ padding: '1.5rem 3rem' }}
            className="w-full sm:w-auto flex items-center justify-center gap-4 rounded-full transition-all duration-500 ease-out text-base sm:text-lg md:text-xl font-semibold group relative overflow-hidden"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-50 group-hover:opacity-75 transition-opacity duration-500 scale-105"></div>
            
            {/* Inner border highlight */}
            <div className="absolute inset-[1px] bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-60"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            
            {/* Content */}
            <span className="relative z-10 text-white drop-shadow-lg">Early Access Only</span>
            <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-2 transition-transform duration-300 relative z-10 text-white drop-shadow-lg" />
            
            {/* Pulsing ring on hover */}
            <div className="absolute inset-0 rounded-full border-2 border-white/30 scale-100 group-hover:scale-110 opacity-100 group-hover:opacity-0 transition-all duration-500"></div>
          </button>

          {/* Secondary Button - Modern Glass with Gradient Border */}
          <button 
            style={{ padding: '1.5rem 3rem' }}
            className="w-full sm:w-auto flex items-center justify-center gap-4 rounded-full transition-all duration-500 ease-out text-base sm:text-lg md:text-xl font-semibold group relative overflow-hidden backdrop-blur-xl"
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-[2px] rounded-full bg-black/40 group-hover:bg-black/30 transition-colors duration-500"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 blur-md bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-105"></div>
            
            {/* Inner gradient on hover */}
            <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            
            {/* Content */}
            <span className="relative z-10 text-white drop-shadow-lg">DEMO</span>
            <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-2 transition-transform duration-300 relative z-10 text-white drop-shadow-lg" />
          </button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e27] to-transparent" />
    </section>
  );
}