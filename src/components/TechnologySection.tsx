import backgroundImage from 'figma:asset/20e940b5d2a885e118ecc725eae3721fc2d7f9d1.png';
import billonLogo from 'figma:asset/ef61adfdcb46e0627c3c3941e608bc0b0c52921a.png';

export function TechnologySection() {
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
            {/* The Technology Badge */}
            <div className="inline-block px-4" style={{ marginBottom: '48px' }}>
              <span 
                className="px-6 md:px-8 py-3 rounded-full text-white text-xs md:text-sm tracking-wider uppercase"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                }}
              >
                The Technology
              </span>
            </div>

            {/* Billon Unified Blockchain Title */}
            <h2 
              className="text-center text-3xl md:text-5xl lg:text-7xl relative text-white px-4"
              style={{ 
                fontWeight: '800', 
                letterSpacing: '-0.03em',
                marginBottom: '40px'
              }}
            >
              <span className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
                <span>Billon</span>
                <img src={billonLogo} alt="Billon" className="h-10 md:h-14 lg:h-16 inline-block" />
                <span>Unified Blockchain</span>
              </span>
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
              Eurocoin is powered by Billon Group's Unified Blockchain, a proprietary Distributed Ledger Technology 
              platform engineered specifically for enterprise-scale deployment and regulatory compliance.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 md:gap-12 px-4" style={{ paddingBottom: '100px' }}>
            {/* Scalable Architecture */}
            <div className="w-full max-w-4xl mx-auto flex justify-center">
              <div 
                className="p-6 md:p-8 lg:p-10 rounded-2xl w-full max-w-[900px]"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 
                  className="text-xl md:text-2xl lg:text-3xl text-white mb-6"
                  style={{ fontWeight: '700', letterSpacing: '-0.01em', display: 'inline-block', paddingBottom: '16px', borderBottom: '1px solid rgba(184, 213, 255, 0.3)' }}
                >
                  Scalable Architecture
                </h3>
                <ul className="space-y-4 text-white/90 text-sm md:text-base lg:text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5 flex-shrink-0">●</span>
                    <span>Simplified peer-to-peer verification for maximum throughput</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5 flex-shrink-0">●</span>
                    <span>User throughput rates increase with every new user (opposite of traditional blockchains)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5 flex-shrink-0">●</span>
                    <span>530,000 TPS certified capacity</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Compliance-First Design */}
            <div className="w-full max-w-4xl mx-auto flex justify-center">
              <div 
                className="p-6 md:p-8 lg:p-10 rounded-2xl w-full max-w-[900px]"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 
                  className="text-xl md:text-2xl lg:text-3xl text-white mb-6"
                  style={{ fontWeight: '700', letterSpacing: '-0.01em', display: 'inline-block', paddingBottom: '16px', borderBottom: '1px solid rgba(184, 213, 255, 0.3)' }}
                >
                  Compliance-First Design
                </h3>
                <ul className="space-y-4 text-white/90 text-sm md:text-base lg:text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5 flex-shrink-0">●</span>
                    <span>Re-engineered to be low-cost, high-performance, AND regulatory compliant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5 flex-shrink-0">●</span>
                    <span>AML, KYC, GDPR compliance built into the protocol (not added on top)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5 flex-shrink-0">●</span>
                    <span>Improves system performance without requiring workarounds</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Energy Efficiency Leadership */}
            <div className="w-full max-w-4xl mx-auto flex justify-center">
              <div 
                className="p-6 md:p-8 lg:p-10 rounded-2xl w-full max-w-[900px]"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 
                  className="text-xl md:text-2xl lg:text-3xl text-white mb-6"
                  style={{ fontWeight: '700', letterSpacing: '-0.01em', display: 'inline-block', paddingBottom: '16px', borderBottom: '1px solid rgba(184, 213, 255, 0.3)' }}
                >
                  Energy Efficiency Leadership
                </h3>
                <ul className="space-y-4 text-white/90 text-sm md:text-base lg:text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5 flex-shrink-0">●</span>
                    <span>Proof-of-stake design with no mining required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5 flex-shrink-0">●</span>
                    <span>0.32 mWh/transaction negligible energy consumption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5 flex-shrink-0">●</span>
                    <span>Holds world record for blockchain energy efficiency</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Financial System Integration */}
            <div className="w-full max-w-4xl mx-auto flex justify-center">
              <div 
                className="p-6 md:p-8 lg:p-10 rounded-2xl w-full max-w-[900px]"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 
                  className="text-xl md:text-2xl lg:text-3xl text-white mb-6"
                  style={{ fontWeight: '700', letterSpacing: '-0.01em', display: 'inline-block', paddingBottom: '16px', borderBottom: '1px solid rgba(184, 213, 255, 0.3)' }}
                >
                  Financial System Integration
                </h3>
                <ul className="space-y-4 text-white/90 text-sm md:text-base lg:text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5 flex-shrink-0">●</span>
                    <span>Direct SEPA and SWIFT connectivity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5 flex-shrink-0">●</span>
                    <span>E-money license enabling instant minting capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5 flex-shrink-0">●</span>
                    <span>Bank integrations for real-time fund confirmations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}