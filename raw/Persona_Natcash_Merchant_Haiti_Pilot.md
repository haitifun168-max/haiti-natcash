# Persona_Natcash_Merchant_Haiti_Pilot

PHÂN TÍCH PERSONA VÀ YÊU CẦU TÍNH NĂNG

NATCASH MERCHANT TẠI HAITI

Phục vụ xác định phạm vi Loa thông báo thanh toán + Hệ thống quản lý bán hàng cho giai đoạn Pilot

**Kết luận phạm vi persona**

> 
> 
> - Đề xuất 4 persona có khác biệt rõ về hành trình vận hành và nhu cầu sản phẩm; không cố tạo persona thứ 5 khi dữ liệu chưa đủ.
> - Không có cơ sở để tự phân bổ 601 merchant của Pilot theo từng persona. BRH/Natcash cần cung cấp cơ cấu merchant trước khi chốt số lượng thiết bị và cấu hình gói.
> - Ký hiệu trong tài liệu: [FACT] dữ liệu đã xác thực tại Haiti; [VN] benchmark từ Việt Nam; [KS] giả thuyết cần khảo sát tại Haiti.

---

1. Cơ sở lựa chọn persona

> • FinScope MSME Haiti 2023 ước tính 660.845 chủ MSME sở hữu 710.337 cơ sở; 71,15% là doanh nghiệp siêu nhỏ, 89% là cá nhân tự kinh doanh và chỉ 11% cơ sở có nhân viên. Thương mại chiếm 66% số MSME. [1]
> 
> - 99% MSME nhận tiền mặt; chỉ 8% có lưu giữ hồ sơ tài chính và khoảng 1% lưu giữ trên hệ thống máy tính. Nhiều MSME vận hành trên đường/vỉa hè, tại nhà ở hoặc quầy/sạp. [1]
> - BRH xác định Pilot gồm 601 merchant phi chính thức tại Pétion-Ville, Les Cayes và Cap-Haïtien; Madan Sara là nhóm trọng tâm, với nhu cầu thanh toán số, quản lý doanh thu - tồn kho, thông tin giá và đào tạo. [3]
> - Nghiên cứu BRH năm 2024 về Madan Sara xác nhận mô hình mua - bán lại, di chuyển nguồn hàng/điểm bán, rủi ro an ninh, chi phí vận chuyển, biến động giá và nợ phi chính thức. [2]
> - Benchmark Việt Nam được dùng để tham khảo yêu cầu Soundbox/POS như thông báo giao dịch thành công, phát lại, quản lý doanh thu, cửa hàng và nhân viên; không được coi là bằng chứng trực tiếp về hành vi merchant Haiti. [6][7]

2. Phân tích persona

P1. Madan Sara thu mua và bán hàng lưu động

| **Persona** | **Chân dung** | **Công việc hàng ngày** | **Hiện trạng & pain point** | **Tính năng cần thiết** | **Tính năng nên có** | **Tính năng chưa cần** |
| --- | --- | --- | --- | --- | --- | --- |
| **P1. Madan Sara thu mua và bán hàng lưu động**
Ưu tiên: Thanh toán + quản lý thu chi/giá; Soundbox cần thử nghiệm. | • [FACT] Thương nhân mua và bán lại hàng hóa, chủ yếu thực phẩm/nông sản; tham gia kết nối nguồn hàng và chợ tiêu dùng. [2]
• [FACT] Di chuyển giữa nơi mua hàng và nơi bán; điểm bán và nơi nhập hàng có thể thay đổi do an ninh. [2]
• [FACT] Chủ yếu tự vận hành; không có dữ liệu đủ tin cậy để xác định tỷ trọng trong 601 merchant.
• [FACT] Mẫu BRH n=25 tại khu vực Ouest cho thấy 88% có tài khoản MonCash; chỉ dùng làm tín hiệu về mức độ tiếp xúc mobile money, không suy rộng toàn quốc. [2] | • [FACT] Tìm nguồn và so sánh giá hàng.
• [FACT] Mua hàng; có thể sử dụng mua chịu hoặc nguồn tín dụng phi chính thức.
• [FACT] Thuê/vận chuyển hàng đến chợ hoặc điểm bán.
• [FACT] Bán buôn hoặc bán lẻ; thu tiền và xử lý hàng còn/hư hỏng.
• [KS] Cuối ngày đối chiếu tiền thu, chi phí vận chuyển, tiền hàng và công nợ. | • [FACT] Bất ổn an ninh buộc thay đổi nguồn hàng/điểm bán; 72% mẫu BRH phải đổi điểm bán, 58,33% đổi nơi nhập hàng. [2]
• [FACT] Chi phí vận chuyển cao, hàng hư hỏng, giá mua và giá bán biến động. [2]
• [FACT] Nợ từ “Sol”, “Ponya”, microcredit, ứng trước gia đình và mua chịu; nhiều người gặp khó khăn trả nợ. [2]
• [FACT] Rủi ro bạo lực và mất mát tiền/hàng.
• [KS] Khó tính lợi nhuận thực của từng chuyến hàng và Soundbox cố định có thể không phù hợp. | • QR Natcash tĩnh có thể mang theo.
• Lịch sử và trạng thái giao dịch.
• Ghi nhanh tiền mua, tiền bán, chi phí vận chuyển.
• Báo cáo ngày: Tổng thu - Tổng chi - Số dư.
• Thông tin giá theo hàng hóa/địa bàn, có nguồn và ngày cập nhật.
• Low-bandwidth; agent hỗ trợ onboarding. | • Thử nghiệm Soundbox di động pin cả ngày.
• Quản lý “chuyến hàng”: vốn, chi phí, doanh thu, lãi ước tính.
• Công nợ đơn giản và nhắc nợ.
• Tìm điểm cash-out nếu Natcash có dữ liệu. | • Cấp Soundbox cố định đại trà.
• Tồn kho chi tiết theo SKU.
• Quản lý ca/nhân viên.
• CRM, loyalty, máy in hóa đơn, đa chi nhánh. |

P2. Người bán tại sạp chợ/điểm bán tương đối cố định

| **Persona** | **Chân dung** | **Công việc hàng ngày** | **Hiện trạng & pain point** | **Tính năng cần thiết** | **Tính năng nên có** | **Tính năng chưa cần** |
| --- | --- | --- | --- | --- | --- | --- |
| **P2. Người bán tại sạp chợ/điểm bán tương đối cố định**
Ưu tiên: Soundbox cố định + xác nhận giao dịch + doanh thu ngày. | • [FACT] Merchant phi chính thức bán trực tiếp tại chợ, vỉa hè hoặc quầy/sạp; FinScope cho thấy nhiều MSME vận hành trên đường/vỉa hè và tại điểm bán nhỏ. [1]
• [FACT] Chủ yếu tự kinh doanh; giao dịch trực tiếp với khách cá nhân.
• [KS] Ngành hàng cụ thể và quy mô trong tập 601 merchant chưa được BRH cung cấp.
• [KS] Là nhóm phù hợp nhất để kiểm chứng Soundbox cố định nhờ có quầy bán ổn định. | • [KS/VN] Nhận hàng, kiểm đếm và bày hàng đầu ngày.
• [KS/VN] Bán liên tục nhiều giao dịch; báo giá và nhận tiền mặt/mobile money.
• [KS] Xác nhận tiền trước khi giao hàng; bổ sung hàng và ghi chi phí.
• [KS/VN] Cuối ngày đếm tiền, kiểm hàng còn và ước tính doanh thu. | • [FACT] Phụ thuộc tiền mặt; 99% MSME nhận thanh toán bằng tiền mặt. [1]
• [FACT] Mức độ ghi chép thấp: 92% không lưu hồ sơ tài chính; chỉ khoảng 1% dùng hệ thống máy tính. [1]
• [KS] Mở điện thoại để kiểm tra giao dịch có thể gây gián đoạn và tăng rủi ro tại chợ.
• [KS] Môi trường ồn, giao dịch pending/failed hoặc ảnh chụp giả có thể gây nhầm lẫn.
• [KS] Đọc công khai số tiền có thể phát sinh lo ngại riêng tư/an ninh. | • QR tĩnh tại quầy.
• Soundbox 4G độc lập, chỉ đọc khi giao dịch Success.
• Âm lượng; phát lại giao dịch gần nhất.
• Cảnh báo mất mạng, pin yếu và trạng thái lỗi.
• Lịch sử giao dịch và tổng doanh thu Natcash trong ngày.
• Cho nhập tổng tiền mặt cuối ngày. | • QR động khi cần khóa số tiền.
• Danh sách sản phẩm bán thường xuyên.
• Tồn đầu ngày/tồn cuối ngày đơn giản.
• Chế độ riêng tư: chỉ âm báo hoặc giảm âm lượng.
• Dây/khóa cố định thiết bị. | • CRM và loyalty.
• Marketing automation.
• Quản lý ca phức tạp.
• API kế toán, hóa đơn điện tử.
• Phân tích AI. |

P3. Cửa hàng bán lẻ siêu nhỏ cố định

| **Persona** | **Chân dung** | **Công việc hàng ngày** | **Hiện trạng & pain point** | **Tính năng cần thiết** | **Tính năng nên có** | **Tính năng chưa cần** |
| --- | --- | --- | --- | --- | --- | --- |
| **P3. Cửa hàng bán lẻ siêu nhỏ cố định**
Ưu tiên: Bán hàng tối giản + tồn kho/thu chi + Soundbox. | • [FACT] Thuộc khu vực thương mại, nhóm chiếm 66% MSME Haiti. [1]
• [FACT] Khả năng cao là chủ tự kinh doanh; 89% chủ MSME là cá nhân tự kinh doanh và 71,15% cơ sở là siêu nhỏ. [1]
• [KS] Loại hàng, số SKU, diện tích và số người vận hành trong tập Pilot chưa có dữ liệu.
• [VN] Có mức tương đồng vận hành với cửa hàng nhỏ/tạp hóa tại Việt Nam, nhưng phải kiểm chứng tại Haiti. | • [VN/KS] Kiểm hàng cần nhập; nhận hàng và thanh toán nhà cung cấp.
• [VN/KS] Cập nhật giá, bán hàng, nhận tiền mặt/Natcash.
• [VN/KS] Ghi chi phí và theo dõi hàng sắp hết.
• [VN/KS] Chốt doanh thu, tiền thực nhận và tồn cuối ngày. | • [FACT] Dùng tiền mặt là chính và thiếu hồ sơ doanh thu/chi phí/tồn kho. [1]
• [FACT] Tài chính cá nhân và kinh doanh khó tách bạch trong khu vực phi chính thức.
• [KS] Không biết chính xác hàng sắp hết, doanh thu và lãi thực.
• [VN/KS] Khai báo toàn bộ catalog ban đầu có thể quá phức tạp.
• [HT/KS] Kỹ năng số không đồng đều; cần hỗ trợ trực tiếp khi triển khai. | • Bán nhanh bằng nhập tổng tiền, không bắt buộc catalog.
• QR tĩnh, QR động và Soundbox.
• Danh mục cơ bản: tên, giá, đơn vị.
• Ghi nhận tiền mặt/Natcash; sổ thu chi.
• Báo cáo ngày/tuần.
• Tồn kho cơ bản và cảnh báo sắp hết.
• Agent hỗ trợ thiết lập dữ liệu ban đầu. | • Nhập danh sách sản phẩm bằng file/mẫu.
• Công nợ khách hàng/nhà cung cấp đơn giản.
• Biên nhận qua SMS.
• Giá vốn và lợi nhuận ước tính.
• Đóng ngày và nhập tiền mặt thực tế. | • AI dự báo và RFM.
• Marketing automation.
• Quản lý chuỗi/đa chi nhánh.
• Máy in nhãn.
• Hóa đơn điện tử nếu chưa có yêu cầu pháp lý. |

P4. Cửa hàng nhỏ có 2-4 nhân viên

| **Persona** | **Chân dung** | **Công việc hàng ngày** | **Hiện trạng & pain point** | **Tính năng cần thiết** | **Tính năng nên có** | **Tính năng chưa cần** |
| --- | --- | --- | --- | --- | --- | --- |
| **P4. Cửa hàng nhỏ có 2-4 nhân viên**
Ưu tiên: Nhân viên/đối soát đơn giản; chỉ áp dụng có chọn lọc. | • [FACT] Chỉ khoảng 11% MSME Haiti có nhân viên; FinScope dùng ngưỡng 2-4 nhân viên như một cách phân loại doanh nghiệp nhỏ. [1]
• [KS] Có thể thuộc bán lẻ, dịch vụ hoặc F&B; BRH chưa cung cấp cơ cấu ngành trong 601 merchant.
• [VN] Nhu cầu phân quyền, chốt ca và đối soát được benchmark từ merchant nhỏ Việt Nam và năng lực Quik.
• [KS] Chỉ nên đưa vào Pilot nếu danh sách thực tế có merchant vận hành bằng nhân viên. | • [VN/KS] Chủ phân công nhân viên; nhân viên tạo đơn/ghi số tiền bán.
• [VN/KS] Nhận thanh toán tiền mặt/Natcash và giao hàng/dịch vụ.
• [VN/KS] Xử lý sai đơn, hủy hoặc hoàn tiền.
• [VN/KS] Cuối ngày đối chiếu tiền mặt, Natcash và doanh thu theo nhân viên. | • [KS] Khó xác định ai thực hiện giao dịch hoặc sửa/hủy đơn.
• [KS] Chênh lệch tiền mặt cuối ngày và nguy cơ nhận tiền vào tài khoản cá nhân.
• [VN/KS] Hủy/refund thiếu phê duyệt và khó truy vết.
• [VN/KS] Chủ cần xem doanh thu khi không trực tiếp có mặt. | • Vai trò Owner và Cashier.
• QR nhận tiền cố định vào ví merchant; nhân viên không được đổi tài khoản.
• Soundbox xác nhận thanh toán.
• Nhật ký giao dịch theo nhân viên.
• Mở/đóng ngày hoặc ca đơn giản.
• Đối chiếu tiền mặt/Natcash.
• Hủy/refund cần Owner phê duyệt. | • Báo cáo theo nhân viên.
• Biên nhận điện tử hoặc máy in Bluetooth.
• Cảnh báo thao tác bất thường.
• Theo dõi trạng thái Soundbox từ xa. | • Chấm công đầy đủ.
• Lập lịch ca phức tạp.
• Nhiều tầng phân quyền.
• CRM/loyalty.
• Dashboard đa chi nhánh. |

3. Tính năng còn thiếu cần bổ sung

Các yêu cầu dưới đây là gap cần bổ sung hoặc phải xác nhận rõ với Natcash/Vinatti trước khi chốt phạm vi Pilot.

| **Tính năng** | **Persona cần** | **Lý do cần** | **Yêu cầu đầu ra** |
| --- | --- | --- | --- |
| Quản lý trạng thái giao dịch | P1-P4 | Merchant phải phân biệt tiền đã nhận, giao dịch đang chờ, thất bại hoặc bị đảo/hoàn; tránh giao hàng dựa trên ảnh chụp hoặc thông báo không hoàn tất. | API Natcash trả về tối thiểu Success, Pending, Failed, Reversed, Refunded; Soundbox chỉ đọc số tiền khi Success; lịch sử hiển thị thời gian, mã giao dịch, số tiền và trạng thái. |
| Tra soát và khiếu nại | P1-P4 | Thanh toán số cần quy trình xử lý giao dịch sai, chậm, trùng hoặc khách/merchant không thống nhất. | Merchant chọn giao dịch, chọn loại vấn đề, nhập mô tả/ảnh; hệ thống cấp mã yêu cầu, hiển thị SLA và trạng thái xử lý; Natcash có back-office tiếp nhận. |
| Quản lý Soundbox từ xa | P2-P4; P1 nếu thử nghiệm loa di động | Thiết bị phân tán, dễ mất kết nối/hỏng/mất cắp; cần giảm chi phí hỗ trợ thực địa. | Theo dõi online/offline, SIM, pin, phiên bản firmware, lần thông báo cuối; OTA; khóa và hủy liên kết từ xa; gán lại thiết bị có kiểm soát. |
| Low-bandwidth và đồng bộ lại | P1-P4 | Hạ tầng điện/kết nối hạn chế; merchant vẫn cần ghi bán hàng, thu chi và tồn kho khi mạng yếu. | Cho lưu nháp nghiệp vụ phi thanh toán; tự đồng bộ và xử lý trùng khi có mạng; hiển thị rõ “chưa đồng bộ”; tuyệt đối không xác nhận thanh toán offline là thành công. |
| Thông tin giá thị trường | P1-P3 | BRH yêu cầu merchant tiếp cận thông tin giá; đặc biệt quan trọng với Madan Sara và merchant hàng hóa. | Hiển thị mặt hàng, địa bàn, khoảng giá, nguồn dữ liệu, ngày/giờ cập nhật; tìm kiếm/lọc; gửi cảnh báo qua app/SMS/WhatsApp; BRH chỉ định đơn vị quản trị dữ liệu. |
| Hỗ trợ onboarding | P1-P4 | Kỹ năng số và mức độ lưu giữ hồ sơ thấp; tự eKYC/cấu hình loa/catalog có thể làm giảm tỷ lệ kích hoạt. | Agent hỗ trợ eKYC, liên kết ví/QR/loa, chọn ngôn ngữ, tạo 5-20 sản phẩm ban đầu và thực hiện giao dịch thử; có checklist và xác nhận hoàn thành. |
| Hỗ trợ rút tiền/điểm đại lý | P1-P3 | Giá trị của mobile money phụ thuộc khả năng sử dụng số dư hoặc rút tiền; khó cash-out sẽ làm merchant quay lại tiền mặt. | Hiển thị điểm đại lý gần nhất, giờ hoạt động, phí/hạn mức; thông tin thanh khoản chỉ hiển thị nếu Natcash có dữ liệu đủ tin cậy. |
| Chế độ riêng tư Soundbox | P2-P4 | Đọc to số tiền có thể làm lộ doanh thu và tạo rủi ro trong môi trường bất ổn. | Merchant chọn: đọc đủ số tiền, chỉ âm báo, hoặc giảm âm lượng theo khung giờ; thay đổi cài đặt cần PIN Owner. |
| Công nợ và thanh toán một phần | P1, P3; khảo sát P4 | BRH/Madan Sara cho thấy mua chịu và nợ phi chính thức; merchant cần biết còn phải thu/phải trả bao nhiêu. | Sổ nợ tối giản: đối tượng, số tiền gốc, đã trả, còn nợ, ngày hẹn; hỗ trợ thanh toán một phần; nhắc nợ; chỉ phát triển sâu sau khảo sát. |
| Nhật ký thao tác và phê duyệt hoàn tiền | P4 | Merchant có nhân viên cần truy vết ai sửa/hủy đơn và ngăn hoàn tiền trái phép. | Ghi user, thời gian, thao tác trước/sau; refund/hủy vượt ngưỡng cần PIN Owner; báo cáo ngoại lệ theo ngày. |

4. Nguồn tham khảo

[1] BRH & Ministry of Economy and Finance: FinScope MSME Haiti 2023 - Survey Highlights (công bố 2024/2025). [Truy cập nguồn](https://www.brh.ht/wp-content/uploads/FinScope-MSME-Haiti-2021_Pocketguide_Eng-2025-04-11.pdf)

[2] Banque de la République d’Haïti (BRH): Impact de l’insécurité sur le secteur réel : les Madan Sara du département de l’Ouest, 2024. [Truy cập nguồn](https://www.brh.ht/wp-content/uploads/Impact-de-l-insecurite-sur-le-secteur-reel-les-Madan-Sara-du-departement-de-l-Ouest.pdf)

[3] BRH - tài liệu dự án nội bộ: Intégration des marchands du secteur informel à l’écosystème numérique national, 2026.

[4] VDS - tài liệu nội bộ: Bản đề xuất giải pháp kinh doanh Natcash Merchant - Powered by VDS Quik Sale & Soundbox, 6/2026.

[5] Vinatti/Quik - tài liệu sản phẩm: Quik Sale - Phần mềm quản lý bán hàng, 2026.

[6] BIDV: Loa thanh toán - tính năng thông báo, phát lại và báo cáo doanh thu. [Truy cập nguồn](https://bidv.com.vn/vn/ho-kinh-doanh-tieu-thuong/san-pham-dich-vu/ngan-hang-so/loa-thanh-toan)

[7] Sacombank: Loa thanh toán - thông báo giao dịch QR thành công và quản lý doanh thu. [Truy cập nguồn](https://www.sacombank.com.vn/ca-nhan/ngan-hang-so/loa-thanh-toan.html)