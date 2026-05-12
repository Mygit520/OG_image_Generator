# OG Image Generator — 实施总结

## 项目概述

基于 `adv_prd.md` 产品需求文档，完整实现了一个 **OG Image（Open Graph 图片）在线生成工具**。用户可实时自定义社交媒体预览卡片，一键导出 1200x630 PNG 图片，完全在浏览器端运行，无需服务器成本。

---

## 技术栈

| 技术 | 用途 |
|------|------|
| Next.js 16 (App Router) + TypeScript | 框架，SSR/SSG，SEO 友好 |
| Tailwind CSS v4 | 样式系统 |
| Shadcn UI (@base-ui/react) | UI 组件库 |
| `html-to-image` | 纯前端 PNG 导出（零服务器成本） |
| `next/font/google` | 字体自托管（Inter、Noto Serif、JetBrains Mono） |

---

## 项目结构

```
D:\adv\
├── public/
│   ├── ads.txt              # Google AdSense 发布者声明
│   └── robots.txt           # 爬虫指令
├── src/
│   ├── app/
│   │   ├── layout.tsx        # 根布局：字体注入、metadata、AdSense 脚本
│   │   ├── page.tsx          # 首页：导航栏 + 工具区 + SEO 内容
│   │   ├── globals.css       # Tailwind + Shadcn 主题变量
│   │   ├── privacy/
│   │   │   └── page.tsx      # 隐私政策页面
│   │   └── terms/
│   │       └── page.tsx      # 服务条款页面
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # 顶部导航栏
│   │   │   └── Footer.tsx        # 页脚（含隐私/条款链接）
│   │   ├── ads/
│   │   │   ├── AdBanner.tsx      # 可复用广告位组件（含开发占位符）
│   │   │   └── AdSenseScript.tsx # AdSense 外部脚本加载器
│   │   ├── og-image/
│   │   │   ├── ControlPanel.tsx  # 左侧控制台：输入框 + 选择器 + 下载按钮
│   │   │   ├── GradientPicker.tsx # 8 种渐变色块选择器
│   │   │   ├── FontSelector.tsx  # 字体切换（Sans / Serif / Mono）
│   │   │   ├── LayoutToggle.tsx  # 布局切换（居中 / 左对齐）
│   │   │   └── DownloadButton.tsx # "Download PNG" 按钮（含加载态）
│   │   ├── preview/
│   │   │   ├── PreviewCanvas.tsx # 1200x630 OG 卡片渲染（forwardRef）
│   │   │   └── PreviewPanel.tsx  # 响应式缩放包装器
│   │   └── content/
│   │       ├── HowToUse.tsx      # 3 步使用指南
│   │       ├── WhatIsOG.tsx      # OG Image 概念科普
│   │       └── FAQ.tsx           # 手风琴常见问题
│   ├── hooks/
│   │   ├── useOGImageState.ts    # useReducer 集中管理 6 个配置字段
│   │   └── usePreviewScale.ts    # ResizeObserver + requestAnimationFrame 缩放计算
│   ├── lib/
│   │   ├── types.ts              # TypeScript 类型定义
│   │   ├── constants.ts          # 8 种渐变预设、3 种字体选项、默认配置
│   │   └── export.ts             # html-to-image 导出封装（含字体就绪等待）
│   └── styles/
│       └── fonts.ts              # next/font/google 字体定义
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 已完成的页面

| 路由 | 状态码 | 说明 |
|------|--------|------|
| `/` | 200 | 主工具页面 |
| `/privacy` | 200 | 隐私政策（AdSense 合规必需） |
| `/terms` | 200 | 服务条款（免责声明） |
| `/ads.txt` | 200 | AdSense 发布者声明文件 |
| `/robots.txt` | 200 | 爬虫指令文件 |

---

## 核心功能实现

### 1. 实时预览
- 左侧控制台修改标题、副标题、域名
- 右侧 1200x630 卡片实时反映所有更改
- 8 种渐变色预设（Ocean Blue、Sunset、Mint、Peach、Midnight、Forest、Berry、Noir）
- 3 种字体（Sans Serif / Serif / Monospace）
- 2 种布局（居中 / 左对齐）

### 2. 响应式缩放
- 桌面端：左右分栏布局
- 移动端：上下堆叠（预览在上，控制在下方）
- 预览画布通过 `CSS transform: scale()` 自动缩放适应屏幕
- **导出的图片始终保持 1200x630 原生分辨率**

### 3. PNG 导出
- 使用 `html-to-image` 库的 `toPng` 方法
- `document.fonts.ready` 确保自定义字体加载完毕后再导出
- 100ms 延迟保证布局稳定
- `pixelRatio: 1` 保证精确 1200x630 输出

### 4. 广告位预留
- **Slot A**：顶部 Responsive Leaderboard 横幅（Navbar 下方）
- **Slot B**：预览区下方 Rectangle 广告位
- `AdBanner` 通用组件：通过 `NEXT_PUBLIC_ADSENSE_PUB_ID` 环境变量控制
- 未配置 AdSense ID 时显示灰色占位框，不影响开发布局

### 5. SEO 内容区
- **How to Use**：3 步卡片式使用指南
- **What is OG Image**：Open Graph 概念科普文本
- **FAQ**：手风琴式 6 条常见问题解答
- 这些内容确保页面有足够文字内容，满足 Google AdSense 审核要求

### 6. 合规页面
- **隐私政策**：声明不收集用户数据、告知第三方广告 Cookie、提供退出个性化广告链接
- **服务条款**：免责声明、知识产权说明、责任限制

---

## 关键架构决策

| 决策 | 理由 |
|------|------|
| `useReducer` 而非多个 `useState` | 6 个关联字段集中管理，支持通用 `onUpdateField` prop |
| `next/font/google` 自托管字体 | 构建时下载字体，保证 `html-to-image` 导出前字体已就绪 |
| CSS 变量字体模式 | 动态切换字体只需修改 `style={{ fontFamily: 'var(--font-...)' }}` |
| `transform: scale()` 预览缩放 | DOM 元素保持 1200x630，`html-to-image` 始终捕获原生尺寸 |
| `ResizeObserver` 计算缩放比 | 精确获取容器宽度，配合 `requestAnimationFrame` 防抖 |
| `forwardRef` + `useImperativeHandle` | 将 PreviewCanvas 的 DOM ref 透传给 page.tsx 用于导出 |
| AdBanner 开发占位符 | 无 AdSense 凭据时保持布局完整，灰度边框标识广告位 |

---

## 运行方式

```bash
# 安装依赖
npm install

# 开发模式
npm run dev
# 访问 http://localhost:3000

# 生产构建
npm run build
npm start
```

## 配置 AdSense（可选）

在 `.env.local` 中设置：

```env
NEXT_PUBLIC_ADSENSE_PUB_ID=ca-pub-xxxxxxxxxxxxxxxx
NEXT_PUBLIC_AD_SLOT_TOP=1234567890
NEXT_PUBLIC_AD_SLOT_BOTTOM=0987654321
```

不设置时，广告位显示灰色占位框，不影响功能使用。

---

## 待部署

项目可直接部署至 Vercel（免费层级）：

1. 将代码推送至 GitHub 仓库
2. 在 Vercel 中导入项目
3. 可选：绑定自定义域名
4. 可选：配置 AdSense 环境变量

---

*实施日期：2026-05-12*
