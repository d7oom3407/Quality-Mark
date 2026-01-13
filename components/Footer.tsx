
import React from 'react';

const Footer: React.FC = () => {
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
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => scrollToId('home')}
                className="h-16 flex items-center focus:outline-none"
              >
                <img 
                  src="https://qualitymarksa.com/wp-content/uploads/2025/04/TRd-1.png" 
                  alt="Quality Mark Logo Footer" 
                  className="h-full w-auto object-contain" 
                />
              </button>
              <div className="flex flex-col border-r border-white/10 pr-4 mr-4">
                <span className="text-2xl font-black gold-text tracking-tighter">Quality Mark</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Business Services Since 2012</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              شريككم الاستراتيجي لتأسيس ونمو الأعمال في المملكة العربية السعودية. نسخر خبراتنا لتسهيل رحلتكم الاستثمارية.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-400">
              <li><button onClick={() => scrollToId('home')} className="hover:text-[#d4af37] transition-colors font-medium focus:outline-none">الرئيسية</button></li>
              <li><button onClick={() => scrollToId('about')} className="hover:text-[#d4af37] transition-colors font-medium focus:outline-none">من نحن</button></li>
              <li><button onClick={() => scrollToId('services')} className="hover:text-[#d4af37] transition-colors font-medium focus:outline-none">خدماتنا</button></li>
              <li><button onClick={() => scrollToId('contact')} className="hover:text-[#d4af37] transition-colors font-medium focus:outline-none">اتصل بنا</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">القانونية</h4>
            <ul className="space-y-4 text-gray-400">
              <li><button onClick={() => scrollToId('contact')} className="hover:text-[#d4af37] transition-colors font-medium focus:outline-none">سياسة الخصوصية</button></li>
              <li><button onClick={() => scrollToId('contact')} className="hover:text-[#d4af37] transition-colors font-medium focus:outline-none">الشروط والأحكام</button></li>
              <li><button onClick={() => scrollToId('testimonials')} className="hover:text-[#d4af37] transition-colors font-medium focus:outline-none">آراء العملاء</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-sm">
            جميع الحقوق محفوظة © {new Date().getFullYear()} علامة الجودة لخدمات الأعمال
          </p>
          
          <div className="flex items-center gap-4 grayscale opacity-50">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
