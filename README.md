# AGAJESEWORLD – Angular Website

## Project Structure

```
agajeseworld/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/          # Fixed nav with scroll detection
│   │   │   ├── hero/            # Hero section + ticker
│   │   │   ├── about/           # About + values grid
│   │   │   ├── divisions/       # Interactive division cards + detail panels
│   │   │   ├── projects/        # Projects showcase
│   │   │   ├── innovation-lab/  # R&D section
│   │   │   ├── investors/       # Partnership & investment section
│   │   │   ├── contact/         # Contact form with validation
│   │   │   └── footer/          # Footer with links
│   │   ├── services/
│   │   │   └── data.service.ts  # Centralized content data
│   │   └── app.component.ts     # Root component
│   ├── styles.scss              # Global styles + CSS variables
│   └── index.html               # HTML entry point
├── angular.json
├── package.json
└── tsconfig.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
ng serve

# Open browser at http://localhost:4200
```

## Build for Production

```bash
ng build
# Output goes to dist/agajeseworld/
```

## Key Design Decisions

- **Standalone components** (Angular 17 style, no NgModule needed)
- **Light editorial theme** inspired by VertaEnergy — warm off-white background, amber/orange accent, navy secondary
- **Fonts:** Playfair Display (headings) + Sora (body) + JetBrains Mono (labels)
- **DataService** centralizes all content (divisions, projects, opportunities, values)
- **Intersection Observer** used in each component for scroll-reveal animations
- **FormsModule** for the two-way bound contact form

## Customization

1. Update `src/app/services/data.service.ts` with real projects and services
2. Replace Unsplash image URLs with your actual photography
3. Update contact details in `contact.component.html`
4. Adjust brand colors in `src/styles.scss` (CSS variables in `:root`)
