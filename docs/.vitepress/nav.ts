import type { DefaultTheme } from 'vitepress'
import { menus } from './menu.ts'

const customNav: DefaultTheme.NavItem[] = []

export const nav: DefaultTheme.Config['nav'] = [
  ...menus.map((group): DefaultTheme.NavItem => ({ text: group.text, link: group.link })),
  ...customNav
]
