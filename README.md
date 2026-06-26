# kllin AI Lab

这是 kllin AI Lab 的个人技术品牌入口，聚焦 RAG 质量、Agent 可观测性、AI DevOps 与 Vibe Coding。站点基于 VitePress 构建，并内置 GitHub Pages 自动部署工作流。

## 本地开发

```bash
npm install
npm run docs:dev
```

## 构建预览

```bash
npm run docs:build
npm run docs:preview
```

## GitHub Pages 上线

1. 在 GitHub 创建仓库并推送本项目到 `main` 分支。
2. 打开仓库 `Settings` -> `Pages`。
3. 在 `Build and deployment` 的 `Source` 中选择 `GitHub Actions`。
4. 等待 `Deploy VitePress site to Pages` 工作流完成。

默认发布到 `https://<username>.github.io/<repository>/` 时会自动使用仓库名作为 `base`。如果你使用自定义域名，或仓库名是 `<username>.github.io`，可以在仓库变量里设置 `VITEPRESS_BASE=/`。
