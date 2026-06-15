---
title: "Quick Sale"
type: concept
status: stable
tags: [concept, fintech, merchant, hardware, software]
created: 2026-06-15
updated: 2026-06-15
source: "[[raw/demo1/quick_sale_demo_script.md]]"
---

# Quick Sale

> **Tóm tắt 1 dòng:** Lõi nền tảng quản lý bán hàng (POS di động, sổ quỹ, và quản trị chuỗi) tích hợp thiết bị IoT loa báo thanh toán giúp số hóa các cửa hàng bán lẻ truyền thống.

---

## 📌 Nội dung chính

**Quick Sale** là lõi giải pháp bán hàng đa kênh và quản lý dòng tiền di động của VDS, được đóng gói và tùy biến làm nền tảng cho hệ sinh thái [[concepts/natcash-merchant|Natcash Merchant]] tại thị trường Haiti.

### 1. Kiến trúc Module chính của Quick Sale
- **Smart POS (Bán hàng di động):** Cho phép chọn nhanh sản phẩm/combo, quét mã vạch bằng camera, áp dụng chiết khấu linh hoạt bằng đồng Gourde (HTG) hoặc phần trăm (%).
- **Draft Order (Đơn tạm):** Hỗ trợ lưu trữ tạm thời giỏ hàng của khách hàng khi quầy đông đúc và phục hồi tức thì khi khách quay lại.
- **Smart Cash (Checkout tiền mặt thông minh):** Bộ máy tính tự động gợi ý mệnh giá tiền mặt khách đưa (500, 1.000, 2.000 HTG) và tính chính xác số tiền thối lại cho khách hàng để tránh thất thoát.
- **Cash Book (Sổ quỹ tự động):** Ghi nhận doanh số trực tuyến và cho phép ghi nhận các khoản chi nhỏ phát sinh hàng ngày tại cửa hàng.
- **Point Setup & Loyalty:** Cấu hình tỷ lệ tích điểm thưởng thành viên và quy đổi điểm thưởng thành mã giảm giá trực tiếp.
- **Chain Management (Quản lý chuỗi):** Tài khoản Admin tối cao giám sát thông tin chi tiết và đồng bộ danh mục sản phẩm (tối đa 20 danh mục) xuống tất cả các chi nhánh phụ (Sub-merchant như Delmas, Pétion-Ville).

### 2. Tích hợp thiết bị ngoại vi IoT
- Liên kết chặt chẽ với loa báo giao dịch [[concepts/soundbox|Natcash Speaker]] thông qua kết nối 4G Natcom hoặc WiFi, tự động đọc to số tiền giao dịch thành công dưới 2 giây bằng tiếng Creole/Pháp.

---

## 💡 Điểm mấu chốt

- **Tự động hóa thanh toán & đối soát:** Triệt tiêu hoàn toàn các sai sót tính toán tiền mặt Gourde và gian lận hóa đơn giả (fake bill) nhờ loa báo tức thì.
- **Sẵn sàng Go-to-market:** Lõi phần mềm đã được thực chiến tại Việt Nam và 7 thị trường quốc tế của Viettel Global, chỉ mất 1-2 tháng để tùy biến ngôn ngữ (tiếng Creole/Pháp) và luồng tiền chuẩn BRH.

---

## ⚠️ Lưu ý / Mâu thuẫn

- Giao diện phải được tối giản hết mức và sử dụng hình ảnh/giọng nói để hỗ trợ những tiểu thương có tỷ lệ mù chữ cao tại các chợ của Haiti.

---

## 🔗 Liên kết liên quan

- [[concepts/natcash-merchant]]
- [[concepts/soundbox]]
- [[synthesis/natcash-merchant-ecosystem]]
- [[synthesis/quick-sale-demo-script]]

---

## 📚 Tham chiếu nguồn

- [[raw/demo1/quick_sale_demo_script.md]] — Kịch bản demo thực chiến nền tảng Quick Sale cho Ban Giám đốc Natcash Natcom (06/2026).
- [[raw/2026-06-14-VDS Quik Sale-BẢN ĐỀ XUẤT GIẢI PHÁP KINH DOANH  NATCASH MERCHANT.md]] — Bản đề xuất giải pháp kinh doanh của VDS (06/2026).

---

*Trang này được tạo/cập nhật tự động bởi Antigravity 2.0 | llm-wiki skill*
