import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Globe, MessageSquare } from 'lucide-react';

interface FooterProps {
  onSelectCategory?: (category: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenBooking }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#FAF2EE] border-t border-[#C5A880]/20 pt-16 pb-12 text-[#211A17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#C5A880]/20">
          
          {/* Column 1: Brand & Quality Seals (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#27443B] flex items-center justify-center text-[#E0C298]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 3-4 6-8 7 4 1 6.5 4 8 7 1.5-3 4-6 8-7-4-1-6.5-4-8-7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v7" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-normal text-[#211A17]">
                Spa Linh Đan
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#27443B]/8 text-[#725B38] text-[11px] font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              <span>OPENING OCTOBER 2025</span>
            </div>

            <p className="text-xs sm:text-sm text-[#594E4A] leading-relaxed max-w-sm">
              Thánh đường chăm sóc sắc đẹp chuẩn y khoa kết hợp triết lý thư giãn an yên. Khởi nguồn từ tinh hoa thảo mộc phương Đông và công nghệ da liễu tân tiến thế giới.
            </p>

            <div className="pt-2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#725B38] block mb-1">
                CHỨNG NHẬN CHẤT LƯỢNG
              </span>
              <p className="text-xs text-[#211A17] font-medium">
                FDA Approved Technology &amp; Organic Herbals
              </p>
            </div>
          </div>

          {/* Column 2: Treatment Services List (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#211A17] tracking-tight">
              Dịch vụ trị liệu
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-[#594E4A]">
              <li>
                <a href="#services" className="hover:text-[#27443B] transition-colors">
                  Chăm sóc da chuyên sâu Sanctuary
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#27443B] transition-colors">
                  Phục hồi hàng rào sinh học Multi-Bio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#27443B] transition-colors">
                  Cấy vi điểm Meso Therapy thế hệ mới
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#27443B] transition-colors">
                  Căng bóng trẻ hóa tế bào Bio-Radiance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#27443B] transition-colors">
                  Điều trị sắc tố Melasma &amp; Tàn nhang
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#27443B] transition-colors">
                  Nâng cơ trẻ hóa Ulthera Diode Lift
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#27443B] transition-colors">
                  Thanh lọc thải độc toàn thân Detox Ritual
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#27443B] transition-colors">
                  Liệu pháp hương thảo An Miên &amp; Body
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info (Col span 2 or 3) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#211A17] tracking-tight">
              Thông tin liên hệ
            </h4>
            <div className="space-y-3 text-xs text-[#594E4A]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#725B38] shrink-0 mt-0.5" />
                <span>Xóm 7, Lai Thành, Ninh Bình</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#725B38] shrink-0" />
                <a href="tel:0988668888" className="hover:text-[#27443B] font-medium tabular-nums">
                  0988.xxx.xxx
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#725B38] shrink-0" />
                <span>concierge@spalinhdan.vn</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#725B38] shrink-0 mt-0.5" />
                <span>08:30 – 20:30 Hàng ngày (Mở cửa tất cả các ngày lễ &amp; Tết)</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter & Exclusive Invite (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#211A17] tracking-tight">
              Đặc quyền khai trương
            </h4>
            <p className="text-xs text-[#594E4A] leading-relaxed">
              Đăng ký nhận thư mời Private Launch và bộ quà tặng trị liệu giới hạn tháng 10/2025.
            </p>

            {subscribed ? (
              <div className="p-3 bg-white rounded-xl border border-[#C5A880]/30 text-xs text-[#27443B] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#27443B]" />
                <span>Đã ghi nhận thư mời Private của bạn!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center rounded-xl bg-white border border-[#C5A880]/35 overflow-hidden focus-within:border-[#27443B] p-1">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Địa chỉ email của bạn..."
                    className="w-full px-3 py-2 text-xs text-[#211A17] placeholder:text-[#594E4A]/50 bg-transparent focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#27443B] hover:bg-[#1E362E] text-white text-[11px] font-bold rounded-lg uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
                  >
                    ĐĂNG KÝ
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#725B38] block mb-2">
                KẾT NỐI CÙNG LINH ĐAN
              </span>
              <div className="flex items-center gap-3 text-[#594E4A]">
                <a href="#" className="w-8 h-8 rounded-full bg-white border border-[#C5A880]/30 flex items-center justify-center hover:text-[#27443B] hover:border-[#27443B] transition-colors" aria-label="Website">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white border border-[#C5A880]/30 flex items-center justify-center hover:text-[#27443B] hover:border-[#27443B] transition-colors" aria-label="Chat">
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a href="https://facebook.com" className="w-8 h-8 rounded-full bg-white border border-[#C5A880]/30 flex items-center justify-center hover:text-[#27443B] hover:border-[#27443B] transition-colors" aria-label="Facebook">
                  <span className="text-xs font-bold font-serif">f</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#594E4A]">
          <p>© 2025 Spa Linh Dan Sanctuary &amp; Beauty Clinic. All Rights Reserved.</p>
          <p className="font-serif italic text-sm text-[#725B38]">
            Tuyệt tác nâng tầm nhan sắc.
          </p>
        </div>

      </div>
    </footer>
  );
};
