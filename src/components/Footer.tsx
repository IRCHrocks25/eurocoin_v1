import { Instagram, Youtube, Phone, Send, MessageCircle } from 'lucide-react';
import svgPaths from '../imports/svg-ciz2gpotlv';
import imgVividBlurredColorfulWallpaperBackground11 from 'figma:asset/ce7caeef00ed2a6b2a2fd35a7e4e0a68ac6644f0.png';
import footerBg from 'figma:asset/9d80727f80b332b8c897bc38f0fd946d60999d41.png';

function LogoIcon() {
  return (
    <div className="relative w-[120px] h-[120px]">
      {/* Radial circle design */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" fill="none" viewBox="0 0 120 120">
          {/* Radial lines around circle */}
          <g opacity="0.8">
            {Array.from({ length: 34 }).map((_, i) => {
              const angle = (i * 360) / 34;
              const rad = (angle * Math.PI) / 180;
              const innerRadius = 35;
              const outerRadius = 50;
              const x1 = 60 + innerRadius * Math.cos(rad);
              const y1 = 60 + innerRadius * Math.sin(rad);
              const x2 = 60 + outerRadius * Math.cos(rad);
              const y2 = 60 + outerRadius * Math.sin(rad);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="white"
                  strokeWidth="1.5"
                />
              );
            })}
          </g>
          {/* Blurred background */}
          <defs>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            </filter>
          </defs>
          <image
            href={imgVividBlurredColorfulWallpaperBackground11}
            x="20"
            y="20"
            width="80"
            height="80"
            filter="url(#blur)"
            opacity="0.6"
          />
          {/* Euro symbol */}
          <text
            x="60"
            y="75"
            textAnchor="middle"
            fill="#0698ED"
            fontSize="48"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
          >
            €
          </text>
        </svg>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative py-32 font-['Manrope',sans-serif]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${footerBg})` }}
      />
      {/* Content */}
      <div className="relative w-full px-4 md:px-8 z-10 py-20 md:py-32">
        <div className="w-full mx-auto">
          <div className="relative flex flex-col items-center justify-center">
            <div className="w-full max-w-6xl px-4">
          
          {/* Top section */}
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-16 pb-16 mb-12 border-b border-white/10">
            
            {/* Left: Logo and Address */}
            <div className="space-y-8">
              {/* Logo */}
              <div className="flex items-center gap-4">
                <LogoIcon />
                <div className="flex flex-col">
                  <h3 className="text-white text-2xl">EURDT</h3>
                  <p className="text-[#b8d5ff] text-xl">Stablecoins</p>
                  <p className="text-[#b8d5ff] text-xs mt-2">Powered by Billon Group</p>
                </div>
              </div>
              
              {/* Address */}
              <div className="space-y-2 text-[#b9b9b9] text-sm">
                <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                <p>+1 891 989-11-91</p>
                <p>info@eurocoin.com</p>
              </div>
            </div>

            {/* Right: Three columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 self-end font-['Poppins',sans-serif]" style={{ wordSpacing: '0.5em' }}>
              
              {/* Column 1: Regulated & Compliant */}
              <div>
                <h4 className="text-[#b9b9b9] text-[10px] uppercase tracking-wider mb-4">
                  Regulated & Compliant
                </h4>
                <ul className="space-y-2 text-[#b9b9b9] text-sm">
                  <li>MiCA-Compliant</li>
                  <li>EMI Licensed (KNF)</li>
                  <li>Fully Regulated Electronic Money Institution</li>
                </ul>
              </div>

              {/* Column 2: Technology */}
              <div>
                <h4 className="text-[#b9b9b9] text-[10px] uppercase tracking-wider mb-4">
                  Technology
                </h4>
                <ul className="space-y-2 text-[#b9b9b9] text-sm">
                  <li>Powered by Billon Group</li>
                  <li>Billon Unified Blockchain</li>
                  <li>530,000 TPS Certified</li>
                </ul>
              </div>

              {/* Column 3: Investor Relations */}
              <div>
                <h4 className="text-[#b9b9b9] text-[10px] uppercase tracking-wider mb-4">
                  Investor Relations
                </h4>
                <ul className="space-y-2 text-[#b9b9b9] text-sm">
                  <li>Whitepaper Download</li>
                  <li>Investment Deck</li>
                  <li>Schedule Investor Demo</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Middle section: Social and Chat */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 mb-8">
            
            {/* Follow us */}
            <div className="flex items-center gap-6">
              <span className="text-[#b9b9b9] text-sm">Follow us</span>
              <div className="flex gap-3">
                <a href="#" className="w-12 h-12 rounded-full border border-[#B8D5FF]/25 flex items-center justify-center hover:bg-white/5 transition-colors">
                  <Instagram className="w-5 h-5 text-[#B8D5FF]" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-[#B8D5FF]/25 flex items-center justify-center hover:bg-white/5 transition-colors">
                  <Youtube className="w-5 h-5 text-[#B8D5FF]" />
                </a>
              </div>
            </div>

            {/* Let's chat */}
            <div className="flex items-center gap-6">
              <span className="text-[#b9b9b9] text-sm">Let's chat</span>
              <div className="flex gap-3">
                <a href="#" className="w-12 h-12 rounded-full border border-[#B8D5FF]/25 flex items-center justify-center hover:bg-white/5 transition-colors">
                  <Phone className="w-5 h-5 text-[#B8D5FF]" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-[#B8D5FF]/25 flex items-center justify-center hover:bg-white/5 transition-colors">
                  <Send className="w-5 h-5 text-[#B8D5FF]" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-[#B8D5FF]/25 flex items-center justify-center hover:bg-white/5 transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#B8D5FF]" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
            <p className="text-[#b9b9b9] text-sm">
              Copyright © 2025 EURDT. All rights reserved.
            </p>
            <div className="flex gap-8 text-[#b9b9b9] text-sm">
              <a href="#" className="hover:text-white transition-colors">Press Kit</a>
              <a href="#" className="hover:text-white transition-colors">Legal Disclaimers</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
            <p className="text-[#b9b9b9] text-sm">
              Design and Developed by <span className="text-white">KATALYST CRM</span>
            </p>
          </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}