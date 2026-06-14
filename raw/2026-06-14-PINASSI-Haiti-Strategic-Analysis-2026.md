# Báo cáo Chiến lược & Triển khai Dự án PINASSI tại Haiti – 2026
## Chuẩn bị bởi: Nhóm Tư vấn Fintech & Ngân hàng số | Phiên bản: 14/06/2026

***

> **Ghi chú phân loại số liệu:** 📗 Observed (dữ liệu thực tế đã xác minh) | 📘 Benchmark (tiêu chuẩn ngành/khu vực) | 📙 Assumption (giả định có căn cứ)

***

## TÓM TẮT ĐIỀU HÀNH (Executive Summary)

Dự án PINASSI là cơ hội chiến lược của Viettel/VDS/Natcom để xây dựng hạ tầng thanh toán số quốc gia tại Haiti, một thị trường với **4.1 tỷ USD kiều hối/năm** (chiếm ~20% GDP) nhưng vẫn phụ thuộc nặng vào tiền mặt và chưa có chuẩn QR quốc gia. PINASSI có tiềm năng trở thành backbone thanh toán điện tử của Haiti nếu được BRH chứng nhận và triển khai đúng thời điểm.[^1][^2]

Tuy nhiên, ba rủi ro hệ thống có thể phá vỡ dự án: **(1) Bất ổn an ninh nghiêm trọng** với 85–90% Port-au-Prince dưới kiểm soát của băng nhóm; **(2) Phụ thuộc vào Switch BRH** dự kiến go-live 30/06/2026 nhưng chưa có xác nhận chắc chắn; **(3) Chậm trễ nguồn lực** – deadline huy động nhân sự 10/06/2026 đã qua 4 ngày tính đến thời điểm soạn thảo prompt này.[^3][^4]

**Khuyến nghị ưu tiên ngay:** Triển khai chế độ hoạt động hybrid (offline/online), đàm phán SLA rõ ràng với BRH về Switch, và chốt ngay đội ngũ dự án khẩn cấp trước 20/06/2026.

***

## PHẦN 1: PHÂN TÍCH BỐI CẢNH THỊ TRƯỜNG & QUY ĐỊNH

### 1.1 Môi trường An ninh – Rủi ro Cao Nhất trong Lịch sử Gần đây

Haiti đang trải qua cuộc khủng hoảng an ninh nghiêm trọng nhất trong nhiều thập kỷ. Tính đến đầu 2026, các băng nhóm vũ trang kiểm soát khoảng **85–90% khu vực đô thị Port-au-Prince**, bao gồm các hành lang kinh tế trọng yếu và các tuyến đường vào chợ đầu mối. Liên minh "Viv Ansanm" (gộp G9 và Gpèp) đã mở rộng kiểm soát ra ngoài thủ đô vào các tỉnh Artibonite và Centre – nơi tập trung nhiều chợ nông sản lớn.[^5][^6][^7][^3]

Tỷ lệ giết người tại Haiti tăng gần **20% năm 2025 so với 2024**, và nước này được xếp vào nhóm có tỷ lệ giết người cao nhất thế giới. Báo cáo của EUAA (tháng 4/2026) ghi nhận các băng nhóm tiếp tục kiểm soát các tuyến đường chiến lược và hành lang kinh tế vào tháng 3/2026. Tổ chức Gang Suppression Force (GSF) được LHQ ủy quyền vẫn chưa triển khai đủ nhân lực tính đến đầu 2026.[^7][^5][^3]

**💡 So what?** Việc triển khai điểm chấp nhận thanh toán (merchant acceptance points) tại các "chợ đầu mối" đặt ra rủi ro an toàn tính mạng thực sự cho nhân viên và đại lý. Kế hoạch merchant onboarding phải được thiết kế không cần "hiện diện vật lý thường xuyên" tại những khu vực rủi ro cao.

**✅ Now what?**
- **Ưu tiên chợ ở tỉnh/khu vực tương đối ổn định** trước: Pétion-Ville, Cap-Haïtien, Les Cayes, Jacmel (khu vực nam/đông nam ít bị ảnh hưởng hơn)
- **Mô hình đại lý từ xa:** Onboarding merchant 100% qua app + video call, tránh gặp mặt trực tiếp tại điểm kinh doanh
- **Bảo hiểm thiết bị POS/QR:** Xây dựng quỹ dự phòng thay thế thiết bị tại các vùng nguy cơ cao
- **Phối hợp với BRH** để có văn bản bảo trợ an ninh từ GSF hoặc HNP cho các điểm triển khai chiến lược

### 1.2 Môi trường Pháp lý – Tích cực nhưng còn Nhiều Khoảng trống

BRH đã chủ động xây dựng hành lang pháp lý cho thanh toán số:

| Khung pháp lý | Nội dung | Trạng thái |
|---|---|---|
| Circular 102 & 114-3 (2024) | Yêu cầu giấy phép BRH cho tất cả nhà cung cấp thanh toán điện tử[^8] | ✅ Có hiệu lực |
| SPIH (Système de Paiement Interbancaire Haïtien) | Hệ thống thanh toán liên ngân hàng RTGS (gourdes & USD)[^9] | ✅ Hoạt động |
| PRONAP (Processeur National de Paiements) | Bộ xử lý thanh toán quốc gia, đang trong giai đoạn triển khai[^10] | 🔄 Đang triển khai |
| Khung pháp lý USDC/stablecoin | Chưa có quy định cụ thể về crypto[^11][^12] | ❌ Khoảng trống |
| Hệ thống AML (UCREF) | Đơn vị chuyên trách chống rửa tiền của BRH | ✅ Có sẵn |

Dự án PRONAP được BRH chính thức phát động giai đoạn triển khai vào tháng 1/2026 với hai mục tiêu: **(1) Hạ tầng thanh toán và quyết toán hiện đại; (2) Thúc đẩy tài chính toàn diện**. Phát biểu của Thống đốc BRH đặc biệt đề cập đến "người bán hàng nhỏ tại chợ Pétion-Ville" như tầm nhìn về khách hàng mục tiêu – hoàn toàn trùng khớp với đối tượng mà PINASSI nhắm tới.[^10]

**📗 Thực tế quan trọng:** Tháng 7/2025, BRH đã phát cảnh báo công khai về các nhà cung cấp không được cấp phép – tín hiệu cho thấy BRH đang tăng cường giám sát và PINASSI phải đảm bảo tuân thủ 100% trước khi ra mắt.[^13]

### 1.3 Bối cảnh Cạnh tranh

| Đối thủ | Người dùng | Đại lý | Điểm mạnh | Điểm yếu |
|---|---|---|---|---|
| **MonCash (Digicel)** | ~2 triệu[^14] | 4,000+[^14] | First-mover, thương hiệu mạnh | Buộc KYC từ 6/2025, gián đoạn[^8] |
| **Natcash (Natcom/Viettel)** | 2+ triệu users, 3+ triệu accounts[^15] | 30,000+[^15] | Hạ tầng tốt nhất (90% phủ sóng), đã tích hợp CamTransfer & Unitransfer[^16] | Chưa có chuẩn QR quốc gia |
| **Banques commerciales** | Hạn chế | Hạn chế | Uy tín cao | Chi phí cao, tiếp cận hạn chế |
| **Western Union/MoneyGram** | Phủ rộng | Toàn quốc | Tin cậy với kiều hối | Phí cao (3–7%), không có ví |

**💡 Lợi thế cạnh tranh của PINASSI/Natcom:** Natcom là doanh nghiệp **số 1 về hạ tầng viễn thông** tại Haiti (1,900 trạm phát sóng, 4,500 km cáp quang, phủ 90% dân số), đồng thời là **đóng góp ngân sách lớn nhất** trong năm tài chính 2024-2025. Quan hệ đối tác chiến lược với BRH (cổ đông 40% của Natcom) là đòn bẩy chính sách không thể thay thế.[^17][^18]

***

## PHẦN 2: MA TRẬN KỲ VỌNG STAKEHOLDERS

### 2.1 Phân tích Vai trò & Trách nhiệm Pháp lý

| Stakeholder | Vai trò chính | Trách nhiệm pháp lý | Rủi ro xung đột |
|---|---|---|---|
| **BRH** | Cơ quan quản lý + Cổ đông Natcom | Phê duyệt giấy phép, thiết lập chuẩn QR, vận hành Switch | Xung đột lợi ích: vừa là regulator vừa là shareholder |
| **Natcom (VTG/Viettel)** | Nhà cung cấp dịch vụ + JV partner | Vận hành Phân hệ 1 & 2, tuân thủ AML/KYC, báo cáo định kỳ cho BRH | Phụ thuộc Switch BRH cho interoperability |
| **VDS** | Đơn vị phát triển phần mềm | Xây dựng và bàn giao Phân hệ 1 & 2 theo BRD được BRH phê duyệt | Scope creep nếu BRD thay đổi sau khi phát triển bắt đầu |
| **ACI Worldwide** | Nhà cung cấp Phân hệ 3 | Cung cấp API kết nối, SLA hệ thống Switch | Phụ thuộc bên thứ ba về timeline và API stability |
| **CONATEL** | Cơ quan quản lý viễn thông | Giám sát tần số, dịch vụ viễn thông | Ít ảnh hưởng trực tiếp đến PINASSI |

### 2.2 KPI Framework cho Giai đoạn Thử nghiệm Tháng 10/2026 (📙 Assumption)

| KPI | Mục tiêu tối thiểu (Minimum Viable) | Mục tiêu kỳ vọng | Phương pháp đo |
|---|---|---|---|
| Số người dùng đăng ký | 10,000 | 50,000 | Hệ thống Portal (Phân hệ 2) |
| Số merchant onboarded | 200 | 1,000 | Hệ thống Portal (Phân hệ 2) |
| Số giao dịch/ngày | 500 | 3,000 | Switch BRH + Portal |
| Tỷ lệ giao dịch thành công | ≥95% | ≥99% | Log kỹ thuật |
| Thời gian xử lý giao dịch | <5 giây | <2 giây | APM monitoring |
| Tỷ lệ KYC hoàn thành | ≥80% người đăng ký | ≥95% | eKYC module |
| Uptime hệ thống | ≥99% | ≥99.9% | Giám sát 24/7 |
| Zero AML violation | 0 sự cố | 0 sự cố | UCREF reports |

***

## PHẦN 3: ĐÁNH GIÁ KỸ THUẬT & TÍCH HỢP HỆ THỐNG

### 3.1 Kiến trúc 3 Phân hệ – Phân tích Điểm Tích hợp Trọng yếu

```
[Phân hệ 1: App Người dùng (VDS/Natcom)]
        ↕ API REST/JSON (HTTPS/TLS 1.3)
[Phân hệ 2: Portal Quản trị (VDS/Natcom)]  ←→  [Hệ thống AML BRH - UCREF]
        ↕ ISO 8583 / AS2805 / REST API
[Phân hệ 3: Switch BRH (ACI Worldwide BASE24-eps)]
        ↕ RTGS / SWIFT
[SPIH / PRONAP / Ngân hàng thương mại Haiti]
```

**Rủi ro trọng yếu tại điểm tích hợp Phân hệ 2 ↔ Phân hệ 3:**

ACI Worldwide BASE24-eps là nền tảng enterprise-class được sử dụng cho switching, routing và authorization thanh toán đa kênh. Tuy nhiên, đây là hệ thống phức tạp yêu cầu:[^19]
- **Giao thức kết nối:** ISO 8583 (chuẩn quốc tế cho giao dịch thẻ/switch) hoặc API REST tùy cấu hình của BRH
- **Môi trường kiểm thử (UAT):** BRH phải cung cấp sandbox environment trước khi VDS bắt đầu phát triển tích hợp
- **Chứng nhận kết nối (Certification):** Quy trình certification với ACI thường mất 4–8 tuần

**✅ Hành động khẩn cấp:** Yêu cầu BRH cung cấp **API specification document và sandbox access** trong vòng 7 ngày làm việc kể từ ngày ký biên bản làm việc. Đây là critical path quyết định toàn bộ timeline phát triển.

### 3.2 Switch BRH Go-live 30/06/2026 – Kịch bản Contingency

| Kịch bản | Xác suất (📙) | Tác động | Giải pháp |
|---|---|---|---|
| Switch go-live đúng hạn 30/06 | 40% | Tích hợp suôn sẻ | Chuẩn bị UAT ngay sau go-live |
| Switch chậm 1–2 tháng (đến T8-T9/2026) | 45% | Thử nghiệm 10/2026 không có interoperability | Chạy PINASSI trong closed-loop (nội bộ Natcash) trước, kết nối Switch sau |
| Switch chậm >2 tháng | 15% | Không thể demo đầy đủ cho BRH | Đàm phán lại mốc thử nghiệm, vẫn demo Phân hệ 1+2 |

**Kế hoạch dự phòng (Contingency Plan) khuyến nghị:**

Nếu Switch BRH chưa ready vào thời điểm thử nghiệm 10/2026, PINASSI có thể vận hành **chế độ "Closed-loop"** – giao dịch giữa các ví Natcash với nhau và thanh toán merchant trong mạng nội bộ Natcash – không cần kết nối Switch. Đây là mô hình Natcash đã vận hành thành công với 3+ triệu tài khoản. Interoperability với các ngân hàng khác sẽ được bật sau khi Switch sẵn sàng.[^15]

### 3.3 Đánh giá Khả năng eKYC Quốc gia

**Thực trạng hệ thống định danh ONI/CIN:**
- CIN (Carte d'Identification Nationale) là tài liệu định danh duy nhất hợp lệ cho giao dịch tài chính[^20]
- ONI đã triển khai đăng ký sinh trắc học (biometric) từ 2019, với sự hỗ trợ của OAS, USAID và Nhật Bản đến 2025[^20]
- **Tuy nhiên:** ONI hiện không cung cấp public API cho bên thứ ba tích hợp – đây là rào cản kỹ thuật lớn nhất[^21][^22]

**Business Case cho eKYC:**

| Phương án | Mô tả | Khả thi | Chi phí (📙) |
|---|---|---|---|
| **A. Document + Liveness** | OCR CIN + face match, không cần API ONI | ✅ Triển khai được ngay | Thấp (~$0.33/check qua Didit[^21]) |
| **B. Thương lượng API ONI** | Ký MOU với ONI, xây dựng API kết nối database | ⚠️ 6–12 tháng | Cao (đầu tư hạ tầng + chính trị) |
| **C. BRH làm trung gian** | BRH xây dựng Identity Hub, Natcom/PINASSI kết nối qua BRH | ✅ Khả thi nhất dài hạn | Trung bình |

**Khuyến nghị:** Giai đoạn thử nghiệm 10/2026 dùng **Phương án A** (OCR + liveness detection), song song vận động BRH ủng hộ **Phương án C** như một phần của hệ sinh thái PRONAP. Mục tiêu "trở thành nhà cung cấp eKYC Quốc gia" là hướng dài hạn 2–3 năm, không thể là mục tiêu giai đoạn 1.

### 3.4 Tiêu chuẩn QR Quốc gia – Đề xuất Cụ thể

**Khuyến nghị áp dụng chuẩn EMVCo QR** vì:
- EMVCo đã ban hành đầy đủ spec cho cả CPM (Consumer-Presented Mode) và MPM (Merchant-Presented Mode)[^23][^24]
- Royalty-free, được Visa/Mastercard/UnionPay ủng hộ[^25][^26]
- Tương thích với interoperability về sau khi thêm các tổ chức thanh toán khác

| Loại QR | Mô tả | Phù hợp cho chợ Haiti | Lý do |
|---|---|---|---|
| **QR Tĩnh (Static MPM)** | Merchant có 1 mã QR cố định dán tại quầy | ✅ **Ưu tiên số 1** | Chi phí thấp, không cần thiết bị điện tử, phù hợp tiểu thương |
| **QR Động (Dynamic MPM)** | Mỗi giao dịch có mã QR mới, nhúng số tiền | ✅ Dùng cho POS lớn hơn | Giảm lỗi nhập số tiền, tăng bảo mật |
| **QR Người mua (CPM)** | Khách hàng show QR, merchant quét | ⚠️ Hạn chế | Cần scanner tại quầy, không phù hợp tiểu thương |

**Bộ tiêu chuẩn kỹ thuật QR đề xuất trình BRH:**

1. **Định dạng dữ liệu:** EMVCo MPM v1.0 (EMVQR-MPM)
2. **Trường bắt buộc:** Merchant ID (do BRH cấp), Merchant Name, Transaction Currency (HTG = 332, USD = 840), Country Code (HT)
3. **Trường tùy chọn:** Amount (nếu QR động), Reference Number
4. **Mã hóa:** SHA-256 CRC cho toàn bộ payload
5. **Cỡ QR tối thiểu:** 3cm × 3cm khi in, module size ≥ 0.25mm
6. **Logo BRH/PINASSI:** Có thể nhúng vào center 30% của QR (không ảnh hưởng khả năng đọc)

***

## PHẦN 4: LẬP KẾ HOẠCH VÀ QUẢN LÝ TIẾN ĐỘ

### 4.1 Tình trạng Nguồn lực – CẢNH BÁO ĐỎ

> **⚠️ CRITICAL:** Deadline huy động nhân sự "trước ngày 10/06/2026" đã qua 4 ngày (tính đến 14/06/2026). Cần xác nhận ngay trạng thái thực tế và hành động bù đắp khẩn cấp.

**Cơ cấu đội ngũ tối thiểu cần thiết:**

| Vai trò | Số lượng | Vị trí | Ưu tiên |
|---|---|---|---|
| Project Manager (PMP, kinh nghiệm fintech) | 1 | Haiti (tại chỗ) | 🔴 KHẨN CẤP |
| Business Analyst (BA) – Fintech/Payments | 2 | Haiti (tại chỗ) + Remote | 🔴 KHẨN CẤP |
| Solution Architect – Mobile Payments | 1 | Remote (VN) với 2 chuyến công tác | 🟠 Cao |
| Backend Developer – API/Integration | 3–4 | Remote (VN) | 🟠 Cao |
| Frontend/Mobile Developer (Android/iOS) | 2–3 | Remote (VN) | 🟠 Cao |
| QA/Test Engineer | 2 | Remote (VN) | 🟡 Trung bình |
| Security/AML Compliance Specialist | 1 | Remote (VN) với hỗ trợ tại chỗ | 🟠 Cao |
| Chuyên gia tiếng Pháp/Creole | 1 | Haiti (tại chỗ) | 🔴 KHẨN CẤP |

### 4.2 Timeline Chi tiết – Đáp ứng Mốc Thử nghiệm 10/2026

```
GIAI ĐOẠN 1: THIẾT KẾ (Từ 15/06 – 31/07/2026) ← 1.5 tháng
├── Tuần 1–2 (15-30/06): Huy động đội ngũ khẩn cấp + công tác Haiti
│   ├── Ký biên bản làm việc với BRH, nhận API spec từ ACI
│   ├── Workshop làm việc trực tiếp với BRH để chốt BRD
│   └── Sandbox environment từ ACI phải có trước 30/06
├── Tuần 3–4 (01-15/07): Soạn thảo BRD + Solution Design Document
│   ├── Phân hệ 1: Wireframe UX/UI cho buyer/seller app
│   └── Phân hệ 2: Portal architecture + API design
└── Tuần 5–6 (15-31/07): Review & phê duyệt BRD bởi BRH ← MILESTONE 1

GIAI ĐOẠN 2: PHÁT TRIỂN & KIỂM THỬ (01/08 – 15/10/2026) ← 2.5 tháng
├── Sprint 1–2 (01-31/08): Core development
│   ├── User registration + eKYC (OCR + liveness)
│   ├── P2P transfer (closed-loop)
│   └── Merchant onboarding module
├── Sprint 3–4 (01-30/09): Integration + advanced features
│   ├── Tích hợp Switch BRH (nếu sẵn sàng) hoặc mock-up
│   ├── QR payment (static + dynamic)
│   └── AML reporting module kết nối UCREF
├── Kiểm thử tích hợp và UAT (01-10/10): ← MILESTONE 2
│   └── UAT với BRH + 50 merchant pilot
└── Go-live thử nghiệm: 15/10/2026 ← MILESTONE CHÍNH

GIAI ĐOẠN 3: THƯƠNG MẠI HÓA (Từ T11/2026)
├── Mở rộng merchant: 200 → 1,000 → 5,000
├── Kết nối đầy đủ với Switch BRH (nếu chưa có ở GĐ2)
└── Triển khai remittance + stablecoin module
```

### 4.3 Ma trận Rủi ro Tiến độ (Risk Register)

| Rủi ro | Xác suất | Tác động | Mức độ | Phòng ngừa | Phát hiện | Xử lý |
|---|---|---|---|---|---|---|
| Switch BRH chậm >30 ngày | 45% | Cao | 🔴 Nghiêm trọng | Xác nhận SLA bằng văn bản với BRH | Weekly status call với BRH tech team | Kích hoạt closed-loop mode |
| BRD thay đổi sau phê duyệt | 30% | Cao | 🔴 Nghiêm trọng | Change control process chặt chẽ | Sprint review có BRH sign-off | CR (Change Request) formal process |
| API ACI không ổn định | 25% | Cao | 🟠 Cao | UAT kéo dài 4 tuần, không phải 2 tuần | Automated integration tests | Fallback to SPIH direct |
| Thiếu nhân lực tại chỗ ở Haiti | 60% | Trung bình | 🟠 Cao | Tuyển dụng khẩn cấp + đối tác địa phương | Lịch deliverable bị lỡ | Remote collaboration tools + outsource BA |
| Sự cố an ninh ảnh hưởng đến đội ngũ | 20% | Rất cao | 🔴 Nghiêm trọng | Security briefing + khu vực làm việc an toàn | Theo dõi tin tức an ninh hàng ngày | Remote work protocol; evacuation plan |
| BRH không phê duyệt chuẩn QR | 20% | Trung bình | 🟡 Trung bình | Trình proposal sớm, có benchmark EMVCo | Feedback trong vòng 2 tuần | Điều chỉnh theo yêu cầu BRH |

***

## PHẦN 5: ĐÁNH GIÁ CƠ HỘI KINH DOANH & MỞ RỘNG

### 5.1 Kiều hối & Stablecoin – Thị trường 4.1–4.9 Tỷ USD

**Cơ sở thị trường:** Kiều hối Haiti đạt **4.1 tỷ USD năm 2024** (tăng 9.5% so với 2023), chiếm ~20% GDP. Đến T11/2025, con số này ước tính 4.9 tỷ USD. Mỹ chiếm 62.8% nguồn chuyển tiền, Canada 10.6%. Đây là nguồn sống của nền kinh tế Haiti – **80.9% kiều hối được chi tiêu cho thực phẩm** theo IDB.[^27][^14][^2][^1]

**Đánh giá mô hình USDT/HTG:**

- **Khả thi kỹ thuật:** ✅ Hoàn toàn khả thi (DeFi/CEX integration đã được chứng minh toàn cầu)
- **Khả thi pháp lý tại Haiti:** ⚠️ **Rủi ro cao** – Haiti hiện không có khung pháp lý cụ thể cho crypto. BRH chưa ban hành hướng dẫn về stablecoin. Vận hành "bàn đổi USDT/HTG" nếu chưa được BRH chấp thuận có thể vi phạm quy định AML/CFT[^11][^12]
- **Cơ chế hoạt động an toàn:** Xây dựng như một **FX desk có giấy phép** (không phải crypto exchange), hoạt động dưới giám sát của BRH, nhận USDT từ diaspora → chuyển đổi sang HTG trong hệ thống Natcash → giải ngân cho ví người nhận

**Mô hình phí đề xuất (📙 Assumption):**

| Dịch vụ | Phí | Cơ sở so sánh |
|---|---|---|
| Kiều hối qua ví truyền thống | 3–5% | 📘 Western Union/MoneyGram hiện tại |
| Kiều hối qua PINASSI (target) | 1.5–2% | 📘 Benchmark khu vực Caribbean |
| Chênh lệch tỷ giá USDT/HTG | 0.5–1% | 📙 Assumption |

Với thị phần 5% thị trường kiều hối (205–245 triệu USD) và phí trung bình 2%, doanh thu tiềm năng từ kiều hối đạt **4–5 triệu USD/năm** vào năm thứ 3–4 khi đạt quy mô.

### 5.2 Mô hình Ngân hàng số & Cho vay Vi mô

**Cơ sở dữ liệu cho Credit Scoring:**

Natcom hiện là nhà mạng số 1 tại Haiti với **hạ tầng 4G/3G phủ 90% dân số**. Dữ liệu viễn thông của Natcash bao gồm:[^18]
- Lịch sử nạp tiền, thanh toán hóa đơn (tần suất, số tiền, đúng hạn)
- Lịch sử giao dịch P2P và merchant payments
- Hành vi sử dụng dữ liệu di động (proxy cho thu nhập/hoạt động kinh doanh)
- Lịch sử nhận kiều hối (qua CamTransfer/Unitransfer)

**Thực trạng lãi suất cho vay tại Haiti:**
- Lãi suất ngân hàng thương mại năm 2023: **14.21%/năm** (World Bank) – nhưng đây là tín dụng cho khách hàng có tài sản thế chấp[^28][^29]
- Microfinance (ví dụ: Serent): **35%/năm** cho khoản vay 10,000 HTG với ~2% tỷ lệ vỡ nợ[^30]
- Mục tiêu 30–45% trong lộ trình VDS là **cao hơn benchmark microfinance** nhưng phù hợp với thị trường phi chính thức

**📙 Đánh giá mục tiêu doanh thu 69 triệu USD (5 năm) từ cho vay vi mô:**

| Năm | Người vay | Dư nợ TB | Portfolio | Doanh thu (lãi) |
|---|---|---|---|---|
| 1 (Pilot) | 5,000 | $50 | $250K | $75K–$112K |
| 2 | 30,000 | $75 | $2.25M | $675K–$1M |
| 3 | 100,000 | $100 | $10M | $3M–$4.5M |
| 4 | 250,000 | $150 | $37.5M | $11.25M–$16.9M |
| 5 | 400,000 | $200 | $80M | $24M–$36M |

**Tổng 5 năm (📙):** ~$39–58M – **thấp hơn mục tiêu 69M**. Để đạt 69M cần tăng trưởng năm 4–5 mạnh hơn hoặc kết hợp thêm doanh thu từ các dịch vụ liên quan (bảo hiểm vi mô, tiết kiệm, thanh toán hóa đơn cho người vay).

**⚠️ Rủi ro NPL (Non-Performing Loan):** Bối cảnh bất ổn Haiti tạo ra rủi ro vỡ nợ cao hơn nhiều so với benchmark. **Chiến lược quản lý nợ xấu:**
1. **Nhóm vay (Group lending):** Mô hình Grameen Bank – 5 người bảo lãnh nhau
2. **Khoản vay nhỏ, kỳ hạn ngắn:** Khởi đầu tối đa $25–50 USD, kỳ hạn 1–3 tháng
3. **Tự động khóa ví:** Khi quá hạn, tự động giữ lại luồng tiền đến (kiều hối, lương) để trừ nợ
4. **Credit bureau chia sẻ:** Phối hợp với BRH xây dựng credit registry cho toàn thị trường

### 5.3 Thương mại hóa Viện trợ Nhân đạo (CVA – Cash & Voucher Assistance)

**Thị trường CVA tại Haiti – Bức tranh Thực tế:**

WFP tại Haiti đang chạy các chương trình viện trợ tiền mặt lớn:
- **Tháng 1/2026:** WFP hỗ trợ 718,500 người, trong đó **5.2 triệu USD chi trả bằng cash-based transfers**[^31]
- WFP sử dụng hệ thống voucher điện tử tại các chợ được chỉ định[^32]
- Toàn cầu, WFP cung cấp **2 tỷ USD** cash-based transfers mỗi năm (2025)[^33]

**Các tổ chức quốc tế đang hoạt động tại Haiti (ưu tiên tiếp cận):**

| Tổ chức | Quy mô (Haiti) | Loại CVA | Tiếp cận |
|---|---|---|---|
| **WFP** | 718,500 người/tháng[^31] | Cash + Food vouchers | BRH → WFP Haiti Country Office |
| **UNICEF** | Chương trình bảo trợ xã hội trẻ em | Cash transfers | UNICEF Haiti |
| **UNHCR** | Người tị nạn nội địa (1.4M người di dời[^3]) | Multipurpose cash | UNHCR Haiti |
| **IOM** | Di cư và tái định cư | Hỗ trợ tiền mặt | IOM Haiti |
| **Klere Chimen (Chính phủ Haiti)** | Chương trình bảo trợ xã hội quốc gia | WFP support[^31] | Bộ Xã hội Haiti |

**Mô hình Dịch vụ CVA đề xuất:**

```
Tổ chức quốc tế (WFP/UNICEF) → API chuyển tiền → Ví Natcash/PINASSI của beneficiary
                                        ↓
                               PINASSI Portal (Phân hệ 2)
                         [Dashboard quản lý, báo cáo, reconciliation]
                                        ↓
                              BRH AML Reporting (UCREF)
```

**Mô hình thu phí:**
- **Platform fee:** 0.5–1% giá trị disbursement (thấp hơn nhiều so với chi phí ATM/cash-out hiện tại ~3–5%)
- **KYC-as-a-Service:** Charge riêng cho việc verify danh tính beneficiary ($0.50–1 USD/người)
- **Reconciliation & Reporting Service:** Phí cố định theo tháng ($500–5,000/tháng tùy quy mô)

**Lợi thế cạnh tranh:** Natcash đã có **30,000 agent nationwide** kể cả vùng sâu vùng xa – giải quyết vấn đề "last-mile cash-out" mà các tổ chức quốc tế đang đau đầu.[^15]

***

## PHẦN 6: PHÂN TÍCH 11 MỎ DOANH THU – ƯU TIÊN CHIẾN LƯỢC

### 6.1 Ma trận Ưu tiên (Feasibility × Revenue Potential)

| Mỏ doanh thu | Tiềm năng (1-5) | Khả thi GĐ1 (1-5) | Ưu tiên | Timeline |
|---|---|---|---|---|
| 1. Phí giao dịch P2P | 3 | 5 | 🟢 Ngay lập tức | T10/2026 |
| 2. Phí merchant payments (QR) | 4 | 5 | 🟢 Ngay lập tức | T10/2026 |
| 3. Phí kiều hối | 5 | 4 | 🟢 Ưu tiên cao | T12/2026 |
| 4. CVA/Humanitarian disbursement | 4 | 4 | 🟢 Ưu tiên cao | T11/2026 |
| 5. Float income (tiền gửi ví) | 3 | 3 | 🟡 Trung bình | T6/2027 |
| 6. Cho vay vi mô | 5 | 3 | 🟡 Trung bình | T6/2027 |
| 7. Thanh toán hóa đơn (Utilities) | 3 | 4 | 🟡 Trung bình | T3/2027 |
| 8. USDT/HTG exchange (Stablecoin) | 5 | 2 | 🔴 Dài hạn | 2028+ |
| 9. eKYC API cho bên thứ ba | 4 | 2 | 🔴 Dài hạn | 2028+ |
| 10. Bảo hiểm vi mô | 3 | 2 | 🔴 Dài hạn | 2028+ |
| 11. Digital government services | 3 | 3 | 🟡 Trung bình | T6/2027 |

**So what?** Bốn mỏ doanh thu đầu tiên (P2P + QR + Kiều hối + CVA) có thể triển khai trong năm đầu và tạo ra dòng tiền thực sự để nuôi dự án. Cho vay vi mô và Stablecoin là cú đánh lớn nhưng cần thời gian và regulatory approval.

***

## PHẦN 7: KHUYẾN NGHỊ TỔNG HỢP VÀ HÀNH ĐỘNG NGAY

### 7.1 Danh sách Hành động Ngay (Tuần 1 – Từ 14/06/2026)

| STT | Hành động | Người chịu trách nhiệm | Deadline | Kết quả kỳ vọng |
|---|---|---|---|---|
| 1 | Xác nhận trạng thái nhân sự – ai đã onboard, ai còn thiếu | VTG/VDS PM | 16/06 | Danh sách nhân sự đầy đủ |
| 2 | Gửi công văn chính thức cho BRH yêu cầu API spec + sandbox ACI | VTG/Natcom | 17/06 | Nhận doc trong 7 ngày |
| 3 | Lên lịch kick-off meeting tại Haiti với BRH | Natcom | 18/06 | Ngày họp được xác nhận |
| 4 | Chuẩn bị dự thảo BRD outline để trình BRH | VDS BA | 20/06 | Tài liệu ready cho workshop |
| 5 | Liên hệ WFP Haiti Country Office về nhu cầu CVA platform | Natcom Partnerships | 21/06 | LoI hoặc meeting date |
| 6 | Thiết lập Security Protocol cho nhân sự tại Haiti | VTG Security | 20/06 | Emergency response plan |
| 7 | Phê duyệt ngân sách khẩn cấp cho tuyển dụng bổ sung | Ban CNTT/VTG | 18/06 | Budget approved |

### 7.2 Điều kiện Thành công (Critical Success Factors)

1. **BRH cam kết bằng văn bản** về timeline Switch go-live và sandbox access cho ACI API trước khi phát triển bắt đầu
2. **Đội ngũ tại chỗ đủ mạnh:** Tối thiểu 1 PM + 1 BA nói tiếng Pháp/Creole hiện diện tại Port-au-Prince trong giai đoạn thiết kế
3. **Kiến trúc offline-first:** App Phân hệ 1 phải hoạt động ổn định ngay cả khi kết nối internet không ổn định – đây là thực tế tại Haiti
4. **UX đơn giản tuyệt đối:** Người dùng mục tiêu tại chợ đầu mối có literacy tài chính thấp, nhiều người chỉ quen tiền mặt. App cần test với người dùng thực tại Haiti
5. **Quan hệ BRH là tài sản chiến lược:** Mọi quyết định kỹ thuật lớn phải có BRH buy-in trước, tránh "surprise" khi gần deadline

### 7.3 Cột Mốc Ra Quyết Định (Go/No-Go Gates)

| Mốc | Điều kiện Go | Điều kiện No-Go |
|---|---|---|
| **15/07/2026** – Kết thúc phase thiết kế | BRD được BRH phê duyệt + API spec nhận được | Chưa có phê duyệt → dừng development, tái đàm phán |
| **15/09/2026** – Kết thúc UAT | 95%+ test cases pass, AML module hoạt động | Fail UAT → gia hạn thử nghiệm 1 tháng |
| **15/10/2026** – Go-live thử nghiệm | Pilot 50 merchant + 1,000 users sẵn sàng | Chưa đủ điều kiện → soft-launch giới hạn |

***

*Báo cáo này được xây dựng dựa trên thông tin công khai có sẵn tính đến ngày 14/06/2026. Các số liệu đánh dấu 📙 Assumption là ước tính có căn cứ chuyên môn và cần được xác minh thêm với dữ liệu nội bộ của VDS/VTG/Natcom và BRH.*

---

## References

1. [$4.1 Billion in Unrequited Transfers Recorded in 2024](https://lenouvelliste.com/en/article/252362/41-billion-in-unrequited-transfers-recorded-in-2024) - For the year 2024, remittance inflows to Haiti surpassed the $4 billion mark, revealed the governor ...

2. [Haiti Remittances - Trading Economicstradingeconomics.com › Haiti](https://tradingeconomics.com/haiti/remittances) - Remittances in Haiti increased to 4111 USD Million in 2024 from 3753.25 USD Million in 2023. This pa...

3. [World Report 2026: Haiti | Human Rights Watch](https://www.hrw.org/world-report/2026/country-chapters/haiti)

4. [S/2025/597 Security Council](https://digitallibrary.un.org/nanna/record/4091504/files/S_2025_597-EN.pdf?withWatermark=0&withMetadata=0&registerDownload=1&version=1)

5. [Haiti crisis at breaking point as gangs tighten grip ahead of transition ...](https://news.un.org/en/story/2026/01/1166806) - Haiti’s deepening crisis has reached a critical phase, senior UN officials warned the Security Counc...

6. [Haiti: Briefing and Consultations* : What's In Blue](https://www.securitycouncilreport.org/whatsinblue/2026/04/haiti-briefing-and-consultations-17.php) - Haiti: Briefing and Consultations* : What's In Blue : Security Council Report

7. [[PDF] EUAA COI Query Response - Haiti: Security Situation in Port-au-Prince](https://www.euaa.europa.eu/sites/default/files/publications/2026-04/2026_04_EUAA_COI_Query_Response_Q14_Haiti_Security_Situation_in_Port_au_Prince.pdf)

8. [Mon Cash impose une nouvelle étape de conformité pour sécuriser ses services](https://www.gazettehaiti.com/index.php/node/12288) - Tous les comptes Mon Cash non identifiés sont désormais suspendus. C’est l’annonce faite par La soci...

9. [Urgent/Banque/Haïti : Les services liés au SPIH et au Pronap ...](https://rezonodwes.com/2023/06/urgent-banque-haiti-les-services-lies-au-spih-et-au-pronap-suspendus-provisoirement-annonce-la-brh/) - La Banque de La République d’Haïti (BRH) a informé, ce 14 juin, qu’elle fait face à des difficultés ...

10. [Lancement du projet PRONAP (Processeur National de Paiements) - Haiti Economie](https://haitieconomie.com/lancement-du-projet-pronap-processeur-national-de-paiements/) - Discours du Gouverneur Jean Baden Dubois à l’occasion du lancement du projet PRONAP (Processeur Nati...

11. [Czech Republic vs Haiti — Crypto Regulation Comparison](https://www.cryptowisser.com/resources/crypto-regulation-map/CZ/vs/HT) - Compare cryptocurrency regulations between Czech Republic and Haiti. Side-by-side comparison of cryp...

12. [Are Cryptocurrencies legal in Haiti? - 2025 Laws and Regulations](https://legalitylens.com/are-cryptocurrencies-legal-in-haiti/) - The rise of cryptocurrencies such as Bitcoin, Ethereum, Litecoin, Dogecoin, Tether, Cardano, USDT, X...

13. [La BRH met en garde contre des opérateurs non autorisés](https://lenouvelliste.com/article/258591/la-brh-met-en-garde-contre-des-operateurs-non-autorises) - La Banque de la République d’Haïti alerte le public sur la diffusion de publicités incitant à utilis...

14. [Haiti Consumer Trends 2025: $25B GDP, 11.8M Population, $4.1B ...](https://www.hoperesearchgroup.com/blog/haiti-consumer-trends-2025) - Haiti consumer trends: $25.2B GDP (World Bank, 2024), 11.8M population, $4.1B remittances (20% of GD...

15. [Natcash & NATCOM Champion Haiti's Digital Growth and National Pride](https://www.streetinsider.com/Evertise+Financial/Natcash+&+NATCOM+Champion+Haiti%E2%80%99s+Digital+Growth+and+National+Pride/25677637.html) - Port-au-Prince, Haiti, 29 November 2025 NATCOM, Haitis leading telecommunications operator, reinforc...

16. [NATCOM: Natcash impulsa las finanzas digitales en Haití con un ...](https://gdc.einnews.com/pr_news/821817493/natcom-natcash-impulsa-las-finanzas-digitales-en-hait-con-un-ecosistema-de-pagos-seguro-y-diverso) - Con la misión de promover la inclusión financiera en Haití, NATCOM continúa posicionando a Natcash –...

17. [NATCOM Reinforces Its Leadership in the Digital Economy and ...](https://evertise.net/natcom-reinforces-its-leadership-in-the-digital-economy-and-national-budget-contribution/)

18. [Natcom - Viettel Group](https://viettel.com.vn/en/creating-a-digital-society/vien-thong/international-telecommunications/natcom/) - # 1 về hạ tầng mạng lưới: 1.900 trạm phát sóng (2G, 3G, 4G), 4.500 km cáp quang, đạt 90% hạ tầng cáp...

19. [Manage multi-channel transactions with BASE24-eps | ACI Worldwide](https://www.aciworldwide.com/solutions/base24-eps) - BASE24-eps is an enterprise-class payments solution designed to manage a constant flow of new transa...

20. [Support to Haiti's National Identification Office](https://www.oas.org/ext/en/democracy/puica-haiti)

21. [Identity verification in Haiti](https://didit.me/solutions/countries/haiti/) - KYC, KYB, and AML screening in Haiti, 14,000+ document types, real-time, $0.33 per full KYC. 500 fre...

22. [Vérification d'identité en Haïti - Didit.me](https://didit.me/fr/solutions/countries/haiti/) - KYC, KYB et filtrage AML en Haïti, plus de 14 000 types de documents, en temps réel, 0,33 $ par KYC ...

23. [EMV® QR Codes - EMVCo](https://www.emvco.com/emv-technologies/qr-codes/) - EMV QR Code technology enables merchants to provide their customers with a wide range of payment opt...

24. [EMVCo Publishes QR Code Payment Specifications to ...](https://ffnews.com/newsarticle/emvco-publishes-qr-code-payment-specifications-to-promote-global-interoperability/) - EMVCo has publicly released two QR Code payment specifications that support merchant-presented QR Co...

25. [[PDF] EMVCo Creates QR Payment Mark to Help Promote Worldwide ...](https://www.emvco.com/wp-content/uploads/news/QR-Code-Mark_FINAL.pdf)

26. [QR Code Use Expanding with New Global Specification](https://infinicept.com/payment-facilitator/archive/qr-code-use-expanding-with-new-global-specification/) - In another sign that QR code payments are gaining ground globally, EMVCo has released its first QR c...

27. [Haiti - Economy : Status of Diaspora Remittances to Haiti](https://www.haitilibre.com/en/news-46327-haiti-economy-status-of-diaspora-remittances-to-haiti.html)

28. [Lending Interest Rate - 2025 Data 2026 Forecast 1994-2023 Historical](https://tradingeconomics.com/haiti/lending-interest-rate-percent-wb-data.html) - Lending interest rate (%) in Haiti was reported at 14.21 % in 2023, according to the World Bank coll...

29. [Haiti Lending interest rate - data, chart](https://www.theglobaleconomy.com/Haiti/lending_interest_rate/) - Haiti: Interest rates on bank credit to the private sector: The latest value from 2023 is 14.21 perc...

30. [Haïti Priorise: Graduation Microfinance, Serent](https://copenhagenconsensus.com/publication/haiti-priorise-graduation-microfinance-serent) - Description of Problem The evidence of an increase in the level of extreme poverty has been reinforc...

31. [WFP Haiti Country Brief, January 2026](https://reliefweb.int/report/haiti/wfp-haiti-country-brief-january-2026) - Situation Report in English on Haiti about Education, Food and Nutrition and more; published on 30 M...

32. [In Haiti’s storm-hit south, food vouchers restore choice and dignity for families](https://news.un.org/en/story/2026/01/1166757) - Standing outside a colourfully painted building in southeastern Haiti, at the entrance to a bustling...

33. [Cash transfers | World Food Programme](https://www.wfp.org/cash-transfers) - The World Food Programme (WFP) uses cash transfers to empower people with choice to address their es...

