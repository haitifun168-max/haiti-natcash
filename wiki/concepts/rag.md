---
title: "RAG"
type: concept
status: stable
tags: [concept, knowledge-management, architecture, ai-researcher]
created: 2026-06-15
updated: 2026-06-15
source: "[[raw/2026-06-14-example-karpathy-llm-wiki.md]]"
---

# RAG (Retrieval-Augmented Generation)

> **Tóm tắt 1 dòng:** Phương pháp tối ưu câu trả lời của mô hình ngôn ngữ lớn bằng cách tìm kiếm và truy xuất thông tin từ tài liệu bên ngoài tại thời điểm truy vấn.

---

## 📌 Nội dung chính

**RAG (Retrieval-Augmented Generation)** là kiến trúc phổ biến trong các ứng dụng AI để giải quyết vấn đề giới hạn kiến thức và hiện tượng ảo tưởng (hallucination) của LLM. Tuy nhiên, nó đòi hỏi việc tạo các vector nhúng (embeddings) cho toàn bộ tài liệu thô và thực hiện tìm kiếm ngữ nghĩa (semantic search) trên cơ sở dữ liệu vector mỗi khi người dùng đặt câu hỏi.

### So sánh RAG truyền thống và [[concepts/llm-wiki|LLM Wiki]] (đề xuất bởi Andrej Karpathy):
1. **Chi phí Token:** RAG đòi hỏi gửi kèm các đoạn văn bản truy xuất được vào context window của LLM tại mỗi lượt chat, làm tăng token sử dụng. LLM Wiki tiết kiệm ~95% token do LLM biên dịch tài liệu thô một lần duy nhất thành Markdown.
2. **Tính compounding (tích lũy):** Mỗi tài liệu mới trong LLM Wiki được tích hợp vào các trang hiện có, làm phong phú mạng lưới liên kết. RAG chỉ đơn thuần truy xuất các đoạn tài liệu độc lập mà không có sự liên kết tri thức chủ động.
3. **Khả năng đọc hiểu:** LLM Wiki lưu trữ ở dạng Markdown thân thiện với con người, có thể đọc và sửa trực tiếp trong Obsidian, trong khi cơ sở dữ liệu vector của RAG là các giá trị số không thể đọc trực tiếp.

---

## 💡 Điểm mấu chốt

- RAG phù hợp cho cơ sở dữ liệu khổng lồ, động và thay đổi liên tục.
- LLM Wiki là giải pháp tối ưu cho kho tri thức cá nhân hoặc dự án (quy mô vừa và nhỏ), ưu tiên tính mạch lạc và liên kết tri thức.

---

## 🔗 Liên kết liên quan

- [[concepts/llm-wiki]]
- [[entities/andrej-karpathy]]

---

## 📚 Tham chiếu nguồn

- [[raw/2026-06-14-example-karpathy-llm-wiki.md]] — Gist của Andrej Karpathy về kiến trúc LLM Wiki đối chiếu với RAG (04/2026).

---

*Trang này được tạo/cập nhật tự động bởi Antigravity 2.0 | llm-wiki skill*
