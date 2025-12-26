import { ArrowRight, Menu, X } from 'lucide-react';
import logo from 'figma:asset/ba00e1228c75b9db4ef3b7e8988aea2b960cbbb4.png';
import { useState } from 'react';
import { Link } from 'react-router';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/90 backdrop-blur-xl">
      <div className="w-full px-4 md:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between md:justify-center md:gap-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="EURDT Stablecoin Logo" className="h-12 md:h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            <a href="#ebsi" className="text-white/80 hover:text-white transition-colors duration-200 relative group text-base xl:text-lg">
              EBSI
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <Link to="/technology" className="text-white/80 hover:text-white transition-colors duration-200 relative group text-base xl:text-lg">
              Technology
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <a href="#open-platform" className="text-white/80 hover:text-white transition-colors duration-200 relative group text-base xl:text-lg">
              Open Platform
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#why-us" className="text-white/80 hover:text-white transition-colors duration-200 relative group text-base xl:text-lg">
              Why Us
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <Link to="/about-us" className="text-white/80 hover:text-white transition-colors duration-200 relative group text-base xl:text-lg">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Contact Button */}
            <button className="flex items-center gap-2 sm:gap-3 px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 text-white hover:from-cyan-400 hover:via-blue-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40 hover:scale-105 group text-xs sm:text-base md:text-lg font-medium border border-cyan-400/20">
              <span className="hidden sm:inline">Contact Us</span>
              <span className="sm:hidden">Contact</span>
              <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-4">
              <a 
                href="#ebsi" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200 py-2"
              >
                EBSI
              </a>
              <Link 
                to="/technology"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200 py-2"
              >
                Technology
              </Link>
              <a 
                href="#open-platform"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200 py-2"
              >
                Open Platform
              </a>
              <a 
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200 py-2"
              >
                Why Us
              </a>
              <Link 
                to="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200 py-2"
              >
                About Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}