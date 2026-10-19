import React from 'react';
import { Leaf, Sparkles, Fingerprint, FlaskConical, Cpu, Flower2, CheckCircle2 } from 'lucide-react';

export const AboutMission: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#FAF2EE]/60 border-y border-[#C5A880]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#725B38] font-sans block mb-3">
            CÂU CHUYỆN &amp; SỨ MỆNH
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#211A17] font-normal leading-tight text-balance">
            Spa Linh Đan – Tuyệt Tác Chữa Lành &amp; <br className="hidden sm:inline" />
            <span className="italic text-[#27443B]">Nâng Tầm Nhan Sắc Phái Đẹp</span>
          </h2>
        </div>

        {/* 2-Column Story & Doctor Consultation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          {/* Left: Narrative text & Philosophy Card */}
          <div className="lg:col-span-6 space-y-6">
            <p className="font-sans text-base text-[#594E4A] leading-relaxed">
              Được thai nghén từ khát vọng mang đến một không gian làm đẹp đích thực, <strong className="text-[#211A17] font-semibold">Spa Linh Đan</strong> ra đời như một ốc đảo bình yên giữa nhịp sống đô thị hối hả. Sứ mệnh của chúng tôi không chỉ dừng lại ở việc cải thiện khuyết điểm làn da, mà còn là hành trình đánh thức vẻ đẹp rạng rỡ vốn có, nuôi dưỡng tâm hồn và mang lại trạng thái thư giãn tuyệt đối cho từng vị khách ghé thăm.
            </p>

            <p className="font-sans text-base text-[#594E4A] leading-relaxed">
              Tại Linh Đan, mỗi liệu trình là sự kết hợp chuẩn mực giữa y học thẩm mỹ tân tiến và các liệu pháp thảo mộc thiên nhiên thanh khiết, được thực hiện bởi đội ngũ chuyên gia giàu kinh nghiệm với sự tận tâm cao nhất.
            </p>

            {/* Philosophy Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#C5A880]/30 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#27443B]/10 flex items-center justify-center shrink-0 text-[#27443B]">
                <Leaf className="w-5 h-5 text-[#27443B]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-[#211A17] mb-1">
                  Triết Lý Thân – Tâm Toàn Diện
                </h3>
                <p className="text-sm text-[#594E4A] leading-relaxed">
                  Sự an yên từ nội tại là cội nguồn của vẻ đẹp thanh xuân bền bỉ. Chúng tôi kiến tạo không gian trị liệu không hóa chất gây hại, cân bằng sinh học tự nhiên.
                </p>
              </div>
            </div>

            {/* 3 Quick Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-[#27443B]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                <span>Thăm khám da 1:1 cùng Bác sĩ</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                <span>Phòng trị liệu riêng tư VIP</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                <span>Không phát sinh chi phí ẩn</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                <span>Dược mỹ phẩm nhập khẩu chính ngạch</span>
              </div>
            </div>
          </div>

          {/* Right: Doctor consultation photo with badge */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#C5A880]/30 bg-white">
              <img
                src="/src/assets/images/doctor_consultation_skin_1792409143023.jpg"
                alt="Bác sĩ da liễu soi da và tư vấn phác đồ cá nhân hóa tại Spa Linh Đan"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover max-h-[460px]"
              />
              
              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-[#C5A880]/30 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#27443B] flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-[#E0C298]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#725B38] block">
                      TIÊU CHUẨN QUỐC TẾ
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#211A17] line-clamp-1">
                      Khám phá phác đồ da đặc bản theo chỉ số sinh học tế bào
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Value Pillars in 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-white border border-[#C5A880]/25 shadow-xs sanctuary-card-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF2EE] border border-[#C5A880]/20 flex items-center justify-center mb-4 text-[#27443B]">
                <Fingerprint className="w-6 h-6 text-[#27443B]" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#211A17] mb-2">
                Tôn Trọng Nét Đẹp Độc Bản
              </h3>
              <p className="text-xs sm:text-sm text-[#594E4A] leading-relaxed">
                Phác đồ chăm sóc chuyên biệt được thiết lập dựa trên tình trạng biểu mô và lối sống của từng khách hàng.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#C5A880]/15">
              <span className="text-[11px] font-semibold text-[#725B38] uppercase tracking-wider">Cá nhân hóa 100%</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-white border border-[#C5A880]/25 shadow-xs sanctuary-card-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF2EE] border border-[#C5A880]/20 flex items-center justify-center mb-4 text-[#27443B]">
                <FlaskConical className="w-6 h-6 text-[#725B38]" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#211A17] mb-2">
                Dược Mỹ Phẩm Châu Âu
              </h3>
              <p className="text-xs sm:text-sm text-[#594E4A] leading-relaxed">
                Cam kết 100% nguồn gốc xuất xứ nguyên bản, tinh chất kiểm định gắt gao với độ lành tính tối ưu.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#C5A880]/15">
              <span className="text-[11px] font-semibold text-[#725B38] uppercase tracking-wider">Chứng nhận xuất xứ</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-white border border-[#C5A880]/25 shadow-xs sanctuary-card-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF2EE] border border-[#C5A880]/20 flex items-center justify-center mb-4 text-[#27443B]">
                <Cpu className="w-6 h-6 text-[#27443B]" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#211A17] mb-2">
                Công Nghệ Đột Phá
              </h3>
              <p className="text-xs sm:text-sm text-[#594E4A] leading-relaxed">
                Hệ thống trang thiết bị chuyển giao công nghệ cao được chứng nhận chất lượng nghiêm ngặt bởi FDA &amp; CE.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#C5A880]/15">
              <span className="text-[11px] font-semibold text-[#725B38] uppercase tracking-wider">Tiêu chuẩn FDA &amp; CE</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-2xl bg-white border border-[#C5A880]/25 shadow-xs sanctuary-card-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF2EE] border border-[#C5A880]/20 flex items-center justify-center mb-4 text-[#27443B]">
                <Flower2 className="w-6 h-6 text-[#C5A880]" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#211A17] mb-2">
                Thư Thái Đích Thực
              </h3>
              <p className="text-xs sm:text-sm text-[#594E4A] leading-relaxed">
                Liệu pháp mùi hương tinh dầu organic thượng hạng kết hợp âm nhạc tần số chữa lành giúp thanh lọc toàn diện.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#C5A880]/15">
              <span className="text-[11px] font-semibold text-[#725B38] uppercase tracking-wider">Liệu pháp mùi hương</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
