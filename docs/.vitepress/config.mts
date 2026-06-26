import { defineConfig } from 'vitepress'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const githubPagesBase =
  repositoryName && !repositoryName.endsWith('.github.io')
    ? `/${repositoryName}/`
    : '/'
const configuredBase = process.env.VITEPRESS_BASE?.trim()
const siteBase = configuredBase || (process.env.GITHUB_ACTIONS ? githubPagesBase : '/')
const normalizedBase = siteBase.endsWith('/') ? siteBase : `${siteBase}/`

export default defineConfig({
  lang: 'zh-CN',
  title: 'kllin AI Lab',
  description: 'AI 工程实践：RAG 质量、Agent 可观测性、AI DevOps 与 Vibe Coding',
  base: normalizedBase,
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#2f5d50' }],
    ['link', { rel: 'icon', href: `${normalizedBase}favicon.svg` }]
  ],
  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '项目', link: '/projects/projvault' },
      { text: '文章', link: '/articles/vibe-coding' },
      { text: '方法论', link: '/methodology' },
      { text: '关于我', link: '/about' }
    ],
    sidebar: {
      '/projects/': [
        {
          text: '项目',
          items: [
            { text: 'ProjVault', link: '/projects/projvault' },
            { text: 'NoemaTrace', link: '/projects/noematrace' },
            { text: 'OpsMonitor', link: '/projects/opsmonitor' },
            { text: 'UI-Library', link: '/projects/ui-library' }
          ]
        }
      ],
      '/articles/': [
        {
          text: '文章',
          items: [
            { text: 'Vibe Coding：从感觉到工程纪律', link: '/articles/vibe-coding' },
            { text: 'NoemaTrace：让 Agent 执行可回放', link: '/articles/noematrace-observability' },
            { text: 'ProjVault：RAG 质量从证据开始', link: '/articles/projvault-rag-quality' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kllin8154-arch' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      label: '本页目录'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    darkModeSwitchLabel: '切换深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '选择语言'
  }
})
