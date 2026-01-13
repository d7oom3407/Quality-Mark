
import React from 'react';
import { Star } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'عميل سعيد', value: '1500+' },
    { label: 'شركة مؤسسة', value: '850+' },
    { label: 'عام من الخبرة', value: '12+' },
    { 
      label: 'تقييم جوجل', 
      value: '4.8', 
      isRating: true 
    },
  ];

  return (
    <div className="relative z-20 py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="text-5xl md:text-7xl font-black gold-text mb-4 group-hover:scale-105 transition-transform duration-500">
                {stat.value}
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-gray-300 text-lg md:text-xl font-bold tracking-wide uppercase">
                  {stat.label}
                </span>
                {stat.isRating && (
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37] drop-shadow-[0_0_5px_rgba(212,175,55,0.4)]" />
                    ))}
                  </div>
                )}
                {!stat.isRating && (
                  <div className="w-12 h-1 bg-[#d4af37]/30 rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Separation Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>
  );
};

export default Stats;
