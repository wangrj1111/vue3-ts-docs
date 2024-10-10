# 自定义基础绑定

```vue
<template>
    <div>
        <button>{{customAttr}}</button>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

//使用 difineprops 声明自定义变量
defineProps<{
    customAttr:string
}>()
</script>

<style scoped>

</style>
```

# 自定义属性绑定

具体步骤下代码：
```vue
<template>
    <div>
     <CustomButton :custom-attr="customValue">自定义按钮</CustomButton>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import CustomButton from './CustomButton.vue';

//自定义属性值
const customValue=ref<string>('我是自定义属性')
</script>

<style scoped>

</style>
```

