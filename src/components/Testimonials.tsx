import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/spaData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-[#FAF2EE]/50 border-t border-[#C5A880]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#725B38] font-sans block mb-3">
            TRẢI NGHIỆM THỰC TẾ
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#211A17] font-normal leading-tight text-balance">
            Cảm Nhận Từ Những Vị Khách Quý <br className="hidden sm:inline" />
            <span className="italic text-[#27443B]">Đầu Tiên</span>
          </h2>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(testi => (
            <div
              key={testi.id}
              className="p-8 rounded-2xl bg-white border border-[#C5A880]/25 shadow-xs sanctuary-card-hover flex flex-col justify-between relative"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
                  ))}
                </div>

                {/* Content Quote */}
                <p className="font-sans text-sm text-[#594E4A] leading-relaxed italic mb-8 relative">
                  &ldquo;{testi.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-[#C5A880]/15">
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-[#C5A880]/30 shadow-xs"
                />
                <div>
                  <h4 className="font-serif text-base font-medium text-[#211A17] leading-tight">
                    {testi.name}
                  </h4>
                  <p className="text-xs text-[#725B38] font-normal">
                    {testi.role}, {testi.age} tuổi
                  </p>
                  <p className="text-[11px] text-[#594E4A]/70 mt-0.5 font-sans">
                    Liệu trình: {testi.serviceUsed}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
