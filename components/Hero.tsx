
import React from 'react';
import { ArrowLeft, Play, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] scale-105"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=2048&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] mb-8 animate-bounce">
          <Star className="w-4 h-4 fill-[#d4af37]" />
          <span className="text-sm font-bold">الشريك الذكي لكل مستثمر ورائد أعمال</span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight text-white drop-shadow-2xl">
          شركة علامة الجودة <br />
          <span className="gold-text">لخدمات الأعمال</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-gray-100 text-lg md:text-xl mb-10 leading-relaxed font-medium drop-shadow-lg">
          نحن نقدم حلولاً متكاملة لتأسيس وتطوير الأعمال في المملكة العربية السعودية، بخبرة تضمن لك النجاح والاستدامة في سوق العمل.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="w-full sm:w-auto px-10 py-5 rounded-xl gold-gradient text-black font-extrabold text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
            <span>ابدأ مشروعك الآن</span>
            <ArrowLeft className="w-5 h-5" />
          </a>
          
          <a href="#about" className="w-full sm:w-auto px-10 py-5 rounded-xl glass-card text-white font-bold text-lg hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 border border-white/30 shadow-xl">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Play className="w-4 h-4 fill-white" />
            </div>
            <span>تعرف علينا</span>
          </a>
        </div>

        {/* Trust Badges - Recreated exactly from the original site screenshot */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-4">
          {/* Capterra Badge */}
          <div className="flex items-center gap-3 bg-[#002f3c] px-4 py-2 rounded-lg border border-white/10 shadow-lg">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1 mb-1">
                <img src="https://www.capterra.com/favicon.ico" alt="Capterra" className="w-4 h-4" />
                <span className="text-white font-bold text-sm">Capterra</span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-[#ff7a00] text-[#ff7a00]" />)}
              </div>
            </div>
            <span className="text-[#4db8e5] text-xl font-black ml-2">4.8</span>
          </div>

          {/* Trustpilot Badge */}
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-lg">
             <div className="flex flex-col items-start">
                <div className="flex items-center gap-1 mb-1">
                  <div className="text-[#00b67a] font-black text-xs">★</div>
                  <span className="text-[#191919] font-bold text-sm">Trustpilot</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(4)].map((_, i) => <div key={i} className="w-3 h-3 bg-[#00b67a] flex items-center justify-center text-[6px] text-white">★</div>)}
                  <div className="w-3 h-3 bg-gray-200 flex items-center justify-center text-[6px] text-white">★</div>
                </div>
             </div>
             <span className="text-[#00b67a] text-xl font-black ml-2">4.8</span>
          </div>

          {/* Google Badge */}
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-lg">
             <div className="flex flex-col items-start">
                <div className="flex items-center gap-1 mb-1">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" alt="Google" className="w-3 h-3" />
                  <span className="text-gray-500 font-medium text-[10px]">Google Rating</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-[#fbbc05] text-[#fbbc05]" />)}
                </div>
             </div>
             <span className="text-[#fbbc05] text-xl font-black ml-2">4.8</span>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Blurs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#d4af37]/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[150px] pointer-events-none"></div>
    </div>
  );
};

export default Hero;
