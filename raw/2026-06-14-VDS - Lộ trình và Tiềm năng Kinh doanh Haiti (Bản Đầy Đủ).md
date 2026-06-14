# 

Tư vấn lộ trình & tiềm năng kinh doanh — Haiti (Bản Đầy Đủ 14 Slides)

**VIETTEL · VDS | Báo cáo nội bộ · 06/2026**  
**Người báo cáo:** Solution Architect — VDS | **Gửi:** Tổng Giám đốc VDS  
*Bức tranh VN → lộ trình Haiti → cơ hội VDS · mô hình kết nối, mô hình kiếm tiền & P\&L cho các bài toán doanh thu*

## **PHẦN 1: THAM CHIẾU VIỆT NAM & CƠ SỞ PHƯƠNG PHÁP**

### **1\. Hệ sinh thái thanh toán số quốc gia (Tham chiếu VN mapping sang Haiti)**

Khối nền tảng và quản lý được tham chiếu từ hệ sinh thái thanh toán tại Việt Nam để xây dựng cho Haiti, tập trung vào các nhóm:

* **Quản lý & Giám sát:** BRH (Bảo mật, AML, 24/7).  
* **Ứng dụng & Cầu (Hệ sinh thái):** Sàn TMĐT (VN: Shopee, Lazada), Siêu ứng dụng (Grab, MoMo), Gọi xe/Giao hàng, DVC trực tuyến, Bán lẻ/F\&B, Xổ số.  
* **Chấp nhận & Thiết bị:** POS/mPOS, QR tĩnh/động (VietQR), Loa thanh toán (Soundbox), NFC/Tokenized contactless, ETC (VETC, ePass), Vé giao thông công cộng.  
* **Tín dụng & Dịch vụ Tài chính số:** BNPL (Fundiin), Lending số (FE Credit), Tài chính vi mô, Bảo hiểm số, Tiết kiệm/Đầu tư, Chấm điểm tín dụng số (Alt-data).  
* **Dịch vụ thanh toán & Trung gian:** Ngân hàng số, Ví điện tử (MoMo, ZaloPay \-\> Natcash), Cổng/PSP, Thanh toán hóa đơn, Chuyển tiền P2P.  
* **Chuẩn & Kết nối mở:** Chuẩn QR quốc gia, Chuẩn bản tin ISO 20022, Open API/Open Banking, Token hóa thẻ.  
* **Hạ tầng nền tảng & Định danh:** Chuyển mạch tài chính QG (NAPAS \-\> BRH), RTGS liên ngân hàng, Định danh & eKYC (VNeID/CCCD), TT Thông tin tín dụng QG (CIC).

### **2\. Cơ sở phương pháp: Lộ trình đi theo 2 khung quốc tế đã được chứng minh**

Lộ trình không tự nghĩ ra mà tuân thủ "sách giáo khoa" xây chiến lược thanh toán quốc gia:

* **Khung PAFI (7 nguyên tắc vàng do BIS & World Bank ban hành):**  
  * *Nền móng (Làm trước):* ① Nhà nước & DN cùng cam kết; ② Luật chơi đầy đủ, rõ ràng; ③ Hạ tầng an toàn, phủ rộng.  
  * *Xúc tác (Đẩy người dùng lên):* ④ Tài khoản & sản phẩm đúng nhu cầu; ⑤ Điểm giao dịch khắp nơi; ⑥ Giáo dục tài chính (Dân hiểu & tin); ⑦ Bơm dòng tiền lớn (Lương, trợ cấp, kiều hối).  
* **Khung DPI (Công thức 3 lớp của Ấn Độ \- India Stack):**  
  * Lớp 1: Định danh số (Ai đang giao dịch?).  
  * Lớp 2: Thanh toán tức thời (Tiền chạy đường nào?).  
  * Lớp 3: Chia sẻ dữ liệu có kiểm soát (Lịch sử giao dịch \-\> Mở khóa cho vay).

*Kết luận:* Việt Nam đã đi đúng trình tự này (CCCD \-\> NAPAS \-\> VietQR \-\> Ví/MM \-\> Tín dụng số). Haiti là nước đi sau cần sao chép trình tự đã được chứng minh để tránh sai lầm và đi nhanh hơn.

### **3\. Gom 2 khung quốc tế thành 5 Lớp Hành Động & 11 Trụ Công Việc**

| Lớp | Trụ Công Việc | Ý Nghĩa / Mục Đích |
| :---- | :---- | :---- |
| **5\. Đích đến** | Tài chính toàn diện | Kết quả cuối: ai cũng gửi tiết kiệm, vay vốn, mua bảo hiểm được. |
| **4\. Cầu kéo** | Thanh toán Chính phủ, Kiều hối, Kích cầu (Incentive) | Tạo lý do để dùng — bơm dòng tiền lớn, lặp lại. |
| **3\. Phân phối** | Đại lý & điểm chấp nhận, Ví & tài khoản cơ bản | Đưa dịch vụ đến tay người dân — bên cung. |
| **2\. Luật chơi** | Khung pháp lý, Cấp phép, Chuẩn & liên thông, Chữ ký số | Nhà nước tạo thị trường: ai được chơi, theo luật nào. |
| **1\. Nền móng** | Định danh & eKYC, Chuyển mạch tức thời | Hai đường ray: Ai giao dịch & tiền chạy đường nào. |
| **Xuyên suốt** | An ninh mạng, AML/CFT, Bảo vệ người dùng, Giáo dục | Mất niềm tin thì cả 11 trụ sụp đổ. Cần kiến trúc sư tổng thể điều phối (vai trò VDS). |

## **PHẦN 1: LỘ TRÌNH HAITI (HIỆN TRẠNG & 4 GIAI ĐOẠN)**

Hành trình 11 trụ công việc trải dài từ Hiện tại đến Giai đoạn 3 (4-6 năm). Dưới đây là chi tiết từng chặng:

| Nhóm / Trụ | HIỆN TẠI | GĐ 0 (0-12 Tháng) | GĐ 1 (1-2 Năm) | GĐ 2 (2-4 Năm) | GĐ 3 (4-6 Năm) |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **Đích đến** Tài chính toàn diện | Dân thường gần như không vay được (vi mô 40-72%). | Thiết kế trung tâm lịch sử vay-trả. | Ra mắt gửi tiết kiệm & vay món nhỏ. | Chấm điểm từ dữ liệu giao dịch & Bảo hiểm. | Ai cũng vay được, lãi hợp lý. |
| **Cầu kéo** Kiều hối & TTCP | Kiều hối 4 tỷ USD nhưng đa số rút mặt. | Thí điểm trợ cấp \+ viện trợ vào ví. | Mở rộng hành lang kiều hối, giữ tiền trong ví. | QR xuyên biên giới, Tiết kiệm kiều bào. | Hành lang thanh toán khu vực (Dominicana, Mỹ, Can). |
| **Cầu kéo** Kích cầu | Chưa có ai trợ giá. | Quỹ thưởng từ ngân sách dự án. | Hoàn tiền, Xổ số hóa đơn, Tặng data. | Trợ giá đúng nhóm theo dữ liệu. | Thị trường tự chạy (Rút trợ giá dần). |
| **Phân phối** Ví & Tài khoản | 2/3 dân chưa có tài khoản. | Tài khoản cơ bản, chạy USSD trên máy cục gạch. | Chiến dịch mở tài khoản toàn dân. | Thêm dịch vụ: hóa đơn, nạp thẻ, tiết kiệm. | Siêu ứng dụng đa dịch vụ (như MoMo). |
| **Phân phối** Đại lý & Chấp nhận | Đại lý riêng rẽ từng mạng. | QR \+ Phần mềm bán hàng ra chợ ngay GĐ0. | Liên thông đại lý, không hết tiền mặt. | Điện thoại thành máy quẹt (SoftPOS) \+ Loa báo tiền. | Trả phí xe buýt, giao thông số. |
| **Luật chơi** Chuẩn & Liên thông | Mỗi ví một kiểu, không thông. | 1 mã QR \- ví nào cũng quét được (EMVCo). | Áp dụng chuẩn bản tin ISO 20022\. | Open API cho công ty fintech. | Chạm để trả (Token hóa thẻ, Apple/Google Pay). |
| **Luật chơi** Chữ ký số & HĐĐT | Hợp đồng, hóa đơn hoàn toàn giấy. | Luật giao dịch ĐT & Chữ ký số. | Chữ ký số cho DN & Cá nhân (eKYC). | Hóa đơn điện tử \- Nộp thuế online. | Dịch vụ công không giấy tờ. |
| **Luật chơi** Cấp phép & Thị trường | Đã có giấy phép Ví (NatCash). | Thiết kế khung Ngân hàng số. | Cấp phép NH số (Hạn chế). | Ngân hàng số đầy đủ nghiệp vụ. | Mở cạnh tranh, đón vốn ngoại. |
| **Luật chơi** Khung Pháp lý | Đã có luật AML & TT121 (Mobile Money). | Lập HĐ Thanh toán QG & Luật dữ liệu. | Quy định Chuẩn QR, Đại lý, Tài sản số (Sandbox). | Khung NH số chính thức, Tài sản số. | Thanh toán xuyên biên giới, CBDC. |
| **Nền móng** Chuyển mạch TT | Có ACH (nhưng chậm, theo phiên). | Chuyển tiền tức thì 24/7 (Switch ACI go-live 30/6). | Ví & Ngân hàng thông nhau (Realtime). | Phủ rộng \+ có hệ dự phòng. | Nối thanh toán nước lân cận. |
| **Nền móng** Định danh & eKYC | Có thẻ CIN nhưng chưa có eKYC. | Mở TK bằng Selfie \+ thẻ CIN. | 1 lần eKYC dùng mọi nơi. | Tái dùng định danh (Bảo hiểm, Hành chính). | Định danh xuyên ngành (Y tế, Giáo dục, Trợ cấp). |

## **PHẦN 1: VÌ SAO PHẢI HÀNH ĐỘNG NGAY (8 Luận điểm)**

1. **An ninh:** Tiền mặt rủi ro cao (cướp, băng nhóm) \-\> Động lực chuyển sang ví rất lớn.  
2. **Hạ tầng xương sống vừa xong:** Switch realtime của BRH go-live 30/6, không phải chờ hạ tầng.  
3. **Nỗi đau 4 tỷ USD:** Kiều hối chịu phí 5-6% & xếp hàng rút mặt \-\> Giải quyết được ngay, dân thấy lợi ích tức thì.  
4. **Cửa đang mở:** Chuẩn quốc gia định hình 1 lần, ai tư vấn người đó nắm quyền.  
5. **Định danh sẵn sàng:** Dữ liệu ONI (căn cước) đã có, công nghệ Viettel đã chạy thật.  
6. **Pháp lý khởi động sẵn:** Giấy phép ví NatCash đã cấp.  
7. **Hạ tầng sẵn có:** Natcom có sẵn mạng lưới viễn thông & đại lý.  
8. **Dòng tiền mồi lớn:** Các nhà tài trợ quốc tế (WFP, UNICEF) muốn số hóa chi trả viện trợ.

## **PHẦN 2: CƠ HỘI VDS (11 CƠ HỘI KINH DOANH)**

| Lĩnh vực / Cơ hội | Vai trò VDS | Cách kiếm tiền | Tiềm năng |
| :---- | :---- | :---- | :---- |
| 💸 Kiều hối & ngoại tệ số (stablecoin) | Bàn đổi USDT \<-\> gourde trong ví \+ Market Maker Binance | Chênh lệch tỷ giá 2 chiều \+ phí giao dịch | **RẤT CAO** |
| 🏦 Ngân hàng số | Lập / Đồng sở hữu NH số (cổ phần) | Thu nhập lãi \+ Phí dịch vụ | **RẤT CAO** |
| 👛 Ví & tài khoản (NatCash) | Vận hành ví cùng Natcom | Phí giao dịch \+ Float \+ Thuê nền tảng | **CAO** |
| 🏪 Nền tảng merchant \+ thiết bị | Phần mềm QLBH \+ Thanh toán (Mô hình VNPay) | Thuê bao SaaS \+ Phân chia phí GD \+ Bán SmartPOS | **CAO** |
| 🤲 Giải ngân viện trợ nhân đạo (CVA) | Nền tảng chi trả cho tổ chức (WFP, UNICEF) | Phí giao dịch \+ Phí tích hợp | **CAO** |
| 📊 Tín dụng · BNPL · Chấm điểm | Engine chấm điểm \+ Nền tảng cho vay | SaaS \+ Chia sẻ doanh thu (lãi) | **CAO** |
| 🪪 eKYC quốc gia | Triển khai eKYC trên data ONI/CIN | Phí dự án \+ Phí trên mỗi lượt xác minh | **TB-CAO** |
| 🏛️ Thanh toán Chính phủ (G2P/P2G) | Nền tảng giải ngân & thu phí/thuế | Phí trên mỗi giao dịch | **TB-CAO** |
| 🗃️ Trung tâm thông tin tín dụng | Xây & Vận hành Credit Bureau cho BRH | Phí tra cứu \+ License | **TB-CAO** |
| 🔗 Chuẩn QR \+ Cổng/Switch | Tư vấn chuẩn \+ Xây cổng kết nối | Phí tư vấn \+ License \+ Phí giao dịch | **TB-CAO** |
| 🧭 Tư vấn lộ trình \+ Ghế Hội đồng | Cố vấn chiến lược cho BRH/CP | Phí tư vấn (Mở cửa hợp đồng sau) | **TB** |

## **PHẦN 2: CHI TIẾT CÁC MỎ DOANH THU & P\&L**

### **1\. Kiều hối & Stablecoin (RẤT CAO)**

**Nỗi đau:** Kiều hối 4 tỷ USD chịu phí 5-6%, doanh nghiệp khát USD mua chợ đen, chợ ngầm USDT-HTG trên Binance tự phát.  
**Giải pháp VDS:** Kiều bào nạp USDT phí \~0. VDS làm bàn đổi USDT/HTG ngay trong ví, thu chênh lệch 1-1.5%. Bán lại USDT cho DN nhập khẩu (thu chênh chiều 2).

* Bước 1: Tư vấn BRH khung tài sản số (Sandbox).  
* Bước 2: Chọn đối tác thanh khoản (Binance Pay) & chuẩn AML.  
* Bước 3: Xây tính năng mua bán USDT trong ví Natcash.  
* Bước 4: Pilot Sandbox (Hành lang Mỹ \-\> Haiti).

**P\&L (5 năm):** Lũy kế doanh thu US$18.5M.

### **2\. Ngân hàng số (RẤT CAO)**

**Cơ hội:** Micro-lending ở Haiti biên cực cao (MFI đang cho vay 40-72%). NH số cho vay 30-45% vẫn lãi rất cao nhưng an toàn hơn nhờ dữ liệu chấm điểm (Ví/Merchant) để giảm nợ xấu. Bán chéo bảo hiểm, float.

* Bước 1: Thiết kế khung cấp phép.  
* Bước 2: Thu xếp vốn 15-25M USD & đối tác.  
* Bước 3: Dựng Core Banking trên nền eKYC có sẵn.  
* Bước 4: Xin phép & Ra mắt tiết kiệm, vay nhỏ.

**P\&L (5 năm):** Lũy kế doanh thu US$69M.

### **3\. Hệ sinh thái Merchant \- Mô hình VNPay (CAO)**

Mô hình Nền tảng (B2B2B), không thu tiền mỏng từ QR mà thu từ giá trị gia tăng:

* **Nền tảng VDS (PaaS):** Phần mềm QLBH (kho, sổ nợ), Cổng TT, SmartPOS, HĐĐT, Chữ ký số.  
* **Master Merchant:** Natcom, Ngân hàng tự đi mở đại lý và quản lý.  
* **Nguồn thu:** Thuê bao nền tảng, Chia sẻ phí GD, Bán thiết bị, Dữ liệu quảng cáo.

### **4\. Giải ngân viện trợ nhân đạo \- CVA (CAO)**

Haiti là thị trường nhận viện trợ lớn. Các tổ chức (WFP, UNICEF) rất cần kênh chi trả số minh bạch.

* VDS cung cấp nền tảng: Nhận ngân sách \-\> Lọc trùng bằng eKYC \-\> Chi lô thẳng vào ví \-\> Cung cấp Dashboard Tracking cho tổ chức.  
* Lợi ích: Thu phí giao dịch/tích hợp từ quỹ quốc tế (không phụ thuộc ngân sách Haiti), mỗi người nhận là 1 user mới.

**P\&L (5 năm):** Lũy kế doanh thu US$10.4M.

### **5\. Tín dụng số & Chấm điểm (CAO)**

VDS bán "Bộ não" (Engine) chấm điểm, KHÔNG tự bỏ vốn. Ngân hàng chịu vốn và rủi ro.

* Dữ liệu QR/Ví \-\> VDS chấm điểm \-\> App mời vay \-\> Ngân hàng duyệt \-\> Thu SaaS & Chia sẻ doanh thu.

**P\&L (5 năm):** Lũy kế doanh thu US$9.2M.

### **6\. Trung tâm thông tin tín dụng quốc gia (TB-CAO)**

Xây dựng cuốn sổ chung lưu lịch sử vay trả của toàn dân cho BRH (mô hình CIC). Thu phí xây dựng, phí vận hành, và phí mỗi lượt tra cứu từ Ngân hàng. Doanh thu lũy kế 5 năm khoảng US$7.4M.

### **7\. Hệ thống eKYC quốc gia (TB-CAO)**

Tận dụng công nghệ Viettel đã thành công tại VN. So khớp khuôn mặt/vân tay trên smartphone với dữ liệu CIN gốc của ONI. Thu phí trên mỗi lượt xác minh (0.3-0.5 USD/lượt). Lũy kế doanh thu US$9.4M (5 năm).