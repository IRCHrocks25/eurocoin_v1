import coinImage from 'figma:asset/dd701236ae1ca3a47a4e983f5397111c796a3214.png';
import cardsImage from 'figma:asset/fcec7e2214312b0f091ef87e2fb9413e1b42e423.png';
import backgroundImage from 'figma:asset/ae97827e1ca44e54515fd94859b25a1916f2ecb4.png';

export function WhoEurocoinIsBuiltForSection() {
  return (
    <section 
      className="relative py-24 md:py-40 bg-[#0a0e27] overflow-hidden" 
      style={{ 
        paddingTop: '120px',
        paddingBottom: '200px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
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
                Use Cases & Applications
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
              Who Eurocoin Is Built For
            </h2>
          </div>

          <div className="relative flex flex-col items-center justify-center gap-8 md:gap-12" style={{ paddingBottom: '100px', marginTop: '80px' }}>
            
            {/* Cards Image */}
            <div className="w-full max-w-6xl px-4">
              <img 
                src={cardsImage} 
                alt="Who Eurocoin Is Built For" 
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Coin Image Overlay */}
            <div 
              className="absolute hidden lg:block"
              style={{
                bottom: '-180px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '400px',
                height: '400px',
                zIndex: 10
              }}
            >
              <img 
                src={coinImage} 
                alt="Eurocoin" 
                className="w-full h-full object-contain"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))'
                }}
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}