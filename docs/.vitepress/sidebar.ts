import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: '指南',
    items: [
      { text: '气体', link: '/guide/gas' },
      { text: '高压液库', link: '/guide/gyyk' },
      { text: '液门', link: '/guide/door' },
      { text: '净化', link: '/guide/jinghua' }
    ]
  },
  {
    text: '建造',
    items: [
      { text: '基地', link: '/build/jidi' },
      { text: '瀑布', link: '/build/pubu' },
      { text: '汪洋星', link: '/build/wyx' },
      { text: '液冷', link: '/build/yeleng' }
    ]
  },
  {
    text: '种植',
    items: [
      { text: '总览', link: '/zz/index' },
      { text: '农场', link: '/zz/nc' }
    ]
  },
  {
    text: '养殖',
    items: [
      { text: '总览', link: '/yz/index' },
      { text: '养鱼', link: '/yz/fish' },
      { text: '壁虎', link: '/yz/bihu' },
      { text: '哈奇', link: '/yz/haqi' },
      { text: '飞鱼', link: '/yz/feiyu' }
    ]
  },
  {
    text: '其他',
    items: [{ text: '参考链接', link: '/links' }]
  }
]
