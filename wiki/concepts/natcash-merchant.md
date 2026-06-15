---
title: "Natcash Merchant"
type: concept
status: stable
tags: [concept, fintech, mobile-money, haiti, merchant]
created: 2026-06-14
updated: 2026-06-14
source: "[[raw/natcash-merchant/BẢN_ĐỀ_XUẤT_GIẢI_PHÁP_KINH_DOANH_NATCASH_MERCHANT.docx]]"
---

# Natcash Merchant

> **Tóm tắt 1 dòng:** Giải pháp hệ sinh thái ứng dụng quản lý bán hàng 3 cấp độ (lõi VDS Quik Sale) tích hợp thiết bị Soundbox giúp số hóa các điểm chấp nhận thanh toán tại Haiti.

---

## 📌 Nội dung chính

Hệ sinh thái ứng dụng **Natcash Merchant** được phát triển trên lõi giải pháp **VDS Quik Sale** nhằm giải quyết trực tiếp các khó khăn đặc thù của tiểu thương (Merchant) tại thị trường Haiti (như rủi ro an ninh tiền mặt do các băng nhóm kiểm soát, nguy cơ cướp giật điện thoại khi mở màn hình kiểm tra giao dịch ở chợ, tỷ lệ mù chữ cao, và thiếu công cụ quản lý).

Giải pháp phân chia ứng dụng thành 3 cấp độ phù hợp với quy mô kinh doanh:

### 1. Gói Cá Nhân (Bán hàng rong / Kinh doanh tự do)
- **Đối tượng:** Nhóm tiểu thương nhỏ lẻ, có kỹ năng số hạn chế.
- **Tính năng chính:**
  - Đăng ký tài khoản nhanh qua eKYC tự động trong 5 phút.
  - Nhận thanh toán qua mã QR tĩnh hiển thị ngay màn hình chính.
  - Quản lý danh mục hàng hóa cơ bản (tên, giá).
  - Kết nối với **01 thiết bị Soundbox** qua mã QR trong 30 giây.
  - Xem báo cáo doanh thu ngày/tuần/tháng đơn giản.
  - Rút tiền trực tiếp từ ví Merchant về ví cá nhân Natcash hoặc tài khoản ngân hàng đối tác BRH.

### 2. Gói Cửa Hàng / HKD (SME)
- **Đối tượng:** Hộ kinh doanh cá thể, cửa hàng có nhân viên.
- **Tính năng chính:**
  - Bao gồm toàn bộ tính năng của Gói Cá Nhân.
  - Quản lý nhân viên (phân quyền: chủ cửa hàng, thu ngân, thủ kho, lưu nhật ký hoạt động).
  - Quản lý ca làm việc của nhân viên và xuất báo cáo doanh thu theo ca.
  - Sổ thu chi điện tử thay thế cho sổ ghi chép tay truyền thống.
  - Tạo và xuất hóa đơn điện tử PDF gửi trực tiếp qua WhatsApp/SMS/Email.
  - Kết nối đồng thời tối đa **03 thiết bị Soundbox** phục vụ các quầy thu ngân khác nhau.

### 3. Gói Chuỗi (Enterprise)
- **Đối tượng:** Siêu thị, chuỗi cửa hàng, doanh nghiệp đa chi nhánh.
- **Tính năng chính:**
  - Bao gồm toàn bộ tính năng của Gói HKD.
  - Dashboard quản lý tập trung và luân chuyển hàng hóa giữa các chi nhánh.
  - Hệ thống CRM & chăm sóc khách hàng (Loyalty, tích điểm, phân loại VIP).
  - Hỗ trợ kết nối các thiết bị ngoại vi chuyên dụng (máy in hóa đơn Bluetooth/USB, máy quét nhãn giá).
  - Cung cấp API/Webhook thời gian thực tích hợp với phần mềm kế toán.
  - Kết nối **không giới hạn số lượng Soundbox** và phân nhóm theo chi nhánh.

---

## 💡 Điểm mấu chốt

- **Phần mềm hóa nghiệp vụ**: Tích hợp công cụ quản lý bán hàng và thanh toán số vào một ứng dụng duy nhất, giảm ma sát thao tác cho tiểu thương.
- **Giải pháp an ninh tại chợ**: Việc tích hợp chặt chẽ với loa báo **Soundbox** giúp triệt tiêu nhu cầu rút điện thoại kiểm tra số dư tại quầy, vốn là mục tiêu hàng đầu của nạn cướp giật tại Haiti.

---

## ⚠️ Lưu ý / Mâu thuẫn

- Quá trình đăng ký nhanh eKYC đòi hỏi độ phủ định danh quốc gia tốt. Tại Haiti, tỷ lệ eKYC thành công có thể bị ảnh hưởng do nhiều người dân chưa có giấy tờ tùy thân đầy đủ.
- Cần có sự cam kết phối hợp chặt chẽ từ phía NATCOM để đảm bảo kết nối mạng ưu tiên (APN riêng) cho thiết bị Soundbox.

---

## 🔗 Liên kết liên quan

- [[entities/natcash]]
- [[concepts/soundbox]]
- [[synthesis/haiti-digital-payment-strategy]]
- [[synthesis/natcash-merchant-ui-design]]

---

## 📚 Tham chiếu nguồn

- [[raw/natcash-merchant/BẢN_ĐỀ_XUẤT_GIẢI_PHÁP_KINH_DOANH_NATCASH_MERCHANT.docx]] — Đề xuất chi tiết giải pháp kinh doanh Natcash Merchant của VDS.
- [[raw/natcash-merchant/VDS_TamNhin_KinhDoanh_Haiti.html]] — Bản tư vấn lộ trình & tiềm năng kinh doanh Haiti của VDS.

---

*Trang này được tạo/cập nhật tự động bởi Antigravity 2.0 | llm-wiki skill*
