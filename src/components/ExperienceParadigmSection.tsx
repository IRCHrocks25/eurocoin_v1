import backgroundImage from 'figma:asset/91a3e0ebffcb5425d7df357211afe01571ecf353.png';
import coinImage from 'figma:asset/74f80e2b27170a1ecf5b59a7c9a3d68a99635253.png';

export function ExperienceParadigmSection() {
  return (
    <section 
      className="relative overflow-hidden" 
      style={{ 
        paddingTop: '120px',
        paddingBottom: '120px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0a0e27'
      }}
    >
      <div className="relative w-full px-4 md:px-8">
        <div className="w-full mx-auto">
          
          <div className="relative flex flex-col items-center justify-center">
            <div className="w-full max-w-6xl px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Content */}
                <div className="flex flex-col justify-center">
                  {/* Main Heading */}
                  <h2 
                    className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl"
                    style={{ 
                      fontWeight: '700',
                      lineHeight: '1.1',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Experience the new Paradigm
                  </h2>

                  {/* First Paragraph */}
                  <p 
                    className="text-white mb-4 text-base md:text-lg"
                    style={{ 
                      fontWeight: '600',
                      lineHeight: '1.6',
                      opacity: '0.95'
                    }}
                  >
                    Ready to invest in the euro stablecoin built for tomorrow?
                  </p>

                  {/* Second Paragraph */}
                  <p 
                    className="text-white mb-4 text-sm md:text-base"
                    style={{ 
                      fontWeight: '400',
                      lineHeight: '1.6',
                      opacity: '0.85'
                    }}
                  >
                    Eurocoin is raising capital to capture the European stablecoin market. This is your opportunity to invest in the infrastructure layer of Finance 2.0.
                  </p>

                  {/* Third Paragraph */}
                  <p 
                    className="text-white mb-8 text-sm md:text-base"
                    style={{ 
                      fontWeight: '400',
                      lineHeight: '1.6',
                      opacity: '0.85'
                    }}
                  >
                    The paradigm shift is here. The architecture is built. The market is ready.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 items-start" style={{ marginTop: '32px' }}>
                    {/* Request Early Access Button */}
                    <button
                      className="w-full sm:w-auto px-8 py-4 rounded-full text-black transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
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
                      <span style={{ fontSize: '20px' }}>→</span>
                    </button>

                    {/* Schedule a Demo Button */}
                    <button
                      className="w-full sm:w-auto px-8 py-4 rounded-full text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                      style={{
                        background: 'transparent',
                        fontWeight: '600',
                        fontSize: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        cursor: 'pointer'
                      }}
                    >
                      Schedule a Demo
                      <span style={{ fontSize: '20px' }}>→</span>
                    </button>
                  </div>
                </div>

                {/* Right Content - Coin Image */}
                <div className="flex items-center justify-center lg:justify-end">
                  <img 
                    src={coinImage} 
                    alt="Eurocoin - Gold Euro Coin" 
                    className="w-full max-w-sm md:max-w-md h-auto object-contain"
                    style={{
                      filter: 'drop-shadow(0 20px 60px rgba(255, 215, 0, 0.3))'
                    }}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}