export type MenuItem = { text: string; link: string }

export type MenuGroup = { text: string; items: MenuItem[] }

export const menus: MenuGroup[] = [
  {
    text: '建造',
    items: [
      { text: '基地', link: '/build/jidi' },
      { text: '娱乐', link: '/build/yule' },
      { text: '发电', link: '/build/fadian' },
      { text: '制氧', link: '/build/zhiyang' },
      { text: '净化', link: '/build/jinghua' },
      { text: '门', link: '/build/door' },
      { text: '火箭', link: '/build/huojian' }
    ]
  },
  {
    text: '控温',
    items: [
      { text: '降温', link: '/tc/jiangwen' },
      { text: '冷水', link: '/tc/lengshui' }
    ]
  },
  {
    text: '间歇泉',
    items: [
      { text: '高压气库', link: '/geyser/gyqk' },
      { text: '高压液库', link: '/geyser/gyyk' },
      { text: '气泉开发', link: '/geyser/qiquan' },
      { text: '液泉开发', link: '/geyser/yequan' },
      { text: '火山开发', link: '/geyser/huoshan' },
      { text: '原油裂化', link: '/geyser/yuanyou' }
    ]
  },
  {
    text: '种植',
    items: [
      { text: '农场', link: '/crop/nc' },
      { text: '花蜜', link: '/crop/huami' },
      { text: '动捕草', link: '/crop/dbc' }
    ]
  },
  {
    text: '养殖',
    items: [
      { text: '养鱼', link: '/farm/fish' },
      { text: '壁虎', link: '/farm/bihu' },
      { text: '哈奇', link: '/farm/haqi' },
      { text: '飞鱼', link: '/farm/feiyu' }
    ]
  }
]
