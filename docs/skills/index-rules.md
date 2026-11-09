# Skills Reference

This directory contains reference standards for documenting this project.

## Overview Page Rules
- Big title (h1) — 分类名称
- English tag below: inline code like `` `Crops` ``, `` `Farming` ``, `` `Geysers` ``, `` `Guide` ``, `` `Building` ``, `` `Temperature Control` ``
- Directory listing: bullet list of sub-doc links (no subheading required)
- Other content follows as needed

## Index Pages
All category overview pages (index.md) must follow:
1. `# 分类名`
2. `` `EnglishTag` ``
3. Bullet list of sub-documents (no level-2 heading like "目录" or "子文档")
4. Additional content (tables/descriptions) as needed

## Total Count
- 8/9 feature cards on home, full rows when possible
- Prioritize big categories first

## Navigation
- `docs/.vitepress/menu.ts` 只配置 nav 分组：建造 / 控温 / 间歇泉 / 种植 / 养殖
- 「指南」不在 menu/nav 中，只在 `sidebar.ts` 里配置
- 分类分组不设「总览」入口；总览页由 sidebar 指南组 / 首页 / links 进入
- "其他" 不进 nav，只在 sidebar 显示

## Sidebar Rules
- Sidebar is path-scoped via an object in `docs/.vitepress/sidebar.ts`
- Always-visible common group: 指南 + 其他
- 指南 group in sidebar = 总览 + 各分类总览入口（建造/控温/间歇泉/种植/养殖）
- Order is always: 指南 → 动态分组 → 其他
- Grouping:
  - 建造 / 控温 / 间歇泉 → `/build/`, `/tc/`, `/geyser/`
  - 种植 / 养殖 → `/crop/`, `/farm/`
  - 其他页面（`/guide/`, `/skills/`）只显示 指南 + 其他
- 参考链接页位于 `/guide/links`，由「其他」组进入
