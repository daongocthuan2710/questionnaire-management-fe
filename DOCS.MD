src/
├── app/ # Next.js App Router
│ ├── layout.tsx
│ ├── page.tsx
│ └── (routes folders)
│
├── components/ # Reusable UI components
│ └── common/
│ └── layout/
│ └── specific/
│
├── features/ # Feature based folders
│ └── user/
│ ├── components/
│ ├── hooks.ts
│ ├── services.ts
│ ├── types.ts
│ └── index.ts
│
├── libs/ # Libs / Helpers / Utils
│ └── axios.ts
│ └── fetcher.ts
│ └── format.ts
│
├── hooks/ # Custom hooks
│ └── useDebounce.ts
│
├── constants/ # Static constants / enums
│ └── routes.ts
│ └── config.ts
│
├── styles/ # Tailwind config & global css
│ └── globals.css
│
├── assets/ # Static images / icons
│
├── types/ # Global types & interfaces
│
├── lib/ # Server-side lib (Next.js 15 App Router - RSC)
│
├── middleware.ts # Next.js middleware
├── env.d.ts # Type env
└── utils/ # Utility functions
