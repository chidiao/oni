import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = [
  {
    text: "指南",
    items: [{ text: "液门", link: "/liquid" }],
  },
  {
    text: "养殖",
    items: [
      { text: "养鱼", link: "/animal/fish" },
      { text: "壁虎", link: "/animal/gecko" },
    ],
  },
  {
    text: "其他",
    items: [{ text: "参考链接", link: "/links" }],
  },
];