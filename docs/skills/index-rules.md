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
- Use `docs/.vitepress/menu.ts` for nav/sidebar composition
- Group structure, item order matters
- New categories added as groups with 总览 + sub-items
- Non-nav items placed in "其他" group (e.g. 参考链接, 技能参考)
