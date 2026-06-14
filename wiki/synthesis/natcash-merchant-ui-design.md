---
title: "Thiết kế Giao diện Natcash Merchant"
type: synthesis
status: stable
tags: [synthesis, fintech, mobile-money, haiti, merchant, ui-design]
created: 2026-06-14
updated: 2026-06-14
source: "[[raw/2026-06-14-VDS Quik Sale-BẢN ĐỀ XUẤT GIẢI PHÁP KINH DOANH  NATCASH MERCHANT.md]]"
---

# Thiết kế Giao diện Natcash Merchant

> **Tóm tắt 1 dòng:** Tài liệu đặc tả thiết kế chi tiết toàn bộ các màn hình tính năng cho 3 gói dịch vụ ứng dụng Natcash Merchant và luồng tương tác với thiết bị loa báo Soundbox.

> [!TIP]
> **Bản Mockup Tương Tác & Figma Specs:**
> Bạn có thể mở trực tiếp bản nguyên mẫu tương tác và thông số thiết kế Figma-ready chi tiết cho toàn bộ các màn hình tại: [natcash_merchant_mockups.html](file:///c:/0.CuongPH/datastore/llm-wiki-vault/llm-wiki-vault/output/natcash_merchant_mockups.html) (Nhấp đúp hoặc mở bằng trình duyệt Chrome/Edge/Firefox để trải nghiệm tương tác đổi màn hình và lấy mã màu HEX, kiểu chữ typography, bố cục layout grid).

---

## 📌 Tổng quan Thiết kế (Design Guidelines)

Để ứng dụng vận hành hiệu quả trong bối cảnh đặc thù tại Haiti (an ninh phức tạp, hạ tầng mạng không ổn định, tỷ lệ phổ cập số và giáo dục còn thấp), ngôn ngữ thiết kế của **Natcash Merchant** tuân thủ các nguyên tắc cốt lõi:
1. **Tối giản & Trực quan (Skeuomorphic & Visual-first):** Hạn chế tối đa chữ viết phức tạp, tăng cường icon, hình vẽ minh họa trực quan và chỉ dẫn bằng âm thanh (Creole/Pháp).
2. **Tương phản & Cỡ chữ lớn:** Giúp tiểu thương dễ dàng đọc trong môi trường ngoài trời nắng hoặc thiếu sáng tại các khu chợ truyền thống (như *Marché de Fer*).
3. **Phản hồi tức thì (Instant Feedback):** Mọi giao dịch thành công phải kèm theo hiệu ứng hình ảnh (tick xanh lá), âm thanh (tiếng chuông/giọng nói) và rung phản hồi (haptic feedback).
4. **Bản sắc thương hiệu:** Sử dụng tông màu xanh lá/xanh lam chủ đạo của **Natcom/Natcash** kết hợp màu cam tạo điểm nhấn cho các nút hành động (Call-to-Action).

---

## 📂 Nhóm 1: Các Màn hình Dùng chung (Common UI)

### 1. Màn hình Đăng nhập & Xác thực Sinh trắc học
*   **Bố cục Layout:**
    *   **Header:** Logo Natcash Merchant phối màu xanh lá nổi bật trên nền trắng/sáng. Nút chuyển đổi ngôn ngữ nhanh: `[Creole | Français]`.
    *   **Body:** 
        *   Ô nhập số điện thoại Natcom: `[+509] [ Nhập số điện thoại ]`
        *   Ô nhập mã PIN: `[ • • • • • • ]` (Mã PIN 6 số bảo mật cao).
        *   Nút `[ Đăng Nhập ]` màu cam nổi bật.
        *   Nút icon `[ Vân tay / Khuôn mặt ]` bên cạnh nút đăng nhập để truy cập nhanh bằng sinh trắc học.
    *   **Footer:** Dòng chữ trợ giúp `[ Quên mã PIN? ]` và `[ Gọi hỗ trợ: 111 (Miễn phí) ]`.
*   **Logic hoạt động:**
    *   Nếu thiết bị đã đăng ký sinh trắc học thành công, khi mở app sẽ tự động hiển thị popup quét vân tay/nhận diện khuôn mặt để đăng nhập không cần nhập PIN.
    *   Nếu nhập sai PIN 3 lần, tài khoản sẽ tạm khóa trong 15 phút và gửi SMS OTP khôi phục.

### 2. Luồng Đăng ký & eKYC Tự động (Onboarding)
*   **Bước 1: Nhập Số điện thoại:** Merchant nhập SĐT Natcom -> Hệ thống gửi SMS OTP -> Merchant nhập mã OTP 6 số để xác thực thiết bị.
*   **Bước 2: Chụp ảnh giấy tờ tùy thân (CIN - Thẻ căn cước quốc gia):**
    *   Giao diện camera mở ra kèm khung định hình chữ nhật màu vàng.
    *   Chỉ dẫn giọng nói Creole: *"Hãy đặt mặt trước thẻ căn cước vào khung hình và chụp."*
    *   Nhấn chụp mặt trước -> Nhấn chụp mặt sau.
*   **Bước 3: Chụp ảnh Selfie xác thực:**
    *   Khung định hình hình bầu dục.
    *   Chỉ dẫn Creole: *"Hãy nhìn thẳng vào camera, chớp mắt và mỉm cười."* (Chống giả mạo ảnh tĩnh).
*   **Bước 4: Xác nhận thông tin:**
    *   Hệ thống OCR tự động điền các trường: Họ tên, Số CIN, Ngày sinh, Địa chỉ.
    *   Merchant kiểm tra, điền thêm tên cửa hàng và loại hình kinh doanh -> Nhấn `[ Hoàn Tất ]`.
*   **Logic duyệt:** Hệ thống kết nối cơ sở dữ liệu định danh quốc gia eKYC tự động phê duyệt trong 5 phút. Nếu thất bại, chuyển luồng phê duyệt thủ công (Back-office) trong tối đa 2 giờ.

---

## 📂 Nhóm 2: Màn hình Tính năng Gói Cá Nhân (Micro-Merchant)

Gói Cá Nhân được thiết kế với luồng màn hình tối giản nhất để người bán hàng rong, tiểu thương nhỏ có thể làm quen nhanh chóng.

```
┌────────────────────────────────────────────────────────┐
│ [Creole]  NATCASH MERCHANT  [Icon Loa - Đang kết nối]  │
├────────────────────────────────────────────────────────┤
│                                                        │
│   💰 Số dư ví:  5,420.00 HTG                           │
│                                                        │
│   ┌────────────────────────────────────────────────┐   │
│   │                                                │   │
│   │                 [ MÃ QR TĨNH ]                 │   │
│   │               Nhận tiền Natcash                │   │
│   │                                                │   │
│   └────────────────────────────────────────────────┘   │
│                                                        │
│   ┌──────────────────┐          ┌──────────────────┐   │
│   │  [+] Tạo QR Động │          │   [⇄] Rút Tiền   │   │
│   └──────────────────┘          └──────────────────┘   │
│                                                        │
├────────────────────────────────────────────────────────┤
│ [Trang chủ]   [Hàng hóa]   [Lịch sử]   [Cài đặt/Loa]   │
└────────────────────────────────────────────────────────┘
```

### 1. Màn hình Trang Chủ & QR Thanh Toán
*   **Bố cục Layout:**
    *   **Header:** Logo ứng dụng, nút chuyển đổi ngôn ngữ, icon Trạng thái kết nối Loa (Màu xanh lá = Đang kết nối; Màu đỏ = Mất kết nối).
    *   **Body:**
        *   **Khu vực Số dư:** Hiển thị số dư ví Merchant lớn: `5,420.00 HTG` (tiền gourde Haiti), kèm nút mắt `[👁️]` ẩn/hiện số dư.
        *   **QR Tĩnh (Static QR):** Mã QR nhận tiền chính của Merchant nằm ngay trung tâm màn hình, có nút `[ Tải xuống ]` và `[ Chia sẻ ]`. Khách hàng quét mã này sẽ tự nhập số tiền cần thanh toán.
        *   **Hai nút hành động nhanh:**
            1.  `[ [+] Tạo QR Động ]`: Cho phép nhập số tiền cụ thể để sinh mã QR thanh toán nhanh (khách quét chỉ cần bấm Xác nhận, không cần nhập tiền).
            2.  `[ [⇄] Rút Tiền ]`: Chuyển tiền từ ví Merchant về ví cá nhân hoặc ngân hàng.
    *   **Footer:** Thanh điều hướng chính (Bottom Navigation Bar) gồm 4 tab: `[Trang chủ]`, `[Hàng hóa]`, `[Lịch sử]`, `[Cài đặt/Loa]`.

### 2. Màn hình Quản Lý Hàng Hóa Cơ Bản
*   **Bố cục Layout:**
    *   **Header:** Tiêu đề `[ Hàng Hóa Của Tôi ]`, thanh tìm kiếm sản phẩm nhanh và nút `[ [+] Thêm Mới ]`.
    *   **Body:** Danh sách sản phẩm dạng thẻ (Card list):
        *   Cột trái: Hình ảnh sản phẩm (hoặc ký hiệu mặc định dạng màu sắc/chữ cái đầu).
        *   Giữa: Tên sản phẩm, giá bán (HTG), số lượng tồn kho (nếu có).
        *   Cột phải: Nút sửa `[✏️]` và xóa `[🗑️]`.
*   **Logic hoạt động:**
    *   Khi chạm `[ [+] Thêm Mới ]`, hiển thị popup nhập nhanh: Tên mặt hàng, Giá bán. Merchant có thể chụp ảnh trực tiếp sản phẩm bằng camera điện thoại để làm ảnh đại diện.

### 3. Màn hình Lịch Sử Giao Dịch & Báo Cáo Doanh Thu Đơn Giản
*   **Bố cục Layout:**
    *   **Header:** Lựa chọn bộ lọc thời gian: `[ Hôm nay ]`, `[ Tuần này ]`, `[ Tháng này ]`.
    *   **Body:**
        *   **Báo cáo doanh thu:** Hiển thị tổng tiền nhận được: `+12,450.00 HTG` và tổng số giao dịch thành công: `48 giao dịch`.
        *   **Danh sách lịch sử chi tiết:** 
            *   Mỗi giao dịch hiển thị: Tên khách hàng (hoặc SĐT ví dụ: `098***432`), Thời gian (`14:23`), Số tiền giao dịch (`+1,200.00 HTG` màu xanh lá nếu nhận tiền, `-500.00 HTG` màu đỏ nếu rút tiền), trạng thái (Thành công/Thất bại).
*   **Logic hoạt động:** Chạm vào một giao dịch cụ thể sẽ mở ra màn hình Chi tiết Hóa đơn (Transaction Details) chứa ID giao dịch, mã tham chiếu hệ thống, và nút `[ In biên lai / Gửi biên lai qua WhatsApp ]`.

### 4. Màn hình Liên kết Loa Báo (NATCASH SPEAKER)
*   **Bố cục Layout:**
    *   **Header:** Tiêu đề `[ Thiết Bị Loa Báo ]`.
    *   **Body (Nếu chưa liên kết):**
        *   Hình minh họa loa Soundbox Natcash Speaker màu sắc bắt mắt.
        *   Dòng hướng dẫn: *"Bật loa Soundbox, đảm bảo đèn mạng sáng màu xanh. Nhấn nút bên dưới để quét QR kết nối."*
        *   Nút quét QR lớn: `[ Quét Mã QR Trên Loa ]`.
    *   **Body (Nếu đã liên kết):**
        *   Hình ảnh loa kèm thông tin: Tên loa (`Natcash Speaker Pro #0098`), Mức pin (`🔋 85%`), Trạng thái (`Đang hoạt động - Sim 4G`).
        *   Nút `[ Thử Âm Lượng ]`: Nhấn vào, loa sẽ lập tức phát tiếng *"Natcash Speaker kết nối thành công"* để kiểm tra.
        *   Nút `[ ⚠️ Hủy kết nối ]`.
*   **Logic liên kết:** Quét mã QR dán phía dưới đáy thiết bị Soundbox -> App tự động kết nối API nhận thông báo của Merchant ID với ID thiết bị Soundbox đó trên hệ thống -> Thiết lập hoàn tất trong 30 giây.

### 5. Màn hình Rút Tiền / Chuyển Khoản
*   **Bố cục Layout:**
    *   **Header:** Tiêu đề `[ Rút Tiền Nhanh ]`.
    *   **Body:**
        *   Số dư hiện tại: `5,420.00 HTG`.
        *   Lựa chọn kênh nhận tiền:
            *   `[ (•) Rút về Ví cá nhân Natcash ]` (Mặc định - Miễn phí).
            *   `[ ( ) Rút về Tài khoản Ngân hàng liên kết ]` (Chọn từ danh sách ngân hàng đối tác BRH).
        *   Ô nhập số tiền: `[ Nhập số tiền HTG ]` (Có gợi ý nhanh: `500 HTG`, `1,000 HTG`, `5,000 HTG`).
        *   Nút `[ Thực Hiện Rút Tiền ]`.
*   **Logic hoạt động:** 
    *   Hệ thống xác thực giao dịch bằng mã PIN hoặc sinh trắc học trước khi chuyển tiền.
    *   Giao dịch hoàn tất trong 3 giây. Trực tiếp trừ số dư ví Merchant và cộng số dư ví cá nhân hoặc gửi lệnh chuyển khoản liên ngân hàng qua hệ thống [[concepts/spih|SPIH]].

---

## 📂 Nhóm 3: Màn hình Tính năng Gói Hộ Kinh Doanh (SME)

Gói Hộ Kinh Doanh bao gồm toàn bộ màn hình của Gói Cá Nhân và bổ sung các phân hệ quản lý nhân sự, hóa đơn, quản lý nhiều quầy thu ngân.

### 6. Màn hình Quản Lý Nhân Viên & Phân Quyền
*   **Bố cục Layout:**
    *   **Header:** Tiêu đề `[ Danh Sách Nhân Viên ]`, nút `[ [+] Thêm Nhân Viên ]`.
    *   **Body:** Danh sách nhân viên theo thẻ:
        *   Họ tên, Số điện thoại đăng nhập, Chức vụ/Vai trò (Chủ cửa hàng, Thu ngân, Thủ kho).
        *   Trạng thái hoạt động: `[ Đang làm việc ]` (màu xanh), `[ Đã khóa ]` (màu xám).
*   **Màn hình Thêm nhân viên:**
    *   Nhập Họ tên, Số điện thoại.
    *   Chọn Vai trò (Chọn 1 trong 3):
        *   `[ ( ) Thu ngân ]` (Chỉ được bán hàng, quét QR, xem hóa đơn do mình bán).
        *   `[ ( ) Thủ kho ]` (Chỉ được quản lý hàng hóa, nhập/xuất kho).
        *   `[ ( ) Quản lý ]` (Có toàn quyền trừ việc rút tiền về tài khoản ngân hàng của chủ).
    *   Thiết lập mã PIN mặc định cho nhân viên đăng nhập lần đầu.

### 7. Màn hình Phân Ca & Bàn Giao Ca (Shift Management)
*   **Bố cục Layout:**
    *   **Header:** Tiêu đề `[ Quản Lý Ca Làm Việc ]`.
    *   **Body:**
        *   Thông tin ca hiện tại: Nhân viên phụ trách (`Jean Baptiste`), Giờ bắt đầu (`08:00 AM`).
        *   Số dư đầu ca: `1,000.00 HTG` (tiền lẻ trả lại).
        *   Doanh thu tạm tính trong ca: `18,500.00 HTG` (Thanh toán số: `12,000.00 HTG`, Tiền mặt: `6,500.00 HTG`).
        *   Nút `[ Chốt Ca & Bàn Giao ]` màu cam đậm.
*   **Màn hình Bàn giao ca:**
    *   Thu ngân nhập số tiền mặt thực tế kiểm đếm tại quầy: `[ Nhập tiền mặt thực tế ]`.
    *   Hệ thống tự động đối chiếu chênh lệch và xuất báo cáo ca: `Hợp lệ` hoặc `Lệch -50 HTG` (nếu thiếu tiền).
    *   Tạo mã QR bàn giao hoặc in phiếu bàn giao ca qua máy in nhiệt Bluetooth.

### 8. Màn hình Sổ Thu Chi Điện Tử & Quản Lý Nợ
*   **Bố cục Layout:**
    *   **Header:** Tab chuyển đổi: `[ Thu Chi ]` và `[ Sổ Nợ Khách Hàng ]`.
    *   **Body Tab Thu Chi:**
        *   Nút `[ [+] Ghi Nhận Thu ]` và `[ [-] Ghi Nhận Chi ]` (dùng ghi chép các khoản tiền mặt ngoài hệ thống như mua túi nilon, đóng tiền dọn vệ sinh chợ,...).
    *   **Body Tab Sổ Nợ Khách Hàng:**
        *   Danh sách khách mua nợ: Tên khách hàng, Số điện thoại, Tổng số tiền đang nợ.
        *   Nút `[ [+] Ghi nợ mới ]` và `[ Chốt thanh toán nợ ]`.
        *   Nhắc nợ tự động: Có nút gửi tin nhắn nhắc nợ trực tiếp qua WhatsApp chỉ bằng 1 cú chạm.

### 9. Màn hình Tạo & Xuất Hóa Đơn Điện Tử
*   **Bố cục Layout:**
    *   Màn hình xuất hiện ngay khi nhân viên thu ngân bấm thanh toán thành công đơn hàng.
    *   Hiển thị hóa đơn dạng cuộn giấy ảo đẹp mắt:
        *   Logo cửa hàng, Tên cửa hàng, Ngày giờ giao dịch.
        *   Danh sách mặt hàng đã mua, số lượng, thành tiền.
        *   Tổng tiền thanh toán, hình thức thanh toán (Natcash QR).
    *   Các tùy chọn xuất hóa đơn:
        *   `[ 💬 Gửi Hóa Đơn Qua WhatsApp ]` (Tự động mở WhatsApp gửi ảnh hóa đơn/file PDF đến số của khách).
        *   `[ 📠 In Hóa Đơn ]` (Kết nối máy in nhiệt Bluetooth tại quầy).
        *   `[ Đóng ]`.

### 10. Màn hình Liên kết Đa Thiết bị Soundbox
*   **Bố cục Layout:**
    *   Hiển thị danh sách tối đa 3 loa báo Soundbox đã liên kết.
    *   Cho phép gán từng loa cho từng quầy thu ngân/nhân viên cụ thể:
        *   `Natcash Speaker Quầy 1` -> Phân quyền cho thu ngân `Jean`.
        *   `Natcash Speaker Quầy 2` -> Phân quyền cho thu ngân `Marie`.
*   **Logic thông báo:** Khi giao dịch thanh toán thành công tại Quầy 1, chỉ loa gắn với Quầy 1 phát giọng nói thông báo số tiền, tránh gây nhiễu và nhầm lẫn âm thanh giữa các quầy thu ngân trong cùng một cửa hàng.

---

## 📂 Nhóm 4: Màn hình Tính năng Gói Chuỗi (Enterprise)

Gói Chuỗi được thiết kế cho người dùng quản trị (Admin/Chủ chuỗi) với giao diện dashboard tổng hợp và các tính năng quản lý đa điểm nâng cao.

### 11. Màn hình Dashboard Tổng Hợp Đa Chi Nhánh
*   **Bố cục Layout:**
    *   **Header:** Tiêu đề `[ Tổng Quan Hệ Thống Chuỗi ]`, nút chọn Chi nhánh để lọc: `[ Tất cả chi nhánh v ]`.
    *   **Body:**
        *   **Biểu đồ doanh thu trực quan:** Biểu đồ đường (Line chart) hoặc cột (Bar chart) hiển thị doanh thu theo các khung giờ trong ngày của toàn chuỗi.
        *   **Chỉ số đo lường hiệu năng:**
            *   Tổng doanh thu: `142,500.00 HTG` (Tăng trưởng `12%` so với hôm qua).
            *   Tổng số đơn hàng: `350 đơn`.
            *   Doanh thu trung bình/đơn (AOV): `407 HTG`.
        *   **Danh sách Chi nhánh:** Hiển thị danh sách các chi nhánh kèm doanh thu real-time:
            *   *Chi nhánh Port-au-Prince Trung Tâm:* `82,000.00 HTG` - `180 đơn`.
            *   *Chi nhánh Cap-Haïtien:* `60,500.00 HTG` - `170 đơn`.

### 12. Màn hình Quản Lý Luân Chuyển Kho Hàng
*   **Bố cục Layout:**
    *   **Header:** Tiêu đề `[ Quản Lý Kho Chuỗi ]`.
    *   **Body:**
        *   Xem nhanh tồn kho toàn bộ mặt hàng trên tất cả các kho chi nhánh.
        *   Nút `[ Tạo Lệnh Chuyển Kho ]`: Chọn Kho đi, Kho đến, Danh sách sản phẩm luân chuyển và số lượng.
        *   Luồng phê duyệt: Trạng thái lệnh chuyển kho: `Chờ duyệt` (đối với thủ kho đi), `Đang vận chuyển`, `Đã nhận` (thủ kho nhận bấm xác nhận kiểm đếm đủ hàng trên app).

### 13. Màn hình CRM & Chăm Sóc Khách Hàng (Loyalty)
*   **Bố cục Layout:**
    *   **Header:** Tiêu đề `[ Khách Hàng & Thành Viên ]`.
    *   **Body:**
        *   Danh sách khách hàng đăng ký thành viên: Họ tên, Số điện thoại, Xếp hạng (Đồng, Bạc, Vàng, VIP), Điểm tích lũy.
        *   Tính năng `[ Tạo Chương Trình Tích Điểm ]`: Thiết lập luật quy đổi, ví dụ: *100 HTG tiêu dùng = 1 điểm tích lũy. Khi đạt 50 điểm sẽ đổi mã giảm giá 10%*.
        *   Gửi chương trình khuyến mãi/quà tặng tự động qua danh sách WhatsApp/SMS khách hàng VIP.

### 14. Màn hình Cài Đặt Thiết bị Ngoại vi & Kết nối API
*   **Bố cục Layout:**
    *   **Kết nối máy in nhãn & máy quét barcode:** Hỗ trợ cấu hình máy quét mã vạch cổng USB hoặc Bluetooth để quét mã sản phẩm khi thanh toán tại quầy siêu thị.
    *   **Kết nối Webhook/API:** Khu vực dành cho lập trình viên của doanh nghiệp:
        *   Hiển thị API Key của chuỗi cửa hàng.
        *   Cấu hình URL nhận Webhook giao dịch thanh toán Natcash để đồng bộ tự động với phần mềm ERP/Kế toán riêng của doanh nghiệp.

---

## 📂 Nhóm 5: Giao diện Tương tác Vật lý của Thiết bị Soundbox (Natcash Speaker)

Báo cáo đề xuất nhấn mạnh Soundbox là **vũ khí an ninh thực địa**. Dưới đây là mô tả chi tiết giao diện vật lý và luồng tương tác của thiết bị này.

```
                  ┌──────────────────────┐
                  │   NATCASH SPEAKER    │
                  │                      │
                  │       [  🔊  ]       │
                  │      Màng Loa        │
                  │                      │
                  │     [Đèn Mạng 🟢]     │
                  │     [Đèn Pin  🟢]     │
                  │                      │
                  │    ┌────────────┐    │
                  │    │  MÃ QR ĐỂ  │    │
                  │    │ THANH TOÁN │    │
                  │    └────────────┘    │
                  │                      │
                  │   [-]  [Scan]  [+]   │
                  └──────────────────────┘
```

### 15. Các Nút bấm Vật lý & Đèn báo trạng thái trên Loa
*   **Mặt trước thiết bị:**
    *   **Màng Loa lớn:** Hướng trực tiếp về phía người bán và người mua.
    *   **Khung QR Mica cố định:** Nơi kẹp giấy in mã QR tĩnh của Merchant để khách hàng quét nhanh tiện lợi tại quầy.
    *   **Đèn báo trạng thái kết nối mạng (Đèn LED 1):**
        *   `🟢 Xanh lá sáng đứng:` Đã kết nối mạng 4G Natcom/WiFi ổn định.
        *   `🔴 Đỏ nhấp nháy:` Mất mạng, đang kết nối lại.
        *   `🟡 Vàng sáng đứng:` Thiết bị đang ở chế độ chờ liên kết app (chờ quét QR).
    *   **Đèn báo dung lượng pin (Đèn LED 2):**
        *   `🟢 Xanh lá:` Pin > 20%.
        *   `🔴 Đỏ nhấp nháy:` Pin yếu < 20% (cần cắm sạc).
*   **Mặt trên thiết bị:**
    *   Nút nguồn `[🔋]`: Nhấn giữ 3 giây để bật/tắt nguồn.
    *   Nút tăng/giảm âm lượng `[+]` và `[-]`.
    *   Nút chức năng `[Scan]`: Nhấn 1 lần để loa tự động phát giọng đọc báo cáo giao dịch thành công gần nhất. Nhấn 2 lần để chuyển đổi nhanh ngôn ngữ loa (Creole <-> Pháp).
*   **Mặt dưới thiết bị:** Mã QR chứa ID thiết bị và số Serial để quét liên kết với App. Cổng sạc nhanh USB-C có nắp cao su đậy chống nước/bụi.

### 16. Kịch bản & Thiết kế Trải nghiệm Âm thanh (Voice UI)
*   **Tốc độ phản hồi:** Giọng nói thông báo kích hoạt trong vòng **dưới 2 giây** kể từ khi hệ thống Natcash trừ tiền ví của người mua thành công.
*   **Mẫu câu phát âm thanh tiêu chuẩn:**
    *   *Bằng tiếng Creole Haiti (Ngôn ngữ phổ biến nhất tại chợ):* 
        *   Mẫu phát: `"Natcash resevwa [Số tiền] gourdes."` (Natcash đã nhận [Số tiền] gourdes).
        *   Ví dụ giao dịch 500 gourdes: Loa phát âm lượng to, rõ: *"Natcash resevwa senksan gourdes."*
    *   *Bằng tiếng Pháp (Ngôn ngữ hành chính):*
        *   Mẫu phát: `"Natcash a reçu [Số tiền] gourdes."`
        *   Ví dụ: *"Natcash a reçu cinq cents gourdes."*
*   **Trải nghiệm khi mất mạng đột ngột:** Loa tự động phát âm thanh cảnh báo bằng giọng nói: *"Mạng yếu, vui lòng kiểm tra kết nối"* bằng tiếng Creole để tiểu thương biết và chuẩn bị.

---

## 🔗 Liên kết liên quan

- [[concepts/natcash-merchant]]
- [[concepts/soundbox]]
- [[synthesis/natcash-merchant-ecosystem]]
- [[synthesis/haiti-digital-payment-strategy]]

---

## 📚 Tham chiếu nguồn

- [[raw/2026-06-14-VDS Quik Sale-BẢN ĐỀ XUẤT GIẢI PHÁP KINH DOANH  NATCASH MERCHANT.md]] — Tài liệu đề xuất chính thức của VDS.

---

*Trang này được tạo/cập nhật tự động bởi Antigravity 2.0 | llm-wiki skill*
