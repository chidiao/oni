import { defineConfig } from 'vitepress'
import { nav } from './nav'
import { sidebar } from './sidebar'

export default defineConfig({
  title: '缺氧笔记',
  description: '缺氧模块和笔记',
  themeConfig: {
    nav,

    sidebar,

    socialLinks: [
      {
        icon: {
          svg: '<svg viewBox="0 0 100 118" xmlns="http://www.w3.org/2000/svg"><image href="/imgs/logo.png" width="100" height="118"/></svg>'
        },
        link: 'https://oxygennotincluded.wiki.gg/zh/'
      },
      {
        icon: {
          svg: '<svg viewBox="0 0 100 118" xmlns="http://www.w3.org/2000/svg"><image href="/imgs/logo.png" width="100" height="118"/></svg>'
        },
        link: 'https://www.yuque.com/u25332524/ftq4u7'
      }
    ]
  }
})
