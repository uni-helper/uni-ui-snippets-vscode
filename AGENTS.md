# @uni-helper/uni-ui-snippets-vscode

VSCode extension providing uni-ui component snippets (`prefix` + `body` pairs) for the uni-ui component library. There is no runtime extension code — the artifact is one hand-maintained snippet JSON file plus wiring in `package.json`, and a hand-written README whose table mirrors those snippets.

## Project

- **Language/runtime:** no app source code — one snippet JSON file and configuration only. Dev pins Node 26 via `.node-version` and `devEngines.runtime` (`onFail: warn`). Published `engines` are consumer-facing: `vscode ^1.40.0` (minimum VSCode) and `node >=18`.
- **Toolchain:** npm 12 (pinned via `packageManager` + `devEngines.packageManager`), ultracite (a zero-config Biome preset) for lint/format, bumpp (release), @vscode/vsce + ovsx (publish). There is no test suite and no typecheck.
- **Artifact:** the VSIX ships `snippets/`, `LICENSE`, `logo.png` (`files` + `icon`). Published to both VSCode Marketplace and OpenVSX under publisher `uni-helper`.

## Commands

```bash
npm install
npm run check     # ultracite check — the only validation gate
npm run fix       # ultracite fix
npm run release   # bumpp: bumps version, commits, tags, pushes; the tag triggers .github/workflows/release.yml
```

CI (`.github/workflows/ci.yml`) runs `vpr check` via `voidzero-dev/setup-vp` on Node 22/24/26 × ubuntu/macos/windows. The release workflow publishes to both marketplaces (`VSCE_PAT` / `OVSX_PAT` secrets) and creates the GitHub Release via changelogithub.

## Architecture

| File | Role |
|---|---|
| `snippets/vue-html.json` | uni-ui component snippets (`<uni-badge>`, `<uni-forms>`, …), served to `vue-html` / `vue` / `html` |
| `package.json` → `contributes.snippets` | Maps the one snippet file to all three language IDs |
| `logo.svg` / `banner.svg` / `logo.png` | Family brand assets; `logo.png` is the 800×800 transparent Chrome-headless render of `logo.svg` and doubles as the marketplace icon |

### Snippet shape conventions

`snippets/vue-html.json` is the single source of truth — the extension serves it directly and the README table mirrors it:

- `prefix` is an array with four aliases per component: `uni-x`, `<uni-x>`, `UniX`, `<UniX>`. Shorter aliases like `uBadge` are deliberately absent to stay distinguishable from uview-ui.
- `body` is an array of lines, indented with literal tabs, using `$1`…`$n` tabstops ending in `$0`.
- Top-level keys are human-readable Chinese labels; `description` follows the pattern `……。更多信息查看 <官方文档 URL>。`
- When adding or changing a snippet, update the matching README table row in the same change — the table is hand-maintained to match the JSON (the generator script was deliberately removed). The README API column shows the inserted tag with placeholders elided.

## Conventions

- **Lint/format:** ultracite (Biome) via `npm run check` / `npm run fix`; `biome.jsonc` adds a `!banner.svg` exclusion — the hand-drawn SVG must not be reformatted. The committed `.vscode/settings.json` sets Biome as the per-language formatter with format-on-save; `.editorconfig` enforces 2-space indent, LF, UTF-8 (Markdown keeps trailing whitespace).
- **Marketplace README restriction:** images ending `.svg` throw in `vsce package` unless the host is on vsce's trusted SVG list (`img.shields.io` and `vsmarketplacebadges.dev` are; `cdn.jsdelivr.net` and `deepwiki.com` are not) — the README logo must stay PNG, and there must be no DeepWiki badge.
- **Content language:** snippet keys and descriptions are Simplified Chinese, following the official uni-ui docs; README and other docs are Simplified Chinese.
- **Branches/commits:** `feat/xxx`, `fix/xxx`, `docs/xxx`; Conventional Commits.
