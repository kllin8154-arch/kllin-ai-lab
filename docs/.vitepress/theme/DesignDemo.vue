<script setup lang="ts">
const directions = [
  {
    key: 'minimal',
    label: '方向 A',
    title: '极简编辑感',
    subtitle: '让作品和文章像一本克制的线上作品册。',
    accent: '#2f5d50',
    references: [
      { name: 'Siteinspire Portfolio / Personal', url: 'https://www.siteinspire.com/websites/category/portfolio' },
      { name: 'Land-book Portfolio / Blog', url: 'https://land-book.com/design/portfolio' }
    ],
    fit: '适合偏技术写作、个人品牌长期沉淀、文章占比较高的站点。',
    tradeoff: '气质稳，维护成本低；但第一眼冲击力不如动效和强视觉方向。'
  },
  {
    key: 'product',
    label: '方向 B',
    title: '产品化作品集',
    subtitle: '把个人网站当作一个清晰转化的产品首页。',
    accent: '#a56a1d',
    references: [
      { name: 'Lapa Ninja Portfolio', url: 'https://www.lapa.ninja/category/portfolio/' },
      { name: 'One Page Love Portfolio', url: 'https://onepagelove.com/genre/portfolio' }
    ],
    fit: '适合希望访客快速理解能力边界、项目结果和可合作方向。',
    tradeoff: '信息效率最高；但需要你后续补真实成果、指标和案例截图。'
  },
  {
    key: 'motion',
    label: '方向 C',
    title: '暗色动效实验室',
    subtitle: '把 AI、工程自动化和实验项目做成更有记忆点的技术场域。',
    accent: '#d2b35f',
    references: [
      { name: 'Landing Love Portfolio Animation', url: 'https://www.landing.love/categories/portfolio/' },
      { name: 'Awwwards Portfolio / Animation', url: 'https://www.awwwards.com/websites/portfolio/' }
    ],
    fit: '适合展示 AI Agent、自动化、可视化、交互实验等更前沿的项目。',
    tradeoff: '记忆点强；但动画实现和性能验证要求更高，不宜过度装饰。'
  },
  {
    key: 'console',
    label: '方向 D',
    title: '组件化工作台',
    subtitle: '像设计工程师的操作台，强调状态、模块和可扫描信息。',
    accent: '#315f8c',
    references: [
      { name: '21st.dev Components / Templates', url: 'https://21st.dev/' },
      { name: 'Aceternity UI Components', url: 'https://ui.aceternity.com/components' }
    ],
    fit: '适合后续扩展项目状态、文章分类、工具集、实验日志等模块。',
    tradeoff: '扩展性最好；但个人气质会偏产品工具，需要视觉细节避免太像后台。'
  }
]
</script>

<template>
  <main class="design-demo-page">
    <section class="demo-hero">
      <p class="demo-kicker">Design Direction Lab</p>
      <h1>个人网站设计方向 Demo</h1>
      <p>
        这页先不替换正式首页，而是把 AGENTS.md 提到的参考站转译成四个可比较的方向。
        你可以先挑气质，再决定后续首页、项目页和文章页统一往哪条线走。
      </p>
      <div class="demo-source-row" aria-label="参考来源">
        <a href="https://www.siteinspire.com/websites/category/personal" target="_blank" rel="noreferrer">Siteinspire</a>
        <a href="https://land-book.com/design/portfolio" target="_blank" rel="noreferrer">Land-book</a>
        <a href="https://www.lapa.ninja/category/portfolio/" target="_blank" rel="noreferrer">Lapa Ninja</a>
        <a href="https://onepagelove.com/genre/portfolio" target="_blank" rel="noreferrer">One Page Love</a>
        <a href="https://www.landing.love/categories/portfolio/" target="_blank" rel="noreferrer">Landing Love</a>
        <a href="https://www.awwwards.com/websites/portfolio/" target="_blank" rel="noreferrer">Awwwards</a>
      </div>
    </section>

    <section
      v-for="direction in directions"
      :id="direction.key"
      :key="direction.key"
      class="demo-direction"
      :class="`is-${direction.key}`"
      :style="{ '--demo-accent': direction.accent }"
    >
      <div class="direction-copy">
        <span class="direction-label">{{ direction.label }}</span>
        <h2>{{ direction.title }}</h2>
        <p class="direction-subtitle">{{ direction.subtitle }}</p>

        <dl class="direction-notes">
          <div>
            <dt>适合</dt>
            <dd>{{ direction.fit }}</dd>
          </div>
          <div>
            <dt>取舍</dt>
            <dd>{{ direction.tradeoff }}</dd>
          </div>
        </dl>

        <div class="reference-list" aria-label="参考来源">
          <a
            v-for="reference in direction.references"
            :key="reference.url"
            :href="reference.url"
            target="_blank"
            rel="noreferrer"
          >
            {{ reference.name }}
          </a>
        </div>
      </div>

      <div class="demo-preview" aria-hidden="true">
        <div v-if="direction.key === 'minimal'" class="preview-minimal">
          <div class="minimal-rail">Projects / Notes / Systems</div>
          <div class="minimal-main">
            <span>Personal Site</span>
            <h3>工程、文章与长期作品集</h3>
            <p>用清晰排版承载项目，减少装饰，让每张卡片都有呼吸感。</p>
          </div>
          <div class="minimal-list">
            <div><strong>01</strong><span>内容工作台</span></div>
            <div><strong>02</strong><span>AI 工作流</span></div>
            <div><strong>03</strong><span>部署笔记本</span></div>
          </div>
        </div>

        <div v-else-if="direction.key === 'product'" class="preview-product">
          <div class="product-hero">
            <span>Available for project systems</span>
            <h3>把作品说成结果，而不是目录</h3>
          </div>
          <div class="product-metrics">
            <div><strong>4</strong><span>精选项目</span></div>
            <div><strong>12</strong><span>工程笔记</span></div>
            <div><strong>1</strong><span>发布流程</span></div>
          </div>
          <div class="product-cases">
            <div>内容生产链路</div>
            <div>Agent 协作规范</div>
            <div>Pages 自动部署</div>
          </div>
        </div>

        <div v-else-if="direction.key === 'motion'" class="preview-motion">
          <div class="motion-stage">
            <div class="motion-track track-one"></div>
            <div class="motion-track track-two"></div>
            <div class="motion-track track-three"></div>
          </div>
          <div class="motion-console">
            <span>lab.run()</span>
            <p>agent / vitepress / ci</p>
            <p>build: passed</p>
          </div>
        </div>

        <div v-else class="preview-console">
          <div class="console-top">
            <strong>Workstation</strong>
            <span>Live</span>
          </div>
          <div class="console-grid">
            <div>
              <span>Projects</span>
              <strong>04</strong>
            </div>
            <div>
              <span>Articles</span>
              <strong>03</strong>
            </div>
            <div>
              <span>Deploy</span>
              <strong>OK</strong>
            </div>
            <div>
              <span>Focus</span>
              <strong>AI</strong>
            </div>
          </div>
          <div class="console-table">
            <span>content-lab</span><span>writing</span>
            <span>ai-workflow</span><span>agent</span>
            <span>deploy-notebook</span><span>ci/cd</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
