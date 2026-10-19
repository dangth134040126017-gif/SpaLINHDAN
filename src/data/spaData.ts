export interface TreatmentService {
  id: string;
  groupNumber: string;
  category: 'care' | 'recovery' | 'tech' | 'herbal';
  categoryLabel: string;
  title: string;
  tagline: string;
  duration: string;
  description: string;
  bullets: string[];
  ritualSteps?: string[];
  botanicals?: string[];
  recommendedFor?: string;
  sensoryNotes?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  age: number;
  rating: number;
  content: string;
  avatar: string;
  initials: string;
  serviceUsed: string;
}

export interface ValuePillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export const TREATMENT_CATEGORIES = [
  { key: 'all', label: 'TẤT CẢ DANH MỤC (8)' },
  { key: 'care', label: 'CHĂM SÓC & CĂNG BÓNG' },
  { key: 'recovery', label: 'PHỤC HỒI & ĐẶC TRỊ' },
  { key: 'tech', label: 'CÔNG NGHỆ CAO & MESO' },
  { key: 'herbal', label: 'DƯỠNG SINH THẢO MỘC' },
] as const;

export const TREATMENT_SERVICES: TreatmentService[] = [
  {
    id: 'group-01',
    groupNumber: 'NHÓM 01',
    category: 'care',
    categoryLabel: 'Chăm sóc & Căng bóng',
    title: 'Chăm Sóc Da & Thư Giãn',
    tagline: 'Thanh lọc tế bào và xoa dịu thần kinh diện mạo',
    duration: '75 - 90 PHÚT',
    description: 'Thanh lọc tạp chất bề mặt, làm dịu căng thẳng hệ thần kinh cơ mặt bằng tinh chất thảo mộc tinh khiết.',
    bullets: [
      'Chăm sóc da cơ bản thanh lọc',
      'Chăm sóc da nâng cao chuyên sâu',
      'Liệu trình Detox thanh lọc da đa tầng',
      'Liệu trình hút chì, đào thải độc tố sâu'
    ],
    ritualSteps: [
      'Nghi thức ngâm chân hoa hồng & thưởng thức trà thảo mộc sấy lạnh',
      'Tẩy trang sinh học dịu nhẹ và xông hơi tinh dầu tràm gió',
      'Tẩy tế bào sừng enzym đu đủ non không gây kích ứng',
      'Hút bã nhờn chân không và thải độc chì tầng biểu bì',
      'Massage ấn huyệt dẫn lưu hệ bạch huyết vùng mặt và cổ',
      'Đắp mặt nạ đất sét khoáng hữu cơ & chiếu ánh sáng sinh học Biolight'
    ],
    botanicals: ['Hoa cúc La Mã', 'Bạch trà thượng hạng', 'Chiết xuất rau má tuyết', 'Dầu hạt nho ép lạnh'],
    recommendedFor: 'Khách hàng có làn da bít tắc, mệt mỏi do khói bụi, căng thẳng văn phòng và thiếu độ sáng tự nhiên.',
    sensoryNotes: 'Hương thơm cam bergamot & hoa oải hương dịu ngọt, kết hợp âm nhạc thiền định 432Hz.'
  },
  {
    id: 'group-02',
    groupNumber: 'NHÓM 02',
    category: 'care',
    categoryLabel: 'Chăm sóc & Căng bóng',
    title: 'Trắng Sáng & Căng Bóng Da',
    tagline: 'Đánh thức làn da mọng sương trong suốt',
    duration: '90 PHÚT',
    description: 'Đánh thức làn da mọng sương với hoạt chất truyền trắng sinh học kết hợp công nghệ điện di lạnh tế bào.',
    bullets: [
      'Cấy trắng AHOHWUA chuyên sâu',
      'Cấy trắng VIP phủ bóng pha lê',
      'Nano trắng sáng, căng bóng mọng nước',
      'Combo tái sinh da mịn & se khít lỗ chân lông'
    ],
    ritualSteps: [
      'Làm sạch sâu kép với gel rửa mặt acid lactic dịu nhẹ',
      'Phun sương oxy tươi tinh khiết nồng độ cao 98%',
      'Cấy tinh chất Glutathione & Niacinamide tinh khiết AHOHWUA',
      'Điện di lạnh Cryo Stamp khóa dưỡng chất tại nhiệt độ -10°C',
      'Mặt nạ pha lê thủy phân làm dịu và căng bóng mọng nước',
      'Khóa ẩm bằng nhũ tương tơ tằm sinh học'
    ],
    botanicals: ['Hoa anh đào núi tuyết', 'Chiết xuất ngọc trai biển sâu', 'Tảo xoắn Spirulina tươi', 'Nước hoa hồng Damascus'],
    recommendedFor: 'Nền da xỉn màu, không đều màu, cháy nắng hoặc chuẩn bị tham dự các sự kiện trang trọng.',
    sensoryNotes: 'Hương hoa linh lan thuần khiết cùng cảm giác tươi mát thư thái tuyệt đối.'
  },
  {
    id: 'group-03',
    groupNumber: 'NHÓM 03',
    category: 'recovery',
    categoryLabel: 'Phục hồi & Đặc trị',
    title: 'Phục Hồi Da Tổn Thương',
    tagline: 'Tái tạo màng đáy sinh học và mao mạch',
    duration: '80 - 100 PHÚT',
    description: 'Tái thiết lập hàng rào bảo vệ sinh học, dập tắt tình trạng giãn mao mạch và nuôi dưỡng nền da mỏng yếu.',
    bullets: [
      'Gói phục hồi da nhiễm Corticoid & kem trộn',
      'Liệu trình Unstress cấp ẩm sinh học phục hồi',
      'Cấy huyết tương giàu tiểu cầu (PRP) tự thân'
    ],
    ritualSteps: [
      'Thăm khám soi da mật độ mao mạch với hệ thống Visia 3D',
      'Rửa mặt trung hòa độc tố bằng nước khoáng nhiệt thermal water',
      'Liệu pháp làm dịu khẩn cấp Unstress Probiotic Solution',
      'Điện chuyển ion dưỡng chất Ceramide & Panthenol B5 nồng độ y khoa',
      'Kích hoạt yếu tố tăng trưởng biểu bì EGF tự nhiên',
      'Chiếu ánh sáng vàng bước sóng 590nm gia cố thành mạch'
    ],
    botanicals: ['Rau má Asiatica nồng độ cao', 'Cúc vạn thọ hữu cơ', 'Dầu chùm ngây Moringa', 'Rễ cây cam thảo Ural'],
    recommendedFor: 'Da từng lạm dụng corticoid, kem lột tẩy, da sau laser mỏng đỏ, nóng rát khi ra nắng hoặc nổi gân máu.',
    sensoryNotes: 'Hương gỗ đàn hương trầm ấm, mang lại cảm giác an tâm và chữa lành sâu sắc.'
  },
  {
    id: 'group-04',
    groupNumber: 'NHÓM 04',
    category: 'tech',
    categoryLabel: 'Công nghệ cao & Meso',
    title: 'Trẻ Hóa & Nâng Cơ Cao Cấp',
    tagline: 'Tái sinh mạng lưới nâng đỡ tầng SMAS',
    duration: '90 - 120 PHÚT',
    description: 'Tác động nhiệt sóng vi điểm tái sinh mạng lưới collagen chùng nhão, định hình đường nét thon gọn.',
    bullets: [
      'Liệu trình Hifu nâng cơ V-line, xóa nhăn vi điểm',
      'Liệu trình Thermage FLX săn chắc đàn hồi',
      'Phối hợp đỉnh cao trẻ hóa Hifu & Thermage'
    ],
    ritualSteps: [
      'Định vị các vector lão hóa khuôn mặt với chuyên gia thẩm mỹ',
      'Ủ tê y khoa nồng độ tiêu chuẩn, tạo cảm giác êm ái trọn vẹn',
      'Bắn xung Hifu hội tụ chính xác tầng cơ nông SMAS độ sâu 4.5mm',
      'Tác động nhiệt đơn cực Thermage siết chặt sợi elastin bề mặt',
      'Đắp mặt nạ tế bào gốc vàng 24K làm dịu tức thì',
      'Thoa kem tái tạo chống nắng quang phổ rộng y khoa'
    ],
    botanicals: ['Vàng non 24K tinh khiết', 'Chiết xuất nấm tuyết', 'Dầu hạt mâm xôi đỏ rừng', 'Nhựa cây huyết rồng'],
    recommendedFor: 'Khách hàng có nếp nhăn đuôi mắt, rãnh cười sâu, da chùng nhão nọng cằm, mong muốn đường nét V-line tự nhiên không xâm lấn.',
    sensoryNotes: 'Không gian tĩnh lặng với tinh dầu nhũ hương Frankincense sang trọng quý phái.'
  },
  {
    id: 'group-05',
    groupNumber: 'NHÓM 05',
    category: 'tech',
    categoryLabel: 'Công nghệ cao & Meso',
    title: 'Meso Therapy Chuyên Sâu',
    tagline: 'Vi điểm tinh chất vàng tái cấu trúc tế bào',
    duration: '60 - 75 PHÚT',
    description: 'Đưa trực tiếp tổ hợp hoạt chất vàng vào tầng trung bì, tái cấu trúc mật độ tế bào nhanh chóng và an toàn.',
    bullets: [
      'Meso căng bóng Glass Skin chuẩn Hàn',
      'Meso trắng da sinh học (Oxy, Exosome, Illumia)',
      'Meso kích thích & phục hồi nang tóc',
      'Meso nuôi dưỡng bờ môi hồng hào mềm mịn'
    ],
    ritualSteps: [
      'Sát khuẩn da vô trùng tuyệt đối theo quy trình bệnh viện quốc tế',
      'Mix phức hợp tinh chất Exosome tinh chiết cùng Hyaluronic Acid liên kết chéo',
      'Ứng dụng súng tiêm vi điểm tự động kiểm soát liều lượng và độ sâu chính xác từng micron',
      'Lăn kim nhẹ kích hoạt vi tuần hoàn ngoại vi nếu cần',
      'Điện di lạnh Cryo làm dịu và dập tắt sưng đỏ trong 15 phút',
      'Bôi gel tế bào gốc kích thích tái tạo da tức thì'
    ],
    botanicals: ['Tế bào gốc hoa phong lan', 'Ngoại bào Exosome thực vật', 'Hyaluronic Acid đa phân tử', 'Peptide đồng sinh học'],
    recommendedFor: 'Làn da mất nước nghiêm trọng, lỗ chân lông to, nếp nhăn li ti hoặc môi thâm khô ráp.',
    sensoryNotes: 'Cảm giác chăm sóc da cao cấp, thư giãn trên đệm lông vũ ấm áp.'
  },
  {
    id: 'group-06',
    groupNumber: 'NHÓM 06',
    category: 'recovery',
    categoryLabel: 'Phục hồi & Đặc trị',
    title: 'Thay Da Sinh Học (Peel)',
    tagline: 'Đào thải sừng hóa và tái sinh chu kỳ biểu bì',
    duration: '60 PHÚT',
    description: 'Đào thải sừng hóa già cỗi, thúc đẩy chu trình luân chuyển tế bào mới với nồng độ acid hữu cơ kiểm soát.',
    bullets: [
      'Peel trắng da & tái tạo trẻ hóa toàn diện',
      'Peel da căng bóng đa tầng ẩm mượt',
      'Peel thu nhỏ lỗ chân lông to cùng dầu',
      'Peel chuyên biệt cho da mụn & thâm nám',
      'Phác đồ Peel thải độc Corticoid an toàn'
    ],
    ritualSteps: [
      'Đánh giá độ dày sừng biểu bì và kiểm tra chỉ số pH da',
      'Làm sạch sâu và cân bằng độ ẩm bằng dung dịch tiền xử lý',
      'Quét lớp acid hữu cơ (AHA/BHA/Mandellic/TCA chuẩn y khoa) theo từng vùng',
      'Quan sát phản ứng biểu mô và trung hòa acid đúng thời điểm bằng dung dịch chuyên dụng',
      'Chườm gạc lạnh chứa muối khoáng sinh lý làm dịu tế bào',
      'Đắp màng sinh học Bio-Cellulose giữ ẩm tầng sâu'
    ],
    botanicals: ['Acid hoa quả hữu cơ tự nhiên', 'Vỏ cây liễu trắng Salicin', 'Men rượu gạo Sake', 'Chiết xuất lá trà xanh cổ thụ'],
    recommendedFor: 'Da sần sùi thô ráp, bít tắc mụn ẩn kéo dài, thâm sau mụn và đốm nâu sắc tố nông.',
    sensoryNotes: 'Hương bạc hà mát lạnh sảng khoái đánh thức mọi giác quan.'
  },
  {
    id: 'group-07',
    groupNumber: 'NHÓM 07',
    category: 'recovery',
    categoryLabel: 'Phục hồi & Đặc trị',
    title: 'Điều Trị Chuyên Sâu',
    tagline: 'Phác đồ da liễu cam kết bảo trợ kết quả bằng văn bản',
    duration: 'THEO PHÁC ĐỒ',
    description: 'Ứng dụng phác đồ y khoa với cam kết bảo trợ kết quả bằng văn bản, giải quyết dứt điểm các bệnh lý da dai dẳng.',
    bullets: [
      'Điều trị dứt điểm mụn y khoa & thâm mụn',
      'Phác đồ trị nám, tàn nhang mảng & chân sâu',
      'Trị sẹo rỗ công nghệ vi điểm Fractional',
      'Phục hồi lỗ chân lông thô & trẻ hóa toàn diện'
    ],
    ritualSteps: [
      'Hội chẩn cùng bác sĩ chuyên khoa da liễu và lập phác đồ cá nhân hóa',
      'Thực hiện các bước lấy nhân mụn chuẩn y khoa bằng dụng cụ dùng 1 lần',
      'Bắn laser vi điểm Fractional CO2 tái cấu trúc đáy sẹo',
      'Tác động bước sóng triệt tiêu hắc sắc tố Melanin tầng sâu',
      'Thoa huyết thanh kháng viêm độc quyền Linh Đan',
      'Cấp phát đơn sản phẩm điều trị tại nhà và hẹn lịch theo dõi định kỳ'
    ],
    botanicals: ['Tinh dầu tràm trà Úc', 'Cao hoàng liên kháng viêm', 'Tinh chất rau má ngải cứu cổ truyền', 'Nước cất hoa hồng bạch'],
    recommendedFor: 'Mụn bọc, mụn viêm nặng, nám chân sâu, sẹo lõm lâu năm đã điều trị nhiều nơi không khỏi.',
    sensoryNotes: 'Sự chuyên nghiệp, sạch sẽ chuẩn mực bệnh viện kết hợp cùng phong cách tiếp đón ấm áp ân cần.'
  },
  {
    id: 'group-08',
    groupNumber: 'NHÓM 08',
    category: 'herbal',
    categoryLabel: 'Dưỡng sinh thảo mộc',
    title: 'Gội Đầu & Dưỡng Sinh',
    tagline: 'Khai thông huyệt đạo và an thần sâu',
    duration: '75 - 105 PHÚT',
    description: 'Nghi thức khai mở kinh lạc, kết hợp thảo mộc nấu tươi cùng kỹ thuật bấm huyệt giải tỏa ách tắc vùng đầu cổ.',
    bullets: [
      'Gội đầu thảo dược thư giãn thường',
      'Gội đầu cặp đôi / bạn thân an tĩnh',
      'Gội dưỡng sinh chuyên sâu: Khai thông huyệt đạo',
      'Massage bấm huyệt cổ vai gáy & xông thảo mộc',
      'Canh thuốc cổ truyền nuôi dưỡng nang tóc'
    ],
    ritualSteps: [
      'Thưởng thức trà dưỡng nhan táo đỏ kỷ tử tại sảnh chờ',
      'Khai huyệt kinh lạc vùng đầu bằng lược gỗ đàn hương cổ thụ',
      'Gội sạch 2 lần bằng nước bồ kết, hương nhu, cỏ mần trầu nấu thủ công trong ngày',
      'Ủ dưỡng tóc bằng tinh dầu vỏ bưởi kết hợp xông hơi vòm nước ấm',
      'Massage trị liệu chuyên sâu bấm huyệt Phong Trì, Kiên Tỉnh, Bách Hội',
      'Sấy khô ấm chân tóc và thoa serum thảo mộc kích mọc tóc bồng bềnh'
    ],
    botanicals: ['Trái bồ kết rừng nướng thơm', 'Hương nhu tía', 'Vỏ bưởi da xanh', 'Cỏ mần trầu', 'Lá chanh sả tươi'],
    recommendedFor: 'Người bị đau đầu kinh niên, mất ngủ, căng cứng cổ vai gáy do ngồi máy tính nhiều, rụng tóc xơ rối.',
    sensoryNotes: 'Hương thảo mộc bồ kết ấm nồng đặc trưng phương Đông, âm thanh róc rách của thác nước gội ấm.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Chị Mai Phương',
    role: 'Doanh nhân',
    age: 36,
    rating: 5,
    content: 'Ngay từ khi bước vào, hương thảo mộc và tiếng nhạc thiền đã khiến mọi mệt mỏi tan biến. Liệu trình cấy Meso và chăm sóc phục hồi ở đây thực sự đỉnh cao. Kỹ thuật viên thao tác cực kỳ nhẹ nhàng, làn da căng bóng mịn màng rõ rệt sau lần đầu.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&h=240&q=80',
    initials: 'MP',
    serviceUsed: 'Meso Therapy & Detox Sanctuary'
  },
  {
    id: 'testi-2',
    name: 'Chị Hoàng Yến',
    role: 'Chuyên viên Tài chính',
    age: 29,
    rating: 5,
    content: 'Không gian Spa Linh Đan ấm áp, tinh tế và riêng tư tuyệt đối. Mình đã trải nghiệm gói Gội dưỡng sinh kết hợp massage cổ vai gáy, tay nghề các bạn rất chắc và am hiểu huyệt đạo. Giấc ngủ của mình sâu hơn hẳn.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&h=240&q=80',
    initials: 'HY',
    serviceUsed: 'Gội Dưỡng Sinh Khai Thông Kinh Lạc'
  },
  {
    id: 'testi-3',
    name: 'Chị Thanh Hằng',
    role: 'Giảng viên Đại học',
    age: 42,
    rating: 5,
    content: 'Mình từng rất tự ti vì da nhiễm corticoid sau thời gian dài dùng mỹ phẩm trôi nổi. Liệu trình phục hồi da tại Linh Đan đã tái sinh làn da mình ngoạn mục. Rất khuyên các chị em nên đến trải nghiệm!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&h=240&q=80',
    initials: 'TH',
    serviceUsed: 'Phục Hồi Da Nhiễm Corticoid & Unstress'
  }
];

export const VALUE_PILLARS: ValuePillar[] = [
  {
    id: 'pillar-1',
    title: 'Tôn Trọng Nét Đẹp Độc Bản',
    description: 'Phác đồ chăm sóc chuyên biệt được thiết lập dựa trên tình trạng biểu mô và lối sống của từng khách hàng.',
    iconName: 'fingerprint',
    badge: 'Độc Bản'
  },
  {
    id: 'pillar-2',
    title: 'Dược Mỹ Phẩm Châu Âu',
    description: 'Cam kết 100% nguồn gốc xuất xứ nguyên bản, tinh chất kiểm định gắt gao với độ lành tính tối ưu.',
    iconName: 'shield',
    badge: 'Châu Âu'
  },
  {
    id: 'pillar-3',
    title: 'Công Nghệ Đột Phá',
    description: 'Hệ thống trang thiết bị chuyển giao công nghệ cao được chứng nhận chất lượng nghiêm ngặt bởi FDA & CE.',
    iconName: 'sparkles',
    badge: 'FDA & CE'
  },
  {
    id: 'pillar-4',
    title: 'Thư Thái Đích Thực',
    description: 'Liệu pháp mùi hương tinh dầu organic thượng hạng kết hợp âm nhạc tần số chữa lành giúp thanh lọc toàn diện.',
    iconName: 'lotus',
    badge: 'Organic'
  }
];

export const TRUST_METRICS = [
  {
    label: '100% Chuyên gia',
    sub: 'Chuẩn y khoa da liễu',
    icon: 'badge-check'
  },
  {
    label: 'Công nghệ quốc tế',
    sub: 'Chuyển giao chính hãng',
    icon: 'award'
  },
  {
    label: 'Liệu trình riêng biệt',
    sub: 'Cá nhân hóa phác đồ',
    icon: 'sliders'
  },
  {
    label: 'Không gian 5 sao',
    sub: 'Thư thái tuyệt đối',
    icon: 'sparkles'
  }
];
