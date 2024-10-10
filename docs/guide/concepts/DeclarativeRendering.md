# 声明式渲染
`Vue.js` 的核心之一是声明式
采用像`java`"声明变量"那样表示页面结构和绑定页面中的数据

下面是相关例子
```html
<template>
    <div>
        <h2>{{ msg }}</h2>
     <h2>{{ userName }}</h2>
     <p>2+3的结果是{{ 2+3 }}</p>
     <p>全名：{{firstName+lastName}}</p>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const msg= ref ('hello,vue')
const userName=ref<string>('张三')
console.log(userName.value)

const firstName= ref<string>('张')
const lastName= ref<string>('三')
</script>
```
在默认情况下{{}}里的只是普通文本，只有使用`createApp()`方法创建一个`vue.js`实例 并挂在应用的根元素上 时才会显示真实数据

在工程化项目中，在入口程序`main.ts`中：
```typescript
createApp(App).mount('#app')
```