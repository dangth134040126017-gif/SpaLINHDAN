import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFF8F6]/90 backdrop-blur-md border-b border-[#C5A880]/20 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            {/* Elegant Lotus / Leaf emblem */}
            <div className="w-10 h-10 rounded-full bg-[#27443B] flex items-center justify-center text-[#FFF8F6] shadow-sm group-hover:bg-[#1E362E] transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#E0C298]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 3-4 6-8 7 4 1 6.5 4 8 7 1.5-3 4-6 8-7-4-1-6.5-4-8-7z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v7" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-[#211A17] group-hover:text-[#27443B] transition-colors leading-tight">
                Spa Linh Đan
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-[#725B38] font-sans">
                SANCTUARY & BEAUTY CLINIC
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#594E4A]">
            <a href="#hero" className="hover:text-[#27443B] transition-colors whitespace-nowrap">
              Trang chủ
            </a>
            <a href="#about" className="hover:text-[#27443B] transition-colors whitespace-nowrap">
              Về chúng tôi
            </a>
            <a href="#services" className="hover:text-[#27443B] transition-colors whitespace-nowrap">
              Dịch vụ trị liệu
            </a>
            <a href="#testimonials" className="hover:text-[#27443B] transition-colors whitespace-nowrap">
              Đánh giá
            </a>
            <a href="#booking" className="hover:text-[#27443B] transition-colors whitespace-nowrap">
              Liên hệ & Đặt hẹn
            </a>
          </nav>

          {/* Zone 3: Primary Action & Quick Hotline */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href="tel:0988668888"
              className="flex items-center gap-2 text-[13px] font-medium text-[#27443B] hover:text-[#1E362E] px-3 py-1.5 rounded-full hover:bg-[#27443B]/5 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span className="tabular-nums font-semibold tracking-wide">0988.xxx.xxx</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#27443B] hover:bg-[#1E362E] text-white text-[13px] font-semibold rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#27443B] focus:ring-offset-2 focus:ring-offset-[#FFF8F6]"
            >
              <Calendar className="w-4 h-4 text-[#E0C298]" />
              <span>Đặt lịch ngay</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 bg-[#27443B] text-white text-xs font-semibold rounded-full"
            >
              Đặt lịch
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#211A17] hover:bg-[#27443B]/5 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#C5A880]/20 bg-[#FFF8F6] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-[#594E4A]">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#27443B]/5 hover:text-[#27443B]"
            >
              Trang chủ
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#27443B]/5 hover:text-[#27443B]"
            >
              Về chúng tôi
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#27443B]/5 hover:text-[#27443B]"
            >
              Dịch vụ trị liệu
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#27443B]/5 hover:text-[#27443B]"
            >
              Đánh giá
            </a>
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#27443B]/5 hover:text-[#27443B]"
            >
              Liên hệ & Đặt hẹn
            </a>
          </nav>

          <div className="pt-3 border-t border-[#C5A880]/15 space-y-2">
            <a
              href="tel:0988668888"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#27443B]"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>Hotline 24/7: 0988.xxx.xxx</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-[#C5A880] text-[#725B38] text-sm font-medium hover:bg-[#C5A880]/10"
            >
              <Sparkles className="w-4 h-4" />
              <span>Nhận tư vấn miễn phí</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
