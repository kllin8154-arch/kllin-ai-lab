# 用 VitePress 搭一个可发布的个人网站

这个站点采用 VitePress 的 `docs` 目录结构，把内容页面、主题样式和部署工作流放在同一个仓库中维护。

## 为什么用 VitePress

VitePress 适合以 Markdown 为核心的个人站。它能保留写作的低成本，也能通过主题扩展做出足够清爽的首页。

## 本站结构

- `docs/index.md`：首页，包含项目卡片和文章列表。
- `docs/projects/`：项目详情页。
- `docs/articles/`：文章详情页。
- `docs/.vitepress/`：站点配置与主题样式。
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署。

## 发布思路

本地用 `npm run docs:build` 验证构建，推送到 GitHub 后由 Actions 构建并上传 `docs/.vitepress/dist`。
