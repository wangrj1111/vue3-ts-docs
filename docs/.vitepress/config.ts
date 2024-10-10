import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs 
export default defineConfig({
    title:"Vue3-Typescript 学习文档",
    description:"详细学习Vue3-Typescript 的指南",
    themeConfig:{
        nav:[
            {text:"首页",link:"/"},
            {text:"指南",link:"/guide/"},
            {text:"vitepress项目启动",link:"/vitepressstart/"},
            {text:"组件",link:"/components/"},
            {text:"组和函数",link:"/vueuse/"},
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
                ],
              },
              {
                text: "vue基础",
                collapsible: true,
                items: [
                  {
                    text: "声明式渲染",
                    link: "/guide/concepts/DeclarativeRendering"
                  },
                  {
                    text: "插值语法",
                    link: "/guide/concepts/interpolationSyntax"
                  },
                  {
                    text:"基础属性绑定",
                    link: "/guide/concepts/AttributeBinding"
                  },
                  {
                    text:"class和styles绑定",
                    link: "/guide/concepts/classAndStyleBinding"
                  },
                  {
                    text:"自定绑定",
                    link: "/guide/concepts/CustomBinding"
                  }
                ]
              },
            ],
            "/vitepressstart/":[{
              text:"项目启动",
              collapsible: true,
              items: [
                {
                  text: "初始化及配置",
                  link: "/vitepressstart/"
                },
                {
                  text: "项目配置",
                  link: "/vitepressstart/edit"
                },
                {
                  text: "推送和发布",
                  link: "/vitepressstart/push"
                },
              ]
            }
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
            ],
            "/vueuse/":[{
              text:"vuese 组件",
              collapsible: true,
              items: [
                {
                  text: "安装以及示例",
                  link: "/vueuse/"
                },
                {
                  text: "useCounter",
                  link: "/vueuse/useCounter"
                },
              ]
            }
            ],
        },
        footer: {
            message: "用心学习 Vue 3和 TypeScript!",
            copyright: "Copyright© 2024 wangrj"
          }
    }
})