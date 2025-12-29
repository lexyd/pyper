# Pyper - Central Command Center for Creators

## Overview
Pyper is a specialized CRM and revenue recovery engine designed for creators. This project represents the initial waitlist and landing page, aimed at capturing interest from solo creators and small creative teams.

## Value Proposition
**"Stop Managing Email. Start Recovering Revenue."**
Pyper transforms a chaotic inbox into a structured revenue pipeline, ensuring no deal falls through the cracks and every contract is safe to sign.

## Product Pillars
1.  **The Intelligent Filter ("The Assistant")**
    *   Auto-detects inbox archetypes (Inquiry, Negotiation, Spam).
    *   Scores opportunities based on keywords like "Budget" and "Deadline".
2.  **The Legal & Admin Layer**
    *   AI "Redline" tool highlights risky clauses.
    *   Template library for quick contracts.
3.  **The Delivery Portal**
    *   Branded review links for video deliverables.
    *   Automatic follow-ups for feedback.

## User Personas
*   **The Solo Creator**: The app acts as the manager.
*   **The Small Team**: The app acts as the collaboration hub for approval workflows.

## Technical Architecture

### Stack
*   **Framework**: Next.js 15 (App Router)
*   **Language**: TypeScript
*   **Styling**: TailwindCSS 4
*   **Icons**: Lucide React
*   **Forms**: Tally.so Integration

### Key Components
| Component | Function | Status |
| :--- | :--- | :--- |
| `Hero.tsx` | Main value prop, engaging visuals, and CTA. | ✅ Implemented |
| `ProblemSolution.tsx` | Contrasts the "Chaos" of email with the "Engine" of Pyper. | ✅ Implemented |
| `ProductPillars.tsx` | Detailed breakdown of the 3 core features. | ✅ Implemented |
| `Persona.tsx` | Targets specific user needs (Solo vs Team). | ✅ Implemented |
| `Waitlist.tsx` | Captures leads using an embedded Tally form (ID: `KYe9dk`). | ✅ Implemented |

## Project Structure
```
src/
├── app/
│   ├── layout.tsx    # Root layout with metadata and fonts
│   ├── page.tsx      # Main landing page assembly
│   └── globals.css   # Global styles and Tailwind directives
├── components/
│   ├── Hero.tsx
│   ├── ProblemSolution.tsx
│   ├── ProductPillars.tsx
│   ├── Persona.tsx
│   ├── Waitlist.tsx
│   └── Footer.tsx
└── lib/
    └── utils.ts      # CN utility for class merging
```

## Running Locally
1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Run the development server:
    ```bash
    npm run dev
    ```
3.  Open [http://localhost:3000](http://localhost:3000).
