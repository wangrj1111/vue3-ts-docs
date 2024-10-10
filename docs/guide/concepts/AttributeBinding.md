# 基础属性绑定

```html
//通过v-bind 绑定一个一个变量到HTML的属性上 
<button v-bind:disabled="isDisabled">点击我</button>
//由于v-bind 常用 所以Vue 提供了他的语法糖 
<button :disabled="isDisbaled">点击我</button> 
//两者效果一致
```

# 绑定多个属性
```vue
<template>
    <div>
<!-- 绑定isDisabled属性 -->
     <button :disabled="isDisabled">点击</button>
     <!-- 绑定多个属性 -->
     <button v-bind="buttonAttrs">点击我</button>
     <img :src="URL"/>
    </div>
</template>

<script setup lang="ts">
import {ref,reactive} from 'vue'
const isDisabled=ref<boolean>(false)
// 定义一个包含多个属性的对象
const buttonAttrs= reactive({
    disabled:false,
    title:'按钮已禁用'
    ,id:'unique-button',})

const URL=ref<string>('https://tse4-mm.cn.bing.net/th/id/OIP-C.6ui-HETN38ItODNSjpy9lgHaQd?rs=1&pid=ImgDetMain')
</script>
```
`v-bind`绑定整个对象到按钮上 其中的3个属性会自动绑定到HTML属性中