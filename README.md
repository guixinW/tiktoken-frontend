# TikTok 前端克隆版

这是一个使用 React、TypeScript 和 Vite 构建的 TikTok 前端克隆项目。它实现了一个可无限滚动的视频信息流、视频播放、用户互动（点赞、评论）以及一个视频上传界面。

## ✨ 功能特性

-   **垂直滚动视频流**：像原生应用一样上下滑动切换视频。
-   **自动播放**：当视频进入视口时自动开始播放。
-   **用户互动**：实现视频点赞、评论和分享功能。
-   **评论面板**：从侧边滑出的面板，用于查看和发表评论。
-   **视频上传**：提供一个专门的页面用于上传新视频。
-   **响应式设计**：适配移动和桌面设备。

## 🛠️ 技术栈

-   **React**：用于构建用户界面的核心库。
-   **TypeScript**：为项目提供静态类型检查。
-   **Vite**：现代化的前端构建工具，提供极速的开发体验。
-   **Lucide React**：提供简洁、一致的图标。
-   **CSS**：用于自定义组件和页面样式。

## 📂 项目结构

项目的主要逻辑位于 `src` 目录下，其结构如下：

```
src/
├── assets/         # 静态资源，如 SVG 图标
├── components/     # 可重用的 React 组件
├── pages/          # 应用的主要页面
├── types/          # TypeScript 类型定义
└── utils/          # 工具函数和模拟数据
```

### 页面 (Pages)

-   **`Feed.tsx`**: 应用的主页，负责展示和管理 `VideoPlayer` 组件组成的视频流。
-   **`Upload.tsx`**: 包含 `VideoUpload` 组件，为用户提供上传新视频的界面。

### 组件 (Components)

-   **`VideoPlayer.tsx`**: 渲染单个视频的核心组件。它处理视频的自动播放/暂停逻辑，并展示点赞、评论、分享等操作按钮。
-   **`CommentPanel.tsx`**: 一个从侧边滑出的面板，用于展示当前视频的所有评论。用户可以在此提交新评论。
-   **`CommentItem.tsx`**: 在 `CommentPanel` 中渲染单条评论的组件。
-   **`VideoUpload.tsx`**: 包含视频预览和表单的组件，处理文件选择和上传逻辑。
-   **`Navigation.tsx`**: 应用底部的导航栏，用于在不同页面之间切换。

## 🚀 快速开始

### 环境要求

-   [Node.js](https://nodejs.org/) (建议使用 v18 或更高版本)
-   npm / yarn / pnpm

### 安装与运行

1.  **克隆仓库**
    ```bash
    git clone https://github.com/guixinW/tiktoken-frontend.git
    cd tiktoken-frontend
    ```

2.  **安装依赖**
    ```bash
    npm install
    ```

3.  **启动开发服务器**
    ```bash
    npm run dev
    ```

    应用将在 `http://localhost:5173` (或另一个可用端口) 上运行。