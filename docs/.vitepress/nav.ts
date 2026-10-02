import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '指南',
    items: [
      { text: '气体', link: '/guide/gas' },
      { text: '高压液库', link: '/guide/gyyk' },
      { text: '液门', link: '/guide/door' },
      { text: '净化', link: '/guide/jinghua' },
      { text: '蒸汽室', link: '/guide/zqs' }
    ]
  },
  {
    text: '建造',
    items: [
      { text: '基地', link: '/build/jidi' },
      { text: '瀑布', link: '/build/pubu' }
    ]
  },
  {
    text: '食物',
    items: [
      { text: '总览', link: '/food/index' },
      { text: '农场', link: '/food/nongchang' }
    ]
  },
  {
    text: '动物',
    items: [
      { text: '总览', link: '/animal/index' },
      { text: '养鱼', link: '/animal/fish' },
      { text: '壁虎', link: '/animal/bihu' },
      { text: '哈奇', link: '/animal/haqi' }
    ]
  }
]
