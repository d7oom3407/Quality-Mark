
import React from 'react';
import { 
  Briefcase, 
  Scale, 
  FileText, 
  UserPlus, 
  BarChart3, 
  Settings2,
  ChevronLeft
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'صياغة عقود التأسيس',
      desc: 'إعداد ومراجعة كافة العقود القانونية وتوثيقها رسمياً.',
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: 'استخراج السجل التجاري',
      desc: 'إصدار السجلات التجارية وتعديلها لكافة الأنشطة.',
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      title: 'خدمات ما بعد التأسيس',
      desc: 'متابعة كافة الملفات الحكومية والبلدية بعد انطلاق المشروع.',
      icon: <Settings2 className="w-8 h-8" />
    },
    {
      title: 'التحقق من المستندات',
      desc: 'مراجعة وتدقيق كافة الأوراق الثبوتية وضمان نظاميتها.',
      icon: <Scale className="w-8 h-8" />
    },
    {
      title: 'استخراج ترخيص الاستثمار',
      desc: 'تسهيل إجراءات دخول المستثمر الأجنبي للسوق السعودي.',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: 'الاشتراك في المنصات الحكومية',
      desc: 'تفعيل حسابات قوى، مدد، التأمينات الاجتماعية وغيرها.',
      icon: <UserPlus className="w-8 h-8" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4">خدماتنا <span className="gold-text">المتكاملة</span></h2>
        <div className="w-24 h-1 gold-gradient mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          نقدم مجموعة شاملة من الخدمات المصممة خصيصاً لتلبية احتياجات مشروعك من الفكرة وحتى التشغيل الفعلي.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group glass-card p-8 rounded-3xl hover:bg-[#d4af37]/5 transition-all duration-500 border border-white/5 hover:border-[#d4af37]/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 gold-gradient opacity-0 group-hover:opacity-5 blur-3xl transition-opacity"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#d4af37] mb-6 group-hover:scale-110 transition-transform duration-500">
              {service.icon}
            </div>
            
            <h3 className="text-xl font-bold mb-4 group-hover:text-[#d4af37] transition-colors">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              {service.desc}
            </p>
            
            <button className="flex items-center gap-2 text-[#d4af37] text-sm font-bold group/btn">
              <span>اقرأ المزيد</span>
              <ChevronLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
