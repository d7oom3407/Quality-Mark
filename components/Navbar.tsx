
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'الرئيسية', id: 'home' },
    { name: 'من نحن', id: 'about' },
    { name: 'خدماتنا', id: 'services' },
    { name: 'مميزاتنا', id: 'features' },
    { name: 'اتصل بنا', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md py-3 shadow-2xl border-b border-[#d4af37]/20' 
          : 'bg-black/40 backdrop-blur-sm py-5 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <button 
              onClick={(e) => scrollToSection(e, 'home')}
              className="h-12 flex items-center justify-center focus:outline-none"
            >
              <img 
                src="https://qualitymarksa.com/wp-content/uploads/2025/04/cropped-VER-Copy-1.png" 
                alt="Quality Mark Logo" 
                className="h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]" 
              />
            </button>
            <div className="flex flex-col border-r border-white/20 pr-3 mr-3 hidden lg:flex">
              <span className="text-lg font-black tracking-tight gold-text leading-tight">Quality Mark</span>
              <span className="text-[9px] text-gray-400 uppercase tracking-[0.2em] font-bold">Business Services</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            <div className="flex items-center space-x-reverse space-x-6 ml-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="text-sm font-bold text-gray-200 hover:text-[#d4af37] transition-all duration-300 relative group focus:outline-none"
                >
                  {link.name}
                  <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-100 hover:text-[#d4af37] focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 backdrop-blur-2xl border-b border-[#d4af37]/20 animate-fade-in shadow-2xl">
          <div className="px-6 pt-6 pb-12 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => scrollToSection(e, link.id)}
                className="block w-full text-right py-4 text-xl font-black text-gray-200 border-b border-white/5 active:text-[#d4af37] transition-colors focus:outline-none"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
