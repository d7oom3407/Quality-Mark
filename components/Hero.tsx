
import React from 'react';
import { ArrowLeft, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] scale-105"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
          علامة الجودة <br />
          <span className="gold-text italic">لخدمات الأعمال</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-2xl mb-14 leading-relaxed font-medium drop-shadow-xl">
          شريككم الاستراتيجي لتأسيس ونمو الشركات بخبرة عالمية ومعايير محلية دقيقة.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => scrollToId('contact')}
            className="group w-full sm:w-auto px-16 py-6 rounded-2xl gold-gradient text-black font-black text-xl hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transform hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-3 focus:outline-none"
          >
            <span>ابدأ مشروعك الآن</span>
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => scrollToId('about')}
            className="w-full sm:w-auto px-16 py-6 rounded-2xl bg-white/5 backdrop-blur-xl text-white font-black text-xl hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-3 border border-white/20 shadow-2xl focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-[#d4af37] flex items-center justify-center shadow-lg">
              <Play className="w-5 h-5 fill-black text-black ml-1" />
            </div>
            <span>تعرف علينا</span>
          </button>
        </div>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#d4af37]/10 rounded-full blur-[180px] animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#d4af37]/10 rounded-full blur-[180px]"></div>
      </div>
    </div>
  );
};

export default Hero;
