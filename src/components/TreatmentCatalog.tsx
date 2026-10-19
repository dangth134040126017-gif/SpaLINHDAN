import React from 'react';
import { 
  TreatmentService, 
  TREATMENT_CATEGORIES, 
  TREATMENT_SERVICES 
} from '../data/spaData';
import { 
  Sparkles, 
  Clock, 
  ArrowRight, 
  Check, 
  HeartHandshake, 
  Flower2, 
  ShieldCheck, 
  Wand2 
} from 'lucide-react';

interface TreatmentCatalogProps {
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  onSelectService: (service: TreatmentService) => void;
  onBookService: (service: TreatmentService) => void;
}

export const TreatmentCatalog: React.FC<TreatmentCatalogProps> = ({
  activeCategory,
  onSelectCategory,
  onSelectService,
  onBookService,
}) => {
  const filteredServices = activeCategory === 'all'
    ? TREATMENT_SERVICES
    : TREATMENT_SERVICES.filter(service => service.category === activeCategory);

  // Helper icon for groups
  const getGroupIcon = (groupNumber: string) => {
    switch (groupNumber) {
      case 'NHÓM 01': return <Flower2 className="w-5 h-5 text-[#27443B]" />;
      case 'NHÓM 02': return <Sparkles className="w-5 h-5 text-[#725B38]" />;
      case 'NHÓM 03': return <ShieldCheck className="w-5 h-5 text-[#27443B]" />;
      case 'NHÓM 04': return <Wand2 className="w-5 h-5 text-[#725B38]" />;
      case 'NHÓM 05': return <Sparkles className="w-5 h-5 text-[#27443B]" />;
      case 'NHÓM 06': return <Flower2 className="w-5 h-5 text-[#725B38]" />;
      case 'NHÓM 07': return <ShieldCheck className="w-5 h-5 text-[#27443B]" />;
      case 'NHÓM 08': return <HeartHandshake className="w-5 h-5 text-[#725B38]" />;
      default: return <Sparkles className="w-5 h-5 text-[#27443B]" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#725B38] font-sans block mb-3">
            DANH MỤC TRỊ LIỆU CAO CẤP
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#211A17] font-normal leading-tight text-balance mb-4">
            Hệ Thống Trị Liệu Thẩm Mỹ &amp; <br className="hidden sm:inline" />
            <span className="italic text-[#27443B]">Dưỡng Sinh Chuyên Sâu</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#594E4A] leading-relaxed max-w-2xl mx-auto">
            Mỗi dịch vụ tại Spa Linh Đan được kiến tạo như một nghi thức chăm sóc xa xỉ, tập trung vào hiệu quả phục hồi sinh học và trải nghiệm an yên, tuyệt đối không thương mại hóa đại trà.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {TREATMENT_CATEGORIES.map(tab => {
            const isActive = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => onSelectCategory(tab.key)}
                className={`px-4 py-2 text-xs sm:text-[13px] font-medium tracking-wide uppercase transition-all duration-200 rounded-full whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#27443B]/40 ${
                  isActive
                    ? 'bg-[#27443B] text-white shadow-sm font-semibold'
                    : 'bg-white/70 hover:bg-white text-[#594E4A] hover:text-[#211A17] border border-[#C5A880]/30'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 8 Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="bg-white/85 backdrop-blur-sm rounded-2xl border border-[#C5A880]/25 p-6 flex flex-col justify-between sanctuary-card-hover group relative overflow-hidden"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF2EE] flex items-center justify-center border border-[#C5A880]/20">
                    {getGroupIcon(service.groupNumber)}
                  </div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#FAF2EE] text-[#725B38] border border-[#C5A880]/20 font-sans">
                    {service.groupNumber}
                  </span>
                </div>

                <h3 
                  onClick={() => onSelectService(service)}
                  className="font-serif text-lg sm:text-[19px] font-medium text-[#211A17] group-hover:text-[#27443B] transition-colors cursor-pointer mb-2 leading-snug"
                >
                  {service.title}
                </h3>

                <p className="text-xs text-[#594E4A] leading-relaxed mb-5 min-h-[40px]">
                  {service.description}
                </p>

                {/* Sub-services / Bullet List */}
                <div className="space-y-2 mb-6 pt-3 border-t border-[#C5A880]/15">
                  {service.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#211A17]/85">
                      <span className="text-[#C5A880] mt-0.5 shrink-0">◇</span>
                      <span className="leading-snug">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-[#C5A880]/15 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[#594E4A] font-sans">
                  <Clock className="w-3.5 h-3.5 text-[#725B38]" />
                  <span className="font-semibold tracking-wider uppercase text-[11px] tabular-nums">
                    {service.duration}
                  </span>
                </div>

                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1 text-[#27443B] hover:text-[#1A3029] font-medium group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Tư vấn</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Booking callout strip */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#594E4A] mb-3">
            Chưa xác định được tình trạng da hiện tại? Chuyên gia da liễu sẵn sàng thăm khám và thiết lập phác đồ riêng.
          </p>
          <button
            onClick={() => {
              const defaultService = TREATMENT_SERVICES[0];
              onBookService(defaultService);
            }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#27443B] hover:underline"
          >
            <span>Đăng ký buổi soi da &amp; tư vấn VIP miễn phí</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
