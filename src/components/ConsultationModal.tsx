import React, { useState } from 'react';
import { X, Sparkles, Phone, CheckCircle2, HeartHandshake } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookDirectly: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  onBookDirectly,
}) => {
  const [concern, setConcern] = useState('Da mỏng đỏ, yếu mao mạch hoặc nhiễm Corticoid');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('Buổi sáng (09:00 - 11:30)');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const concernsList = [
    'Da mỏng đỏ, yếu mao mạch hoặc nhiễm Corticoid',
    'Nám, tàn nhang mảng & chân sâu dai dẳng',
    'Mụn ẩn, mụn viêm & thâm sẹo rỗ',
    'Da xỉn màu, khô ráp, thiếu sức sống',
    'Chùng nhão nọng cằm, rãnh nhăn lão hóa',
    'Đau mỏi cổ vai gáy, mất ngủ, căng thẳng kéo dài'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('Vui lòng điền đầy đủ họ tên và số điện thoại');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-[#211A17]/60 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="relative bg-[#FFF8F6] rounded-3xl border border-[#C5A880]/40 shadow-2xl w-full max-w-lg z-10 p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/80 text-[#594E4A] hover:text-[#211A17] hover:bg-white border border-[#C5A880]/30 transition-all focus:outline-none"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#27443B]/10 text-[#27443B] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-[#211A17]">
              Cảm ơn Quý Khách, {name}
            </h3>
            <p className="text-xs sm:text-sm text-[#594E4A] max-w-sm mx-auto leading-relaxed">
              Bác sĩ chuyên khoa da liễu Linh Đan đã tiếp nhận hồ sơ quan tâm về <strong className="text-[#211A17]">&ldquo;{concern}&rdquo;</strong> và sẽ kết nối trực tiếp trong khung giờ <strong className="text-[#211A17]">{preferredTime}</strong>.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#C5A880] text-xs font-semibold text-[#725B38]"
              >
                Đóng thông báo
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookDirectly();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#27443B] text-white text-xs font-semibold"
              >
                Đặt trước phòng VIP
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF2EE] text-[#725B38] text-[10px] font-bold tracking-wider uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>TƯ VẤN 1:1 CÙNG CHUYÊN GIA DA LIỄU</span>
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#211A17]">
                Nhận Phác Đồ Trị Liệu Miễn Phí
              </h3>
              <p className="text-xs text-[#594E4A] mt-1">
                Để lại nhu cầu để bác sĩ tư vấn giải pháp phù hợp nhất với cơ địa của bạn.
              </p>
            </div>

            {/* Concern options */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#725B38] mb-1.5">
                VẤN ĐỀ QUÝ KHÁCH QUAN TÂM NHẤT
              </label>
              <div className="space-y-1.5">
                {concernsList.map((item, idx) => (
                  <label
                    key={idx}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs cursor-pointer transition-colors ${
                      concern === item 
                        ? 'bg-[#27443B]/8 border-[#27443B] text-[#27443B] font-medium' 
                        : 'bg-white border-[#C5A880]/30 text-[#594E4A] hover:bg-[#FAF2EE]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="concern"
                      value={item}
                      checked={concern === item}
                      onChange={() => setConcern(item)}
                      className="accent-[#27443B]"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#725B38] mb-1">
                  HỌ TÊN
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Họ và tên"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C5A880]/40 text-xs text-[#211A17] bg-white focus:outline-none focus:border-[#27443B]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#725B38] mb-1">
                  SỐ ĐIỆN THOẠI
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="0988 xxx xxx"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C5A880]/40 text-xs text-[#211A17] bg-white focus:outline-none focus:border-[#27443B]"
                />
              </div>
            </div>

            {/* Preferred Time */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#725B38] mb-1">
                KHUNG GIỜ THUẬN TIỆN GỌI ĐIỆN TƯ VẤN
              </label>
              <select
                value={preferredTime}
                onChange={e => setPreferredTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#C5A880]/40 text-xs text-[#211A17] bg-white focus:outline-none focus:border-[#27443B]"
              >
                <option value="Buổi sáng (09:00 - 11:30)">Buổi sáng (09:00 - 11:30)</option>
                <option value="Buổi chiều (14:00 - 17:00)">Buổi chiều (14:00 - 17:00)</option>
                <option value="Buổi tối (18:30 - 20:30)">Buổi tối (18:30 - 20:30)</option>
              </select>
            </div>

            {error && <p className="text-xs text-red-500">{error}</p>}

            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#27443B] hover:bg-[#1E362E] text-white text-xs font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <HeartHandshake className="w-4 h-4 text-[#E0C298]" />
              <span>Gửi Yêu Cầu Tư Vấn Phác Đồ</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
