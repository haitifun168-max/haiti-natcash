---
title: "Soundbox"
type: concept
status: stable
tags: [concept, hardware, fintech, soundbox, payment-notification]
created: 2026-06-14
updated: 2026-06-14
source: "[[raw/natcash-merchant/BẢN_ĐỀ_XUẤT_GIẢI_PHÁP_KINH_DOANH_NATCASH_MERCHANT.docx]]"
---

# Soundbox

> **Tóm tắt 1 dòng:** Thiết bị phần cứng loa thông báo thanh toán bằng giọng nói tức thời (<2s) giúp Merchant kiểm tra giao dịch mà không cần mở điện thoại di động.

---

## 📌 Nội dung chính

**Soundbox** (Loa thông báo thanh toán) là một cấu phần phần cứng quan trọng trong giải pháp thanh toán tại quầy. Thiết bị nhận tín hiệu thông báo giao dịch thành công thông qua mạng di động (hoặc Wifi) và phát âm thanh thông báo số tiền nhận được một cách công khai cho cả chủ cửa hàng và khách hàng cùng nghe.

Mô hình này đã được kiểm chứng thành công ở các thị trường lớn (như Paytm tại Ấn Độ; VNPAY triển khai cho hơn 400.000 merchant, Sacombank, BIDV tại Việt Nam). Đối với thị trường Haiti, Soundbox được định vị như một giải pháp an ninh thực địa do mức độ mất an toàn cao tại các khu chợ.

---

## 💡 Điểm mấu chốt

### 1. Đặc tính kỹ thuật & vận hành (tại Haiti):
- **Thời gian thông báo:** Dưới 2 giây (đạt điều kiện real-time tốt nhất) kể từ khi giao dịch được xác nhận.
- **Âm lượng loa:** >= 80 dB (tối ưu từ 85-90 dB, có thể điều chỉnh), đảm bảo nghe rõ trong môi trường chợ ồn ào.
- **Ngôn ngữ phát âm thanh:** Hỗ trợ song ngữ Tiếng Pháp và tiếng bản địa Haiti Creole.
- **Nội dung thông báo chuẩn:** *"Tiền về! [Số tiền] Gourdes"* (đơn vị tiền tệ Haiti).
- **Độ chính xác:** Đảm bảo 100% giao dịch thành công phải được phát loa (Zero miss rate).

### 2. Thiết kế vật lý & Điện năng:
- **Kết nối:** SIM 4G Natcom (được cấu hình mạng ưu tiên) + Wifi (băng tần 2.4GHz + 5GHz).
- **Nguồn năng lượng:** Tích hợp pin dung lượng >= 2,000 mAh. Đảm bảo thời gian chờ (standby) >= 72 giờ và hoạt động liên tục >= 8 giờ trong trường hợp mất điện lưới.
- **Sạc & Nguồn điện:** Cổng USB-C hỗ trợ sạc nhanh 5W. Hỗ trợ dải điện áp đầu vào 110V - 240V (phù hợp điện lưới 110V của Haiti).
- **Vỏ máy:** Thiết kế nhỏ gọn (~15x8x5 cm), bền bỉ chịu va đập nhẹ, chống nước bẩn (tiêu chuẩn IP44+). Thiết kế mang nhận diện thương hiệu Natcom.

### 3. Khả năng quản lý thiết bị:
- **Liên kết nhanh:** Merchant kết nối loa với tài khoản App bằng cách quét mã QR dán trên loa trong vòng 30 giây.
- **Quản lý từ xa (MDM):** Cho phép bộ phận kỹ thuật của NATCOM kiểm tra trạng thái hoạt động, khởi động lại, nâng cấp firmware tự động qua kết nối không dây (OTA - Over-the-Air) qua Dashboard tổng.
- **Cảnh báo pin:** Tự động gửi thông báo đẩy (push notification) về điện thoại của Merchant khi dung lượng pin dưới 20%.

---

## ⚠️ Lưu ý / Mâu thuẫn

- **Rủi ro mất kết nối mạng:** Soundbox phụ thuộc hoàn toàn vào mạng 4G Natcom hoặc Wifi để nhận dữ liệu giao dịch. Nếu hạ tầng viễn thông gặp sự cố, Soundbox sẽ không thể thông báo. Giải pháp khắc phục là lưu giữ thông tin giao dịch cục bộ và đồng bộ lại khi có kết nối.
- **Chi phí thiết bị (MDR / Hardware cost):** Cần có chính sách trợ giá hoặc cho thuê loa ban đầu để khuyến khích Merchant onboard do chi phí phần cứng là một rào cản với các tiểu thương nhỏ.

---

## 🔗 Liên kết liên quan

- [[entities/natcash]]
- [[concepts/natcash-merchant]]
- [[synthesis/haiti-digital-payment-strategy]]

---

## 📚 Tham chiếu nguồn

- [[raw/natcash-merchant/BẢN_ĐỀ_XUẤT_GIẢI_PHÁP_KINH_DOANH_NATCASH_MERCHANT.docx]] — Chi tiết yêu cầu kỹ thuật & tính năng thiết bị Soundbox (Phụ lục 2).
- [[raw/natcash-merchant/VDS_TamNhin_KinhDoanh_Haiti.html]] — Mô hình kết nối và P&L của Soundbox tại Haiti.

---

*Trang này được tạo/cập nhật tự động bởi Antigravity 2.0 | llm-wiki skill*
