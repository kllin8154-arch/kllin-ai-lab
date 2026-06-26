# UI-Library

<div class="project-page-intro">
  <p class="project-eyebrow">Interface System / Local-first Catalog</p>
  <p class="project-lead">本地优先的 UI 组件资产库与查询系统，用来沉淀、检索和复用多来源的界面组件，让设计资产变成可交接、可查询、可被 Agent 读取的工程目录。</p>
</div>

<BaseImage class="project-screenshot" src="/projects/ui-library-catalog.png" alt="UI-Library 组件查询界面截图" />

## 当前界面

截图展示的是组件查询工作台：左侧是目录与治理分区，中间是组件检索和列表，右侧是组件详情、复用信息和适配能力。它把“组件资产”从散落文件变成可筛选、可审核、可复用的目录。

<div class="project-metric-grid">
  <div><span>125</span><strong>组件目录</strong><p>当前截图来自已入库组件查询场景。</p></div>
  <div><span>1</span><strong>组件库</strong><p>按来源隔离展示，避免多库资产混淆。</p></div>
  <div><span>11</span><strong>审核项</strong><p>治理入口用于沉淀组件质量状态。</p></div>
  <div><span>Schema 1.0</span><strong>契约版本</strong><p>为后续 Agent 读取和复用做稳定约束。</p></div>
</div>

## 核心能力

- 多组件库挂载和库间隔离。
- 组件 ID 前缀防冲突。
- 组件查询、CRUD、preview 和 recipe。
- 生成 Node 与 Agent 可读的 `registry.json`、`search-index.json`、`design-roadmap.json`、`validation-report.json` 和 `schema-version.json`。
- 支持 HTML、Vue、React、Java、Python、C++ 等项目查询复用 UI 资产。

## 资产规模

当前主库约 62 个组件，外部 Art UI 组件约 143 个，总目录约 205 个组件资产。

## 工程重点

UI-Library 不是单纯的组件展示页，它更偏工程资产管理：让设计灵感、组件实现、复用配方和 Agent 可读索引处在同一套本地工作流里。

## 下一步建设

- 补充组件预览页截图。
- 展示 registry 和 search-index 的生成结果。
- 整理“如何让 Agent 查询并复用组件”的方法文章。
