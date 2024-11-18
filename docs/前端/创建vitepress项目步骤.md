### 初始化项目

在终端执行`npm init vitepress@latest vue3-ts-docs`  初始化`VitePress` 项目

### 安装`npm`执行项目

1.进入`VitePress` 项目，执行`npm install` 安装 `npm`

2.执行`npm run dev`  执行

### 修改配置文件

```json
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "serve": "vitepress serve docs",
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
```

执行`npm run docs:build  `进行打包

### 编写`md`文件

在`docs`文件中创建如`guide`,`api`等文件夹每个文件夹中都要有`index.md`是首页

### 修改项目首页

要在`index.md`中添加`layout:home`  才会作为首页以`---`开头`---`结尾

编写`hero`中的`name`,`text`,`tagline`,`image`,`actions`等在编写首页

![image-20241008193106827](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20241008193106827.png)

编写的是这一块

`features`中`-`开头为一个小模块其中有`icon`,`title`,`detail`等属性



![image-20241008193451728](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20241008193451728.png)



效果如图

### 编写样式

先执行`npm i vitepress-theme-demoblock` 安装`vitepress-theme-demoblock`

在`docs`下创建`theme`再创建`style`并文件夹中创建`var.css`文件来编辑hero中的标题 图片背景 按钮等的样式

示例代码：

```css
:root{
/* 标题 */
--vp-home-hero-name-color: transparent;
--vp-home-hero-name-background: linear-gradient(135deg,#5fb4cb 10%,口#13728d 100%);
/* 图标背景 */
--vp-home-hero-image-background-image: linear-gradient(135deg,m#5fb4cb 10%,口#13728d 100%);
--vp-home-hero-image-filter: blur(150px);
/* brand按钮 */
--vp-button-brand-border:#5fb4cb;
--vp-button-brand-text:#fff;
--vp-button-brand-bg:#13728d;

--vp-button-brand-hover-border: #a0d5c4;
--vp-button-brand-hover-text: #fff;
--vp-button-brand-hover-bg:#247b60;
--vp-button-brand-active-border:#F6CEEC;
}
```

并创建`index.ts`

```ts
import DefaultTheme from 'vitepress/theme'

import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

import './styles/index.css'

export default { 
    ...DefaultTheme
 }
```

### 编辑头部导航 侧边栏 尾部

在`config.ts`的`themeConfig`中编辑`nav`,`sidebar`,`footer`进行相关配置

示例代码如下供参考：

```ts
import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs 
export default defineConfig({
    title:"Vue3-Typescript 学习文档",
    description:"详细学习Vue3-Typescript 的指南",
    themeConfig:{
        nav:[
            {text:"首页",link:"/"},
            {text:"指南",link:"/guide/"},
            {text:"组件",link:"/components/"},
            {text:"API 参考",link:"/api/"},
            {text:"常见问题",link:"/faq/"}
        ],
        socialLinks:[
            {icon:"github",link:"https://github.com/wangrj1111/vue3-ts-docs"} 
        ],
        sidebar:{
            "/guide/": [
              {
                text: "开始",
                collapsible: true,
                items: [
                  {text: "介绍",link: "/guide/"},
                  {
                    text: "安装",
                    link: "/guide/installation"
                  },
                  {
                    text: "基本概念",
                    link: "/guide/concepts"
                  }
                ],
              },
            ],
            "/components/": [
              {
                text: "常用组件",
                items: [
                  {
                    text: "介绍",
                    link: "/components/"
                  },
                  {
                    text: "按钮 Button",
                    link: "/components/button"
                  },
                  {
                    text: "表单 Form",
                    link: "/components/form"
                  },
                  {
                    text: "表格 Table",
                    link: "/components/table"
                  },
                ],
              }
            ]
        },
        footer: {
            message: "用心学习 Vue 3和 TypeScript!",
            copyright: "Copyright© 2024 wangrj"
          }
    }
})
```

### 推到gitHub仓库

```shell
git add .
git commit -m "更新信息"
git remote add origin https://github.com/wangrj1111/vue3-ts-docs.git
git push -u origin main
```

### 推到vercel

![image-20241008195050178](C:\Users\wang\OneDrive\Desktop\学习\前端笔记\image-20241008195050178.png)

![image-20241008195115643](C:\Users\wang\OneDrive\Desktop\学习\前端笔记\image-20241008195115643.png)