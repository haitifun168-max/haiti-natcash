---
clipped_from: "https://gist.github.com/karpathy/llm-wiki"
date_clipped: 2026-06-14
source_type: web
---

# Karpathy LLM Wiki — Gist (April 4, 2026)

Andrej Karpathy đề xuất kiến trúc "LLM Wiki" như một thay thế đơn giản hơn cho RAG truyền thống.

## Ý tưởng cốt lõi

Thay vì search document từ đầu mỗi lần (RAG), hãy để LLM đọc sources một lần và tự xây dựng một wiki có cấu trúc. Wiki này được duy trì liên tục và mỗi nguồn mới được tích hợp vào mạng lưới đã có.

## Các thành phần chính

- `raw/` — thư mục nguồn thô bất biến
- `wiki/` — encyclopedia do agent xây dựng và duy trì
- `[[wikilinks]]` — liên kết chéo giữa các khái niệm
- `INDEX.md` — cửa vào chính của toàn bộ wiki
- `_log.md` — lịch sử thay đổi append-only
- `_hot.md` — tóm tắt gần đây cho context nhanh

## Ưu điểm so với RAG

1. Token usage giảm ~95% vì không cần embed toàn bộ raw mỗi lần query
2. Kiến thức compounding — mỗi nguồn mới làm giàu toàn bộ mạng lưới
3. Human-readable — bạn đọc được wiki bằng mắt thường trong Obsidian
4. No vendor lock-in — toàn bộ là plain Markdown file

## Hạn chế

- Cần agent có quyền read/write local filesystem
- Chất lượng wiki phụ thuộc vào chất lượng nguồn thô
- Rủi ro hallucination nếu không có quy tắc sourcing nghiêm ngặt

