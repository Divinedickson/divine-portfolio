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
```

Create `.env.local` for local assistant access:

```text
GROQ_API_KEY=your-groq-api-key
GROQ_MODEL=openai/gpt-oss-20b
```

`GROQ_API_KEY` and `GROQ_MODEL` are read only by the server route. Never prefix either variable with `NEXT_PUBLIC_`. The model setting is optional; the value above is the current default.

Then start the application:

```bash
npm run dev
```

Run all checks with:

```bash
npm test
npm run lint
npm run build
```

## Assistant API

`POST /api/assistant` accepts:

```json
{
  "message": "Tell me about the RAG project",
  "history": [
    { "role": "user", "content": "What does Divine build?" },
    { "role": "assistant", "content": "Divine builds full-stack and applied AI systems." }
  ]
}
```

Successful responses use a provider-independent envelope:

```json
{
  "message": {
    "role": "assistant",
    "content": "...",
    "actions": [
      {
        "label": "View Project",
        "href": "/projects/academic-research-assistant",
        "type": "internal"
      }
    ]
  }
}
```

The route validates messages and bounded recent history, builds a compact context from files under `data/`, and calls Groq through the provider interface in `lib/assistant/`. Action URLs come from server-owned rules; model-generated URLs are not trusted.

## Content to complete

The Stitch export is in `code.html`, with a reference screenshot in `screen.png` and design tokens in `DESIGN.md`. The implementation follows their layout and palette while removing fabricated content. Profile and email links are set in `data/links.ts`. The Academic Research Assistant demo and repository, plus the Plant Disease Detector repository, are set in `data/projects.ts`; other project URLs remain unset. View Resume links point to the PDF at `public/resume.pdf`. The Plant Disease Detector repository does not currently show threshold-based uncertainty handling, so its case study describes that as a planned improvement. A future phase can replace the assistant's compact context with retrieval without changing the provider contract.
