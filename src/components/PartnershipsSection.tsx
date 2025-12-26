import logo1 from 'figma:asset/79e53e43f54955baa10a6160005e96098961fed9.png';
import logo2 from 'figma:asset/5cccc936053070237625c05852495dfe3beb848b.png';
import logo3 from 'figma:asset/7f315a52bb09ed5f877f1a0a77b82c76057ed929.png';
import logo4 from 'figma:asset/eed24f9db749ab49164a4588f07e92a88624f3c1.png';
import logo5 from 'figma:asset/466525b1ecc7324ec3ac30777c45e7aa8bf67fea.png';
import logo6 from 'figma:asset/143bca35117a640a6323db2a894ce91290ae4bcc.png';

export function PartnershipsSection() {
  const partners = [
    { name: 'Partner 1', logo: logo1 },
    { name: 'Partner 2', logo: logo2 },
    { name: 'Partner 3', logo: logo3 },
    { name: 'Partner 4', logo: logo4 },
    { name: 'Partner 5', logo: logo5 },
    { name: 'Partner 6', logo: logo6 },
  ];

  return (
    <section className="relative py-12 md:py-20 pb-32 md:pb-64 bg-[#0a0e27] border-none">
      <div className="w-full flex flex-col items-center -mt-20 md:-mt-40">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-cyan-400 tracking-wider uppercase text-sm md:text-base font-medium">
            PARTNERSHIPS
          </span>
        </div>

        {/* Partner Logos Grid */}
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
              >
                {partner.logo ? (
                  <div className="w-24 md:w-32 h-10 md:h-12 flex items-center justify-center">
                    <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" />
                  </div>
                ) : (
                  <div className="w-24 md:w-32 h-10 md:h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                    <span className="text-white/70 text-xs md:text-sm font-medium px-3 md:px-4 text-center">
                      {partner.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}