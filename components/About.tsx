
import React from 'react';
import { CheckCircle2, Target, Eye } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div className="relative group">
          <div className="absolute -inset-4 gold-gradient rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-[#111] rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] md:aspect-auto">
            <img 
              src="https://qualitymarksa.com/wp-content/uploads/2025/04/123.jpg" 
              alt="Professional Business Leadership" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 min-h-[400px]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop";
              }}
            />
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-10 -right-6 md:-right-10 bg-white p-6 rounded-2xl shadow-2xl hidden md:block border border-gray-100 animate-fade-in-up">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center shadow-lg">
                <span className="text-black font-black text-xl">Q</span>
              </div>
              <div>
                <p className="text-black font-black text-lg">علامة الجودة</p>
                <p className="text-gray-500 text-xs">منظومة متكاملة لرواد الأعمال</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="space-y-8">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-[#d4af37]/20 text-[#d4af37] text-sm font-bold mb-4">
              من نحن
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              نضع بين أيديكم <span className="gold-text">خبرة تراكمية</span> لبناء مستقبلك
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              شركة "علامة الجودة" هي منظومة متكاملة تُعنى بخدمة رواد الأعمال والمستثمرين من داخل وخارج المملكة العربية السعودية. نضع بين أيديكم خبرة تراكمية، وسرعة في الإنجاز، ودقة في المتابعة، لنبني معكم أولى خطوات النجاح بثقة واستقرار.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl border-l-4 border-l-[#d4af37]">
              <div className="w-10 h-10 bg-[#d4af37]/20 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-bold mb-2">رؤيتنا</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                أن نكون الخيار الأول لرواد الأعمال في المملكة، من خلال تقديم خدمات تأسيس وتطوير الأعمال بجودة عالية واحترافية مستمرة.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl border-l-4 border-l-[#d4af37]">
              <div className="w-10 h-10 bg-[#d4af37]/20 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-bold mb-2">رسالتنا</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                تمكين المستثمرين من دخول السوق السعودي بثقة وأمان، وتقديم استشارات وخدمات متميزة تختصر الوقت والجهد.
              </p>
            </div>
          </div>

          <ul className="space-y-4">
            {['خبرة أكثر من 12 عاماً', 'فريق استشاري متخصص', 'سرعة قياسية في إنهاء الإجراءات', 'دعم مستمر ما بعد التأسيس'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-[#d4af37]" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
