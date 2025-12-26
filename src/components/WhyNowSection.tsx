import coinBackgroundImage from 'figma:asset/37c3a5f593284aef10a6c5c685fb86e5c5816e39.png';
import cardsImage from 'figma:asset/6f906559282818a5e3a520ba5308f83c1326f0d7.png';

export function WhyNowSection() {
  return (
    <section 
      className="relative pb-24 md:pb-40 bg-[#0a0e27] overflow-hidden" 
      style={{ 
        paddingTop: '80px',
        paddingBottom: '200px',
        backgroundImage: `url(${coinBackgroundImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Decorative gradient dots */}
      <div 
        className="absolute left-0 bottom-0 w-64 h-64 opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(78, 205, 196, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

      <div className="relative w-full px-4 md:px-8">
        <div className="w-full mx-auto">
          
          <div className="flex flex-col items-center justify-center mb-4 md:mb-8" style={{ marginTop: '60px' }}>
            {/* Badge */}
            <div className="inline-block px-4" style={{ marginBottom: '48px' }}>
              <span 
                className="px-6 py-2 rounded-full text-white text-xs md:text-sm tracking-wide"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                Regulated Velocity
              </span>
            </div>

            {/* Main Heading */}
            <h2 
              className="text-center text-3xl md:text-5xl lg:text-6xl text-white px-4"
              style={{ 
                fontWeight: '800',
                letterSpacing: '-0.02em',
                marginBottom: '0px',
                marginTop: '-20px'
              }}
            >
              Why Now? The Convergence Moment
            </h2>

            {/* Subheading */}
            <p 
              className="text-center text-white text-base md:text-xl mt-6 px-4"
              style={{ 
                opacity: '0.8',
                fontWeight: '400'
              }}
            >
              Three critical factors make this Eurocoin's moment:
            </p>
          </div>

          <div className="relative flex flex-col items-center justify-center gap-8 md:gap-12" style={{ paddingBottom: '100px', marginTop: '80px' }}>
            
            {/* Cards Image */}
            <div className="w-full max-w-6xl px-4">
              <img 
                src={cardsImage} 
                alt="Why Now - The Convergence Moment" 
                className="w-full h-auto object-contain"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8 px-4">
              {/* Request Early Access Button */}
              <button
                className="w-full sm:w-auto px-8 py-4 rounded-full text-black transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #E0E0E0 100%)',
                  fontWeight: '600',
                  fontSize: '16px',
                  boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3)',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Request Early Access
              </button>

              {/* Schedule a Demo Button */}
              <button
                className="w-full sm:w-auto px-8 py-4 rounded-full text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: 'transparent',
                  fontWeight: '600',
                  fontSize: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer'
                }}
              >
                Schedule a Demo →
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}