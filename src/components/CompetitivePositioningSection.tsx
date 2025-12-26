import tableImage from 'figma:asset/bb2ee58186325967d3d4e5d70f35aeba8849e049.png';
import backgroundImage from 'figma:asset/1811b8019faa629da1183a2352c9521ecf62532a.png';

export function CompetitivePositioningSection() {
  return (
    <section 
      className="relative py-24 md:py-40 bg-[#0a0e27] overflow-hidden" 
      style={{ 
        paddingTop: '120px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Decorative gradient dots on the left */}
      <div 
        className="absolute left-0 bottom-0 w-64 h-64 opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(78, 205, 196, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

      <div className="relative w-full px-4 md:px-8">
        <div className="w-full mx-auto">
          
          <div className="flex flex-col items-center justify-center mb-4 md:mb-8" style={{ marginTop: '120px' }}>
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
                How Eurocoin Stacks Up
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
              Competitive Positioning
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 md:gap-12 px-4" style={{ paddingBottom: '100px' }}>
            {/* Comparison Table Image */}
            <div className="flex items-center justify-center w-full">
              <img 
                src={tableImage} 
                alt="Competitive positioning comparison table" 
                className="h-auto w-full"
                style={{ maxWidth: '1100px', marginTop: '80px' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}