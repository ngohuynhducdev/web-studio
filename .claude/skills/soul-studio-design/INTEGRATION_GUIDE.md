# Integration Guide — Dùng SOUL STUDIO Design System trong Project Landing Page có sẵn

Bạn đang có Next.js project landing-page templates, đã làm xong homepage. Giờ muốn thêm template spa dùng design system này. Đây là 3 cách kết nối, sắp xếp từ **ít việc nhất → có tổ chức nhất**.

## Tổng quan workflow

```
your-landing-templates/         ← project hiện có của bạn trên VS Code
├── app/
│   ├── page.tsx               (homepage hiện có)
│   └── templates/
│       └── spa-soul-studio/   ← thư mục mới, chứa template spa
│           └── page.tsx
├── components/
│   ├── shared/                (components dùng chung của bạn)
│   └── templates/
│       └── spa-soul-studio/   ← components của template spa
│           ├── Hero.tsx
│           ├── Pricing.tsx
│           └── ...
├── public/
│   └── templates/
│       └── spa-soul-studio/   ← ảnh của template
├── design-systems/
│   └── soul-studio/           ← TOÀN BỘ design system này (README, tokens, kits)
│       ├── README.md          (AI assistant đọc cái này để hiểu brand)
│       ├── SKILL.md
│       ├── colors_and_type.css
│       ├── assets/
│       └── ui_kits/
└── .claude/                   (hoặc .cursor/, .github/copilot-instructions.md)
    └── ...
```

**Ý tưởng chính**: design system trở thành **tài liệu** trong repo của bạn. AI assistant đọc nó như đọc bất kỳ file nào khác, dùng làm nguồn truth khi sinh code cho template spa.

---

## Cách 1 — Copy thẳng `nextjs-handoff/` (đơn giản nhất, không cần AI)

Nếu bạn chỉ cần template spa **chạy được ngay**, không cần AI hiểu thêm:

```bash
# Trong project Next.js của bạn:
cd your-landing-templates

# Copy 11 components đã convert sang Tailwind:
cp -r path-to-this-project/nextjs-handoff/components/* components/templates/spa-soul-studio/

# Copy page mẫu:
mkdir -p app/templates/spa-soul-studio
cp path-to-this-project/nextjs-handoff/app/page.tsx app/templates/spa-soul-studio/page.tsx

# Copy ảnh:
mkdir -p public/templates/spa-soul-studio
cp path-to-this-project/assets/moodboard/*.webp public/templates/spa-soul-studio/

# Merge tokens vào Tailwind config của bạn (xem nextjs-handoff/tailwind.config.ts)
# Merge CSS variables vào globals.css của bạn (xem nextjs-handoff/globals.css)

npm install clsx tailwind-merge lucide-react
```

Đổi import paths trong components từ `@/components/` sang đúng nơi bạn đặt (`@/components/templates/spa-soul-studio/`), đổi image paths từ `/images/moodboard/` sang `/templates/spa-soul-studio/`. Done.

**Phù hợp khi**: Bạn chỉ cần template này, không cần sinh ra biến thể, không cần AI assistant hiểu brand.

---

## Cách 2 — Dùng với **Claude Code** trong VS Code (khuyến nghị)

Claude Code có khái niệm **Agent Skills** — folder chứa hướng dẫn để Claude tự load khi cần. Design system này đã có sẵn `SKILL.md`.

### Setup

```bash
cd your-landing-templates

# Tạo thư mục skills nếu chưa có
mkdir -p .claude/skills

# Copy CẢ project design system vào skill folder
cp -r path-to-this-project .claude/skills/soul-studio-design
```

Sau khi xong, Claude Code sẽ tự thấy skill `soul-studio-design` qua front-matter trong `SKILL.md`. Khi bạn nói:

> "dùng skill soul-studio-design để làm template spa landing page trong project này. Đặt template ở app/templates/spa-soul-studio/"

Claude Code sẽ:
1. Đọc `SKILL.md` → load instructions
2. Đọc `README.md` để hiểu brand voice, tokens, typography
3. Đọc `colors_and_type.css` để lấy CSS vars
4. Đọc `ui_kits/website/*.jsx` để hiểu cấu trúc components
5. Đọc `nextjs-handoff/` để biết cách convert sang Tailwind
6. Sinh code template đúng brand

### Tạo file `CLAUDE.md` ở root project (khuyến nghị thêm)

Đây là file Claude Code đọc mọi phiên chat. Nội dung gợi ý:

```markdown
# Landing Page Templates Project

Đây là project tạo nhiều template landing page demo cho khách hàng xem.

## Cấu trúc

- `app/page.tsx` — homepage chính, đã hoàn thành, KHÔNG ĐỘNG VÀO
- `app/templates/<template-name>/page.tsx` — mỗi template là một route
- `components/shared/` — components dùng chung
- `components/templates/<template-name>/` — components riêng của template
- `public/templates/<template-name>/` — ảnh riêng của template
- `design-systems/<name>/` — design system tham chiếu (đừng import từ đây)

## Design systems khả dụng

| Skill | Path | Brand |
|---|---|---|
| `soul-studio-design` | `.claude/skills/soul-studio-design/` | SOUL STUDIO — Thai spa |
| (thêm các skill khác sau) | | |

## Quy tắc khi tạo template mới

1. Mỗi template tạo route `app/templates/<slug>/page.tsx`
2. Components nằm trong `components/templates/<slug>/`
3. Ảnh nằm trong `public/templates/<slug>/`
4. Tokens (màu, font) của template — nếu khác homepage — declare scoped trong file CSS riêng, không pollute global
5. Tham chiếu design system nếu có; nếu không có, hỏi tôi

## Tech stack

- Next.js 14 App Router
- TypeScript strict
- Tailwind CSS v3.4
- next/font cho typography
- next/image cho ảnh
```

**Phù hợp khi**: Bạn dùng Claude Code và sẽ thêm nhiều templates về sau, muốn workflow có tổ chức.

---

## Cách 3 — Dùng với **Cursor / Continue / GitHub Copilot**

Các AI assistant khác chưa có khái niệm "skill" như Claude Code. Cách dùng:

### Cursor

Tạo file `.cursorrules` ở root:

```
Khi tôi yêu cầu làm template spa, hãy đọc design-systems/soul-studio/README.md để hiểu brand.

Brand SOUL STUDIO:
- Màu: Ivory #FFF8F1, Sand Beige #E3D4C5, Deep Wine #23060B (CTA), Espresso #1D110C
- Font: Playfair Display (display) + Source Sans 3 (body)
- Pill-shaped buttons với ivory dot + arrow icon
- Không emoji, không gradient (trừ scrim trên hero ảnh), không backdrop-blur
- Section padding 96-128px
- Italic 1 từ trong heading
- Voice: chậm, trang trọng, "you/your"

Components sẵn sàng dùng ở design-systems/soul-studio/nextjs-handoff/components/
```

Hoặc tốt hơn: dùng `.cursor/rules/` (nhiều rule files) và đặt design system rule riêng.

### GitHub Copilot

Tạo `.github/copilot-instructions.md` với nội dung tương tự `.cursorrules`.

### Cách dùng (mọi tool)

Copy folder design system vào project:

```bash
cd your-landing-templates
mkdir -p design-systems
cp -r path-to-this-project design-systems/soul-studio
```

Khi cần generate template, mở Cursor/Copilot chat và nói:

> "@design-systems/soul-studio làm cho tôi template spa landing page tại app/templates/spa-soul-studio/page.tsx, dùng tokens và components trong design-systems/soul-studio/nextjs-handoff/"

AI sẽ đọc thư mục, dùng làm context, sinh code đúng brand.

---

## Prompt kickoff (paste vào AI chat)

Sau khi setup xong, đây là prompt sẵn để bắt đầu:

```
Tôi vừa thêm design system SOUL STUDIO vào project tại path
design-systems/soul-studio/ (hoặc .claude/skills/soul-studio-design/).

Yêu cầu: tạo template landing page spa dùng design system này:
- Route: app/templates/spa-soul-studio/page.tsx
- Components ở: components/templates/spa-soul-studio/
- Ảnh ở: public/templates/spa-soul-studio/ (copy từ design-systems/.../assets/moodboard/)
- Dùng đúng tokens (Ivory, Sand Beige, Deep Wine, Espresso, Playfair Display, Source Sans 3)
- Reference: design-systems/soul-studio/nextjs-handoff/ đã có sẵn 11 components Tailwind

Đọc design-systems/soul-studio/README.md trước, rồi bắt đầu.
Hỏi tôi nếu có gì chưa rõ về cấu trúc project hiện có.
```

---

## Workflow lý tưởng cho nhiều templates

Khi bạn có nhiều design system (mỗi cái cho 1 ngành — spa, gym, real estate, restaurant...):

```
your-landing-templates/
├── design-systems/
│   ├── soul-studio/        ← spa
│   ├── ironforge/          ← gym (sau này)
│   ├── manorhouse/         ← real estate (sau này)
│   └── README.md           ← index của tất cả design systems
├── app/templates/
│   ├── spa-soul-studio/
│   ├── gym-ironforge/
│   └── ...
├── .claude/skills/         ← nếu dùng Claude Code, mỗi DS là 1 skill
│   ├── soul-studio-design/
│   └── ironforge-design/
└── CLAUDE.md               ← root instructions
```

Mỗi khi cần làm template mới, bạn:
1. Tạo design system bằng tool design (như cách bạn đã làm cái này)
2. Copy vào `design-systems/<name>/`
3. (Optional) Symlink vào `.claude/skills/<name>/` cho Claude Code
4. Ask AI: "làm template cho <name>"
5. AI đọc design system + sinh code

---

## Tóm tắt — chọn nhanh

| Tình huống | Dùng cách |
|---|---|
| Chỉ cần template này, deploy xong | **Cách 1** — copy `nextjs-handoff/` |
| Dùng Claude Code, sẽ làm nhiều templates | **Cách 2** — Skills + CLAUDE.md |
| Dùng Cursor / Copilot / Continue | **Cách 3** — `.cursorrules` / `copilot-instructions.md` |
| Muốn tổ chức bài bản cho team | **Cách 2 hoặc 3** + folder `design-systems/` |
