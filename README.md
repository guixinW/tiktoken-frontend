# TikTok 前端克隆版

这是一个使用 React、TypeScript 和 Vite 构建的 TikTok 前端克隆项目。它实现了一个可无限滚动的视频信息流、视频播放、用户互动（点赞、评论）以及一个视频上传界面。

### 组件 (Components)

- **`VideoPlayer.tsx`**：渲染单个视频，处理自动播放/暂停、点赞、评论、分享等操作。
- **`CommentPanel.tsx`**：侧边滑出评论面板，展示并提交评论。
- **`CommentItem.tsx`**：渲染单条评论。
- **`VideoUpload.tsx`**：视频上传组件，包含预览和表单。
- **`Navigation.tsx`**：侧边导航栏，页面切换。
- **`LoadingSpinner.tsx`**：加载中动画组件。
- **`Login.tsx`**：登录弹窗组件，支持简单的用户名密码登录。
- **视频上传**：提供一个专门的页面用于上传新视频。
- **响应式设计**：适配移动和桌面设备。

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

- **`Feed.tsx`**: 应用的主页，负责展示和管理 `VideoPlayer` 组件组成的视频流。
- **`Upload.tsx`**: 包含 `VideoUpload` 组件，为用户提供上传新视频的界面。

### 组件 (Components)

- **`VideoPlayer.tsx`**: 渲染单个视频的核心组件。它处理视频的自动播放/暂停逻辑，并展示点赞、评论、分享等操作按钮。
- **`CommentPanel.tsx`**: 一个从侧边滑出的面板，用于展示当前视频的所有评论。用户可以在此提交新评论。
- **`CommentItem.tsx`**: 在 `CommentPanel` 中渲染单条评论的组件。
- **`VideoUpload.tsx`**: 包含视频预览和表单的组件，处理文件选择和上传逻辑。
- **`Navigation.tsx`**: 应用底部的导航栏，用于在不同页面之间切换。

- [Node.js](https://nodejs.org/) (建议使用 v18 或更高版本)
- npm / yarn / pnpm
  ```

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
