# 参与贡献

uni-ui-snippets-vscode 只维护一份代码片段 JSON 和配套文档，改动集中在 `snippets/`、`README.md` 和 `tests/` 三处。本文介绍仓库结构、本地开发、检查与测试、更新片段的方式和提交规范。

## 前置条件

- Node.js 26，见 `.node-version`；`devEngines.runtime` 只警告，不强制
- npm 12，见 `package.json` 的 `packageManager` 字段

## 仓库结构

```
.github/workflows/       # CI 与发布工作流
snippets/
  vue-html.json          # uni-ui 组件片段，插件的全部「源代码」
tests/
  helpers.mjs            # 读取片段文件和 README 表格
  snippets.test.mjs      # 片段格式、重复 prefix、重复 body
  readme.test.mjs        # README 表格与片段是否一致
.agents/skills/          # 供 AI 助手加载的仓库内技能
README.md                # 面向用户的中文文档，表格与片段一一对应
logo.svg                 # 品牌图标（矢量源文件）
banner.svg               # 品牌横幅（矢量源文件）
```

## 本地开发

```bash
npm install
npm run check  # ultracite（Biome）检查格式和 lint
npm run fix    # 自动修复格式和 lint 问题
npm test       # node --test
```

没有构建步骤。改完 `snippets/vue-html.json` 后在 VSCode 里重载窗口（`Developer: Reload Window`）就能看到片段效果。

## 测试与检查

`npm test` 用 Node 自带的测试运行器，覆盖四件事：

- `snippets/` 里的文件和 `package.json` 的 `contributes.snippets` 是否对得上
- 每个片段是否有 prefix、body，以及以「……。更多信息查看 <链接>。」结尾的描述
- 同一份文件里有没有重复的 prefix，或者完全相同的 body
- README 的表格行是否和多条片段一一对应，prefix 和描述都要一致

`npm run check` 检查格式和 lint。CI 在 Node 22/24/26 × ubuntu/macos/windows 上跑 `vpr check` 和 `vpr test`。

## 更新片段

片段以 uni-ui 官方文档为依据。改之前先把 `snippets/vue-html.json`、`README.md` 和文档对照一遍：组件有没有新增或废弃，属性名、取值、事件名有没有变化，描述里的链接还能不能打开。

仓库自带 `.agents/skills/bump-snippets/SKILL.md`，支持加载技能的 AI 助手可以直接用它跑这套检查。手工检查按下面的顺序：

1. 打开 [uni-ui 组件列表](https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html)，确认索引页上的组件都有对应片段。
2. 逐个打开片段描述里的链接。返回 301 或 308 说明路径变了，按跳转后的地址更新。
3. 对照组件页的属性表核对 `body` 里的属性名、取值和事件名。事件用组件 `$emit` 的驼峰名，比如 `@fabClick`，写成 `@fab-click` 不会触发。
4. 改完跑 `npm test` 和 `npm run check`。

## 提交规范

1. Fork 仓库，从 `main` 拉分支，分支名用 `feat/xxx`、`fix/xxx`、`docs/xxx` 风格。
2. 提交信息遵循 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/)，如 `feat:`、`fix:`、`docs:`。
3. 提交前跑 `npm run check` 和 `npm test`。
4. 推送并打开 PR。

## Pull Request 指南

- 保持改动聚焦，一个 PR 只解决一个问题。
- 新增、删除或改名片段时，README 表格必须同步更新，否则 CI 会失败。
- CI 通过后等待 review；拿不准方案时先开 issue 讨论。

## 发布

维护者操作：运行 `npm run release`，bumpp 会提升版本号、提交、打 tag 并推送。tag 触发 `.github/workflows/release.yml`，工作流用 `vsce publish --oidc` 发布到 VSCode Marketplace，用 `ovsx publish` 发布到 OpenVSX，再用 changelogithub 创建 GitHub Release。

## 行为准则

参与本项目请遵守[组织级行为准则](https://github.com/uni-helper/.github/blob/main/CODE_OF_CONDUCT.md)。

有任何问题欢迎在 [Issues](https://github.com/uni-helper/uni-ui-snippets-vscode/issues) 提出。
