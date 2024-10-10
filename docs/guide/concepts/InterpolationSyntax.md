# 插值语法

输入创建一个`vue`文件 输入`vbase` 自动生成如下代码
```vue
<template>
        <div>
        </div>
</template>
<script setup lang="ts"> 

</script>

<style scoped>

</style>
```

具体步骤如下
```html
<template>
    <div>
   <!--显示变量  -->
      <p>当前用户：{{userName}}</p>
    </div>
</template>

<script setup lang="ts">
 //第一步 引入ref
import {ref} from 'vue'
  //第二步 定义一个响应式状态
  const userName=ref<string>('张三')
</script>

<style scoped>

</style>
```


        

