
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Twitter, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">تواصل <span className="gold-text">معنا</span></h2>
            <p className="text-gray-400 text-lg">
              نحن هنا لمساعدتك في كل ما يتعلق ببدء مشروعك. فريقنا جاهز للرد على استفساراتك.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-6 p-6 rounded-2xl glass-card border border-white/5">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-black">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">العنوان</h4>
                <p className="text-gray-400">4215 طريق عثمان بن عفان، الوادي، 7696، الرياض 13313، المملكة العربية السعودية</p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl glass-card border border-white/5">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-black">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">اتصل بنا</h4>
                <p className="text-gray-400" dir="ltr">+966 548 321 927</p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl glass-card border border-white/5">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-black">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">البريد الإلكتروني</h4>
                <p className="text-gray-400">info@qualitymarksa.com</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {[Instagram, Twitter, Youtube].map((Icon, idx) => (
              <a key={idx} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-all">
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.5714392070387!2d46.7027581!3d24.8118671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efddd997f8c0b%3A0xc47e3077651066ed!2sQuality%20Mark!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa" 
            className="w-full h-full border-0 opacity-90 group-hover:opacity-100 transition-opacity duration-700"
            allowFullScreen={true} 
            loading="lazy" 
          ></iframe>
          <div className="absolute top-8 left-8 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-[#d4af37]/30 max-w-xs shadow-2xl">
            <h5 className="gold-text font-black mb-2">تفضل بزيارتنا</h5>
            <p className="text-xs text-gray-400 leading-relaxed font-medium">يسعدنا استقبالكم في مقرنا بمدينة الرياض لمناقشة تطلعاتكم وتطوير أعمالكم.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;