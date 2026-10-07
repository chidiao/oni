import type { DefaultTheme } from 'vitepress'
import { menus } from './menu.ts'

const customNav: DefaultTheme.NavItem[] = []

export const nav: DefaultTheme.Config['nav'] = [...menus, ...customNav]
