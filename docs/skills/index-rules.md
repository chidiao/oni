# Skills Reference

技能参考

触发：技能参考、文档规范、写作规范

This directory contains reference standards for documenting this project.

## Overview Page Rules

总览页规则

触发：总览页、分类首页、标题、英文标签

- Big title (h1) — 分类名称
- English tag below: inline code like `` `Crops` ``, `` `Farming` ``, `` `Geysers` ``, `` `Guide` ``, `` `Building` ``, `` `Temperature Control` ``
- Directory listing: bullet list of sub-doc links (no subheading required)
- Other content follows as needed

## Index Pages

索引页规则

触发：索引页、index.md、子文档、链接列表

All category overview pages (index.md) must follow:
1. `# 分类名`
2. `` `EnglishTag` ``
3. Bullet list of sub-documents (no level-2 heading like "目录" or "子文档")
4. Additional content (tables/descriptions) as needed

## Total Count

首页卡片数量

触发：首页、features、卡片、数量、满行

- 8/9 feature cards on home, full rows when possible
- Prioritize big categories first

## Navigation

导航

触发：nav、顶部导航、分组、菜单

- `docs/.vitepress/menu.ts` 只配置 nav 分组：建造 / 控温 / 间歇泉 / 种植 / 养殖
- 「指南」不在 menu/nav 中，只在 `sidebar.ts` 里配置
- 分类分组不设「总览」入口；总览页由 sidebar 指南组 / 首页 / links 进入
- "其他" 不进 nav，只在 sidebar 显示

## Sidebar Rules

侧边栏规则

触发：sidebar、侧边栏、分组、路径

- Sidebar is path-scoped via an object in `docs/.vitepress/sidebar.ts`
- Always-visible common group: 指南 + 其他
- 指南 group in sidebar = 总览 + 各分类总览入口（建造/控温/间歇泉/种植/养殖）
- Order is always: 指南 → 动态分组 → 其他
- Grouping:
  - 建造 / 控温 / 间歇泉 → `/build/`, `/tc/`, `/geyser/`
  - 种植 / 养殖 → `/crop/`, `/farm/`
  - 其他页面（`/guide/`, `/skills/`）只显示 指南 + 其他
- 参考链接页位于 `/guide/links`，由「其他」组进入

## Image Archiving

图片归档

触发：未引用图片、图片页、/guide/images、归档、死链、清理

- 本规则只作用于「未被引用的图片」和 `/guide/images` 展示页，不影响其他文档及其图片
- 未被引用的图片统一移到 `imgs/` 根目录，不留在子目录
- 未引用图片由 `/guide/images`「图片」页展示（`logo.png` 除外）
- 展示页小标题用中文，不带扩展名、不带序号
- 同一组仅序号不同的图片（如 `guandao1.jpg`、`guandao2.jpg`）共用一个中文小标题
- 死链清理：当图片被其他文档引用（通常已移入子目录）或文件已不存在时，从 `/guide/images` 删除该图片引用及其小标题
