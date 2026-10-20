import type { DefaultTheme } from 'vitepress'
import { menus } from './menu.ts'

const customSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '其他',
    items: [
      { text: '参考链接', link: '/links' },
      { text: '技能参考', link: '/skills/index-rules' }
    ]
  }
]

export const sidebar: DefaultTheme.Config['sidebar'] = [...menus, ...customSidebar]
