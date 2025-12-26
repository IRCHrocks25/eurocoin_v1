import { ArrowRight } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import techBgImage from 'figma:asset/72aa310f3a0bcc4fa423c10d9441fb6b2fceb5f8.png';
import featuresImage from 'figma:asset/4fe9da421f52b5c1bbd4daeb8d159f0e8dec6c2a.png';
import realWorldValueImage from 'figma:asset/c8be9202df5c6fb1946a19840303a0f779656948.png';
import valueBgImage from 'figma:asset/e44cd395a8433267406c70e9c53444b87d5e0382.png';
import redefinesBgImage from 'figma:asset/b0a81a351830e3db4b4436eb898788c3c8f2d9b2.png';
import euroCoinImage from 'figma:asset/46e8be2c158f5125d2b5686c19dff2f15871a897.png';

export function Technology() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32" style={{ backgroundColor: '#000' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-center" 
          style={{ 
            backgroundImage: `url(${techBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32 text-center">
          {/* Powered by text */}
          <div className="mb-8 md:mb-12">
            <span className="inline-block px-6 py-3 rounded-full border border-cyan-400/30 text-cyan-400 text-sm md:text-base">
              Powered by Billion Unites
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight" style={{ marginBottom: '2rem' }}>
            Technology Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Eurocoin</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto px-4" style={{ marginBottom: '5rem' }}>
            Purpose-built for the future of regulated digital finance, Eurocoin (EURDT) runs on Billon's Unified Enterprise DLT System, a next-generation distributed ledger that bridges compliance, speed, and scalability for Europe's digital economy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Primary Button */}
            <button className="group flex items-center justify-center gap-3 px-10 md:px-12 py-4 md:py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 w-full sm:w-auto text-base md:text-lg">
              <span className="font-medium">Request Early Access</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            {/* Secondary Button */}
            <button className="group flex items-center justify-center gap-3 px-10 md:px-12 py-4 md:py-5 rounded-full border-2 border-cyan-400/50 text-white hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto text-base md:text-lg">
              <span className="font-medium">Learn More</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#0a0e27', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
          <img 
            src={featuresImage} 
            alt="Technology Features" 
            className="w-full h-auto mx-auto"
            style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
          />
        </div>
      </section>

      {/* Real World Value Section */}
      <section className="relative overflow-hidden flex items-center justify-center" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-center" 
          style={{ 
            backgroundImage: `url(${valueBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
          <img 
            src={realWorldValueImage} 
            alt="Real World Value" 
            className="w-full h-auto mx-auto"
            style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
          />
        </div>
      </section>

      {/* Technology That Redefines Digital Money Section */}
      <section className="relative overflow-hidden flex items-center justify-center" style={{ paddingTop: '8rem', paddingBottom: '0.5rem' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-center" 
          style={{ 
            backgroundImage: `url(${redefinesBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Heading */}
          <h2 className="text-white text-center mb-8" style={{ fontSize: '3rem', lineHeight: '1.2' }}>
            Technology That Redefines Digital Money
          </h2>

          {/* Subtitle */}
          <p className="text-white/90 text-center mb-6 max-w-4xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
            Powered by Billon's enterprise-grade DLT, Eurocoin merges real-time liquidity, institutional compliance, and unmatched performance into one unified ecosystem.
          </p>

          {/* Body Paragraph */}
          <p className="text-white/70 text-center mb-16 max-w-4xl mx-auto" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
            Eurocoin's strength lies in its foundation: a regulated, enterprise-grade DLT designed for real-world financial systems, not crypto experiments. It's where liquidity meets compliance, and speed meets sustainability. Every layer of its architecture has one goal: to make digital money work seamlessly, securely, and responsibly at scale.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {/* Feature 1 */}
            <div>
              <h3 className="text-green-400 mb-2" style={{ fontSize: '1rem' }}>
                Instant, on-demand minting
              </h3>
              <p className="text-white/70" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                — tokens are created the moment euros move, unlocking real liquidity with zero delays.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <h3 className="text-green-400 mb-2" style={{ fontSize: '1rem' }}>
                Gas-free and energy-efficient
              </h3>
              <p className="text-white/70" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                — sustainable, costless transactions aligned with EU climate goals.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <h3 className="text-green-400 mb-2" style={{ fontSize: '1rem' }}>
                Enterprise-scale performance
              </h3>
              <p className="text-white/70" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                — audited throughput exceeding 500K TPS and settlement in seconds.
              </p>
            </div>

            {/* Feature 4 */}
            <div>
              <h3 className="text-green-400 mb-2" style={{ fontSize: '1rem' }}>
                Enterprise-ready foundation
              </h3>
              <p className="text-white/70" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                — powering digital cash, secure data, and tokenized real-world assets.
              </p>
            </div>

            {/* Feature 5 - Full Width */}
            <div className="md:col-span-2">
              <h3 className="text-green-400 mb-2" style={{ fontSize: '1rem' }}>
                Compliance-first architecture
              </h3>
              <p className="text-white/70" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                — built-in AML, KYC, and GDPR for security and regulatory trust.
              </p>
            </div>
          </div>

          {/* Euro Coin Image */}
          <div className="flex justify-center">
            <img 
              src={euroCoinImage} 
              alt="Euro Coin" 
              className="w-auto h-auto"
              style={{ maxWidth: '500px' }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}