---
title: "PINASSI"
type: concept
status: stable
tags: [concept, fintech, payment-platform, haiti, regulation]
created: 2026-06-14
updated: 2026-06-14
source: "[[raw/2026-06-14-PINASSI-Haiti-Strategic-Analysis-2026.md]]"
---

# PINASSI (Plateforme d'Intermédiation de Paiement Sans Numéraire)

> **Tóm tắt 1 dòng:** Nền tảng Trung gian Thanh toán không tiền mặt tại Haiti được phát triển bởi Viettel/VDS/Natcom theo chỉ đạo của Tập đoàn và đề nghị từ Ngân hàng Trung ương Haiti (BRH).

---

## 📌 Nội dung chính

**Dự án PINASSI** là sáng kiến chiến lược nhằm thiết lập hạ tầng thanh toán không tiền mặt tại Haiti, giải quyết vấn đề an ninh thực địa nghiêm trọng (do các băng nhóm vũ trang kiểm soát tới 85-90% thủ đô Port-au-Prince), tối ưu hóa dòng tiền kiều hối 4 tỷ USD/năm và số hóa hoạt động cứu trợ nhân đạo.

### 1. Kiến trúc hệ thống 3 Phân hệ

Hệ thống PINASSI được phân chia nhiệm vụ rõ ràng giữa Viettel và Ngân hàng Trung ương Haiti (BRH):

| Phân hệ | Chức năng chính | Đơn vị thực hiện |
|---|---|---|
| **Phân hệ 1** | Ứng dụng dành cho người mua (Buyer) và người bán (Seller) | Viettel (VDS/Natcom) phát triển |
| **Phân hệ 2** | Portal quản trị cho BRH (quản lý gian hàng, báo cáo giám sát giao dịch, phòng chống gian lận) | Viettel (VDS/Natcom) phát triển |
| **Phân hệ 3** | Hệ thống CORE (kết nối liên ngân hàng, ví điện tử, thanh toán bù trừ) | BRH thực hiện (phối hợp đối tác [[entities/aci-worldwide|ACI Worldwide]]) |
| **Chuẩn QR** | Xây dựng bộ tiêu chuẩn mã QR quốc gia dùng chung | Viettel đóng vai trò tư vấn |

### 2. Tiêu chuẩn QR Quốc gia đề xuất

PINASSI tư vấn BRH áp dụng chuẩn **EMVCo QR Code (Merchant-Presented Mode - MPM)**:
*   **QR Tĩnh (Static MPM):** Dành cho tiểu thương nhỏ tại các chợ (chi phí in thấp, không cần thiết bị điện tử phức tạp).
*   **QR Động (Dynamic MPM):** Dành cho các POS lớn (nhúng sẵn số tiền để giảm lỗi nhập liệu và nâng cao bảo mật).

### 3. Phương án eKYC Quốc gia

Tận dụng công nghệ so khớp sinh trắc học và nhận diện ký tự quang học (OCR) trên thẻ Căn cước Quốc gia (CIN) có sẵn của ONI. Giai đoạn 1 sẽ áp dụng phương thức **Document Verification + Liveness Detection** qua ứng dụng mà không cần gọi API trực tiếp của ONI (do ONI chưa mở cổng API kết nối dữ liệu).

---

## 💡 Điểm mấu chốt

*   **Tính cấp bách về an ninh:** Sự bùng nổ của bạo lực băng đảng khiến giao dịch tiền mặt trở nên cực kỳ nguy hiểm. PINASSI ra đời như một lá chắn bảo vệ tài sản và tính mạng cho người dân.
*   **Vai trò hạ tầng xương sống:** Đây là hệ thống tiền đề cho nền tảng thanh toán quốc gia Haiti. Do đó, Natcom kiến nghị thành lập Ban dự án chuyên trách làm việc trực tiếp tại địa bàn.
*   **Kịch bản dự phòng (Contingency Plan):** Trong trường hợp Hệ thống Switch của BRH (Phân hệ 3 do ACI phát triển) không kịp go-live vào 30/06/2026, PINASSI sẽ kích hoạt chế độ **Closed-loop** (thực hiện thanh toán nội bộ giữa các ví [[entities/natcash|Natcash]] với nhau) để đảm bảo tiến độ thử nghiệm vào tháng 10/2026.

---

## ⚠️ Lưu ý / Mâu thuẫn

*   **Rủi ro chậm tiến độ:** Deadline huy động nhân sự tại Haiti là **10/06/2026** đã bị chậm trễ, cần bổ sung khẩn cấp nhân sự (PM, BA nói tiếng Pháp/Creole) để kịp mốc thiết kế BRD trong tháng 7/2026.
*   **Hạ tầng viễn thông:** PINASSI đòi hỏi kết nối mạng liên tục. Trong bối cảnh bạo lực, việc duy trì 1.900 trạm phát sóng của Natcom hoạt động ổn định là thách thức lớn. Hệ thống cần được thiết kế hỗ trợ các giao dịch ngoại tuyến tạm thời (offline-first).

---

## 🔗 Liên kết liên quan

- [[entities/brh]]
- [[entities/aci-worldwide]]
- [[entities/natcash]]
- [[concepts/spih]]
- [[concepts/pronap]]
- [[synthesis/haiti-digital-payment-strategy]]
- [[synthesis/proposal-cashless-pilot-markets]]

---

## 📚 Tham chiếu nguồn

- [[raw/2026-06-14-PINASSI-Haiti-Strategic-Analysis-2026.md]] — Báo cáo Chiến lược & Triển khai Dự án PINASSI tại Haiti (06/2026).
- [[raw/2026-06-14-công văn số 52CV-NCM và báo cáo tư vấn lộ trình của VDS về các yêu cầu và lộ trình triển khai dự án PINASSI tại Haiti.md]] — Công văn số 52/CV-NCM về dự án PINASSI của Natcom (06/2026).

---

*Trang này được tạo/cập nhật tự động bởi Antigravity 2.0 | llm-wiki skill*
