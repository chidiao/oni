import { defineConfig } from 'vitepress'
import { nav } from './nav.ts'
import { sidebar } from './sidebar.ts'
import type { DefaultTheme } from 'vitepress'

const wikiIcon = (): DefaultTheme.SocialLink['icon'] => ({
  svg: '<svg xmlns="http://www.w3.org/2000/svg" style="fill:none;stroke:currentColor" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sheet"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="3" x2="21" y1="15" y2="15"/><line x1="9" x2="9" y1="9" y2="21"/><line x1="15" x2="15" y1="9" y2="21"/></svg>'
})

const docIcon = (): DefaultTheme.SocialLink['icon'] => ({
  svg: '<svg xmlns="http://www.w3.org/2000/svg" style="fill:none;stroke:currentColor" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-bookmark"><path d="M10 2v7.751a.25.25 0 00.407.195l2.28-1.834a.5.5 0 01.627 0l2.28 1.834A.25.25 0 0016 9.751V2"/><path d="M4 19.5v-15A2.5 2.5 0 016.5 2H19a1 1 0 011 1v18a1 1 0 01-1 1H6.5a1 1 0 010-5H20"/></svg>'
})

export default defineConfig({
  title: '缺氧笔记',
  description: '缺氧模块和笔记',
  themeConfig: {
    logo: '/imgs/logo.png',

    nav,

    sidebar,

    socialLinks: [
      {
        icon: wikiIcon(),
        link: 'https://oxygennotincluded.wiki.gg/zh/'
      },
      {
        icon: docIcon(),
        link: 'https://www.yuque.com/u25332524/ftq4u7'
      }
    ]
  }
})
