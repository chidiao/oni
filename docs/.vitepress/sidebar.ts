import type { DefaultTheme } from 'vitepress'
import { menus } from './menu.ts'

const group = (text: string) => menus.find((m) => m.text === text)!

const farming = group('养殖').items
const landFarming: DefaultTheme.SidebarItem = {
  text: '陆生养殖',
  items: farming.filter((item) => item.tag !== '水生')
}
const waterFarming: DefaultTheme.SidebarItem = {
  text: '水生养殖',
  items: farming.filter((item) => item.tag === '水生')
}

const guide: DefaultTheme.SidebarItem[] = [
  {
    text: '指南',
    items: [
      { text: '总览', link: '/guide/index' },
      { text: '建造', link: '/build/index' },
      { text: '间歇泉', link: '/geyser/index' },
      { text: '种植', link: '/crop/index' },
      { text: '养殖', link: '/farm/index' }
    ]
  }
]

const others: DefaultTheme.SidebarItem[] = [
  {
    text: '其他',
    items: [
      { text: '参考链接', link: '/guide/links' },
      { text: '技能参考', link: '/skills/index-rules' },
      { text: '图片', link: '/guide/images' }
    ]
  }
]

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/build/': [...guide, group('建造'), ...others],
  '/geyser/': [...guide, group('间歇泉'), ...others],
  '/crop/': [...guide, group('种植'), ...others],
  '/farm/': [...guide, landFarming, waterFarming, ...others],
  '/guide/': [...guide, ...others],
  '/skills/': [...guide, ...others]
}
