import { ArrowRight } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import bgImage from 'figma:asset/920bac5e79f6b4e2f8d028d7d03c1726b8731e55.png';
import dotPattern from 'figma:asset/4f8ac2e2e33f435af4d70409e35bc8694036b3a6.png';
import newBgPattern from 'figma:asset/c9a1a100b7e5bf872e244847c13028fb8b6a5d79.png';
import euroCoin from 'figma:asset/dbf80a82905e64bf71fe73df79a2846fd89006be.png';
import euroCoinGold from 'figma:asset/74f80e2b27170a1ecf5b59a7c9a3d68a99635253.png';
import forDigitalMoney from 'figma:asset/167b70984e29772695f72edde47a71baebd1dcb9.png';
import withYouBanner from 'figma:asset/410c3871512cd890781e47427996c6c48780838b.png';
import howEurocoinWorks from 'figma:asset/865f4fad7e30ff811747f5d13ea8d1ce2935367e.png';
import whyEurocoin from 'figma:asset/f78ba638aacf4b8949847458660a8d1bc52e81e7.png';
import earthHorizonBg from 'figma:asset/af3c6efc6ea179431e93dd83377ab1f5e7f65967.png';
import getStartedContent from 'figma:asset/9389c6bf1d37120b432ba486610aca23b7f21ac4.png';

export function AboutUs() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main About Us Content */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32" style={{ backgroundColor: '#000' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-center" 
          style={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="w-full">
              {/* Main Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 md:mb-6 lg:mb-8 leading-tight">
                The Future of Europe's Digital Finance
              </h1>

              {/* Subtitle with highlight */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-3 md:mb-4 lg:mb-6">
                Eurocoin (EURDT) bridges traditional banking and blockchain innovation with a{' '}
                <span className="text-cyan-400">fully regulated, euro-pegged stablecoin</span>{' '}
                for seamless, secure transactions.
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70 leading-relaxed mb-6 md:mb-8 lg:mb-10">
                Whether you're a business, institution, or individual, Eurocoin lets you transact, 
                settle, and store value digitally without the volatility, delays, or risks of legacy 
                crypto infrastructure.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                {/* Primary Button */}
                <button className="group flex items-center justify-center gap-2 md:gap-3 px-5 md:px-8 py-3 md:py-4 rounded-full bg-white text-[#0a0e27] hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto">
                  <span className="font-medium text-xs sm:text-sm md:text-base">Request Early Access</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                {/* Secondary Button */}
                <button className="group flex items-center justify-center gap-2 md:gap-3 px-5 md:px-8 py-3 md:py-4 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
                  <span className="font-medium text-xs sm:text-sm md:text-base">Schedule a Demo</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>

            {/* Right Column - Euro Coin Image */}
            <div className="hidden lg:flex items-center justify-center px-8 lg:px-16">
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Glow effect behind coin */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-amber-500/20 to-orange-500/20 blur-3xl rounded-full scale-110" />
                
                {/* Gold Coin Image */}
                <img 
                  src={euroCoinGold} 
                  alt="Euro Coin" 
                  className="relative z-10 w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Digital Money Section */}
      <section className="relative w-full py-12 md:py-16 overflow-hidden" style={{ backgroundColor: '#000' }}>
        {/* Background Pattern */}
        <img 
          src={newBgPattern} 
          alt="Background Pattern" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-10 flex items-center justify-center">
          <img 
            src={forDigitalMoney} 
            alt="For Digital Money" 
            className="w-full max-w-3xl md:max-w-4xl h-auto px-6 md:px-8"
          />
        </div>
      </section>

      {/* With You Banner Section */}
      <section className="relative w-full py-12 md:py-16 overflow-hidden" style={{ backgroundColor: '#000' }}>
        {/* Background Pattern */}
        <img 
          src={newBgPattern} 
          alt="Background Pattern" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-10 flex items-center justify-center">
          <img 
            src={withYouBanner} 
            alt="With You Banner" 
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* How Eurocoin Works Section */}
      <section className="relative w-full py-12 md:py-16 overflow-hidden" style={{ backgroundColor: '#000' }}>
        {/* Background Pattern */}
        <img 
          src={newBgPattern} 
          alt="Background Pattern" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-10 flex items-center justify-center">
          <img 
            src={howEurocoinWorks} 
            alt="How Eurocoin Works" 
            className="w-full max-w-3xl md:max-w-4xl h-auto px-6 md:px-8"
          />
        </div>
      </section>

      {/* Why Eurocoin Section */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden" style={{ backgroundColor: '#000' }}>
        {/* Background Pattern */}
        <img 
          src={newBgPattern} 
          alt="Background Pattern" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Euro Coin Image */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Glow effect behind coin */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-amber-500/20 to-orange-500/20 blur-3xl rounded-full scale-110" />
                
                {/* Gold Coin Image */}
                <img 
                  src={euroCoinGold} 
                  alt="Euro Coin" 
                  className="relative z-10 w-full h-auto drop-shadow-2xl scale-75"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:pl-8 lg:pr-12">
              {/* Section Title */}
              <h2 className="text-4xl md:text-5xl text-white mb-12">
                Why Eurocoin?
              </h2>

              {/* Features Grid */}
              <div className="space-y-8">
                {/* Feature 1 */}
                <div>
                  <h3 className="text-2xl text-cyan-400 mb-3">
                    Stable & Secure
                  </h3>
                  <p className="text-white/70 text-lg">
                    Backed 1:1 by euro reserves held in regulated European banks, ensuring full transparency and trust.
                  </p>
                </div>

                {/* Feature 2 */}
                <div>
                  <h3 className="text-2xl text-cyan-400 mb-3">
                    Fast Transactions
                  </h3>
                  <p className="text-white/70 text-lg">
                    Instant settlement across borders with minimal fees—no delays, no intermediaries.
                  </p>
                </div>

                {/* Feature 3 */}
                <div>
                  <h3 className="text-2xl text-cyan-400 mb-3">
                    Fully Regulated
                  </h3>
                  <p className="text-white/70 text-lg">
                    Compliant with EU financial regulations, including MiCA and AML standards, for peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden">
        {/* Earth Horizon Background */}
        <img 
          src={earthHorizonBg} 
          alt="Earth Horizon Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-10 flex items-center justify-center">
          <img 
            src={getStartedContent} 
            alt="Get Started with Eurocoin" 
            className="w-full max-w-4xl h-auto px-6 md:px-8"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}