import DefaultTheme from 'vitepress/theme'
import { setupImageFlip } from './flipImages'
import './flipImages.css'

export default {
  extends: DefaultTheme,
  setup() {
    setupImageFlip()
  }
}
