// WHO IS THAT? — RB MEN'S DAY 11/11
// 28 nhân vật theo đúng STT trong danh sách mới bạn cung cấp.
// Ảnh được gán theo mã qXX ở cột cuối của bảng (không phải STT nhân vật).
// Mỗi mã ảnh cần 2 file: assets/qNN_crop.jpg và assets/qNN_original.jpg.
// Trường question là câu hỏi riêng có thể tự sửa cho từng nhân vật.
// Trường role lưu danh hiệu Idol kèm tagline và hiển thị ở màn bật mí.
// Trò chơi tự chọn 3 phương án gây nhiễu từ 27 người còn lại.
// Tăng RB_QUESTION_PACK_VERSION mỗi khi cập nhật bộ dữ liệu để trình duyệt nhận bản mới.

window.RB_QUESTION_PACK_VERSION = 4;
window.RB_QUESTION_PACK = [
  {
    "id": 1,
    "person": "Anh Chiến",
    "department": "Ban GDK",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q07_crop.jpg",
    "original": "assets/q07_original.jpg",
    "role": "The Godfather - “Lời nói nhẹ, sức nặng ngàn cân.”"
  },
  {
    "id": 2,
    "person": "Tiến",
    "department": "Banca",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q02_crop.jpg",
    "original": "assets/q02_original.jpg",
    "role": "Choi San - “Vũ đạo khó mấy cũng cân, hợp đồng khó mấy cũng chốt.”"
  },
  {
    "id": 3,
    "person": "Anh Minh",
    "department": "TTAH",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q11_crop.jpg",
    "original": "assets/q11_original.jpg",
    "role": "Doctor strange - “Phù Thủy Tối Thượng của Dữ Liệu”"
  },
  {
    "id": 4,
    "person": "Anh Tùng",
    "department": "TTAH",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q04_crop.jpg",
    "original": "assets/q04_original.jpg",
    "role": "Sát thủ câu lệnh - “Một câu lệnh, triệu dòng dữ liệu phải phục tùng.”"
  },
  {
    "id": 5,
    "person": "Anh Trí",
    "department": "SPT&DVTTT",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q01_crop.jpg",
    "original": "assets/q01_original.jpg",
    "role": "Tổng tài thẻ - “Không cần sở hữu thẻ đen, anh tạo ra nó.”"
  },
  {
    "id": 6,
    "person": "Anh Hiếu",
    "department": "QLBH",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q03_crop.jpg",
    "original": "assets/q03_original.jpg",
    "role": "Tướng quân doanh số - “Mở cõi mới, chiếm thị phần, cắm cờ doanh số.”"
  },
  {
    "id": 7,
    "person": "Long_CTV",
    "department": "QLBH",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q20_crop.jpg",
    "original": "assets/q20_original.jpg",
    "role": "Em út quốc dân – “Tân binh vừa debut, doanh số đã lên top.”"
  },
  {
    "id": 8,
    "person": "Anh Sĩ",
    "department": "Ban GDK",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q05_crop.jpg",
    "original": "assets/q05_original.jpg",
    "role": "Thomas Shelby - “Ông trùm Rbirmingham”"
  },
  {
    "id": 9,
    "person": "Anh Long",
    "department": "Banca",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q15_crop.jpg",
    "original": "assets/q15_original.jpg",
    "role": "Mr Banca sĩ - “Bài nào cũng hit, hợp đồng bảo hiểm nào cũng chốt.”"
  },
  {
    "id": 10,
    "person": "Anh Tuấn",
    "department": "TTAH",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q09_crop.jpg",
    "original": "assets/q09_original.jpg",
    "role": "Anh trai Hieuthuhai - Anh Hieukhachhang"
  },
  {
    "id": 11,
    "person": "Phi Anh_CTV",
    "department": "TTAH",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q27_crop.jpg",
    "original": "assets/q27_original.jpg",
    "role": "Nam thần học đường - “Hiểu toán cao cấp dễ như khách hàng cao cấp”"
  },
  {
    "id": 12,
    "person": "Anh Chử",
    "department": "SPT&DVTTT",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q06_crop.jpg",
    "original": "assets/q06_original.jpg",
    "role": "Ông hoàng nhạc Việt - “Mỗi lần ra thẻ mới là một đêm liveshow cháy vé.”"
  },
  {
    "id": 13,
    "person": "Anh Dự",
    "department": "QLBH",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q10_crop.jpg",
    "original": "assets/q10_original.jpg",
    "role": "The Rock - “Vững như đá, doanh số không bao giờ lung lay”"
  },
  {
    "id": 14,
    "person": "Trường",
    "department": "QLBH",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q13_crop.jpg",
    "original": "assets/q13_original.jpg",
    "role": "Hoàng tử VPOP - “Ra mắt là cháy vé, triển khai là cháy chỉ tiêu.”"
  },
  {
    "id": 15,
    "person": "Anh Phong",
    "department": "Ban GDK",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q08_crop.jpg",
    "original": "assets/q08_original.jpg",
    "role": "Dương Quá - “Một tay lo trọn công việc khối”"
  },
  {
    "id": 16,
    "person": "Sunil",
    "department": "TTAH",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q12_crop.jpg",
    "original": "assets/q12_original.jpg",
    "role": "Vua báo - Wakandata Forever"
  },
  {
    "id": 17,
    "person": "Đức",
    "department": "TTAH",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q22_crop.jpg",
    "original": "assets/q22_original.jpg",
    "role": "Spider man - “Data rối như tơ vò, qua tay Người Nhện là gỡ sạch.”"
  },
  {
    "id": 18,
    "person": "Anh Dũng",
    "department": "SPT&DVTTT",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q14_crop.jpg",
    "original": "assets/q14_original.jpg",
    "role": "Nam vương sàn diễn - “Đi đến đâu, để lại một POS ở đó.”"
  },
  {
    "id": 19,
    "person": "Quang",
    "department": "SPT&DVTTT",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q21_crop.jpg",
    "original": "assets/q21_original.jpg",
    "role": "Main rapper - “Anh vừa rap, loa đã báo tiền về.”"
  },
  {
    "id": 20,
    "person": "Anh Đức",
    "department": "QLBH",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q26_crop.jpg",
    "original": "assets/q26_original.jpg",
    "role": "Siêu cầu thủ - “Đầu tháng đi bộ, cuối tháng vẫn đủ số.”"
  },
  {
    "id": 21,
    "person": "Duyệt_CTV",
    "department": "QLBH",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q16_crop.jpg",
    "original": "assets/q16_original.jpg",
    "role": "Thực tập sinh thần tượng - “Thực tập sinh khác tập 12 tiếng một ngày, mình cập nhật số 12 lần một ngày.”"
  },
  {
    "id": 22,
    "person": "Cường",
    "department": "TTAH",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q24_crop.jpg",
    "original": "assets/q24_original.jpg",
    "role": "Tổng tài “Trời lạnh rồi, drop bảng đó đi.”"
  },
  {
    "id": 23,
    "person": "Phúc",
    "department": "TTAH",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q17_crop.jpg",
    "original": "assets/q17_original.jpg",
    "role": "Sherlock Holmes - “Khách hàng chưa nói, hành vi đã khai hết.”"
  },
  {
    "id": 24,
    "person": "Lộc",
    "department": "SPT&DVTTT",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q19_crop.jpg",
    "original": "assets/q19_original.jpg",
    "role": "Main dancer Big bang - “Nhảy là cháy sân khấu, quẹt là cháy doanh số thẻ”"
  },
  {
    "id": 25,
    "person": "Tùng_CTV",
    "department": "SPT&DVTTT",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q18_crop.jpg",
    "original": "assets/q18_original.jpg",
    "role": "Hứa Quang Hán - “Muốn gặp anh, quẹt thẻ là được”"
  },
  {
    "id": 26,
    "person": "Anh Vũ",
    "department": "QLBH",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q23_crop.jpg",
    "original": "assets/q23_original.jpg",
    "role": "Top Gun - “Làm chủ cả vùng trời, chỉ tiêu nào cũng trong tầm ngắm.”"
  },
  {
    "id": 27,
    "person": "Anh Hòa",
    "department": "QLBH",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q25_crop.jpg",
    "original": "assets/q25_original.jpg",
    "role": "MC quốc dân - “Dẫn chương trình thì giữ nhịp sân khấu, dẫn vùng thì giữ nhịp chỉ tiêu.”"
  },
  {
    "id": 28,
    "person": "Thắng_CTV",
    "department": "QLBH",
    "question": "Can you recognize\\nthe person behind it?",
    "crop": "assets/q28_crop.jpg",
    "original": "assets/q28_original.jpg",
    "role": "Tiền đạo tốc độ - “Tốc độ tuổi trẻ: cả đội chưa kịp hỏi, số đã có trên bàn.”"
  }
];
