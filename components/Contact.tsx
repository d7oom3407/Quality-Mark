
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6">تواصل <span className="gold-text">معنا</span></h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          سواء كنت تبدأ مشروعك الأول أو توسع استثماراتك، فريقنا الاستشاري جاهز للإجابة على كافة استفساراتك.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Right Column: Contact Form */}
        <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 gold-gradient opacity-5 blur-3xl"></div>
          
          {submitted ? (
            <div className="py-20 text-center animate-fade-in">
              <div className="w-20 h-20 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-[#d4af37]" />
              </div>
              <h3 className="text-2xl font-black mb-4">تم الإرسال بنجاح!</h3>
              <p className="text-gray-400">شكرًا لتواصلك معنا. سيقوم أحد مستشارينا بالرد عليك في أقرب وقت ممكن.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-[#d4af37] font-bold hover:underline underline-offset-4"
              >
                إرسال رسالة أخرى
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-300 mr-1">الاسم الكامل</label>
                  <input 
                    type="text" 
                    required
                    placeholder="أدخل اسمك"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#d4af37]/50 focus:outline-none transition-all placeholder:text-gray-600 text-white font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-300 mr-1">رقم الجوال</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="05xxxxxxxx"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#d4af37]/50 focus:outline-none transition-all placeholder:text-gray-600 text-white font-medium"
                    dir="ltr"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300 mr-1">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  required
                  placeholder="example@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#d4af37]/50 focus:outline-none transition-all placeholder:text-gray-600 text-white font-medium"
                  dir="ltr"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300 mr-1">الخدمة المطلوبة</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#d4af37]/50 focus:outline-none transition-all text-gray-400 font-medium appearance-none">
                  <option className="bg-[#0a0a0a]">تأسيس شركة جديدة</option>
                  <option className="bg-[#0a0a0a]">استخراج سجل تجاري</option>
                  <option className="bg-[#0a0a0a]">ترخيص استثمار أجنبي</option>
                  <option className="bg-[#0a0a0a]">استشارات قانونية</option>
                  <option className="bg-[#0a0a0a]">أخرى</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300 mr-1">رسالتك</label>
                <textarea 
                  rows={4}
                  placeholder="كيف يمكننا مساعدتك؟"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#d4af37]/50 focus:outline-none transition-all placeholder:text-gray-600 text-white font-medium resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-5 rounded-xl gold-gradient text-black font-black text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1"
              >
                <span>إرسال الطلب</span>
                <Send className="w-5 h-5 rotate-180" />
              </button>
            </form>
          )}
        </div>

        {/* Left Column: Info & Map */}
        <div className="space-y-8">
          <div className="grid sm:grid-cols-1 gap-4">
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d4af37]/30 transition-colors">
              <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center text-black shrink-0 shadow-lg">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-lg font-black mb-1">المقر الرئيسي</h4>
                <p className="text-gray-400 text-sm leading-relaxed">طريق عثمان بن عفان، حي الوادي، الرياض</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d4af37]/30 transition-colors">
              <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center text-black shrink-0 shadow-lg">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-lg font-black mb-1">اتصال مباشر</h4>
                <p className="text-gray-400 text-sm font-bold" dir="ltr">+966 548 321 927</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d4af37]/30 transition-colors">
              <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center text-black shrink-0 shadow-lg">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-lg font-black mb-1">المراسلة البريدية</h4>
                <p className="text-gray-400 text-sm">info@qualitymarksa.com</p>
              </div>
            </div>
          </div>

          {/* Smaller, integrated map */}
          <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.5714392070387!2d46.7027581!3d24.8118671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efddd997f8c0b%3A0xc47e3077651066ed!2sQuality%20Mark!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa" 
              className="w-full h-full border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0"
              allowFullScreen={true} 
              loading="lazy" 
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 right-4 bg-black/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#d4af37]/30 text-xs font-bold text-white">
              موقعنا في الرياض
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
