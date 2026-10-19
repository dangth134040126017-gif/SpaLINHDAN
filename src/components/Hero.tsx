import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Award, SlidersHorizontal, Star } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenConsultation: () => void;
  onSelectCategory: (cat: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenConsultation, onSelectCategory }) => {
  return (
    <section id="hero" className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Subtle organic background ambient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
      >
        <div 
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-tr from-[#E8D8CF]/50 via-[#C5A880]/20 to-[#3E5C52]/10 opacity-70"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Kicker / Announcement Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF2EE] border border-[#C5A880]/35 text-[#725B38] text-xs font-semibold tracking-wider uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <span>DẤU ẤN KHAI TRƯƠNG</span>
            <span className="text-[#C5A880]">·</span>
            <span>THÁNG 10 / 2025</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal leading-[1.2] text-[#211A17] tracking-tight text-balance">
            Nơi Đánh Thức Vẻ Đẹp Thuần Khiết <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#27443B]">&amp; Tái Sinh Năng Lượng</span> Thân – Tâm
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#594E4A] max-w-2xl mx-auto leading-relaxed font-normal">
            Chào mừng quý khách đến với <strong className="font-medium text-[#211A17]">Spa Linh Đan</strong>. Không gian trị liệu thẩm mỹ cao cấp hòa quyện giữa tinh hoa thiên nhiên và công nghệ thẩm mỹ tân tiến nhất thế giới, chính thức mở cửa đón tiếp quý khách từ Tháng 10 năm 2025.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#27443B] hover:bg-[#1E362E] text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#27443B] focus:ring-offset-2"
            >
              <span>Đặt lịch trải nghiệm ngay</span>
              <ArrowRight className="w-4 h-4 text-[#E0C298]" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/80 hover:bg-white text-[#594E4A] hover:text-[#27443B] border border-[#C5A880]/50 text-sm font-medium rounded-full shadow-xs hover:shadow transition-all focus:outline-none"
            >
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
              <span>Nhận tư vấn miễn phí</span>
            </button>
          </div>
        </div>

        {/* 3 Hero Image Showcase Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Không gian Sanctuary */}
          <div 
            onClick={() => onSelectCategory('herbal')}
            className="group relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[3/4] md:aspect-[4/5] shadow-md border border-[#C5A880]/20 bg-[#FAF2EE] cursor-pointer"
          >
            <img
              src="/src/assets/images/hero_sanctuary_interior_1792409142863.jpg"
              alt="Không gian sanctuary tĩnh lặng sang trọng tại Spa Linh Đan"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A3029]/85 via-[#1A3029]/25 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white">
              <span className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-[#E0C298] mb-1 font-sans">
                KHÔNG GIAN SANCTUARY
              </span>
              <p className="font-serif text-lg sm:text-xl font-normal leading-snug">
                Tĩnh lặng &amp; Sang trọng
              </p>
            </div>
          </div>

          {/* Card 2: Trị liệu Y khoa */}
          <div 
            onClick={() => onSelectCategory('tech')}
            className="group relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[3/4] md:aspect-[4/5] shadow-md border border-[#C5A880]/20 bg-[#FAF2EE] cursor-pointer"
          >
            <img
              src="/src/assets/images/hero_clinical_treatment_1792409143399.jpg"
              alt="Liệu trình trị liệu y khoa chuyên sâu tại Spa Linh Đan"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A3029]/85 via-[#1A3029]/25 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white">
              <span className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-[#E0C298] mb-1 font-sans">
                TRỊ LIỆU Y KHOA
              </span>
              <p className="font-serif text-lg sm:text-xl font-normal leading-snug">
                Tinh tế &amp; Chuyên biệt
              </p>
            </div>
          </div>

          {/* Card 3: Thảo mộc Quý hiếm */}
          <div 
            onClick={() => onSelectCategory('herbal')}
            className="group relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[3/4] md:aspect-[4/5] shadow-md border border-[#C5A880]/20 bg-[#FAF2EE] cursor-pointer"
          >
            <img
              src="/src/assets/images/hero_herbal_wellness_1792409143367.jpg"
              alt="Thảo mộc quý hiếm dưỡng sinh an nhiên"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A3029]/85 via-[#1A3029]/25 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white">
              <span className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-[#E0C298] mb-1 font-sans">
                THẢO MỘC QUÝ HIẾM
              </span>
              <p className="font-serif text-lg sm:text-xl font-normal leading-snug">
                Dưỡng sinh an nhiên
              </p>
            </div>
          </div>

        </div>

        {/* 4 Feature Trust Badges Strip */}
        <div className="mt-12 bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-[#C5A880]/25 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#C5A880]/20">
            
            {/* Feature 1 */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4 first:pt-0 first:px-0">
              <div className="w-10 h-10 rounded-full bg-[#27443B]/8 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#27443B]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#211A17] tracking-tight">100% Chuyên gia</p>
                <p className="text-xs text-[#594E4A] font-normal">Chuẩn y khoa da liễu</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4">
              <div className="w-10 h-10 rounded-full bg-[#27443B]/8 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#725B38]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#211A17] tracking-tight">Công nghệ quốc tế</p>
                <p className="text-xs text-[#594E4A] font-normal">Chuyển giao chính hãng</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4">
              <div className="w-10 h-10 rounded-full bg-[#27443B]/8 flex items-center justify-center shrink-0">
                <SlidersHorizontal className="w-5 h-5 text-[#27443B]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#211A17] tracking-tight">Liệu trình riêng biệt</p>
                <p className="text-xs text-[#594E4A] font-normal">Cá nhân hóa phác đồ</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4">
              <div className="w-10 h-10 rounded-full bg-[#27443B]/8 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 text-[#C5A880]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#211A17] tracking-tight">Không gian 5 sao</p>
                <p className="text-xs text-[#594E4A] font-normal">Thư thái tuyệt đối</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
