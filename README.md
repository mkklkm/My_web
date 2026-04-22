# My_web

这是一个个人展示型网页项目，定位是「AI 工程 / 产品设计 / 前端展示」结合的个人主页。  
页面整体风格参考 iPhone 官网的视觉方向，强调冷白、银灰、系统蓝、高级留白、玻璃质感卡片和克制的动态效果。

在线访问地址：

- `GitHub Pages`: [https://mkklkm.github.io/my_web/](https://mkklkm.github.io/My_web/)

## 这个网页是做什么的

这个网页主要用于展示个人能力和项目气质，不是传统的简历列表页，也不是普通模板站。  
它更接近一个产品发布页，核心目标是：

- 展示个人在 AI 工程、产品交付、前端体验上的综合能力
- 用更强的视觉语言传达“专业、克制、偏高端”的页面感受
- 作为个人主页、作品展示页、名片页或对外介绍页使用

## 页面包含什么内容

当前网页主要包含 3 个区域：

### 1. 首页首屏 `Hero`

首屏用于建立第一印象，主要内容包括：

- 顶部导航
- 大标题与说明文案
- 两个行动按钮
- 右侧主展示卡片
- 3 个数据型小卡片

这一屏重点强调“产品感”和“发布页感”，不是简单介绍文字堆叠。

### 2. 第二屏 `Skills`

第二屏是能力展示区，主要用卡片方式展示内容，例如：

- Realtime Runtime
- Agent Workflows
- Interface Motion
- Launch Discipline

这一屏不是单纯列技能名称，而是把能力拆成更接近产品能力模块的表达方式。

### 3. 联系区 `Contact`

联系区用于承接页面入口，展示可联系的方式，方便从展示页过渡到实际沟通。

## 用什么技术写的

这个项目使用的是：

- `React 18`
- `Vite 5`
- `JavaScript (JSX)`
- `CSS`

没有引入额外的动画库，当前动画和交互主要由原生能力实现：

- `CSS animation`
- `CSS transition`
- `IntersectionObserver`
- `requestAnimationFrame`
- `CSS variables`

## 代码结构

主要目录结构如下：

```text
my_web/
├─ src/
│  ├─ components/
│  │  └─ TiltCard.jsx
│  ├─ hooks/
│  │  └─ useInViewToggle.js
│  ├─ sections/
│  │  ├─ HeroSection.jsx
│  │  ├─ SkillsSection.jsx
│  │  └─ ContactSection.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ styles.css
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md
```

## 页面逻辑是怎么做的

### 1. 页面结构逻辑

页面由 `App.jsx` 统一组合：

- `HeroSection`
- `SkillsSection`
- `ContactSection`

顶部导航通过锚点跳转到不同区域。

### 2. 动效触发逻辑

页面中的标题和文案不是一开始全部展示出来，而是通过 `useInViewToggle` 配合 `IntersectionObserver` 判断元素是否进入视口：

- 进入视口时，触发标题和文字的 reveal 动效
- 离开后再次进入，可以重新触发

这让页面不是“一次性动画”，而是可重复感知的。

### 3. 卡片倾斜逻辑

项目里有一个可复用的卡片组件：`TiltCard.jsx`

它的逻辑是：

- 监听鼠标在卡片上的移动
- 计算鼠标在卡片内的相对位置
- 把位置转换成 `rotateX / rotateY`
- 通过 `CSS variables` 更新卡片的 3D 倾斜角度
- 同时根据鼠标位置更新卡片表面的高光位置
- 使用 `requestAnimationFrame` 降低频繁更新的开销

所以卡片会有“跟随鼠标倾斜”的效果，视觉上更接近高端产品展示页。

### 4. 视觉风格逻辑

整体视觉设计围绕下面几个关键词展开：

- iPhone 官网风格
- 冷白和银灰主背景
- 系统蓝作为强调色
- 大留白
- 玻璃感和金属感卡片
- 轻微但持续的动态效果

页面没有走夸张霓虹或重色块路线，而是偏克制、精致、偏产品发布页。

## 如何本地运行

进入项目目录后执行：

```bash
npm install
npm run dev
```

如果你在 Windows PowerShell 下遇到脚本策略限制，也可以使用：

```powershell
npm.cmd install
npm.cmd run dev
```

开发完成后可以构建：

```bash
npm run build
```

本地预览：

```bash
npm run preview
```

## 部署方式

这个项目已经配置了 `GitHub Pages` 自动部署。

部署方式为：

- 推送代码到 `main`
- GitHub Actions 自动执行构建
- 构建结果自动发布到 GitHub Pages

Vite 的 `base` 已配置为：

```js
base: '/my_web/'
```

因此它可以正确部署在仓库 Pages 路径下。

## 补充说明

- `231.html` 是这个项目早期保留的单文件静态版本
- 当前主要维护版本是 React 重构后的版本
- 如果后续继续扩展，可以继续增加更多页面区块、项目展示、时间线、案例页或英文版本

