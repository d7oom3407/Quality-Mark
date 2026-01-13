
import React from 'react';
import { Zap, ShieldCheck, RefreshCw, Layers } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'سرعة الإنجاز والمتابعة',
      desc: 'نقدر قيمة وقتك، لذا نحرص على إنهاء المعاملات في وقت قياسي.',
      icon: <Zap />
    },
    {
      title: 'ضمان الجودة القانونية',
      desc: 'جميع إجراءاتنا تتم تحت إشراف قانوني دقيق لضمان سلامة مشروعك.',
      icon: <ShieldCheck />
    },
    {
      title: 'تحديث مستمر',
      desc: 'نطلعك على كل خطوة في سير المعاملة بشكل دوري ومباشر.',
      icon: <RefreshCw />
    },
    {
      title: 'باقات متنوعة',
      desc: 'نقدم حلولاً سعرية مرنة تناسب الشركات الناشئة والمتوسطة.',
      icon: <Layers />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            لماذا تختار <span className="gold-text">علامة الجودة؟</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            نحن لسنا مجرد مزودي خدمات، بل نحن شركاء نجاح نهتم بأدق التفاصيل لضمان بداية قوية ومستقرة لأعمالك في المملكة.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center text-black shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:scale-110 transition-transform">
                  {/* Fixed TypeScript error by casting to ReactElement<any> to allow the 'size' prop */}
                  {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 gold-gradient rounded-full blur-[100px] opacity-10 animate-pulse"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video md:aspect-[16/10] bg-[#111]">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop" 
              alt="Modern Office Collaboration" 
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop";
              }}
            />
          </div>
          <div className="absolute top-10 -left-10 bg-black/90 backdrop-blur-2xl p-8 rounded-3xl border border-[#d4af37]/30 hidden xl:block shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:-translate-y-2 transition-transform">
            <div className="text-5xl font-black gold-text mb-1">+12</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black">عام من التميز</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
