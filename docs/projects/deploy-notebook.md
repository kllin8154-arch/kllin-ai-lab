# 部署笔记本

部署笔记本记录个人项目从本地构建到线上发布的检查项，避免每次上线都重新排查路径、构建命令和平台配置。

## 目标

- 固化 GitHub Pages 发布步骤。
- 记录 VitePress `base`、构建产物和 Actions 权限等易错点。
- 为未来自定义域名和多站点部署保留说明。

## 技术栈

- GitHub Actions
- GitHub Pages
- VitePress

## 当前状态

已在本仓库内配置自动部署工作流，推送到 `main` 后可由 GitHub Pages 构建发布。
