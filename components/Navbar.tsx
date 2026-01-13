
import React, { useState } from 'react';
import { Menu, X, Search, Globe } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'مميزاتنا', href: '#features' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md py-3 shadow-2xl border-b border-white/5' 
          : 'bg-black/40 backdrop-blur-sm py-5 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - On the right in RTL */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="h-12 flex items-center justify-center">
              <img 
                src="https://qualitymarksa.com/wp-content/uploads/2025/04/cropped-VER-Copy-1.png" 
                alt="Quality Mark Logo" 
                className="h-10 w-auto object-contain drop-shadow-lg" 
              />
            </div>
            <div className="flex flex-col border-r border-white/20 pr-3 mr-3 hidden lg:flex">
              <span className="text-lg font-bold tracking-tight gold-text leading-tight">Quality Mark</span>
              <span className="text-[9px] text-gray-300 uppercase tracking-widest font-medium">Business Services</span>
            </div>
          </div>

          {/* Desktop Nav - Centered/Left */}
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            <div className="flex items-center space-x-reverse space-x-6 ml-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-gray-100 hover:text-[#d4af37] transition-all duration-200 hover:scale-105 drop-shadow-md"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="h-6 w-[1px] bg-white/20"></div>
            
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-200 hover:text-[#d4af37] transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 font-bold text-xs">
                <Globe className="w-4 h-4" />
                <span>EN</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-[#d4af37] focus:outline-none"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-xl border-b border-white/10 animate-fade-in">
          <div className="px-6 pt-4 pb-10 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-4 text-xl font-bold text-gray-100 border-b border-white/5 active:text-[#d4af37]"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 pt-6">
               <button className="flex items-center justify-center gap-2 w-full py-4 rounded-xl gold-gradient text-black font-black">
                 <Globe className="w-5 h-5" />
                 <span>English Version</span>
               </button>
               <div className="flex items-center justify-center gap-2 text-gray-400 py-2">
                 <Search className="w-5 h-5" />
                 <span className="text-sm font-medium">بحث في الخدمات</span>
               </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
