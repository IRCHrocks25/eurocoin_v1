import { Lightbulb, Target } from 'lucide-react';
import backgroundImage from 'figma:asset/ae97827e1ca44e54515fd94859b25a1916f2ecb4.png';
import cardsImage from 'figma:asset/f26e5bf123022cc757ac78bb03891c63f6cad9fa.png';
import buttonsImage from 'figma:asset/cc4e00d81aebdceade917850f331a9fa274b4b64.png';

export function BondPlaySection() {
  return (
    <section 
      className="relative py-24 md:py-40 pt-32 md:pt-48 bg-[#0a0e27] overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative w-full px-4 md:px-8">
        <div className="w-full mx-auto">
          
          <div className="flex flex-col items-center justify-center mb-12 md:mb-20" style={{ paddingTop: '200px' }}>
            {/* Badge */}
            <div className="inline-block px-4" style={{ marginBottom: '48px' }}>
              <span 
                className="px-6 md:px-8 py-3 rounded-full text-white text-xs md:text-sm tracking-wider uppercase text-center block"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                }}
              >
                The Investment Edge: Eurocoin's Business Model
              </span>
            </div>

            {/* Main Heading */}
            <h2 
              className="text-center text-3xl md:text-5xl lg:text-7xl relative text-white px-4"
              style={{ 
                fontWeight: '800', 
                letterSpacing: '-0.03em',
                marginBottom: '40px'
              }}
            >
              The Bond Play: Profitable, Sustainable, Proven
            </h2>

            {/* Subtitle */}
            <p 
              className="text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl px-4"
              style={{ fontWeight: '600', letterSpacing: '-0.01em', marginBottom: '36px', color: '#B8D5FF' }}
            >
              Proprietary DLT Built for Regulated Finance
            </p>

            {/* Description */}
            <p className="text-center text-white/90 max-w-4xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed px-4" style={{ marginTop: '-20px', marginBottom: '80px' }}>
              As a regulated financial institution, Eurocoin generates profit from the interest rates obtained from clients' cash deposits. 
              Since client funds are legally segregated, the interest rate income accrues to the company.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 md:gap-12 px-4" style={{ paddingBottom: '100px' }}>
            {/* Cards Image */}
            <div className="w-full max-w-6xl mx-auto">
              <img 
                src={cardsImage} 
                alt="What This Means and The Market Opportunity" 
                className="w-full h-auto"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center mt-8 w-full">
              <img 
                src={buttonsImage} 
                alt="Request Early Access and Schedule a Demo buttons" 
                className="h-auto w-full"
                style={{ maxWidth: '750px' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}