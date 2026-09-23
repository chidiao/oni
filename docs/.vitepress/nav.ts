import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: 'Home', link: '/' },
  {
    text: '指南',
    items: [
      { text: '基地', link: '/guide/jidi' },
      { text: '气体', link: '/guide/gas' },
      { text: '液体', link: '/guide/liquid' },
      { text: '液门', link: '/guide/door' }
    ]
  },
  {
    text: '食物',
    items: [{ text: '总览', link: '/food/index' }]
  },
  {
    text: '动物',
    items: [
      { text: '总览', link: '/animal/index' },
      { text: '养鱼', link: '/animal/fish' },
      { text: '壁虎', link: '/animal/gecko' },
      { text: '哈奇', link: '/animal/haqi' }
    ]
  },
  { text: 'Links', link: '/links' }
]
