import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import BaseImage from './BaseImage.vue'
import DesignDemo from './DesignDemo.vue'
import HomeContent from './HomeContent.vue'
import './styles.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('BaseImage', BaseImage)
    app.component('DesignDemo', DesignDemo)
    app.component('HomeContent', HomeContent)
  }
} satisfies Theme
