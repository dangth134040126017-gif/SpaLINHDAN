import React from 'react';
import { X, Clock, Sparkles, Check, Leaf, ShieldAlert, Calendar, ArrowRight } from 'lucide-react';
import { TreatmentService } from '../data/spaData';

interface ServiceDetailModalProps {
  service: TreatmentService | null;
  onClose: () => void;
  onBook: (service: TreatmentService) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBook,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#211A17]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FFF8F6] rounded-3xl border border-[#C5A880]/40 shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10 p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/80 text-[#594E4A] hover:text-[#211A17] hover:bg-white border border-[#C5A880]/30 transition-all focus:outline-none"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#FAF2EE] text-[#725B38] border border-[#C5A880]/30">
              {service.groupNumber}
            </span>
            <span className="text-xs text-[#594E4A] font-medium">·</span>
            <span className="text-xs text-[#725B38] font-medium uppercase tracking-wider">
              {service.categoryLabel}
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#211A17]">
            {service.title}
          </h3>

          <div className="flex items-center gap-3 text-xs text-[#594E4A] pt-1">
            <div className="flex items-center gap-1 font-semibold text-[#27443B]">
              <Clock className="w-4 h-4 text-[#725B38]" />
              <span className="tabular-nums">Thời lượng: {service.duration}</span>
            </div>
            <span>·</span>
            <span className="text-[#725B38]">Phòng riêng VIP tiêu chuẩn 5 sao</span>
          </div>
        </div>

        {/* Narrative description */}
        <div className="p-4 rounded-2xl bg-white border border-[#C5A880]/20 text-sm text-[#594E4A] leading-relaxed">
          {service.description}
        </div>

        {/* Ritual Steps */}
        {service.ritualSteps && (
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#211A17] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
              <span>Nghi thức trị liệu chuẩn y khoa ({service.ritualSteps.length} bước)</span>
            </h4>
            <div className="space-y-2.5">
              {service.ritualSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#594E4A]">
                  <span className="w-5 h-5 rounded-full bg-[#27443B]/10 text-[#27443B] font-semibold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Botanicals & Pure Actives */}
        {service.botanicals && (
          <div className="space-y-2.5 pt-2">
            <h4 className="font-serif text-base font-semibold text-[#211A17] flex items-center gap-2">
              <Leaf className="w-4 h-4 text-[#27443B]" />
              <span>Tinh hoa thảo mộc &amp; Dược chất tinh khiết</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.botanicals.map((bot, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-white border border-[#C5A880]/30 text-xs text-[#27443B] font-medium shadow-xs">
                  🌿 {bot}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Recommended For & Sensory */}
        {service.recommendedFor && (
          <div className="p-4 rounded-xl bg-[#FAF2EE] border border-[#C5A880]/25 text-xs text-[#594E4A] space-y-2">
            <div>
              <span className="font-semibold text-[#211A17] block mb-0.5">Nền da chỉ định:</span>
              <p>{service.recommendedFor}</p>
            </div>
            {service.sensoryNotes && (
              <div className="pt-2 border-t border-[#C5A880]/20">
                <span className="font-semibold text-[#725B38] block mb-0.5">Trải nghiệm cảm quan:</span>
                <p className="italic">{service.sensoryNotes}</p>
              </div>
            )}
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#C5A880]/25 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#C5A880]/50 text-xs font-semibold text-[#594E4A] hover:bg-white transition-colors"
          >
            Đóng cửa sổ
          </button>
          
          <button
            onClick={() => {
              onBook(service);
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#27443B] hover:bg-[#1E362E] text-white text-xs font-semibold shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#E0C298]" />
            <span>Đặt lịch liệu trình này ngay</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
