---
title: "LLM Wiki"
type: concept
status: stable
tags: [concept, architecture, knowledge-management]
created: 2026-06-14
updated: 2026-06-14
source: "[[raw/2026-06-14-example-karpathy-llm-wiki.md]]"
---

# LLM Wiki

> **Tóm tắt 1 dòng:** Kiến trúc quản lý tri thức sử dụng LLM để xây dựng và duy trì liên tục một mạng lưới wiki có liên kết chặt chẽ từ các nguồn thông tin thô.

---

## 📌 Nội dung chính

Kiến trúc "LLM Wiki" được đề xuất bởi Andrej Karpathy như một phương án thay thế tinh gọn và hiệu quả hơn so với RAG (Retrieval-Augmented Generation) truyền thống. Thay vì tìm kiếm tài liệu thô mỗi lần có truy vấn, hệ thống sử dụng LLM để đọc nguồn thô một lần, phân tích và tích hợp chúng vào các trang wiki có liên kết chéo thông qua **wikilinks**.

Kiến trúc gồm các thành phần chính:
- `raw/`: Thư mục chứa các nguồn dữ liệu thô bất biến.
- `wiki/`: Thư viện bách khoa (encyclopedia) được xây dựng và duy trì bởi AI.
- **wikilinks**: Các liên kết chéo kết nối các khái niệm lại với nhau.
- `INDEX.md`: Cổng vào chính của wiki.
- `_log.md`: Nhật ký thay đổi (append-only) của wiki.
- `_hot.md`: Tóm tắt các thay đổi trong 7 ngày gần nhất để làm context nhanh cho Agent.

---

## 💡 Điểm mấu chốt

- **Tiết kiệm chi phí**: Giảm khoảng 95% lượng token tiêu thụ so với RAG do không cần gửi kèm/nhúng toàn bộ tài liệu thô khi truy vấn.
- **Tính lũy kế kiến thức (Compounding)**: Mỗi nguồn dữ liệu mới được nạp vào sẽ trực tiếp làm phong phú và kết nối chặt chẽ hơn với mạng lưới tri thức hiện có.
- **Thân thiện với con người và độc lập công nghệ**: Các tệp tin được lưu dưới dạng plain Markdown, có thể đọc và quản lý dễ dàng bằng các công cụ như Obsidian mà không bị khóa vào bất kỳ nhà cung cấp dịch vụ nào.

---

## ⚠️ Lưu ý / Mâu thuẫn

- Đòi hỏi Agent AI phải có quyền đọc/ghi hệ thống tệp tin cục bộ.
- Chất lượng của wiki phụ thuộc hoàn toàn vào chất lượng của dữ liệu đầu vào trong thư mục `raw/`.
- Tiềm ẩn rủi ro hallucination (ảo tưởng) của LLM nếu không thiết lập quy tắc sourcing nghiêm ngặt.

---

## 🔗 Liên kết liên quan

- [[entities/andrej-karpathy]]
- [[concepts/rag]]

---

## 📚 Tham chiếu nguồn

- [[raw/2026-06-14-example-karpathy-llm-wiki.md]] — Gist của Andrej Karpathy đề xuất về LLM Wiki (04/04/2026).

---

*Trang này được tạo/cập nhật tự động bởi Antigravity 2.0 | llm-wiki skill*
