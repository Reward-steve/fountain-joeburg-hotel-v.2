# Fountain Johannesburg — Hospitality & Wellness Platform

A premium, production-ready frontend experience built with **Next.js** and **Tailwind CSS**, meticulously designed for a luxury hotel, dining, and spa destination in Johannesburg. This platform features high-fidelity micro-interactions, responsive aspect-locked layouts, and a clean, modular component architecture.

---

## 🛠️ Key Technical Solved Issues

During development, the platform was refactored and optimized to address critical production issues:

- **Framer Motion Architecture:** Migrated imports from legacy or unstable subpaths (`motion/react`) to the core, standardized `framer-motion` ecosystem to prevent bundle compiler crashes. Integrated custom Bezier hardware-accelerated curves `[0.16, 1, 0.3, 1]` for micro-interactions.
- **Layout Shifts (CLS) Mitigation:** Eliminated native unoptimized HTML `<img>` elements. Replaced them with Next.js `<Image/>` components nested inside explicit, aspect-ratio-locked wrapping containers (`aspect-[16/10]`, `aspect-[4/5]`, `aspect-[21/9]`).
- **CDN Asset Stability:** Swapped out deprecated or broken Unsplash reference keys for active, highly-cached production asset pool IDs to completely eliminate broken `404` image layout blocks.
- **Component De-coupling:** Refactored complex layout grids to accept clean dataset configurations, decoupling rendering logic and raw JSX nodes from the data layer for better performance and maintainability.

---

## 🏗️ Folder Structure & Architecture Overview

```plaintext
├── components/
│   ├── Button.tsx          # Standardized luxury utility button
├── app/
│   ├── dining/
│   │   └── page.tsx        # Obsidian & Sky Bar custom interaction page
│   ├── wellness/
│   │   └── page.tsx        # Wellness, Spa & Infinity Pool landing hub
```
