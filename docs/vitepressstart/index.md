# 初始化项目

在终端执行`npm init vitepress@latest vue3-ts-docs`  初始化`VitePress` 项目

## 安装`npm`执行项目

1.进入`VitePress` 项目，执行`npm install` 安装 `npm`

2.执行`npm run dev`  执行

## 修改配置文件

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