# Product Requirement Document: OG Image Generator (Ad-Supported Version)

## 1. 项目愿景 (Project Vision)
开发一个高频率使用的极简 OG Image 生成工具，通过提供免费服务吸引流量，并利用 Google AdSense 广告位实现被动收入。

## 2. 核心技术栈 (Tech Stack)
- **Framework:** Next.js (App Router) - 利于 SEO。
- **Styling:** Tailwind CSS + Shadcn UI。
- **Rendering:** `html-to-image` (纯前端导出，0 服务器成本)。
- **Monetization:** Google AdSense 集成。
- **Deployment:** Vercel (免费层级即可)。

## 3. 页面结构与布局 (Layout Design)
页面需兼顾“工具易用性”与“广告可见度”：

### 3.1 顶部导航 (Navbar)
- 左侧：Logo & 产品名。
- 右侧：简短的 Github 链接或“关于我”链接。

### 3.2 主操作区 (Main Tool Area) - 左右分栏
- **左侧控制台 (Control Panel):**
    - **文本输入：** 主标题 (Title)、副标题 (Subtitle)、网站域名。
    - **样式选择：** 
        - 预设渐变色选择器（8个色块）。
        - 字体选择（预置 3 款 Google Fonts：Sans, Serif, Mono）。
        - 布局切换（居中 / 左对齐）。
    - **按钮：** “下载 PNG” (Primary)。
- **右侧实时预览 (Live Preview):**
    - 严格 1200x630 比例的卡片容器。
    - 实时反映左侧的所有修改。

### 3.3 广告位预留 (Ad Slots) - 关键
- **Slot A (顶部横幅):** 在 Navbar 下方放置一个 Responsive Leaderboard 广告位。
- **Slot B (侧边栏/下方):** 在预览区下方或控制台侧边预留一个 Rectangle 广告位。
- **Slot C (锚点广告):** 允许在移动端开启底部粘滞广告。

### 3.4 SEO 与内容区 (Content Section for AdSense)
*注意：为了通过谷歌广告审核，页面不能只有工具，必须有文字内容。*
- **How to Use:** 详细的 1, 2, 3 步使用指南。
- **What is OG Image:** 简述什么是 Open Graph 及其对 SEO 的重要性。
- **FAQ:** 常见问题解答。

## 4. 必备辅助页面 (Compliance Pages)
*Google AdSense 申请硬性要求：*
- **Privacy Policy (隐私政策):** 声明网站不收集用户数据，并告知第三方广告 Cookie 的使用。
- **Terms of Service (服务条款):** 简单的免责声明。

## 5. 核心逻辑需求 (Logic Requirements)
1. **响应式缩放：** 预览画布在手机端必须通过 `CSS Scale` 自动缩小，防止撑破布局，但导出的图片必须维持 1200x630 像素。
2. **字体加载：** 确保下载图片时，自定义字体已完成加载，避免下载出的图片字体回退。
3. **广告组件化：** 创建一个 `AdBanner` 通用组件，方便填入 Google AdSense 的 `data-ad-client` 和 `data-ad-slot`。

## 6. AI 员工执行步骤 (Execution Plan)

- **Step 1:** 初始化 Next.js 项目，配置基础 UI 布局和响应式框架。
- **Step 2:** 实现 `PreviewCanvas` 组件和数据联动逻辑（使用 React State）。
- **Step 3:** 集成 `html-to-image` 导出功能，确保在 Chrome/Safari 上均可正常下载。
- **Step 4:** 编写“SEO 文本内容区”和“隐私政策”页面，确保页面看起来内容充实。
- **Step 5:** 预留 AdSense 脚本占位符，并生成 `ads.txt` 静态文件路径。
- **Step 6:** 部署至 Vercel，并配置自定义域名。