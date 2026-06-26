# GitHub Pages 发布前检查清单

上线前重点检查路径、构建命令和 GitHub Pages 配置，能避免大多数首次发布问题。

## 检查项

- `npm run docs:build` 可以在本地通过。
- GitHub Pages 的 Source 已选择 `GitHub Actions`。
- 仓库推送到 `main` 分支后会触发 workflow。
- 如果发布到 `username.github.io/repo/`，VitePress `base` 必须匹配仓库路径。
- 如果使用自定义域名或 `username.github.io` 根仓库，`base` 应为 `/`。

## 失败排查

如果页面打开后样式丢失，优先检查 `base`。如果 Actions 没有触发，检查默认分支、Pages Source 和仓库权限。
