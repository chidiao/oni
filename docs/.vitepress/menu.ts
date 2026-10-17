export type MenuItem = { text: string; link: string }

export type MenuGroup = { text: string; items: MenuItem[] }

export const menus: MenuGroup[] = [
  {
    text: '指南',
    items: [
      { text: '总览', link: '/guide/data' },
      { text: '高压气库', link: '/guide/gyqk' },
      { text: '高压液库', link: '/guide/gyyk' },
      { text: '液门', link: '/guide/door' },
      { text: '净化', link: '/guide/jinghua' },
      { text: '技巧', link: '/guide/skill' }
    ]
  },
  {
    text: '建造',
    items: [
      { text: '基地', link: '/build/jidi' },
      { text: '瀑布', link: '/build/pubu' },
      { text: '汪洋星', link: '/build/wyx' },
      { text: '液冷', link: '/build/yeleng' },
      { text: '发电', link: '/build/fadian' },
      { text: '遗迹', link: '/build/yiji' },
      { text: '制氧', link: '/build/zhiyang' },
      { text: '火山开发', link: '/build/huoshan' }
    ]
  },
  {
    text: '种植',
    items: [
      { text: '总览', link: '/crop/index' },
      { text: '农场', link: '/crop/nc' },
      { text: '动捕草', link: '/crop/dbc' }
    ]
  },
  {
    text: '养殖',
    items: [
      { text: '总览', link: '/farm/index' },
      { text: '养鱼', link: '/farm/fish' },
      { text: '壁虎', link: '/farm/bihu' },
      { text: '哈奇', link: '/farm/haqi' },
      { text: '飞鱼', link: '/farm/feiyu' }
    ]
  }
]
