# APSONIC Website

![APSONIC Banner](./message/Screenshot%202025-12-26%20at%2022.15.34.png)

> 好质量 好生活 - Bonne qualité pour une meilleure vie

Official website for APSONIC motorcycles - Quality motorcycles for Africa and beyond.

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer)

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/                    # Next.js app router
├── components/
│   ├── banner/            # Homepage banner carousel
│   ├── layout/            # Header, Footer, Navigation
│   ├── products/          # Product dropdown, cards
│   ├── product/           # Product carousels
│   └── ui/                # Reusable UI components
├── hooks/                  # Custom React hooks
├── lib/
│   ├── data/              # Static data (API-ready)
│   ├── types/             # TypeScript definitions
│   ├── constants.ts       # App constants
│   └── design-tokens.ts   # Design system tokens
└── public/images/          # Static assets
```

## Backend Integration

Data files are located in `lib/data/` and ready for API replacement:

```typescript
// lib/data/products.ts
export function getDropdownConfig(): DropdownConfig {
  // TODO: Replace with API call
  return { brands: BRANDS, categories: PRODUCT_CATEGORIES };
}
```

### Key Types

```typescript
// lib/types/products.ts
interface Brand {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  image: string;
  brandId?: string;
}
```

## Features

- 🏍️ Product catalog with brand filtering
- 🎠 Image carousels with auto-play
- 🌐 Multi-language support (中文/FR/EN)
- 📱 Fully responsive design
- ⚡ Optimized images with Next.js

## Brands

| Brand | Description |
|-------|-------------|
| APSONIC | Standard motorcycles |
| APSONIC PRO | Premium performance |
| APSONIC E-MOTO | Electric vehicles |

---

Built with ❤️ for APSONIC
