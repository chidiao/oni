import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = [
  {
    text: "指南",
    items: [
      { text: "气体", link: "/guide/gas" },
      { text: "液体", link: "/guide/liquid" },
      { text: "液门", link: "/guide/door" },
    ],
  },
  {
    text: "养殖",
    items: [
      { text: "养殖总览", link: "/animal/index" },
      { text: "养鱼", link: "/animal/fish" },
      { text: "壁虎", link: "/animal/gecko" },
    ],
  },
  {
    text: "其他",
    items: [{ text: "参考链接", link: "/links" }],
  },
];