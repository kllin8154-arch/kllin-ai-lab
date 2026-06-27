<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { inBrowser, useRoute, useRouter, withBase } from 'vitepress'

type TransitionKind = 'curtain' | 'columns' | 'split' | 'iris' | 'diagonal'
type TransitionPhase = 'idle' | 'ready' | 'cover' | 'reveal'
type RouteBeforeHook = (to: string) => void | boolean | Promise<void | boolean>
type RouteAfterHook = (to: string) => void | Promise<void>

type Panel = {
  key: string
  style: Record<string, string>
}

const greetings = ['你好', 'Hello', 'Bonjour', 'Hola', 'Ciao', 'Olá', 'Hallo', 'Guten Tag', 'Hej']

const router = useRouter()
const route = useRoute()

const loaderVisible = ref(false)
const loaderExiting = ref(false)
const greetingIndex = ref(0)

const phase = ref<TransitionPhase>('idle')
const transitionKind = ref<TransitionKind>('curtain')
const transitionCn = ref('kllin AI Lab')
const transitionEn = ref('Home')

let greetingTimer: number | undefined
let loaderStartTimer: number | undefined
let loaderExitTimer: number | undefined
let transitionFallbackTimer: number | undefined
let transitionCleanupTimer: number | undefined
let originalBeforeRouteChange: RouteBeforeHook | undefined
let originalAfterRouteChange: RouteAfterHook | undefined
let beforeRouteHandler: RouteBeforeHook | undefined
let afterRouteHandler: RouteAfterHook | undefined
let reducedMotion = false

const transitionActive = computed(() => phase.value !== 'idle')
const currentGreeting = computed(() => greetings[greetingIndex.value % greetings.length])
const panels = computed(() => createPanels(transitionKind.value, phase.value))

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

function nextFrame() {
  return new Promise<void>((resolve) => {
    window.requestAnimationFrame(() => resolve())
  })
}

function normalizePath(target: string) {
  if (!target) return '/'

  let pathname = target

  if (inBrowser) {
    try {
      pathname = new URL(target, window.location.origin).pathname
    } catch {
      pathname = target.split(/[?#]/)[0]
    }
  } else {
    pathname = target.split(/[?#]/)[0]
  }

  const base = withBase('/').replace(/\/$/, '')
  if (base && pathname === base) pathname = '/'
  if (base && pathname.startsWith(`${base}/`)) pathname = pathname.slice(base.length)

  pathname = pathname.replace(/\/index(?:\.html)?$/, '/').replace(/\.html$/, '')
  if (pathname.length > 1) pathname = pathname.replace(/\/$/, '')
  return pathname || '/'
}

function isHomePath(target: string) {
  const pathname = normalizePath(target)
  return pathname === '/' || pathname === ''
}

function shouldSkipRouteTransition(to: string) {
  if (!inBrowser || reducedMotion) return true
  if (to.startsWith('#')) return true

  let targetUrl: URL
  try {
    targetUrl = new URL(to, window.location.href)
  } catch {
    return true
  }

  if (targetUrl.origin !== window.location.origin) return true

  const currentPath = normalizePath(window.location.pathname)
  const targetPath = normalizePath(targetUrl.pathname)
  const currentSearch = window.location.search || ''

  if (targetPath === currentPath && targetUrl.search === currentSearch) return true
  if (targetPath === currentPath && targetUrl.hash) return true
  return false
}

function getTargetMeta(to: string): { cn: string; en: string; type: TransitionKind } {
  const pathname = normalizePath(to)

  if (pathname.startsWith('/projects')) {
    return { cn: '项目', en: 'Projects', type: 'columns' }
  }

  if (pathname.startsWith('/articles')) {
    return { cn: '文章笔记', en: 'Writing', type: 'iris' }
  }

  if (pathname.startsWith('/methodology')) {
    return { cn: '工程方法论', en: 'Method', type: 'split' }
  }

  if (pathname.startsWith('/about')) {
    return { cn: '关于我', en: 'About', type: 'diagonal' }
  }

  if (isHomePath(pathname)) {
    return { cn: 'kllin AI Lab', en: 'Home', type: 'curtain' }
  }

  return { cn: 'kllin AI Lab', en: 'Loading', type: 'curtain' }
}

function transitionDuration(type: TransitionKind) {
  if (reducedMotion) return 80
  if (type === 'columns') return 620
  if (type === 'split') return 560
  return 520
}

function createPanels(type: TransitionKind, currentPhase: TransitionPhase): Panel[] {
  if (type === 'columns') {
    const columns = 6
    return Array.from({ length: columns }, (_, index) => ({
      key: `column-${index}`,
      style: {
        top: '0',
        left: `${(100 / columns) * index}%`,
        width: `${100 / columns + 0.02}%`,
        height: '100%',
        transform: panelTransform('column', currentPhase),
        transitionDelay: `${index * 24}ms`
      }
    }))
  }

  if (type === 'split') {
    return [
      {
        key: 'split-top',
        style: {
          top: '0',
          left: '0',
          width: '100%',
          height: '50.1%',
          transform: splitTransform('top', currentPhase),
          transitionDelay: '0ms'
        }
      },
      {
        key: 'split-bottom',
        style: {
          bottom: '0',
          left: '0',
          width: '100%',
          height: '50.1%',
          transform: splitTransform('bottom', currentPhase),
          transitionDelay: '42ms'
        }
      }
    ]
  }

  if (type === 'iris') {
    return [
      {
        key: 'iris',
        style: {
          inset: '0',
          clipPath: irisClipPath(currentPhase),
          transitionDelay: '0ms'
        }
      }
    ]
  }

  if (type === 'diagonal') {
    return [
      {
        key: 'diagonal',
        style: {
          top: '-10%',
          left: '-10%',
          width: '120%',
          height: '120%',
          transform: diagonalTransform(currentPhase),
          transformOrigin: '50% 50%',
          transitionDelay: '0ms'
        }
      }
    ]
  }

  return [
    {
      key: 'curtain',
      style: {
        inset: '0',
        transform: panelTransform('curtain', currentPhase),
        transitionDelay: '0ms'
      }
    }
  ]
}

function panelTransform(mode: 'column' | 'curtain', currentPhase: TransitionPhase) {
  if (currentPhase === 'cover') return 'translateY(0%)'
  if (currentPhase === 'reveal') return 'translateY(-101%)'
  return mode === 'column' ? 'translateY(101%)' : 'translateY(101%)'
}

function splitTransform(part: 'top' | 'bottom', currentPhase: TransitionPhase) {
  if (currentPhase === 'cover') return 'translateY(0%)'
  if (part === 'top') return 'translateY(-101%)'
  return 'translateY(101%)'
}

function irisClipPath(currentPhase: TransitionPhase) {
  if (currentPhase === 'cover') return 'circle(150% at 50% 50%)'
  return 'circle(0% at 50% 50%)'
}

function diagonalTransform(currentPhase: TransitionPhase) {
  if (currentPhase === 'cover') return 'translateX(0%) skewX(-6deg)'
  if (currentPhase === 'reveal') return 'translateX(118%) skewX(-6deg)'
  return 'translateX(-118%) skewX(-6deg)'
}

async function startRouteCover(to: string) {
  if (shouldSkipRouteTransition(to)) return

  const meta = getTargetMeta(to)
  transitionKind.value = meta.type
  transitionCn.value = meta.cn
  transitionEn.value = meta.en

  window.clearTimeout(transitionCleanupTimer)
  window.clearTimeout(transitionFallbackTimer)

  phase.value = 'ready'
  await nextTick()
  await nextFrame()
  phase.value = 'cover'

  transitionFallbackTimer = window.setTimeout(() => {
    revealRoute()
  }, 4200)

  await sleep(transitionDuration(meta.type))
}

function revealRoute() {
  if (!inBrowser || reducedMotion || phase.value === 'idle') return

  window.clearTimeout(transitionFallbackTimer)
  window.clearTimeout(transitionCleanupTimer)

  phase.value = 'reveal'
  transitionCleanupTimer = window.setTimeout(() => {
    phase.value = 'idle'
  }, transitionKind.value === 'columns' ? 720 : 640)
}

function startHomeLoader() {
  if (!inBrowser || reducedMotion || !isHomePath(route.path)) return

  loaderVisible.value = true
  greetingIndex.value = 0

  greetingTimer = window.setInterval(() => {
    greetingIndex.value += 1
  }, 170)

  loaderStartTimer = window.setTimeout(() => {
    loaderExiting.value = true
    window.clearInterval(greetingTimer)

    loaderExitTimer = window.setTimeout(() => {
      loaderVisible.value = false
      loaderExiting.value = false
    }, 820)
  }, 1480)
}

function setMotionLock(locked: boolean) {
  if (!inBrowser) return
  document.documentElement.classList.toggle('site-motion-lock', locked)
}

function clearTimers() {
  window.clearInterval(greetingTimer)
  window.clearTimeout(loaderStartTimer)
  window.clearTimeout(loaderExitTimer)
  window.clearTimeout(transitionFallbackTimer)
  window.clearTimeout(transitionCleanupTimer)
}

onMounted(() => {
  reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

  startHomeLoader()

  originalBeforeRouteChange = router.onBeforeRouteChange
  originalAfterRouteChange = router.onAfterRouteChange

  beforeRouteHandler = async (to: string) => {
    const previous = await originalBeforeRouteChange?.(to)
    if (previous === false) return false
    await startRouteCover(to)
  }

  afterRouteHandler = async (to: string) => {
    await originalAfterRouteChange?.(to)
    await nextTick()
    revealRoute()
  }

  router.onBeforeRouteChange = beforeRouteHandler
  router.onAfterRouteChange = afterRouteHandler
})

onBeforeUnmount(() => {
  if (router.onBeforeRouteChange === beforeRouteHandler) {
    router.onBeforeRouteChange = originalBeforeRouteChange
  }

  if (router.onAfterRouteChange === afterRouteHandler) {
    router.onAfterRouteChange = originalAfterRouteChange
  }

  clearTimers()
  setMotionLock(false)
})

watch([loaderVisible, transitionActive], ([isLoaderVisible, isTransitionActive]) => {
  setMotionLock(Boolean(isLoaderVisible || isTransitionActive))
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="loaderVisible"
      class="site-loader"
      :class="{ 'is-exiting': loaderExiting }"
      role="status"
      aria-live="polite"
      aria-label="首页加载中"
    >
      <div class="site-loader-word-wrap">
        <span :key="currentGreeting" class="site-loader-word">{{ currentGreeting }}</span>
      </div>
      <span class="site-loader-brand">kllin AI Lab</span>
    </div>

    <div
      v-if="transitionActive"
      class="route-transition"
      :class="[`is-${phase}`, `type-${transitionKind}`]"
      aria-hidden="true"
    >
      <span
        v-for="panel in panels"
        :key="panel.key"
        class="route-transition-panel"
        :style="panel.style"
      />
      <div class="route-transition-label" :class="{ 'is-visible': phase === 'cover' }">
        <strong>{{ transitionCn }}</strong>
        <span>{{ transitionEn }}</span>
      </div>
    </div>
  </Teleport>
</template>
