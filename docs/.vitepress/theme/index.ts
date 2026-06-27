import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import BaseImage from './BaseImage.vue'
import DesignDemo from './DesignDemo.vue'
import HomeContent from './HomeContent.vue'
import SiteMotion from './SiteMotion.vue'
import './styles.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(SiteMotion)
    })
  },
  enhanceApp({ app }) {
    app.component('BaseImage', BaseImage)
    app.component('DesignDemo', DesignDemo)
    app.component('HomeContent', HomeContent)
  }
} satisfies Theme
