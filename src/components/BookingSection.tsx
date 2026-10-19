import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Sparkles, 
  Gift, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  User,
  MessageSquare
} from 'lucide-react';
import { TREATMENT_SERVICES, TreatmentService } from '../data/spaData';

interface BookingSectionProps {
  prefilledService?: TreatmentService | null;
  onClearPrefill?: () => void;
}

export interface BookingSubmission {
  code: string;
  fullName: string;
  phone: string;
  serviceName: string;
  date: string;
  timeSlot: string;
  notes: string;
  timestamp: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  prefilledService,
  onClearPrefill,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState(TREATMENT_SERVICES[0].id);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('09:00 - Sáng sớm thanh tịnh');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<BookingSubmission | null>(null);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Sync prefilled service
  useEffect(() => {
    if (prefilledService) {
      setSelectedServiceId(prefilledService.id);
    }
  }, [prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Vui lòng nhập họ và tên của Quý Khách';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại để chuyên viên liên hệ xác nhận';
    } else if (!/(0[3|5|7|8|9])+([0-9]{8})\b/.test(phone.replace(/\s+/g, ''))) {
      // Basic VN phone check or friendly format
      if (phone.length < 9) {
        newErrors.phone = 'Số điện thoại không hợp lệ (tối thiểu 10 chữ số)';
      }
    }
    if (!date) {
      newErrors.date = 'Vui lòng chọn ngày hẹn mong muốn';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const serviceObj = TREATMENT_SERVICES.find(s => s.id === selectedServiceId) || TREATMENT_SERVICES[0];
    const bookingCode = `LD-${Math.floor(1000 + Math.random() * 9000)}-VIP`;

    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmation({
        code: bookingCode,
        fullName: fullName.trim(),
        phone: phone.trim(),
        serviceName: serviceObj.title,
        date,
        timeSlot,
        notes: notes.trim(),
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      });
      if (onClearPrefill) onClearPrefill();
    }, 600);
  };

  const handleResetForm = () => {
    setConfirmation(null);
    setFullName('');
    setPhone('');
    setNotes('');
  };

  return (
    <section id="booking" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#725B38] font-sans block mb-3">
            ĐẶT LỊCH HẸN TRẢI NGHIỆM
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#211A17] font-normal leading-tight text-balance mb-4">
            Khởi Đầu Hành Trình Đánh Thức <br className="hidden sm:inline" />
            <span className="italic text-[#27443B]">Vẻ Đẹp Thuần Khiết</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#594E4A] leading-relaxed">
            Đặt lịch trước để được chuẩn bị phòng riêng VIP và phục vụ chu đáo nhất!
          </p>
        </div>

        {/* 2-Column Booking Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#C5A880]/30 shadow-md p-6 sm:p-10 relative">
            
            {confirmation ? (
              /* Success / Voucher State */
              <div className="space-y-6 text-center py-4">
                <div className="w-16 h-16 rounded-full bg-[#27443B]/10 text-[#27443B] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-[#725B38] block mb-1">
                    ĐẶT LỊCH THÀNH CÔNG · PHÒNG VIP ĐÃ SẴN SÀNG
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-[#211A17]">
                    Kính chào Quý Khách, {confirmation.fullName}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#594E4A] mt-2 max-w-md mx-auto">
                    Spa Linh Đan đã tiếp nhận thông tin đặt lịch hẹn của Quý Khách. Chuyên viên đón tiếp sẽ liên hệ qua số điện thoại <span className="font-semibold text-[#211A17]">{confirmation.phone}</span> để xác nhận trước khi đến.
                  </p>
                </div>

                {/* Voucher Card */}
                <div className="p-6 rounded-xl bg-[#FAF2EE] border border-[#C5A880]/30 text-left space-y-3">
                  <div className="flex items-center justify-between border-b border-[#C5A880]/20 pb-2">
                    <span className="text-xs text-[#725B38] uppercase font-semibold">Mã Lịch Hẹn VIP</span>
                    <span className="text-sm font-mono font-bold text-[#27443B] tracking-wider">{confirmation.code}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[#594E4A]/70 block">Dịch vụ:</span>
                      <span className="font-medium text-[#211A17]">{confirmation.serviceName}</span>
                    </div>
                    <div>
                      <span className="text-[#594E4A]/70 block">Thời gian:</span>
                      <span className="font-medium text-[#211A17]">{confirmation.timeSlot}</span>
                    </div>
                    <div>
                      <span className="text-[#594E4A]/70 block">Ngày hẹn:</span>
                      <span className="font-medium text-[#211A17]">{confirmation.date}</span>
                    </div>
                    <div>
                      <span className="text-[#594E4A]/70 block">Địa chỉ tiếp đón:</span>
                      <span className="font-medium text-[#211A17]">Xóm 7, Lai Thành, Ninh Bình</span>
                    </div>
                  </div>
                  {confirmation.notes && (
                    <div className="pt-2 border-t border-[#C5A880]/15 text-xs text-[#594E4A]">
                      <span className="font-medium text-[#211A17]">Ghi chú riêng:</span> {confirmation.notes}
                    </div>
                  )}
                </div>

                <div className="p-3 bg-[#27443B]/5 rounded-lg text-xs text-[#27443B] flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C5A880]" />
                  <span>Trà hoa sấy lạnh &amp; khăn ướp hương cam sả sẽ được chuẩn bị sẵn khi Quý Khách tới</span>
                </div>

                <div className="flex justify-center gap-3 pt-2">
                  <button
                    onClick={handleResetForm}
                    className="px-6 py-2.5 rounded-full border border-[#C5A880] text-[#725B38] hover:bg-[#FAF2EE] text-xs font-semibold"
                  >
                    Đặt thêm lịch khác
                  </button>
                  <a
                    href="tel:0988668888"
                    className="px-6 py-2.5 rounded-full bg-[#27443B] text-white hover:bg-[#1E362E] text-xs font-semibold flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Gọi xác nhận ngay</span>
                  </a>
                </div>
              </div>
            ) : (
              /* Regular Booking Form matching the screenshot */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#211A17] mb-1">
                    Phiếu Đăng Ký Trị Liệu VIP
                  </h3>
                  <p className="text-xs sm:text-sm text-[#594E4A]">
                    Vui lòng điền thông tin để chuyên viên chuẩn bị phòng khám da và thảo mộc đón tiếp.
                  </p>
                </div>

                {/* Row 1: Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#725B38] mb-1.5">
                      HỌ VÀ TÊN KHÁCH HÀNG <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        placeholder="VD: Nguyễn Thị Thu Hà"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#211A17] placeholder:text-[#594E4A]/40 bg-[#FFF8F6]/60 focus:bg-white focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-[#C5A880]/40 focus:border-[#27443B]'
                        }`}
                      />
                    </div>
                    {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#725B38] mb-1.5">
                      SỐ ĐIỆN THOẠI LIÊN HỆ <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="VD: 0988 xxx xxx"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#211A17] placeholder:text-[#594E4A]/40 bg-[#FFF8F6]/60 focus:bg-white focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-[#C5A880]/40 focus:border-[#27443B]'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Row 2: Selected Service */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#725B38] mb-1.5">
                    DỊCH VỤ QUAN TÂM
                  </label>
                  <select
                    value={selectedServiceId}
                    onChange={e => setSelectedServiceId(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#C5A880]/40 text-sm text-[#211A17] bg-[#FFF8F6]/60 focus:bg-white focus:border-[#27443B] focus:outline-none cursor-pointer"
                  >
                    {TREATMENT_SERVICES.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.groupNumber} - {service.title} ({service.duration})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 3: Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#725B38] mb-1.5">
                      NGÀY HẸN MONG MUỐN <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={e => setDate(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#211A17] bg-[#FFF8F6]/60 focus:bg-white focus:outline-none ${
                        errors.date ? 'border-red-400' : 'border-[#C5A880]/40 focus:border-[#27443B]'
                      }`}
                    />
                    {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#725B38] mb-1.5">
                      KHUNG GIỜ MONG MUỐN
                    </label>
                    <select
                      value={timeSlot}
                      onChange={e => setTimeSlot(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#C5A880]/40 text-sm text-[#211A17] bg-[#FFF8F6]/60 focus:bg-white focus:border-[#27443B] focus:outline-none cursor-pointer"
                    >
                      <option value="09:00 - Sáng thứ hai / Đầu tuần an tĩnh">09:00 - Sáng thứ hai</option>
                      <option value="10:30 - Buổi trưa an lành">10:30 - Buổi trưa an lành</option>
                      <option value="14:00 - Đầu giờ chiều thư thái">14:00 - Đầu giờ chiều</option>
                      <option value="16:00 - Hoàng hôn thư giãn">16:00 - Chiều thư thái</option>
                      <option value="18:00 - Khung giờ hoàng hôn trị liệu">18:00 - Buổi tối an yên</option>
                      <option value="19:30 - Khung giờ dưỡng sinh đêm">19:30 - Buổi tối muộn</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Notes Textarea */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#725B38] mb-1.5">
                    GHI CHÚ TÌNH TRẠNG DA HOẶC MONG MUỐN RIÊNG
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    placeholder="Chia sẻ thêm về tình trạng da nhạy cảm, vùng cơ đau mỏi hoặc yêu cầu phòng riêng cặp đôi..."
                    className="w-full px-4 py-3 rounded-xl border border-[#C5A880]/40 text-sm text-[#211A17] placeholder:text-[#594E4A]/40 bg-[#FFF8F6]/60 focus:bg-white focus:border-[#27443B] focus:outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-[#27443B] hover:bg-[#1E362E] text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-[#27443B] focus:ring-offset-2"
                >
                  <Calendar className="w-4 h-4 text-[#E0C298]" />
                  <span>{isSubmitting ? 'Đang chuẩn bị phòng VIP...' : 'Xác Nhận Đặt Lịch Hẹn Trải Nghiệm'}</span>
                </button>

                <p className="text-[11px] text-center text-[#594E4A]/75 italic">
                  * Chúng tôi cam kết bảo mật tuyệt đối thông tin cá nhân và lịch trình trị liệu của Quý Khách.
                </p>
              </form>
            )}

          </div>

          {/* Right Column: Branch Info & Special Privileges */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Branch Info */}
            <div className="bg-[#FAF2EE] rounded-2xl border border-[#C5A880]/30 p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-[#211A17]">
                <MapPin className="w-5 h-5 text-[#27443B]" />
                <h3 className="font-serif text-lg font-medium">Thông Tin Chi Nhánh</h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#594E4A]">
                <div>
                  <span className="font-semibold text-[#211A17] block mb-0.5">Địa chỉ Sanctuary:</span>
                  <p>Xóm 7, Lai Thành, Kim Sơn, Ninh Bình</p>
                </div>

                <div>
                  <span className="font-semibold text-[#211A17] block mb-0.5">Hotline tư vấn 24/7:</span>
                  <a href="tel:0988668888" className="text-[#27443B] font-semibold hover:underline tabular-nums">
                    0988.xxx.xxx
                  </a>
                </div>

                <div>
                  <span className="font-semibold text-[#211A17] block mb-0.5">Giờ mở cửa đón tiếp:</span>
                  <p>08:30 – 20:30 (Tất cả các ngày trong tuần, bao gồm cả ngày lễ &amp; Tết)</p>
                </div>

                <div className="pt-3 border-t border-[#C5A880]/20 space-y-2">
                  <span className="font-bold text-[10px] tracking-widest uppercase text-[#725B38] block">
                    KÊNH HỖ TRỢ TRỰC TUYẾN
                  </span>
                  <div className="flex flex-col gap-1.5 text-xs">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#594E4A] hover:text-[#27443B]">
                      <span>🌐 Fanpage:</span>
                      <span className="font-medium underline">fb.com/spalinhdan.official</span>
                    </a>
                    <div className="flex items-center gap-2 text-[#594E4A]">
                      <span>💬 Zalo tư vấn phác đồ:</span>
                      <span className="font-medium tabular-nums text-[#211A17]">0988.668.xxx</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Special Privileges */}
            <div className="bg-white rounded-2xl border border-[#C5A880]/30 p-6 sm:p-8 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#27443B]/8 flex items-center justify-center shrink-0">
                  <Gift className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-medium text-[#211A17] mb-2">
                    Đặc Quyền Dành Cho Bạn
                  </h4>
                  <p className="text-xs sm:text-sm text-[#594E4A] leading-relaxed">
                    Đội ngũ chuyên viên Linh Đan luôn chuẩn bị trà hoa sấy lạnh, khăn ấm hương cam hương và phòng trị liệu riêng tư tiêu chuẩn 5 sao để bạn tận hưởng những giây phút thả lỏng trọn vẹn.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
