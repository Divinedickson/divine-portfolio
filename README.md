# Divine Dickson-Uwakwe — Portfolio

A responsive portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Case studies

- `/projects/academic-research-assistant`
- `/projects/plant-disease-detector`
- `/research/category-learning`

The case studies share layout, heading, stack, and diagram components under `components/case-study/`. Technical details are held in `data/projects.ts` and `data/research.ts`.

## Run locally

```bash
npm install
npm run dev
```

Run `npm run lint` and `npm run build` before deployment.

## Content to complete

The Stitch export is in `code.html`, with a reference screenshot in `screen.png` and design tokens in `DESIGN.md`. The implementation follows their layout and palette while removing fabricated content. Profile and email links are set in `data/links.ts`. The Academic Research Assistant demo and repository, plus the Plant Disease Detector repository, are set in `data/projects.ts`; other project URLs remain unset. View Resume links point to the PDF at `public/resume.pdf`. The AI assistant remains a later phase. The Plant Disease Detector repository does not currently show threshold-based uncertainty handling, so its case study describes that as a planned improvement.
