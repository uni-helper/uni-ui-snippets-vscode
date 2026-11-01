# @uni-helper/uni-ui-snippets-vscode

VSCode extension providing uni-ui component snippets (`prefix` + `body` pairs) for the uni-ui component library. There is no runtime extension code. The artifact is one hand-maintained snippet JSON file plus wiring in `package.json`, a hand-written Chinese README whose table mirrors those snippets, and a test suite that keeps the two in sync.

## Project

- **Language/runtime:** no app source, one snippet JSON file and configuration only. Dev pins Node 26 via `.node-version` and `devEngines.runtime` (`onFail: warn`). Published `engines` are consumer-facing: `vscode ^1.40.0` (minimum VSCode) and `node >=18`.
- **Toolchain:** npm 12.2.1 (pinned via `packageManager` + `devEngines.packageManager`), ultracite (a zero-config Biome preset) for lint/format, Node's built-in test runner (`node --test`), bumpp (release). `vsce` and `ovsx` are not installed locally; the release workflow fetches them with `vpx`.
- **Artifact:** the VSIX ships `snippets/`, `LICENSE`, `logo.png` (`files` + `icon`). Published to both the VSCode Marketplace and OpenVSX under publisher `uni-helper`.

## Commands

```bash
npm install
npm run test      # node --test: snippet shape, duplicate prefixes/bodies, README sync
npm run check     # ultracite check
npm run fix       # ultracite fix
npm run release   # bumpp: bumps version, commits, tags, pushes; the tag triggers .github/workflows/release.yml
```

CI (`.github/workflows/ci.yml`) runs `vpr check` and `vpr test` via `voidzero-dev/setup-vp` on Node 22/24/26 × ubuntu/macos/windows.

The release workflow publishes with `vpx @vscode/vsce publish --oidc` (OIDC trusted publishing, hence `id-token: write`) and `vpx ovsx publish` (`OVSX_PAT`), then creates the GitHub Release with changelogithub. There is no `VSCE_PAT` secret.

## Architecture

| File | Role |
|---|---|
| `snippets/vue-html.json` | 58 uni-ui component snippets (`<uni-badge>`, `<uni-forms>`, …), served to `vue-html` / `vue` / `html` |
| `package.json` → `contributes.snippets` | Maps the one snippet file to all three language IDs |
| `README.md` | Chinese user docs; the `## HTML` table holds one row per snippet |
| `tests/helpers.mjs` | Loads the snippet file and parses README table rows |
| `tests/snippets.test.mjs` | Snippet shape, doc-linked descriptions, duplicate prefixes, duplicate bodies |
| `tests/readme.test.mjs` | Every README row matches a snippet's prefixes and description |
| `.agents/skills/bump-snippets/SKILL.md` | Agent workflow for re-checking snippets against the official uni-ui docs |
| `logo.svg` / `banner.svg` / `logo.png` | Family brand assets; `logo.png` is the 800×800 transparent Chrome-headless render of `logo.svg` and doubles as the marketplace icon |

### Snippet shape conventions

`snippets/vue-html.json` is the single source of truth. The extension serves it directly and the README table mirrors it:

- `prefix` is an array with four aliases per component: `uni-x`, `<uni-x>`, `UniX`, `<UniX>`. Shorter aliases like `uBadge` are deliberately absent to stay distinguishable from uview-ui.
- `body` is an array of lines, indented with literal tabs, using `$1`…`$n` tabstops ending in `$0`.
- Top-level keys are human-readable Chinese labels (`uni-ui badge`, `uni-ui table`).
- `description` follows the pattern `……。更多信息查看 <官方文档 URL>。`; the tests reject anything else. Doc links point at the uni-ui component page without `.html`.
- Component events use the emitted camelCase name (`@fabClick`, `@buttonClick`, `@clickItem`). Kebab-case listeners never fire, because the components call `$emit('fabClick')` and a Vue 2 template matches listener names literally.
- When adding or changing a snippet, update the matching README row in the same change. `npm run test` fails when the table drifts.
- The snippet content is checked against the official docs by the `bump-snippets` skill: it walks the component index, follows the doc links, and requires `npm run test` plus `npm run check` afterwards.

## Conventions

- **Lint/format:** ultracite (Biome) via `npm run check` / `npm run fix`; `biome.jsonc` adds a `!banner.svg` exclusion, because the hand-drawn SVG must not be reformatted. Biome also formats the snippet JSON, so long `prefix` arrays wrap. `.editorconfig` enforces 2-space indent, LF, UTF-8 (Markdown keeps trailing whitespace).
- **Marketplace README restriction:** images ending `.svg` throw in `vsce package` unless the host is on vsce's trusted SVG list (`img.shields.io` and `vsmarketplacebadges.dev` are; `cdn.jsdelivr.net` and `deepwiki.com` are not), so the README logo stays PNG and there is no DeepWiki badge.
- **Content language:** snippet keys and descriptions are Simplified Chinese, following the official uni-ui docs; README, CONTRIBUTING and CHANGELOG are Simplified Chinese, while this file stays English.
- **Branches/commits:** `feat/xxx`, `fix/xxx`, `docs/xxx`; Conventional Commits.
