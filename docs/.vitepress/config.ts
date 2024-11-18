import { defineConfig } from "vitepress";

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: "Vue3-Typescript 学习文档",
  description: "详细学习Vue3-Typescript 的指南",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "vitepress项目启动", link: "/vitepressstart/" },
      { text: "组和函数", link: "/vueuse/" },
      { text: "前端", link: "/前端/Vue.js3 学习笔记.md" },
      { text: "后端", link: "/后端/JDK 8-JDK 17新特性.md" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/wangrj1111/vue3-ts-docs" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "开始",
          collapsible: true,
          items: [
            { text: "介绍", link: "/guide/" },
            {
              text: "安装",
              link: "/guide/installation",
            },
          ],
        },
        {
          text: "vue基础",
          collapsible: true,
          items: [
            {
              text: "声明式渲染",
              link: "/guide/concepts/DeclarativeRendering",
            },
            {
              text: "插值语法",
              link: "/guide/concepts/interpolationSyntax",
            },
            {
              text: "基础属性绑定",
              link: "/guide/concepts/AttributeBinding",
            },
            {
              text: "class和styles绑定",
              link: "/guide/concepts/classAndStyleBinding",
            },
            {
              text: "自定绑定",
              link: "/guide/concepts/CustomBinding",
            },
          ],
        },
      ],
      "/vitepressstart/": [
        {
          text: "项目启动",
          collapsible: true,
          items: [
            {
              text: "初始化及配置",
              link: "/vitepressstart/",
            },
            {
              text: "项目配置",
              link: "/vitepressstart/edit",
            },
            {
              text: "推送和发布",
              link: "/vitepressstart/push",
            },
          ],
        },
      ],
      "/vueuse/": [
        {
          text: "vuese 组件",
          collapsible: true,
          items: [
            {
              text: "安装以及示例",
              link: "/vueuse/",
            },
            {
              text: "useCounter",
              link: "/vueuse/useCounter",
            },
          ],
        },
      ],
      "/前端/": [
        {
          text: "Vue.js3 学习笔记",
          collapsible: true,
          items: [
            {
              text: "Vue.js3学习笔记",
              link: "/前端/Vue.js3 学习笔记.md",
            },
            {
              text: "创建vitepress项目步骤",
              link: "/前端/创建vitepress项目步骤.md",
            },
            {
              text: "前端工程化规范",
              link: "/前端/前端工程化规范.md",
            },
          ],
        },
      ],
      "/后端/": [
        {
          text: "JDK 8-JDK 17新特性",
          collapsible: true,
          items: [
            {
              text: "JDK 8-JDK 17新特性",
              link: "/后端/JDK 8-JDK 17新特性.md",
            },
            {
              text: "Spring Boot 基本介绍",
              link: "/后端/Spring Boot 基本介绍.md",
            },
            {
              text: "第二周学习笔记",
              link: "/后端/第二周学习笔记.md",
            },
          ],
        },
      ],
    },
    footer: {
      message: "用心学习 Vue 3和 TypeScript!",
      copyright: "Copyright© 2024 wangrj",
    },
  },
});
