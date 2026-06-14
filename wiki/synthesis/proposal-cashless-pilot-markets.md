---
title: "Đề xuất Thí điểm Chợ đầu mối"
type: synthesis
status: stable
tags: [synthesis, fintech, mobile-money, haiti, merchant, soundbox, pilot-proposal]
created: 2026-06-14
updated: 2026-06-14
source: "[[raw/2026-06-14-PINASSI-Haiti-Strategic-Analysis-2026.md]]"
---

# Đề xuất Thí điểm Thanh toán không tiền mặt tại Chợ đầu mối Haiti

> **Tóm tắt 1 dòng:** Giải pháp chi tiết về lựa chọn địa bàn, quy trình eKYC từ xa, cấu hình thiết bị Soundbox/QR và cơ chế kích cầu để thử nghiệm thanh toán số tại các khu chợ Haiti (Tháng 10/2026).

---

## 📌 Nội dung chính

Đề xuất này nhằm hiện thực hóa **Mục tiêu ngắn hạn** của dự án [[concepts/pinassi|PINASSI]]: Thí điểm thành công thanh toán không tiền mặt tại các chợ đầu mối trọng điểm, tạo tiền đề để phổ cập thanh toán số cho toàn bộ nền kinh tế Haiti.

### 1. Lựa chọn địa bàn thí điểm chiến lược
Do tình hình bạo lực băng đảng kiểm soát 85-90% khu vực đô thị Port-au-Prince, việc triển khai tại các chợ trung tâm thủ đô gặp rủi ro an ninh rất lớn. Đề xuất lựa chọn 3 khu chợ có tính ổn định hơn và có độ phủ sóng di động tốt:
1.  **Chợ Pétion-Ville (Port-au-Prince):** Khu vực tương đối an toàn hơn của thủ đô, mật độ giao thương cao, đã được Thống đốc BRH định vị là địa bàn mục tiêu.
2.  **Chợ Cap-Haïtien (Miền Bắc):** An ninh ổn định, giao thông thuận lợi, là trung tâm kinh tế phía Bắc.
3.  **Chợ Les Cayes (Miền Nam):** Vùng ít bị ảnh hưởng bởi bạo lực băng đảng đô thị, đại lý Natcom hoạt động mạnh.

### 2. Giải pháp Kỹ thuật & Phần cứng
Thực thi giải pháp kết hợp phần mềm (App PINASSI Phân hệ 1) và phần cứng:
*   **Mã QR tĩnh dùng chung (EMVCo Static QR):** In trên decal nhựa chống nước dán tại quầy của tiểu thương. Tiểu thương nhỏ (Gói Cá nhân) chỉ cần quét mã này để nhận tiền, không cần máy POS đắt tiền.
*   **Loa Soundbox (SIM 4G Natcom APN ưu tiên + Wifi):** Cung cấp loa phát thanh Creole/Pháp tức thì (<2s, >=80dB). Đây là giải pháp an ninh sinh tồn giúp tiểu thương không phải mở màn hình điện thoại thông minh để kiểm tra tiền tại quầy, triệt tiêu rủi ro cướp giật điện thoại tại chợ.
*   **Thiết kế Offline-first:** Ứng dụng hỗ trợ ghi nhận giao dịch offline tạm thời qua mã OTP/token khi mạng di động bị gián đoạn, tự động đồng bộ khi có kết nối trở lại.

### 3. Quy trình Onboarding & Hỗ trợ thực địa (Hybrid eKYC)
Quy trình được thiết kế theo mô hình kết hợp (Hybrid) giữa công nghệ tự động hóa và lực lượng thực địa địa phương sẵn có của Natcom nhằm tối ưu hóa an toàn và hiệu quả:
*   **eKYC tự động (Self-eKYC):** Tiểu thương tự chụp ảnh thẻ Căn cước Quốc gia (CIN) và chụp ảnh selfie so khớp khuôn mặt (Liveness Detection) trên app để đăng ký nhanh trong 5 phút.
*   **Tận dụng Lực lượng thực địa sẵn có (Salesman & D2D):** Các chi nhánh Natcash/Natcom duy trì lực lượng Salesman và D2D đi chăm sóc các điểm bán/Agent định kỳ. Tận dụng chính đội ngũ địa phương am hiểu địa bàn này để tiếp cận trực tiếp các tiểu thương tại chợ, hỗ trợ mở tài khoản, cấp phát thiết bị Soundbox, hướng dẫn sử dụng và đồng hành tháo gỡ khó khăn trong quá trình merchant bán hàng bằng giải pháp mới hàng ngày.
*   **Duyệt và giám sát từ xa:** Đội ngũ BA/CSKH tại trung tâm hỗ trợ phê duyệt hồ sơ eKYC nhanh và giám sát thiết bị từ xa qua hệ thống Portal, giảm tải thao tác nghiệp vụ phức tạp cho lực lượng thực địa.

### 4. Cơ chế Kích cầu (Incentive Framework)
*   **Đối với Tiểu thương (Merchant):**
    *   *Trợ giá thiết bị:* Miễn phí tiền đặt cọc loa Soundbox trong 3 tháng đầu, hoặc cho thuê với chi phí cực thấp ($1/tháng).
    *   *Tặng data di động:* Tặng gói data 4G Natcom dung lượng cao hàng tháng cho các tiểu thương có doanh số giao dịch số đạt mốc quy định.
*   **Đối với Người mua (Buyer):**
    *   *Hoàn tiền (Cashback):* Hoàn tiền 1-2% giá trị hóa đơn (do Natcom/BRH tài trợ ngân sách kích cầu) khi thanh toán bằng quét mã QR trong tháng đầu thử nghiệm.

### 5. Quản trị rủi ro & Contingency Fallback
*   **Kịch bản Switch chậm trễ:** Nếu hệ thống Switch Phân hệ 3 của BRH (do ACI phát triển) không kịp go-live vào 30/06/2026, PINASSI sẽ kích hoạt chế độ **Closed-loop** (cho phép người mua dùng ví [[entities/natcash|Natcash]] thanh toán trực tiếp cho ví Natcash Merchant của tiểu thương) để đảm bảo tiến độ thử nghiệm vào ngày **15/10/2026**.
*   **Bảo hiểm thiết bị:** Xây dựng quỹ dự phòng phần cứng của Natcom để sẵn sàng đổi mới thiết bị Soundbox miễn phí cho tiểu thương nếu bị hư hỏng hoặc mất cắp trong quá trình kinh doanh tại chợ.

---

## 💡 Điểm mấu chốt

*   **KPI Mục tiêu Thử nghiệm (10/2026):** Đạt tối thiểu **200 merchant**, **10.000 người dùng hoạt động**, và **500 giao dịch/ngày** tại các chợ thí điểm.
*   **Bảo chứng của BRH:** Lợi dụng việc BRH sở hữu 40% cổ phần Natcom để yêu cầu BRH cung cấp văn bản bảo trợ pháp lý và an ninh từ lực lượng cảnh sát HNP/GSF cho các chợ triển khai.

---

## ⚠️ Lưu ý / Mâu thuẫn

*   **Sự trễ hạn nhân sự:** Việc chậm trễ mốc huy động nhân sự chuyên trách tại Haiti (10/06/2026) là rủi ro lớn nhất cho khâu thiết kế BRD chi tiết. Cần thành lập Ban dự án khẩn cấp hoạt động tại chỗ trước ngày **20/06/2026**.

---

## 🔗 Liên kết liên quan

- [[concepts/pinassi]]
- [[concepts/natcash-merchant]]
- [[concepts/soundbox]]
- [[entities/natcash]]
- [[entities/brh]]
- [[entities/aci-worldwide]]
- [[synthesis/haiti-digital-payment-strategy]]
- [[synthesis/natcash-merchant-ecosystem]]
- [[timelines/haiti-digital-payment-timeline]]

---

## 📚 Tham chiếu nguồn

- [[raw/2026-06-14-PINASSI-Haiti-Strategic-Analysis-2026.md]] — Báo cáo Chiến lược dự án PINASSI tại Haiti (06/2026).
- [[raw/natcash-merchant/BẢN_ĐỀ_XUẤT_GIẢI_PHÁP_KINH_DOANH_NATCASH_MERCHANT.docx]] — Đề xuất giải pháp kinh doanh Natcash Merchant của VDS.
- [[raw/2026-06-14-VDS - Lộ trình và Tiềm năng Kinh doanh Haiti (Bản Đầy Đủ).md]] — Bản lộ trình kinh doanh của VDS (06/2026).

---

*Trang này được tạo/cập nhật tự động bởi Antigravity 2.0 | llm-wiki skill*
