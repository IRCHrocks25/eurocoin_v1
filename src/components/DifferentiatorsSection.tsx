import card01 from 'figma:asset/7db9f998b2a365ce1124c3a9c93121e562902636.png';
import card02 from 'figma:asset/f576571f29c0a82c93a4cc2535eb2ddafb1a7b74.png';
import card03 from 'figma:asset/6c3ee306199c1d73dae8ff43f092689a201937d4.png';

export function DifferentiatorsSection() {
  return (
    <section className="relative py-24 md:py-40 pt-32 md:pt-48 bg-[#0a0e27] overflow-hidden">
      <div className="hidden md:block absolute left-12 top-32 w-20 h-20 opacity-20">
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={`dl1-${i}`} className="w-1 h-1 rounded-full bg-blue-400"></div>
          ))}
        </div>
      </div>

      <div className="hidden md:block absolute right-12 top-1/3 w-32 h-32 opacity-20">
        <div className="grid grid-cols-8 gap-1.5">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={`dr1-${i}`} className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
          ))}
        </div>
      </div>

      <div className="hidden md:block absolute left-12 bottom-40 w-32 h-32 opacity-20">
        <div className="grid grid-cols-8 gap-1.5">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={`dl2-${i}`} className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
          ))}
        </div>
      </div>

      <div className="relative w-full px-4 md:px-8">
        <div className="w-full mx-auto">
          
          <div className="flex flex-col items-center justify-center mb-12 md:mb-20">
            <h2 
              className="text-center text-3xl md:text-5xl lg:text-7xl relative text-white px-4"
              style={{ 
                paddingTop: '120px', 
                fontWeight: '800', 
                letterSpacing: '-0.03em'
              }}
            >
              Eurocoin Differentiators
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 md:gap-12">
            <div className="w-full max-w-4xl mx-auto flex justify-center px-4">
              <img src={card01} alt="Mint-on-the-Fly" className="w-full h-auto max-w-[900px]" />
            </div>

            <div className="w-full max-w-4xl mx-auto flex justify-center px-4">
              <img src={card02} alt="True Fiat-Based Stability" className="w-full h-auto max-w-[900px]" />
            </div>

            <div className="w-full max-w-4xl mx-auto flex justify-center px-4">
              <img src={card03} alt="Real-Time Settlement" className="w-full h-auto max-w-[900px]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}