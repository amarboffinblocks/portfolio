## Challenge

BoffinBlocks needed a modern project-detail experience that could scale as new case studies were added. The previous page structure relied on repeated hardcoded content blocks, which made updates slow and error-prone whenever a new project story or image set had to be published.

The team also needed flexibility for media-heavy case studies where one project may include many visuals instead of a fixed two-image layout.

## Solution

We moved project-detail storytelling into markdown files per slug and introduced a parser-driven rendering layer in the app route. This allows each project to define challenge, solution, outcomes, KPIs, deliverables, and an open-ended gallery from a single source document.

The page now maps markdown sections to reusable UI blocks, so content editors can ship new case studies without touching component code.

## Outcomes

- Replaced hardcoded project detail blocks with slug-based dynamic rendering.
- Enabled unlimited gallery images per project.
- Reduced engineering effort for publishing new case studies.
- Standardized project narrative structure across challenge, solution, and measurable impact.

## KPIs

- Content update speed: Significantly faster
- Layout consistency: 100% reusable sections
- Media scalability: Supports multiple images per project

## Deliverables

- Markdown-driven project detail architecture
- Dynamic slug-to-file fetch and parse flow
- Reusable renderer for narrative and KPI sections
- Multi-image responsive gallery support

## Gallery

- /projects/boffinblocks/banner.png | BoffinBlocks project banner
- /projects/boffinblocks/banner.png | Service positioning and value proposition layout
- /projects/boffinblocks/banner.png | Case study storytelling section
- /projects/boffinblocks/banner.png | Conversion-focused CTA and trust blocks

## Implementation Notes

The parser reads heading blocks so content can grow naturally. New narrative sections can be added with `## Heading` and will render automatically under the project detail page without additional page-level logic.

This gives you a clean workflow: add a project in data + add one markdown file + publish.
