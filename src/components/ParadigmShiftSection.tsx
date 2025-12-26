import bgImage from 'figma:asset/366dd05f4863e51d3a2ce9dcd904276fd7c603c1.png';

export function ParadigmShiftSection() {
  const problems = [
    {
      title: 'Compliance',
      description: 'bolted on as an afterthought',
    },
    {
      title: 'Pre-minting',
      description: 'creates liquidity friction and distribution delays',
    },
    {
      title: 'Custodial Risks',
      description: 'accumulate on exchanges',
    },
    {
      title: 'Debt-driven Models',
      description: 'rely on complex market maker networks',
    },
    {
      title: 'Settlement',
      description: 'takes 3-15 minutes (or longer)',
    },
    {
      title: 'High Transaction Fees',
      description: 'kill microtransaction use cases',
    },
  ];

  return (
    <section className="relative pt-16 md:pt-32 pb-24 md:pb-48 mt-24 md:mt-48 bg-[#0a0e27] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={bgImage}
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dotted Pattern Overlay */}
      <div className="absolute bottom-0 left-0 w-64 h-32 opacity-30">
        <div className="grid grid-cols-12 gap-1">
          {Array.from({ length: 96 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-blue-500"
              style={{ opacity: Math.random() * 0.5 + 0.2 }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative w-full flex flex-col items-center px-4 md:px-6">
        {/* Spacer to push title down */}
        <div className="h-8 md:h-32"></div>
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 mt-8 md:mt-32">
          <div className="inline-block mb-4">
            <span className="px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-transparent border border-white/20 text-white text-sm md:text-base">
              The Problem with Legacy Stablecoins
            </span>
          </div>
          <h2 className="text-white mb-4 md:mb-6 px-4">
            The Paradigm Shift
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto px-4">
            The current stablecoin infrastructure is fundamentally broken
          </p>
        </div>

        {/* Problems Grid */}
        <div className="h-8 md:h-16"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16 w-full max-w-6xl">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative w-full"
            >
              {/* Card */}
              <div className="relative h-full p-6 md:p-8 rounded-xl md:rounded-2xl bg-black/40 border border-white/10 hover:border-red-500/30 transition-all duration-300 backdrop-blur-sm">
                {/* Red Icon Grid */}
                <div className="mb-4 md:mb-6">
                  <div className="grid grid-cols-2 gap-1 w-7">
                    <div className="w-3 h-3 rounded-[3px] bg-red-500"></div>
                    <div className="w-3 h-3 rounded-[3px] bg-red-500"></div>
                    <div className="w-3 h-3 rounded-[3px] bg-red-500"></div>
                    <div className="w-3 h-3 rounded-[3px] bg-red-500"></div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-white mb-2 md:mb-3">
                  {problem.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message and CTAs */}
        <div className="h-8 md:h-12"></div>
        <div className="text-center px-4">
          <p className="text-white/90 text-base md:text-lg mb-1 md:mb-2">
            The market doesn't need another iteration.
          </p>
          <p className="text-white text-lg md:text-xl font-medium">
            It needs a complete rebuild.
          </p>
        </div>

        {/* Spacer between text and buttons */}
        <div className="h-10 md:h-16"></div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 w-full px-4 max-w-4xl mx-auto">
          {/* Primary CTA - Clean Modern White Button */}
          <button className="group relative px-10 py-4 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto min-w-[240px] flex items-center justify-center gap-3 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-100"></div>
            
            {/* Shimmer on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-60 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
            
            <span className="relative z-10 text-gray-900 font-medium text-lg">
              Request Early Access
            </span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
          
          {/* Secondary CTA - Modern Outline Button */}
          <button className="group relative px-10 py-4 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto min-w-[240px] flex items-center justify-center gap-3">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 p-[2px]">
              <div className="absolute inset-[2px] rounded-2xl bg-[#0a0e27] group-hover:bg-gradient-to-br group-hover:from-blue-950/50 group-hover:to-purple-950/50 transition-all duration-300"></div>
            </div>
            
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500"></div>
            
            {/* Shimmer on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
            
            <span className="relative z-10 text-white font-medium text-lg">
              Schedule a Demo
            </span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>

        {/* Bottom Spacer */}
        <div className="h-16 md:h-32"></div>
      </div>
    </section>
  );
}