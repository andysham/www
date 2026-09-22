<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## `Makefile`: single source of DevOps tools

[`Makefile`](Makefile) is the one place to look for — and add — commands
for running, building, and publishing this site. Don't invent a parallel
way to do these things (a script elsewhere, a README-only command, an IDE
run config) without also putting it here. Run `make help` for the current
target list — it's self-documenting (`## comment` on each target line).
