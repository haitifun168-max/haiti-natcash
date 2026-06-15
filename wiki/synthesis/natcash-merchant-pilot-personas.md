---
title: "Chân dung Persona và Yêu cầu Tính năng Pilot"
type: synthesis
status: stable
tags: [synthesis, fintech, merchant, mobile-money, persona, roadmap, haiti]
created: 2026-06-15
source: "[[raw/Persona_Natcash_Merchant_Haiti_Pilot.md]]"
---

# Chân dung Persona và Yêu cầu Tính năng Pilot

> **Tóm tắt 1 dòng:** Tài liệu tổng hợp 4 chân dung khách hàng (Persona) mục tiêu và 10 khoảng trống tính năng (Gaps) cần hoàn thiện cho giai đoạn thử nghiệm (Pilot) 601 Merchant phi chính thức của BRH tại Haiti.

---

## 📌 Nội dung chính

Hồ sơ MSME tại Haiti (theo FinScope 2023) cho thấy 99% merchant nhận tiền mặt, 92% không lưu hồ sơ tài chính và 89% tự kinh doanh cá nhân. Dựa trên hiện trạng thực tế, VDS đề xuất 4 nhóm chân dung cụ thể và 10 gap tính năng để định hình sản phẩm [[concepts/natcash-merchant|Natcash Merchant]] cho giai đoạn Pilot.

### 1. Phân tích 4 Chân dung Khách hàng (Persona) Mục tiêu

| Persona | Chân dung & Vận hành | Nhu cầu & Ưu tiên chính | Tính năng chưa cần (Pilot) |
|---|---|---|---|
| **P1. [[concepts/madan-sara|Madan Sara]] lưu động** | - Thu mua nông sản nông thôn bán ở đô thị.<br>- Di chuyển liên tục, chịu rủi ro bạo lực đường phố. | - QR tĩnh mang theo.<br>- Sổ thu chi hành trình và nợ.<br>- Báo cáo Tổng thu/chi/dư.<br>- Thông tin giá cả thị trường. | - Cấp Soundbox cố định.<br>- Quản lý kho chi tiết (SKU).<br>- Phân quyền/quản lý ca.<br>- Loyalty, đa chi nhánh. |
| **P2. Người bán sạp chợ cố định** | - Bán tại quầy sạp chợ, vỉa hè.<br>- Giao dịch nhỏ lẻ liên tục trực tiếp với khách. | - QR tĩnh dán tại quầy.<br>- **Soundbox cố định 4G/Wifi** (âm lượng to, phát lại giao dịch gần nhất).<br>- Nhập tiền mặt cuối ngày để đối soát. | - CRM/loyalty.<br>- Marketing automation.<br>- API kế toán phức tạp.<br>- Phân tích AI. |
| **P3. Cửa hàng bán lẻ siêu nhỏ** | - Tạp hóa cố định, chủ tự kinh doanh.<br>- Thiếu hồ sơ tài chính, tiền túi và tiền bán lẫn lộn. | - Bán nhanh bằng nhập tổng tiền.<br>- Danh mục cơ bản (Tên, giá).<br>- Sổ thu chi tự động.<br>- Cảnh báo hàng sắp hết. | - AI dự báo.<br>- Quản lý đa chi nhánh.<br>- Máy in nhãn giá.<br>- Hóa đơn điện tử. |
| **P4. Cửa hàng nhỏ có 2-4 nhân viên** | - Quán ăn, dịch vụ có nhân viên phụ việc.<br>- Rủi ro thất thoát tiền mặt và nhân viên nhận tiền vào ví riêng. | - Phân quyền Owner và Cashier.<br>- QR khóa ví nhận tiền của chủ.<br>- Nhật ký thao tác nhân viên.<br>- PIN Owner phê duyệt hoàn tiền. | - Chấm công chi tiết.<br>- Lập lịch ca phức tạp.<br>- CRM/loyalty.<br>- Quản lý đa chi nhánh. |

### 2. Tổng hợp 10 Khoảng trống tính năng (Feature Gaps) cần bổ sung

Để chạy thử nghiệm thành công cho 601 Merchant phi chính thức của BRH, VDS cần phối hợp với Natcash/Vinatti phát triển các tính năng sau:

1.  **Quản lý trạng thái giao dịch:** API Natcash trả về rõ ràng (Success, Pending, Failed, Reversed, Refunded). Loa Soundbox chỉ đọc khi Success để tránh gian lận bill giả.
2.  **Tra soát và khiếu nại:** Cung cấp quy trình xử lý giao dịch lỗi trực tiếp trên app cho merchant, gửi ticket về hệ thống back-office của Natcash.
3.  **Quản lý Soundbox từ xa:** Hỗ trợ giám sát trạng thái online/offline, SIM, pin, firmware OTA, khóa và hủy liên kết loa từ xa để tránh mất cắp.
4.  **Low-bandwidth và đồng bộ offline:** Cho phép ghi nháp nghiệp vụ phi thanh toán (sổ quỹ, nhập hàng) khi mất mạng và tự đồng bộ khi có kết nối trở lại. Không được phép xác nhận giao dịch thanh toán offline thành công.
5.  **Thông tin giá thị trường:** Tích hợp bảng giá nông sản, thực phẩm theo địa bàn (do BRH cập nhật nguồn tin cậy) để Madan Sara đối chiếu.
6.  **Hỗ trợ onboarding thực địa:** Bố trí Agent hỗ trợ eKYC, cấu hình loa, thiết lập catalog ban đầu (5–20 sản phẩm) và chạy thử giao dịch.
7.  **Hỗ trợ rút tiền/cash-out:** Hiển thị bản đồ điểm rút tiền/đại lý Natcash gần nhất, hạn mức và phí dịch vụ.
8.  **Chế độ riêng tư Soundbox:** Cho phép merchant chuyển đổi linh hoạt: đọc đủ tiền, chỉ kêu bíp, hoặc giảm âm lượng bằng mã PIN của Owner (tránh lộ doanh thu ở nơi mất an ninh).
9.  **Công nợ và thanh toán một phần:** Sổ nợ tối giản ghi nhận nợ khách hàng, nhà cung cấp, ngày hẹn trả và cho phép thanh toán từng phần.
10. **Nhật ký thao tác nhân viên (Audit Trail):** Ghi vết các hành động sửa/hủy đơn của cashier; yêu cầu mã PIN của Owner để phê duyệt các giao dịch hoàn tiền (Refund/Void).

---

## 💡 Điểm mấu chốt

- **Soundbox cố định vs di động:** Giai đoạn Pilot cần phân loại rõ nhóm P2, P3 để cấp Soundbox cố định, và nhóm P1 (Madan Sara) để chạy thử nghiệm Soundbox di động có pin bền, tránh cấp Soundbox cố định đại trà cho người bán lưu động.
- **Tiếp cận tối giản:** Tuyệt đối tránh bắt buộc khai báo danh mục sản phẩm phức tạp ngay từ đầu cho nhóm P3, P1. Thay vào đó, ưu tiên tính năng "nhập nhanh tổng tiền đơn hàng" để giảm ma sát sử dụng.

---

## 🔗 Liên kết liên quan

- [[concepts/madan-sara]]
- [[concepts/natcash-merchant]]
- [[concepts/soundbox]]
- [[synthesis/natcash-merchant-ecosystem]]
- [[synthesis/natcash-merchant-gtm-strategy]]

---

## 📚 Tham chiếu nguồn

- [[raw/Persona_Natcash_Merchant_Haiti_Pilot.md]] — Phân tích Persona và Yêu cầu Tính năng Natcash Merchant tại Haiti (06/2026).
- FinScope MSME Haiti 2023 - Survey Highlights.

---

*Trang này được tạo/cập nhật tự động bởi Antigravity 2.0 | llm-wiki skill*
