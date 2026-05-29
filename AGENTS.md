# Agent Instructions

This repository uses a Next.js App Router stack with TypeScript, Tailwind CSS, Drizzle ORM, and Clerk. The agent instructions are intentionally split into focused markdown files under the `docs/` folder so they remain easy to maintain.

## ⚠️ CRITICAL: Read Documentation First

**ALWAYS read the relevant individual instructions files within the `/docs/` directory BEFORE generating ANY code.** This is not optional. Every code generation task requires consulting the appropriate documentation module first. Failure to do so will result in code that violates project standards.

## Primary guidance
For detailed guidelines on specific topic, refer to the modular documentation in the `docs/` directory. You MUST refer to the relevant .md file BEFORE generating any code 

### Documentation modules
- [Authentication Standards](docs/authentication.md) — Clerk auth integration, protected routes, and modal UI requirements
- [UI Components Standards](docs/ui-components.md) — shadcn/ui component usage and custom component restrictions

## Required behavior for all agents
- Keep changes minimal, typed, and aligned with the existing project structure.
- Reuse existing utilities and UI primitives rather than duplicating logic.
- Avoid introducing new patterns that conflict with the current Next.js and Tailwind setup.
- Verify the relevant checks before declaring work complete.

## Working rules
- Prefer small, focused edits over broad refactors.
- Preserve the style already used in the repo.
- Do not leave placeholder code, debug logging, or unrelated comments in final changes.
- If a task requires a new pattern, document that pattern in the relevant `docs/` file before using it broadly.
