<script setup lang="ts">
import { withBase } from 'vitepress'

const projects = [
  {
    href: '/projects/projvault',
    color: 'var(--accent-sage)',
    mark: '01',
    type: 'RAG Quality',
    stage: 'PKC / GraphRAG',
    title: 'ProjVault',
    description: '面向项目经理的项目知识中心，把混乱项目资料转成可检索、可追溯、带证据的 RAG 知识。',
    tags: ['RAG', 'GraphRAG', 'Spring Boot'],
    metric: '带证据的 AI 问答',
    image: '/projects/projvault-scan-report.png',
    imageAlt: 'ProjVault 扫描报告界面截图',
    actions: [
      { label: '详情', href: '/projects/projvault' }
    ]
  },
  {
    href: '/projects/noematrace',
    color: 'var(--accent-blue)',
    mark: '02',
    type: 'Agent Observability',
    stage: 'Offline-first',
    title: 'NoemaTrace',
    description: '浏览器内运行的 Agent trace 回放工具，用规则分析执行路径、失败原因、token 使用与上下文浪费。',
    tags: ['Trace Replay', 'Context Budget', 'React'],
    metric: '拖入 trace 即可复盘',
    image: '/projects/noematrace-trace-replay.png',
    imageAlt: 'NoemaTrace trace replay 图谱界面截图',
    actions: [
      { label: 'Live Demo', href: 'https://noematrace.vercel.app/', external: true },
      { label: 'GitHub', href: 'https://github.com/kllin8154-arch/noematrace', external: true },
      { label: '详情', href: '/projects/noematrace' }
    ]
  },
  {
    href: '/projects/opsmonitor',
    color: 'var(--accent-clay)',
    mark: '03',
    type: 'AI DevOps',
    stage: 'Monitor / Runbook',
    title: 'OpsMonitor',
    description: '自动化监控平台，组合 Spring Boot、Prometheus、Grafana、AlertManager 与 Sentinel 处置链路。',
    tags: ['Prometheus', 'Runbook', 'Incident'],
    metric: '告警到处置闭环',
    image: '/projects/opsmonitor-overview.png',
    imageAlt: 'OpsMonitor 系统总览界面截图',
    actions: [
      { label: 'GitHub', href: 'https://github.com/kllin8154-arch/ops-monitor', external: true },
      { label: '详情', href: '/projects/opsmonitor' }
    ]
  },
  {
    href: '/projects/ui-library',
    color: 'var(--accent-amber)',
    mark: '04',
    type: 'Interface System',
    stage: 'Local-first catalog',
    title: 'UI-Library',
    description: '本地优先的 UI 组件资产库和查询系统，支持多组件库挂载、隔离、查询、CRUD 与复用配方。',
    tags: ['UI Assets', 'Spring Boot', 'Catalog'],
    metric: '205 个组件资产索引',
    image: '/projects/ui-library-catalog.png',
    imageAlt: 'UI-Library 组件查询界面截图',
    actions: [
      { label: '详情', href: '/projects/ui-library' }
    ]
  }
]

const articles = [
  {
    href: '/articles/vibe-coding',
    date: '2026-06-26',
    category: 'Vibe Coding',
    title: 'Vibe Coding：从感觉到工程纪律',
    description: '把 AI 协作中的直觉、试错和审美判断，沉淀成可交接、可验证、可复盘的开发流程。',
    source: '掘金首发'
  },
  {
    href: '/articles/noematrace-observability',
    date: '2026-06-25',
    category: 'NoemaTrace',
    title: 'NoemaTrace：让 Agent 执行可回放',
    description: 'Agent 可观测性不只是一张仪表盘，而是从单次执行回放、失败分析和上下文预算开始。',
    source: '站内草稿'
  },
  {
    href: '/articles/projvault-rag-quality',
    date: '2026-06-24',
    category: 'ProjVault',
    title: 'ProjVault：RAG 质量从证据开始',
    description: '项目资料不是干净语料，RAG 质量要先解决版本、噪音、证据来源和可追溯问题。',
    source: '站内草稿'
  }
]

const signals = [
  { label: 'Focus', value: 'RAG 质量 / Agent 可观测性' },
  { label: 'Stack', value: 'Java / Spring Boot / React / Vue' },
  { label: 'Output', value: 'AI DevOps / Vibe Coding / 多 AI 接力' }
]

const methods = [
  {
    title: 'CLAUDE.md',
    detail: '把项目身份、硬约束、依赖纪律和完成标准写成 AI 可执行的协作协议。'
  },
  {
    title: 'LESSONS.md',
    detail: '把踩坑、版本陷阱、验证命令和修复经验沉淀成跨 AI 的项目记忆。'
  },
  {
    title: '多 AI 接力开发',
    detail: '用 PRD、任务边界、交接清单和验证记录，让 Codex、Claude、DeepSeek、Cowork 可以连续推进。'
  }
]

const links = [
  { label: 'GitHub', href: 'https://github.com/kllin8154-arch', status: '已上线' },
  { label: '掘金', href: 'https://juejin.cn/post/7655523471275376691', status: '已发布文章' },
  { label: '思否', href: '', status: '待补充' },
  { label: '知乎', href: '', status: '待补充' },
  { label: 'NoemaTrace Demo', href: 'https://noematrace.vercel.app/', status: '在线演示' }
]
</script>

<template>
  <section class="home-section signal-section" aria-label="站点概览">
    <div class="signal-strip">
      <div v-for="signal in signals" :key="signal.label" class="signal-item">
        <span>{{ signal.label }}</span>
        <strong>{{ signal.value }}</strong>
      </div>
    </div>
  </section>

  <section id="projects" class="home-section project-section">
    <div class="section-heading section-heading-large">
      <div>
        <span class="section-kicker">Featured Projects</span>
        <h2>项目</h2>
      </div>
      <p>四个项目覆盖 AI 工程实践的关键链路：RAG 质量、Agent 执行回放、AI DevOps 与 UI 资产复用。</p>
    </div>

    <div class="project-showcase">
      <article
        v-for="(project, index) in projects"
        :key="project.href"
        class="project-card project-card-redesign"
        :class="{ 'is-featured': index === 0 }"
        :style="{ '--card-color': project.color }"
      >
        <div class="project-card-head">
          <span>{{ project.type }}</span>
          <strong>{{ project.stage }}</strong>
        </div>

        <div class="project-card-body">
          <div class="project-visual">
            <img class="project-shot" :src="withBase(project.image)" :alt="project.imageAlt">
            <span class="project-mark">{{ project.mark }}</span>
          </div>
          <div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>

        <div class="project-card-foot">
          <span class="project-metric">{{ project.metric }}</span>
          <div class="project-actions" aria-label="项目链接">
            <a
              v-for="action in project.actions"
              :key="action.label"
              :href="action.external ? action.href : withBase(action.href)"
              :target="action.external ? '_blank' : undefined"
              :rel="action.external ? 'noreferrer' : undefined"
            >
              {{ action.label }}
            </a>
          </div>
        </div>

        <div class="project-meta">
          <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
        </div>
      </article>
    </div>
  </section>

  <section id="writing" class="home-section writing-section">
    <div class="section-heading section-heading-large">
      <div>
        <span class="section-kicker">Writing</span>
        <h2>文章</h2>
      </div>
      <p>第一版文章聚焦 Vibe Coding、NoemaTrace 和 ProjVault，把项目经验转成可复用的方法笔记。</p>
    </div>

    <div class="writing-layout">
      <div class="writing-index">
        <span>Latest</span>
        <strong>把 AI 工程里的判断、验证和交接过程整理成公开笔记。</strong>
      </div>

      <div class="article-list article-list-redesign">
        <a
          v-for="article in articles"
          :key="article.href"
          class="article-row"
          :href="withBase(article.href)"
        >
          <span class="article-date">{{ article.date }}</span>
          <span class="article-category">{{ article.category }}</span>
          <div>
            <div class="article-title-line">
              <h3>{{ article.title }}</h3>
              <span class="article-source">{{ article.source }}</span>
            </div>
            <p>{{ article.description }}</p>
          </div>
          <span class="article-arrow">›</span>
        </a>
      </div>
    </div>
  </section>

  <section id="method" class="home-section method-section">
    <div class="section-heading section-heading-large">
      <div>
        <span class="section-kicker">Engineering Method</span>
        <h2>方法论</h2>
      </div>
      <p>核心不是“让 AI 写代码”，而是把 AI 协作变成有约束、有证据、有回放、有交接的工程系统。</p>
    </div>

    <div class="method-grid">
      <a
        v-for="method in methods"
        :key="method.title"
        class="method-card"
        :href="withBase('/methodology')"
      >
        <span>{{ method.title }}</span>
        <p>{{ method.detail }}</p>
      </a>
    </div>
  </section>

  <section id="links" class="home-section links-section">
    <div class="section-heading section-heading-large">
      <div>
        <span class="section-kicker">Links</span>
        <h2>链接</h2>
      </div>
      <p>代码仓库、掘金文章和在线 Demo 已接入，思否与知乎等内容渠道后续补齐。</p>
    </div>

    <div class="link-grid">
      <a
        v-for="link in links"
        :key="link.label"
        class="link-card"
        :class="{ 'is-pending': !link.href }"
        :href="link.href || undefined"
        :target="link.href ? '_blank' : undefined"
        :rel="link.href ? 'noreferrer' : undefined"
        :aria-disabled="!link.href ? 'true' : undefined"
      >
        <strong>{{ link.label }}</strong>
        <span>{{ link.status }}</span>
      </a>
    </div>

    <div class="note-band note-band-redesign">
      <strong>kllin AI Lab</strong>
      <span>如果你也在实践 AI 工程化、Vibe Coding、RAG 质量或 Agent 可观测性，欢迎通过 GitHub / 掘金 / 知乎联系我。</span>
    </div>
  </section>
</template>
