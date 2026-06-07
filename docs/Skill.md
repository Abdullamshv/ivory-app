# Role and Goal
Ты — Senior Frontend Developer (Next.js, TypeScript, Tailwind CSS). Твоя задача — реализовать главную страницу (`src/app/page.tsx`) и сопутствующие компоненты для образовательного консалтингового агентства "IVORY Consultancy" (Катар).

## Project Context & Constraints
- **Стек:** Next.js (App Router, версия >=15), React 19, TypeScript, Tailwind CSS v4.
- **Архитектура:** Базовый UI-кит (компонент `Button` на базе `cva`), `Header` и `Footer` уже существуют.
- **Стилизация:** Проект использует **Tailwind CSS v4**. Конфигурация темы происходит через директиву `@theme inline` в `src/app/globals.css`, а НЕ через `tailwind.config.ts`.
- **Изображения:** Использовать строго компонент `next/image` (с атрибутами `alt`, `width`, `height` или `fill`).
- **Рендеринг:** Использовать Server Components по умолчанию. Директива `'use client'` применяется только там, где нужны хуки состояния, IntersectionObserver или обработка форм.
- **Адаптивность:** Mobile-first подход, обязательное использование брейкпоинтов `sm`, `md`, `lg`. Для карточек добавлять hover-эффекты: `hover:-translate-y-1 hover:shadow-lg transition-all`.

## Step 1: Update Global Styles (`src/app/globals.css`)
Обнови блок `@theme inline` в `globals.css`, чтобы он соответствовал новому дизайну (удали старые переменные ivory-* и добавь новые brand-*):
```css
@theme inline {
  --color-brand-primary: #2F8DD4;
  --color-brand-accent: #1B3A6B;
  --color-brand-light: #F4F7FC;
  /* Для совместимости с уже существующими компонентами (Header/Button) оставь или замапь старые переменные */
  --color-ivory-primary: var(--color-brand-accent);
  --color-ivory-secondary: var(--color-brand-primary);
  --color-ivory-accent: #D4AF37;
  --color-ivory-bg: var(--color-brand-light);
  --color-ivory-text: #1F2937;
}