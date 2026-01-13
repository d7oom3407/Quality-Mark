
import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'عبدالله سليمان',
      role: 'رجل أعمال',
      text: 'تعامل راقٍ وخبرة ملموسة في الأنظمة السعودية، أنصح بالتواصل معهم دون تردد أبداً. ساعدوني في تأسيس شركتي في وقت قياسي.',
      image: 'https://picsum.photos/id/64/100/100'
    },
    {
      name: 'إبراهيم سعد',
      role: 'مستثمر عقاري',
      text: 'تعامل راقٍ ودقة عالية في تقديم الاستشارة، أشكرهم على حسن المتابعة والاهتمام بالتفاصيل القانونية الدقيقة.',
      image: 'https://picsum.photos/id/91/100/100'
    },
    {
      name: 'أحمد السيد',
      role: 'مدير تنفيذي',
      text: 'الخدمة القانونية كانت دقيقة وواضحة، وشعرت بالراحة والثقة في كل خطوة تم اتخاذها. أفضل خيار لرواد الأعمال.',
      image: 'https://picsum.photos/id/11/100/100'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4">آراء <span className="gold-text">عملائنا</span></h2>
        <p className="text-gray-400">ثقة عملائنا هي سر نجاحنا المستمر</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <div key={idx} className="glass-card p-8 rounded-3xl relative group border-t border-white/10">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-[#d4af37]/10 group-hover:text-[#d4af37]/20 transition-colors" />
            
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
              ))}
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
              "{review.text}"
            </p>
            
            <div className="flex items-center gap-4">
              <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#d4af37]/30" />
              <div>
                <h4 className="font-bold text-[#d4af37]">{review.name}</h4>
                <p className="text-xs text-gray-500">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
