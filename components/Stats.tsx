
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'عميل سعيد', value: '+1500' },
    { label: 'شركة مؤسسة', value: '+850' },
    { label: 'سنة خبرة', value: '+12' },
    { label: 'خبير استشاري', value: '+45' },
  ];

  return (
    <div className="relative -mt-16 z-20 container mx-auto px-4">
      <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl flex flex-wrap justify-around items-center gap-8 border-t border-white/10">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-5xl font-black gold-text mb-2">{stat.value}</div>
            <div className="text-gray-400 text-sm md:text-base font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
