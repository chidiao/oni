export type MenuItem = { text: string; link: string }

export type MenuGroup = { text: string; items: MenuItem[] }

export const menus: MenuGroup[] = [
  {
    text: '指南',
    items: [
      { text: '总览', link: '/guide/index' },
      { text: '门', link: '/guide/door' },
      { text: '净化', link: '/guide/jinghua' },
      { text: '技巧', link: '/guide/skill' }
    ]
  },
  {
    text: '建造',
    items: [
      { text: '总览', link: '/build/index' },
      { text: '瀑布', link: '/build/pubu' },
      { text: '汪洋星', link: '/build/wyx' },
      { text: '发电', link: '/build/fadian' },
      { text: '遗迹', link: '/build/yiji' },
      { text: '制氧', link: '/build/zhiyang' }
    ]
  },
  {
    text: '控温',
    items: [
      { text: '总览', link: '/tc/index' },
      { text: '液冷', link: '/tc/yeleng' }
    ]
  },
  {
    text: '间歇泉',
    items: [
      { text: '总览', link: '/geyser/index' },
      { text: '高压气库', link: '/geyser/gyqk' },
      { text: '高压液库', link: '/geyser/gyyk' },
      { text: '气泉开发', link: '/geyser/qiquan' },
      { text: '液泉开发', link: '/geyser/yequan' },
      { text: '火山开发', link: '/geyser/huoshan' }
    ]
  },
  {
    text: '种植',
    items: [
      { text: '总览', link: '/crop/index' },
      { text: '农场', link: '/crop/nc' },
      { text: '花蜜', link: '/crop/huami' },
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
