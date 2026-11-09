import { defineConfig } from 'vitepress'
import { nav } from './nav.ts'
import { sidebar } from './sidebar.ts'

export default defineConfig({
  title: '缺氧笔记',
  description: '缺氧模块和笔记',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/imgs/logo.png',

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    nav,

    sidebar,

    socialLinks: [{ icon: 'github', link: '/guide/links' }]
  }
})
