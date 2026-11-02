# Brand tokens — «Кудри вьются»

Source: бренд-бук; токены зафиксированы пользователем 2026-11-02.
Применяется ТОЛЬКО к этому проекту (см. Design Values → «Project-specific
adaptation: „Кудри вьются“» в скилле redesign-existing-projects).

## Palette
- `#FFFFF2` — фон
- `#4B2D25` — текст (тёплый коричневый)
- `#661D24` — primary accent
- `#E5A3B1` — soft
- `#C7D8E2` — декоративные карточки
- Градиенты фона: ЗАПРЕЩЕНЫ.

## Fonts
- Заголовки: `NauryzRedKeds` — файл проекта `fonts/nauryzredkeds-subset.woff2`, `font-family: "NauryzRedKeds"`.
- Body: `Onest` — Google Fonts CDN.
- Geist / Manrope / Geist Mono / Poppins для этого проекта не используются.

## Signature shape
- Скаллоп-«облако»: CSS `mask-image` с inline data-URI;
  `mask-clip`/`mask-origin: border-box`;
  `padding` ≥ глубины скаллопа + 6px;
  тень только `filter: drop-shadow(...)` (никакого `box-shadow` на фигуре).

## Prices / deadlines
- PENDING: извлекает делегат «brand-analyst» в фазе Ф протокола
  (`skills/BRAND-WAVE-PROTOCOL.md` в глобальном конфиге) — прайс построчно
  с карточек, сроки со слайдов; после фазы Ф дописать сюда и создать
  `tmp/assets-manifest.md` (габариты/рамки каждого SVG).

## Rules for the next wave (Ф → К → В)
Кодер работает только по этому файлу; промпт ≤ 3KB; после принятой волны —
коммит + рестрикт-проход redesign-скилла.
