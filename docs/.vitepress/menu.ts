export type MenuItem = { text: string; link: string; tag?: string }

export type MenuGroup = { text: string; link: string; items: MenuItem[] }

export const menus: MenuGroup[] = [
  {
    text: '建造',
    link: '/build/index',
    items: [
      { text: '门', link: '/build/door' },
      { text: '基地', link: '/build/jidi' },
      { text: '娱乐', link: '/build/yule' },
      { text: '发电', link: '/build/fadian' },
      { text: '制氧', link: '/build/zhiyang' },
      { text: '储存', link: '/build/chucun' },
      { text: '净化', link: '/build/jinghua' },
      { text: '控温', link: '/build/kongwen' },
      { text: '工业', link: '/build/gongye' },
      { text: '火箭', link: '/build/huojian' },
      { text: '自动化', link: '/build/zidonghua' }
    ]
  },
  {
    text: '间歇泉',
    link: '/geyser/index',
    items: [
      { text: '高压气库', link: '/geyser/gyqk' },
      { text: '高压液库', link: '/geyser/gyyk' },
      { text: '气泉开发', link: '/geyser/qiquan' },
      { text: '液泉开发', link: '/geyser/yequan' },
      { text: '火山开发', link: '/geyser/huoshan' },
      { text: '金属火山', link: '/geyser/jinshu' },
      { text: '原油开发', link: '/geyser/yuanyou' }
    ]
  },
  {
    text: '种植',
    link: '/crop/index',
    items: [
      { text: '基础作物', link: '/crop/jichu' },
      { text: '毛刺花', link: '/crop/maocihua' },
      { text: '冰霜小麦', link: '/crop/xiaomai' },
      { text: '火椒藤', link: '/crop/huojiao' },
      { text: '花蜜', link: '/crop/huami' },
      { text: '动捕草', link: '/crop/dbc' }
    ]
  },
  {
    text: '养殖',
    link: '/farm/index',
    items: [
      { text: '鱼类', link: '/farm/fish', tag: '水生' },
      { text: '海马', link: '/farm/haima', tag: '水生' },
      { text: '彩斑鱿', link: '/farm/caibanyou', tag: '水生' },
      { text: '矿甲龟', link: '/farm/kuangjiagui', tag: '水生' },
      { text: '壁虎', link: '/farm/bihu' },
      { text: '哈奇', link: '/farm/haqi' },
      { text: '树鼠', link: '/farm/shushu' },
      { text: '飞鱼', link: '/farm/feiyu' },
      { text: '抛壳蟹', link: '/farm/pangxie' },
      { text: '浮游生物', link: '/farm/fuyou' }
    ]
  }
]
