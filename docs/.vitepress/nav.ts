import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.Config["nav"] = [
  { text: "Home", link: "/" },
  { text: "液门", link: "/liquid" },
  {
    text: "动物",
    items: [
      { text: "养鱼", link: "/animal/fish" },
      { text: "壁虎", link: "/animal/gecko" },
    ],
  },
  { text: "Links", link: "/links" },
];