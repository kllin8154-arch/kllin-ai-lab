<script setup lang="ts">
import anthropicIcon from '@lobehub/icons-static-svg/icons/anthropic.svg?url'
import chatglmIcon from '@lobehub/icons-static-svg/icons/chatglm-color.svg?url'
import claudeIcon from '@lobehub/icons-static-svg/icons/claude-color.svg?url'
import claudeCodeIcon from '@lobehub/icons-static-svg/icons/claudecode-color.svg?url'
import codexIcon from '@lobehub/icons-static-svg/icons/codex-color.svg?url'
import deepSeekIcon from '@lobehub/icons-static-svg/icons/deepseek-color.svg?url'
import openAiIcon from '@lobehub/icons-static-svg/icons/openai.svg?url'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'

type LinkAction = {
  label: string
  href: string
  external?: boolean
}

type Project = {
  href: string
  color: string
  mark: string
  type: string
  stage: string
  year: string
  title: string
  description: string
  tags: string[]
  metric: string
  image: string
  imageAlt: string
  actions: LinkAction[]
}

type Article = {
  href: string
  external?: boolean
  date: string
  category: string
  title: string
  description: string
  source: string
}

type BrandMark = {
  label: string
  icon: string
  meta: string
  tone: string
}

const projects: Project[] = [
  {
    href: '/projects/projvault',
    color: 'var(--accent-sage)',
    mark: '01',
    type: 'RAG Quality',
    stage: 'GraphRAG / Spring Boot',
    year: '2026',
    title: 'ProjVault',
    description: '面向项目经理的项目知识中心，把混乱资料转成可检索、可追溯、带证据的 RAG 知识。',
    tags: ['RAG', 'GraphRAG', 'Evidence'],
    metric: '带证据的 AI 问答',
    image: '/projects/projvault-scan-report.png',
    imageAlt: 'ProjVault 扫描报告界面截图',
    actions: [
      { label: '项目说明', href: '/projects/projvault' }
    ]
  },
  {
    href: '/projects/noematrace',
    color: 'var(--accent-blue)',
    mark: '02',
    type: 'Agent Observability',
    stage: 'Trace Replay / React',
    year: '2026',
    title: 'NoemaTrace',
    description: '浏览器内运行的 Agent trace 回放工具，分析执行路径、失败原因与上下文预算。',
    tags: ['Trace Replay', 'Context Budget', 'Rules'],
    metric: '拖入 trace 即可复盘',
    image: '/projects/noematrace-trace-replay.png',
    imageAlt: 'NoemaTrace trace replay 图谱界面截图',
    actions: [
      { label: 'Live Demo', href: 'https://noematrace.vercel.app/', external: true },
      { label: 'GitHub', href: 'https://github.com/kllin8154-arch/noematrace', external: true },
      { label: '项目说明', href: '/projects/noematrace' }
    ]
  },
  {
    href: '/projects/opsmonitor',
    color: 'var(--accent-clay)',
    mark: '03',
    type: 'AI DevOps',
    stage: 'Prometheus / Runbook',
    year: '2025',
    title: 'OpsMonitor',
    description: '自动化监控平台，组合 Prometheus、Grafana、AlertManager 与 Sentinel 处置链路。',
    tags: ['Prometheus', 'Alert', 'Runbook'],
    metric: '告警到处置闭环',
    image: '/projects/opsmonitor-overview.png',
    imageAlt: 'OpsMonitor 系统总览界面截图',
    actions: [
      { label: 'GitHub', href: 'https://github.com/kllin8154-arch/ops-monitor', external: true },
      { label: '项目说明', href: '/projects/opsmonitor' }
    ]
  },
  {
    href: '/projects/ui-library',
    color: 'var(--accent-amber)',
    mark: '04',
    type: 'Interface System',
    stage: 'Catalog / 205 组件',
    year: '2025',
    title: 'UI-Library',
    description: '本地优先的 UI 组件资产库与查询系统，支持多库挂载、隔离、查询与复用配方。',
    tags: ['UI Assets', 'Catalog', 'Agent Index'],
    metric: '205 个组件资产索引',
    image: '/projects/ui-library-catalog.png',
    imageAlt: 'UI-Library 组件查询界面截图',
    actions: [
      { label: '项目说明', href: '/projects/ui-library' }
    ]
  }
]

const articles: Article[] = [
  {
    href: 'https://juejin.cn/post/7655523471275376691',
    external: true,
    date: '2026.06.26',
    category: 'Vibe Coding',
    title: '从感觉到工程纪律',
    description: '把 AI 协作中的直觉、试错和审美判断，沉淀成可交接、可验证、可复盘的开发流程。',
    source: '掘金首发'
  },
  {
    href: '/articles/noematrace-observability',
    date: '2026.06.25',
    category: 'NoemaTrace',
    title: '让 Agent 执行可回放',
    description: 'Agent 可观测性不只是一张仪表盘，而是从单次执行回放、失败分析和上下文预算开始。',
    source: '站内文章'
  },
  {
    href: '/articles/projvault-rag-quality',
    date: '2026.06.24',
    category: 'ProjVault',
    title: 'RAG 质量从证据开始',
    description: '项目资料不是干净语料，RAG 质量要先解决版本、噪音、证据来源和可追溯问题。',
    source: '站内草稿'
  }
]

const signals = [
  { label: 'Focus', value: 'RAG 质量 · Agent 可观测性' },
  { label: 'Stack', value: 'Java · Spring Boot · TypeScript · React · Vue' },
  { label: 'Output', value: 'AI DevOps · Vibe Coding · 多 AI 接力' }
]

const brandMarks: BrandMark[] = [
  { label: 'OpenAI (ChatGPT)', icon: openAiIcon, meta: 'Product', tone: 'ink' },
  { label: 'Anthropic', icon: anthropicIcon, meta: 'Company', tone: 'sage' },
  { label: 'Claude', icon: claudeIcon, meta: 'Model', tone: 'clay' },
  { label: 'Claude Code', icon: claudeCodeIcon, meta: 'Agent IDE', tone: 'clay' },
  { label: 'Codex', icon: codexIcon, meta: 'Coding Agent', tone: 'blue' },
  { label: 'DeepSeek', icon: deepSeekIcon, meta: 'Model', tone: 'blue' },
  { label: 'ChatGLM', icon: chatglmIcon, meta: 'Zhipu AI', tone: 'indigo' }
]

const methods = [
  {
    title: 'CLAUDE.md',
    label: '协作协议',
    detail: '把项目身份、硬约束、依赖纪律和完成标准，写成 AI 可执行的协作协议。'
  },
  {
    title: 'LESSONS.md',
    label: '项目记忆',
    detail: '把踩坑、版本陷阱、验证命令和修复经验，沉淀成跨 AI 的项目记忆。'
  },
  {
    title: '多 AI 接力开发',
    label: '工程流程',
    detail: '用 PRD、任务边界、交接清单与验证记录，让多个 AI 连续推进同一项目。'
  }
]

const links = [
  { label: 'GitHub', href: 'https://github.com/kllin8154-arch', status: '已上线', detail: 'github.com/kllin8154-arch' },
  { label: '掘金', href: 'https://juejin.cn/post/7655523471275376691', status: '已发布', detail: 'juejin.cn' },
  { label: 'NoemaTrace', href: 'https://noematrace.vercel.app/', status: '在线演示', detail: 'noematrace.vercel.app' },
  { label: '思否', href: '', status: '待补充', detail: 'segmentfault.com' },
  { label: '知乎', href: '', status: '待补充', detail: 'zhihu.com' }
]

const activeProjectIndex = ref(0)
const projectRows = ref<HTMLElement[]>([])
const projectSection = ref<HTMLElement | null>(null)
const workLayout = ref<HTMLElement | null>(null)
const workPreview = ref<HTMLElement | null>(null)
const previewDocked = ref(false)
const previewDockStyle = ref<Record<string, string>>({})

const activePreview = computed(() => projects[activeProjectIndex.value] ?? projects[0])
const liveLinks = computed(() => links.filter((link) => link.href))
const pendingLinks = computed(() => links.filter((link) => !link.href))

let projectObserver: IntersectionObserver | undefined
let previewDockFrame = 0

function resolveHref(item: LinkAction | Article | { href: string; external?: boolean }) {
  return item.external ? item.href : withBase(item.href)
}

function setActiveProject(index: number) {
  activeProjectIndex.value = index
}

function setProjectRow(element: Element | null, index: number) {
  if (element instanceof HTMLElement) {
    projectRows.value[index] = element
  }
}

function updatePreviewDock() {
  if (!projectSection.value || !workLayout.value || window.innerWidth <= 960) {
    previewDocked.value = false
    return
  }

  const top = 104
  const sectionRect = projectSection.value.getBoundingClientRect()
  const layoutRect = workLayout.value.getBoundingClientRect()
  const shouldDock = sectionRect.top <= top && sectionRect.bottom >= top + 140

  previewDocked.value = shouldDock

  if (shouldDock) {
    const width = window.innerWidth <= 1180 ? 300 : 360
    const right = Math.max(24, window.innerWidth - layoutRect.right)

    previewDockStyle.value = {
      top: `${top}px`,
      right: `${right}px`,
      width: `${width}px`
    }
  }
}

function schedulePreviewDockUpdate() {
  if (previewDockFrame) return

  previewDockFrame = window.requestAnimationFrame(() => {
    previewDockFrame = 0
    updatePreviewDock()
  })
}

onMounted(() => {
  projectObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      const bestEntry = visibleEntries[0]
      const index = Number((bestEntry?.target as HTMLElement | undefined)?.dataset.projectIndex)

      if (Number.isInteger(index)) {
        activeProjectIndex.value = index
      }
    },
    {
      rootMargin: '-28% 0px -40% 0px',
      threshold: [0.18, 0.32, 0.5, 0.68, 0.84]
    }
  )

  projectRows.value.forEach((row) => projectObserver?.observe(row))
  updatePreviewDock()
  window.addEventListener('scroll', schedulePreviewDockUpdate, { passive: true })
  window.addEventListener('resize', schedulePreviewDockUpdate)
})

onBeforeUnmount(() => {
  projectObserver?.disconnect()
  window.removeEventListener('scroll', schedulePreviewDockUpdate)
  window.removeEventListener('resize', schedulePreviewDockUpdate)

  if (previewDockFrame) {
    window.cancelAnimationFrame(previewDockFrame)
  }
})
</script>

<template>
  <main id="top" class="lab-home">
    <section class="lab-hero" aria-labelledby="lab-hero-title">
      <div class="lab-hero-meta">
        <span>AI 全栈工程师 · AI 工程实践者</span>
        <span class="lab-availability">可合作 · 2026</span>
      </div>

      <div class="lab-hero-grid">
        <div class="lab-hero-copy">
          <h1 id="lab-hero-title">
            <span>让 AI 应用</span>
            <span><em>可验证</em>、可回放、</span>
            <span><em>可评测</em>、可运维。</span>
          </h1>
          <p>
            围绕 RAG 质量、Agent 可观测性、AI DevOps 与 Vibe Coding，把每一次 AI 协作沉淀成可交接、可验证、可复盘的工程实践。
          </p>
          <div class="lab-hero-actions" aria-label="首页快捷入口">
            <a href="#projects">向下浏览精选项目</a>
            <a :href="withBase('/methodology')">查看工程方法</a>
          </div>
        </div>

        <div class="lab-brand-field" aria-label="AI 工具与模型生态">
          <div class="brand-field-head">
            <span>AI Stack</span>
            <strong>Model & Agent Tools</strong>
          </div>
          <div class="brand-orbit">
            <span
              v-for="brand in brandMarks"
              :key="brand.label"
              class="brand-mark"
              :class="`is-${brand.tone}`"
            >
              <i><img :src="brand.icon" :alt="`${brand.label} 官方图标`" loading="lazy" /></i>
              <span>
                <strong>{{ brand.label }}</strong>
                <small>{{ brand.meta }}</small>
              </span>
            </span>
          </div>
        </div>

        <div class="lab-signal-panel" aria-label="站点概览">
          <div v-for="signal in signals" :key="signal.label" class="lab-signal">
            <span>{{ signal.label }}</span>
            <strong>{{ signal.value }}</strong>
          </div>
        </div>
      </div>
    </section>

    <div class="lab-marquee" aria-hidden="true">
      <div>
        <span>RAG 质量</span><i>✳</i><span>Agent 可观测性</span><i>✳</i><span>AI DevOps</span><i>✳</i><span>Vibe Coding</span><i>✳</i><span>多 AI 接力</span><i>✳</i><span>可验证 · 可回放 · 可运维</span><i>✳</i>
        <span>RAG 质量</span><i>✳</i><span>Agent 可观测性</span><i>✳</i><span>AI DevOps</span><i>✳</i><span>Vibe Coding</span><i>✳</i><span>多 AI 接力</span><i>✳</i><span>可验证 · 可回放 · 可运维</span><i>✳</i>
      </div>
    </div>

    <section id="projects" ref="projectSection" class="lab-section lab-work" aria-labelledby="projects-title">
      <div class="lab-section-head">
        <div>
          <span class="lab-section-index">（01） Selected Work</span>
          <h2 id="projects-title">精选项目</h2>
        </div>
        <p>四个项目覆盖 AI 工程的关键链路：RAG 质量、Agent 执行回放、AI DevOps 与 UI 资产复用。</p>
      </div>

      <div ref="workLayout" class="work-layout">
        <div class="work-list">
          <article
            v-for="(project, index) in projects"
            :key="project.href"
            :ref="(element) => setProjectRow(element, index)"
            class="work-row"
            :class="{ 'is-active': activeProjectIndex === index }"
            :style="{ '--project-color': project.color }"
            :data-project-index="index"
            @mouseenter="setActiveProject(index)"
            @focusin="setActiveProject(index)"
          >
            <span class="work-mark">{{ project.mark }}</span>
            <div class="work-main">
              <a class="work-title" :href="withBase(project.href)">
                {{ project.title }}<i></i>
              </a>
              <p>{{ project.description }}</p>
              <div class="work-tags">
                <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
            <div class="work-side">
              <span>{{ project.type }}</span>
              <strong>{{ project.stage }}</strong>
              <small>{{ project.year }}</small>
              <div class="work-actions" aria-label="项目链接">
                <a
                  v-for="action in project.actions"
                  :key="`${project.title}-${action.label}`"
                  :href="resolveHref(action)"
                  :target="action.external ? '_blank' : undefined"
                  :rel="action.external ? 'noreferrer' : undefined"
                >
                  {{ action.label }}
                </a>
              </div>
            </div>
          </article>
        </div>

        <aside
          ref="workPreview"
          class="work-preview"
          :class="{ 'is-docked': previewDocked }"
          :style="previewDocked ? previewDockStyle : undefined"
          aria-label="项目预览"
        >
          <div class="preview-frame">
            <img
              :key="activePreview.image"
              :src="withBase(activePreview.image)"
              :alt="activePreview.imageAlt"
            >
          </div>
          <div class="preview-caption">
            <span>{{ activePreview.metric }}</span>
            <strong>{{ activePreview.title }}</strong>
          </div>
        </aside>
      </div>
    </section>

    <section id="writing" class="lab-section lab-writing" aria-labelledby="writing-title">
      <div class="lab-section-head">
        <div>
          <span class="lab-section-index">（02） Writing</span>
          <h2 id="writing-title">文章笔记</h2>
        </div>
        <p>把项目里的判断、验证与交接过程，整理成可复用的方法笔记。</p>
      </div>

      <div class="writing-list">
        <a
          v-for="article in articles"
          :key="article.href"
          class="writing-row"
          :href="resolveHref(article)"
          :target="article.external ? '_blank' : undefined"
          :rel="article.external ? 'noreferrer' : undefined"
        >
          <span class="writing-date">{{ article.date }}</span>
          <span class="writing-category">{{ article.category }}</span>
          <div class="writing-main">
            <h3>{{ article.title }}</h3>
            <p>{{ article.description }}</p>
          </div>
          <span class="writing-source">{{ article.source }}</span>
          <span class="writing-arrow">→</span>
        </a>
      </div>
    </section>

    <section id="method" class="lab-section lab-method" aria-labelledby="method-title">
      <div class="lab-section-head">
        <div>
          <span class="lab-section-index">（03） Engineering Method</span>
          <h2 id="method-title">工程方法论</h2>
        </div>
        <p>核心不是让 AI 写代码，而是把 AI 协作变成有约束、有证据、有回放、有交接的工程系统。</p>
      </div>

      <div class="method-list">
        <a
          v-for="method in methods"
          :key="method.title"
          class="method-panel"
          :href="withBase('/methodology')"
        >
          <span>{{ method.label }}</span>
          <h3>{{ method.title }}</h3>
          <p>{{ method.detail }}</p>
        </a>
      </div>
    </section>

    <section id="links" class="lab-section lab-contact" aria-labelledby="links-title">
      <div class="contact-heading">
        <span class="lab-section-index">（04） Get In Touch</span>
        <h2 id="links-title">一起把 AI 工程<br>做得更扎实。</h2>
      </div>

      <div class="link-list">
        <a
          v-for="link in liveLinks"
          :key="link.label"
          class="contact-link"
          :href="link.href"
          target="_blank"
          rel="noreferrer"
        >
          <strong>{{ link.label }}</strong>
          <span>{{ link.detail }}</span>
          <small>{{ link.status }}</small>
        </a>
        <span
          v-for="link in pendingLinks"
          :key="link.label"
          class="contact-link is-pending"
          aria-disabled="true"
        >
          <strong>{{ link.label }}</strong>
          <span>{{ link.detail }}</span>
          <small>{{ link.status }}</small>
        </span>
      </div>

      <p class="contact-note">
        如果你也在实践 AI 工程化、Vibe Coding、RAG 质量或 Agent 可观测性，欢迎通过 GitHub / 掘金 / 知乎联系我。
      </p>
    </section>
  </main>
</template>
