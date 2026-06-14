<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# chuyển tài liệu sang file markdown

Dưới đây là bản chuyển nội dung file sang **Markdown thô** để bạn copy dùng trực tiếp (ví dụ: lưu thành `pinassi-haiti.md`). Nội dung giữ nguyên cấu trúc, chỉ chuẩn hóa heading/bullet/table Markdown, không chỉnh sửa nội dung gốc.[^1]

***

```markdown
Dựa trên các tài liệu bạn cung cấp, đặc biệt là công văn số 52/CV-NCM và báo cáo tư vấn lộ trình của VDS, tôi xin tổng hợp chi tiết đầy đủ các yêu cầu và lộ trình triển khai dự án PINASSI tại Haiti như sau:

### 1. Bối cảnh và Mục tiêu dự án

> Dự án PINASSI (Nền tảng Trung gian Thanh toán không tiền mặt) được khởi xướng theo chỉ đạo của Tập đoàn Viettel và đề nghị từ Ngân hàng Trung ương Haiti (BRH).

- **Mục tiêu ngắn hạn:** Thử nghiệm thanh toán không tiền mặt tại một số chợ đầu mối.
- **Mục tiêu dài hạn:** Phổ cập thanh toán không tiền mặt cho tất cả các giao dịch thương mại tại Haiti.
- **Động lực chính:** Giải quyết vấn đề an ninh do tiền mặt (cướp bóc, băng nhóm), tối ưu hóa luồng kiều hối 4 tỷ USD và số hóa chi trả viện trợ nhân đạo.

### 2. Cấu trúc Hệ thống và Phạm vi thực hiện

Hệ thống PINASSI được chia làm 3 phân hệ chính, trong đó Viettel được đề nghị tham gia xây dựng Phân hệ 1, 2 và tư vấn chuẩn QR:

| Phân hệ      | Chức năng chi tiết                                                                                                   | Trạng thái/Ghi chú                                               |
|-------------|----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| **Phân hệ 1** | Cung cấp ứng dụng cho người mua và người bán hàng (người dùng cuối).                                                | Viettel thực hiện.                                              |
| **Phân hệ 2** | Portal quản trị cho BRH: Quản lý đăng ký gian hàng, báo cáo giám sát giao dịch, doanh số, phòng chống gian lận.     | Viettel thực hiện, là trung gian kết nối tới Phân hệ 3.         |
| **Phân hệ 3** | Hệ thống CORE (kết nối liên ngân hàng, ví điện tử, thanh toán bù trừ).                                              | Do BRH thực hiện (đối tác ACI Worldwide phát triển).            |
| **Chuẩn QR**  | Xây dựng bộ tiêu chuẩn sinh mã QR quốc gia dùng chung.                                                              | Viettel tư vấn xây dựng.                                        |

> **Hiện trạng hạ tầng tại BRH:**

- **Hệ thống AML:** Đã có để kiểm soát giao dịch gian lận.
- **Hệ thống Chuyển mạch (Switch):** Dự kiến go-live vào 30/06/2026.
- **API EKYC:** Chưa có (Viettel có cơ hội triển khai dựa trên dữ liệu định danh ONI/CIN có sẵn).

### 3. Yêu cầu về Lộ trình và Tiến độ (Gấp)

> Dự án được đánh giá là có tiến độ thực hiện rất khẩn trương:

- **Thời gian thử nghiệm:** Trong tháng 10/2026.
- **Phân tích nghiệp vụ & Thiết kế hệ thống:** Dự kiến 1 – 1.5 tháng.
- **Phát triển phần mềm & Kiểm thử:** Dự kiến 2.5 – 3 tháng.
- **Thời hạn cần nhân sự hỗ trợ:** Trước ngày 10/06/2026.

### 4. Đề xuất tổ chức triển khai

> Natcom kiến nghị Tập đoàn (VTG, VDS và Ban CNTT) thực hiện các nội dung sau:

- **Thành lập Ban dự án:** Để điều phối nguồn lực vì đây là hệ thống tiền đề cho nền tảng thanh toán quốc gia.
- **Phương thức làm việc:** Ban dự án làm việc trực tiếp tại Haiti để phân tích, thiết kế, tích hợp và triển khai. Phần phát triển phần mềm có thể thực hiện từ xa.
- **Đầu mối phía Natcom:** Ông Nguyễn Xuân Cảnh – PTGĐ (Số ĐT: +509 55.66.66.66).

### 5. Tiềm năng và Cơ hội mở rộng (Theo tư vấn của VDS)

> Sau khi triển khai nền tảng PINASSI, Viettel/VDS có cơ hội khai thác 11 mỏ doanh thu lớn tại Haiti:

- **Kiều hối & Stablecoin:** Thiết kế bàn đổi USDT/HTG trong ví, dự kiến doanh thu lũy kế 5 năm khoảng 18.5 triệu USD.
- **Ngân hàng số:** Cho vay vi mô với lãi suất 30–45% dựa trên dữ liệu chấm điểm tín dụng, dự kiến doanh thu lũy kế 5 năm khoảng 69 triệu USD.
- **Giải ngân viện trợ (CVA):** Cung cấp nền tảng chi trả cho các tổ chức quốc tế (WFP, UNICEF).
- **eKYC Quốc gia:** Thu phí trên mỗi lượt xác minh danh tính.

---

Nguồn tham khảo gốc:

- [Screenshot_2026-06-05-21-41-50-84_a2c15cc5aa3eee4cebdf459173bf9f33.jpg](https://drive.google.com/file/d/1Nx66qwFpgu-bWanMNtN8R6gadFHxAXnY/view?usp=drive_web)
- [Screenshot_2026-06-05-21-41-41-98_a2c15cc5aa3eee4cebdf459173bf9f33.jpg](https://drive.google.com/file/d/1rFNxAwkI44c-cWlhQ-zKgVx8RzSyHAih/view?usp=drive_web)
- [Screenshot_2026-06-05-21-41-23-54_a2c15cc5aa3eee4cebdf459173bf9f33.jpg](https://drive.google.com/file/d/1De_d7nln6aqpGfUnzTtPzChOwo6kmv3I/view?usp=drive_web)
- [VDS - Lộ trình và Tiềm năng Kinh doanh Haiti (Bản Đầy Đủ)](https://docs.google.com/document/d/16inveC2KcqrTgsNnGm5UCmkUYo5xKGjf0srjgK2okwE/edit?usp=drive_web)
```


***

Bạn có cần tôi tách tiếp file Markdown này thành một cấu trúc PRD/Concept Note chuẩn (Objective, Scope, Timeline, Risk, Stakeholder, Business Case) cho dự án PINASSI không?

<div align="center">⁂</div>

[^1]: cong-van-so-52CV-NCM-va-bao-cao-tu-van-lo-trinh-cua-VDS-ve-cac-yeu-cau-va-lo-trinh-trien-khai-d.docx

