# 绑定class和style

通过`v-bind`可以灵活的绑定`class`和`style`   可以灵活的切换多个类名或样式

代码如下：

```vue
<template>
    <div>
      <p :class="pClass">这是一段文字</p>
      <button @click="toggleClass">切换样式</button>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const isHighLight= ref<boolean>(false)

const pClass= ref <{ [key:string] :boolean}>({
    isHighLight:isHighLight.value,
    normal:!isHighLight.value
})
const toggleClass=() =>{    
    isHighLight.value=!isHighLight.value
 pClass.value={
    isHighLight:isHighLight.value,
    normal:!isHighLight.value
 }
}
</script>

<style scoped>
.isHighLight{
    color: red;
}
.normal{
    color: black;
}
</style>
```

```vue
<template>
    <div>
      <p :style="paragraphStyle">这是一段文字</p>
      <button @click="toggleStyle">切换样式</button>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const isBold=ref<boolean>(false)
  const paragraphStyle=ref<{
    fontWeight:string;
    color:string;
  }>({
    fontWeight:'normal',
    color:'black'
  })

  //切换样式函数
  const toggleStyle= () =>{
    isBold.value=!isBold.value
    paragraphStyle.value={
      fontWeight:isBold.value?'bold':'normal',
      color:isBold.value?'blue':'black',
    }
  }
</script>

<style scoped>

</style>
```

