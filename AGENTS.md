# AGENTS.md

## Non-negotiable first principle: preserve existing UI and behavior

Unless the user explicitly and proactively requests a change to the page UI or functionality, every code change must preserve the existing result. This is the highest-priority development rule in this repository and overrides refactoring preferences, cleanup opportunities, and architectural improvements.

- Refactors, file splits, migrations, fixes, type improvements, and dependency changes must not alter the existing visual design, layout, spacing, typography, colors, animation, responsive behavior, content, interaction flow, component behavior, or user-visible functionality.
- Treat the current rendered UI and behavior as a compatibility contract. Do not make incidental “improvements,” restyle elements, change copy, simplify interactions, or adjust behavior while performing an unrelated task.
- Before restructuring code, understand and record the behavior and rendering boundaries of the affected area. Preserve props, state transitions, event handling, DOM-dependent behavior, responsive states, and styling semantics during extraction.
- Prefer small, reversible steps. After each meaningful extraction or refactor, verify the affected flow again rather than waiting until the end of a large rewrite.
- Compare before and after at the relevant viewport sizes and interaction states. Exercise loading, empty, selected, expanded, modal, hover, focus, keyboard, and error states when they are relevant to the changed area.
- Run lint and the appropriate build or tests, but do not treat a passing automated check as proof that the UI is unchanged. Perform targeted visual and interaction verification as well.
- If preservation cannot be verified confidently, stop and report the uncertainty instead of assuming the change is safe.
- UI or behavior may change only when the user clearly asks for that specific change. Keep any requested change scoped to the requested area and preserve everything else.

## Project overview

This repository is a personal portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, and pnpm. Preserve the current visual language, interaction patterns, responsive behavior, and content-first structure when extending it.

## Working principles

- Read the surrounding implementation before changing it. Follow existing naming, folder structure, export style, Tailwind patterns, and interaction behavior.
- Make the smallest coherent change that solves the request. Do not rewrite unrelated code or redesign existing sections without explicit direction.
- Prefer TypeScript (`.ts`/`.tsx`) for new code. Existing JavaScript files may remain JavaScript unless converting them is necessary for the requested work.
- Keep content/data separate from presentation. Large project descriptions, asset paths, navigation items, and repeated configuration belong in `app/data` or a focused data module, not inline inside page components.
- Preserve accessibility and responsive behavior. Interactive controls must be keyboard-usable, use appropriate semantic elements, have accessible names, and work across mobile, tablet, and desktop layouts.

## Component reuse and file boundaries

Component reuse and maintainable file size are primary requirements, not optional cleanup.

- Pages and layouts should orchestrate data and compose components. Do not build an entire page as one long JSX tree.
- Reuse an existing component before creating a similar one. Extend it through focused props or composition when that keeps its responsibility clear.
- Extract repeated UI, repeated Tailwind class groups, and repeated interaction patterns into shared components.
- Place broadly reusable visual primitives in `app/components/ui`.
- Place full portfolio sections in `app/components/sections`.
- Place feature- or case-study-specific components in a focused component file or feature subfolder near the owning component.
- Extract reusable stateful behavior into a custom hook when it is independent of rendering.
- Keep constants, icon maps, lookup tables, and substantial content collections outside render functions. Put shared data in `app/data` and shared types in `app/types.ts` or a focused type module.
- Prefer composition over adding more conditionals and project-specific branches to a shared component.
- Do not create an abstraction merely to reduce line count. A new component or helper should have a clear name, responsibility, and boundary.

## File-size guardrails

- Aim for new component files to stay below roughly 250 lines.
- Treat 350 lines as a review threshold: before exceeding it, split distinct UI regions, stateful behaviors, helpers, or data into focused modules.
- A component should normally have one primary responsibility. If it contains multiple independently describable sections or workflows, split them.
- Existing oversized files such as `app/components/ProjectModal.jsx` and `app/data/resume-data.jsx` are legacy constraints, not patterns to copy.
- When adding functionality to an oversized legacy file, avoid appending another large block. Extract the touched feature or new feature into a dedicated component/data module when this can be done safely within scope.
- Do not perform a wholesale refactor of legacy files unless requested. Improve boundaries incrementally around the area being changed.

## Project conventions

- Use the `@/*` path alias when it makes imports clearer; remain consistent within the file being edited.
- Follow the existing named-export convention for shared components unless a framework API or existing local pattern requires a default export.
- Use Lucide React for interface icons instead of adding a second icon system.
- Use Tailwind utilities and the existing theme palette for component styling. Put truly global styles, reusable keyframes, and global tokens in `app/globals.css` or `app/styles` rather than injecting style tags from components.
- Keep client boundaries narrow. Add `'use client'` only to components that require state, effects, event handlers, or browser APIs; allow static content to remain server-compatible.
- Use assets from `public` with descriptive alt text. Preserve existing asset organization by project/case study.
- Do not add dependencies when the existing stack or a small local utility can solve the problem adequately.

## Change workflow

1. Inspect the relevant page, its child components, data source, and types before editing.
2. Identify existing reusable components and decide the component/data boundaries before adding JSX.
3. Implement the change in focused modules, keeping the page or parent component primarily responsible for composition.
4. Check affected responsive states and interactions.
5. Run the relevant validation commands and fix issues introduced by the change.

## User-triggered commit and push workflow

The user's explicit instruction to “commit the code,” “提交代码,” or an unambiguous equivalent triggers the complete Git workflow below. A normal request to edit code does not trigger a commit or push.

This workflow follows Gray's `gwf pca` behavior, with one intentional difference: do not stop with an editable command or ask for routine confirmation. Generate the commit message, create the commit, and push it to the remote automatically.

1. Confirm the repository root, current branch, upstream state, and working-tree status. Detect merge conflicts, rebases, detached HEAD state, and other unsafe Git states before staging.
2. Review the full diff so the commit message reflects the actual changes. Check for accidentally added secrets, credentials, environment files, generated artifacts, or obviously unrelated files; stop and report if committing would be unsafe.
3. Run validation appropriate to the change before committing. Do not knowingly commit code that fails checks because of the current change. Clearly distinguish unrelated pre-existing failures.
4. Stage all current repository changes with `git add .`, matching `gwf pca`, unless the user explicitly limits the commit to particular files or changes.
5. Review the staged diff and generate an information-rich Conventional Commit subject that captures the primary purpose and major change areas. Use the most accurate type from `feat`, `fix`, `refactor`, `perf`, `test`, `docs`, `style`, `chore`, `build`, `ci`, `revert`, `types`, `config`, `deps`, or `security`.
6. Commit immediately with the generated message. Do not pause merely to ask the user to approve the message.
7. Push the current branch to its configured upstream. If no upstream exists, set `origin/<current-branch>` as upstream when that target is unambiguous and then push.
8. Report the commit hash, final commit subject, branch, remote destination, validation performed, and push result.

Stop without committing or pushing when there is a genuine safety blocker, such as unresolved conflicts, suspected secrets, an ambiguous remote/branch destination, a validation failure caused by the change, missing authorization, or rejected remote updates. Never force-push unless the user explicitly requests it.

## Validation

Use pnpm, matching the committed lockfile.

```bash
pnpm lint
```

Run a production build for changes that affect routing, configuration, rendering boundaries, types, or substantial UI behavior:

```bash
pnpm build
```

If the repository already has unrelated failures, report them clearly and distinguish them from failures caused by the current change.

## Completion checklist

Before considering a change complete, confirm that:

- the existing UI, styling, responsive presentation, interactions, and functionality remain unchanged unless the user explicitly requested otherwise;
- the affected UI and interaction states were compared before and after any refactor or file split;
- existing components were reused where appropriate;
- pages remain composition-focused rather than accumulating implementation detail;
- new functionality is split into clearly named, focused files;
- substantial data is not embedded in JSX;
- no oversized legacy file was made materially worse without justification;
- responsive and accessible behavior was preserved;
- lint and any relevant build checks were run, or any inability to run them was reported.
