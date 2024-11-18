# Vue.js3 学习笔记

[TOC]
## 创建应用 

执行以下命令生成项目模板

```bash
npm create vite@latest
```

如以下步骤

![image-20240912181229343](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20240912181229343.png)

或者用` vue-typeScript` 模板命令一键安装

```bash
npm create vite@latest vue-basic -- --template vue-ts
```

进入然后进入项目后安装依赖

```bash
npm install
```

启动服务器

```bash
npm run dev
```

以上是用`vite`创建`vue`项目并启动的基本步骤

## 声明式渲染

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

## 插值语法

输入创建一个`vue`文件 输入`vbase`选中如图代码生成基本模板

![image-20240912183144418](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20240912183144418.png)



```html
<template>
    <div>
   <!--显示变量  -->
      <p>当前用户：{{userName}</p>
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

插值语法改变插入变量 效果如下

## 属性绑定

### 基础属性绑定

```html
//通过v-bind 绑定一个一个变量到HTML的属性上 
<button v-bind:disabled="isDisabled">点击我</button>
//由于v-bind 常用 所以Vue 提供了他的语法糖 
<button :disabled="isDisbaled">点击我</button> 
//两者效果一致
```

### 绑定多个属性

![image-20240912190104460](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20240912190104460.png)

`v-bind`绑定整个对象到按钮上 其中的3个属性会自动绑定到HTML属性中

### 绑定class和style

通过`v-bind`可以灵活的绑定`class`和`style`   可以灵活的切换多个类名或样式

代码如下：

![image-20240912190925028](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20240912190925028.png)

![image-20240912192525162](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20240912192525162.png)

其中实现了动态绑定`class` 和`style`   

### 动态自定义绑定

![image-20240912193920565](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20240912193920565.png)

![image-20240912193937479](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20240912193937479.png)

通过在父组件中使用 `difineProps`声明自定义属性 采用驼峰式命名 

在子组件中引入父组件并通过`v-bind`绑定属性

效果图如下：

![image-20240912194348269](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20240912194348269.png)

## 状态与方法

### 状态

- 状态是组件内部存储和管理的数据，它的变化会驱动视图的更新。

- 在`Vue 3`中，状态可以通过`ref`或`reactive`进行定义，使其具备响应式能力。

- `ref`适用于基本数据类型（如number、string、boolean）以及简单对象，通过`.value`访问或修改值。

- `reactive`适用于复杂对象（如数组、对象），将整个对象转换为响应式的

  

使用`ref`定义简单状态

示例代码

![image-20240912194720224](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20240912194720224.png)

使用`reactive`定义复杂对象状态

示例代码

![image-20240912194736587](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20240912194736587.png)

### 方法

- 方法是组件中用来处理业务逻辑、响应事件或对状态进行修改的函数。
- 在`Vue 3`的`<script setup>`中，方法通常以函数的形式定义，可以直接修改组件的状态或执行其他操作。
- 结合`TypeScript`，可以为方法指定参数和返回值的类型，确保代码的安全性和可读性。



### **状态与方法的结合使用**

- 状态和方法是紧密结合的，方法通过操作状态来改变组件的行为或显示的内容。
- 例如，定义一个计数器状态和增加计数的方法，通过点击按钮触发方法来更新状态。

示例代码

![image-20240912200048892](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20240912200048892.png)

## 条件渲染与列表渲染

### 条件渲染

- 条件渲染是根据某些条件决定是否渲染某个DOM元素。

- `Vue`中使用`v-if`、`v-else-if`、`v-else`指令来实现条件渲染。

  

  示例代码：

```html
<template>
    <div>
        <p v-if="userAge < 18">未成年用户</p>
        <p v-else-if="userAge >= 18 && userAge < 60">成年用户</p>
        <p v-else>老年用户</p>
        <button @click="increaseAge">增加年龄</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 定义年龄状态
const userAge = ref<number>(16)

// 定义增加年龄的方法
const increaseAge =  () => {
    userAge.value++;
}

</script>

<style scoped>

</style>
```



### **列表渲染**

- 列表渲染是根据数组或对象的数据，动态渲染一组元素。

- `Vue`通过`v-for`指令来实现列表渲染，用于遍历数组、对象或指定的次数，生成对应的元素

  

  示例

  代码：

  ```html
  <!--获取对象数组 -->
  <template>
      <ul>
          <li v-for="(user , index) in users" :key="user.id">
              {{ user.name }} - {{ user.age }}
          </li>
      </ul>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // 定义一个用户对象数组状态
  interface User {
      id : number ,
      name : string , 
      age : number
  }
  
  const users = ref<User[]>([
      { id : 1 , name : '张三' , age : 25},
      { id : 2 , name : '李四' , age : 30},
      { id : 3 , name : '王五' , age : 35},
  ])
  </script>
  
  <style scoped>
  
  </style>
  ```

  ```html
  <!--使用索引渲染列表 -->
  <template>
    <ul>
      <li v-for="(item, index) in items":key="index">
          {{index+1}}. {{item}}
      </li>
    </ul>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  //定义一个字符串数组状态
  const items=ref<string[]>(['HTML','CSS','JavaScript'])
  </script>
  
  <style scoped>
  
  </style>

### 结合使用

条件渲染和列表渲染经常结合使用。可以根据某些条件决定是否渲染整个列表，或者在列表中根据不同条件渲染不同的内容

示例代码

```html
<template>
    <ul>
        <li v-for="user in users" :key="user.id">
            {{ user.name }} - 
            <span v-if="user.age >= 18">成人</span>
            <span v-else>未成年</span>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 定义一个用户对象数组状态
interface User {
    id : number ,
    name : string ,
    age : number
}

const users = ref<User[]>([
    { id : 1 , name : '张三' , age : 16},
    { id : 2 , name : '李四' , age : 20},
    { id : 3 , name : '王五' , age : 17},
])
</script>

<style scoped>

</style>
```



## **计算属性与监听器**

- **计算属性**：用于基于响应式数据派生出新的数据，具有依赖跟踪和缓存机制，只有当依赖的数据变化时才会重新计算。适用于处理复杂逻辑或基于多个状态的组合计算。

​     示例代码

```html
<template>
    <div>
        <p>年薪：{{ yearlySalary }}</p>          
    </div>
</template>

<script setup lang="ts">
import { ref , computed } from 'vue'

// 定义月薪状态
const monthlySalary = ref<number>(5000)

// 计算年薪，并使用TypeScript 显式声明返回值类型
const yearlySalary = computed<number>(() => {
    return monthlySalary.value * 12
})

</script>

<style scoped>

</style>
```



- **监听器**：用于监听响应式数据的变化，并在变化时执行特定的副作用函数。监听器可以是简单的，监听单个状态的变化，也可以是深度监听，监听对象或数组中的嵌套属性的变化。

  ```html
  <script>
    // 监听搜索关键词的变化
  watch(searchQuery,()=>{
      console.log('搜索关键词',searchQuery.value)
      })
    // 监听名和姓的变化
  watch([firstName,lastName],([newFirstName,newLastName])=>{
      console.log(`全名变为：${newFirstName}${newLastName}`)
  })
     	// 立即执行监听器
  watch(userName, (newName) => { console.log(`用户名为：${newName}`) }, { immediate: true })
  </script>
  ```

  

## **事件处理**

- `Vue.js`中的事件处理用于捕获和响应DOM事件，通过`v-on`指令（简写为`@`）绑定事件。

```html
<template>
    <div>
        <h2>当前用户：{{ userName }}</h2>
        <button @click="changeName">变换</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const userName = ref<string>('杨三')
const changeName = () => {
    userName.value = '钻石杨老五'
}
</script>
```

- 支持事件修饰符，如`.prevent`、`.stop`、`.once`等，用于简化事件处理逻辑，如阻止默认行为、阻止事件冒泡或确保事件处理器只执行一次。

  示例代码

   (阻止默认提交)

  ```html
  <template>
      <div>
          <form @submit.prevent="handleSubmit">
              <input v-model="inputValue" placeholder="输入内容" /><button type="submit">提交</button>
          </form>
      </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  // 定义输入框状态
  const inputValue = ref<string>('')
  
  // 提交事件处理函数
  const handleSubmit = (): void => { console.log(`提交的内容：${inputValue.value}`) }
  </script>
  ```

  （阻止冒泡）

  ```html
  <template>
      <div @click="handleOuterClick">
          <button @click.stop="handleButtonClick">点击按钮</button>
      </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  // 处理外层 div 的点击事件
  const handleOuterClick = (): void => { alert('点击了外层 div') }
  
  // 处理按钮的点击事件 
  const handleButtonClick = (): void => { alert('点击了按钮') }
  </script>
  ```

  (按钮点击仅触发一次)

  ```html
  <template>
      <button @click.once="handleClickOnce">点击一次</button>
  
      <p>{{ message }}</p>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  //定义消息状态
  const message = ref<string>('按钮还未点击')
  
  //事件处理函数
  const handleClickOnce = (): void => { message.value = '按钮已被点击' }
  </script>
  ```

  

- 支持按键修饰符，如`.enter`、`.tab`、`.delete`等，用于处理键盘事件。

  示例代码

  （监听enter键）

  ```html
  <template>
      <div>
          <input @keyup.enter="submitInput" v-model="inputValue" placeholder="按下回⻋提交" />
          <p>{{ message }}</p>
      </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  // 定义输入框内容和提交信息
  const inputValue = ref<string>('')
  const message = ref<string>('尚未提交')
  
  // 处理回⻋键提交
  const submitInput = (): void => { message.value = `已提交：${inputValue.value}` }
  </script>
  ```

## **表单双向绑定**

- `v-model`指令用于创建双向绑定，允许用户通过表单控件修改`Vue`组件中的数据，同时组件数据的变化也会同步更新到表单控件。

```html
<template>
  <!--绑定文本输入框-->
  <input v-model="name" placeholder="请输入姓名"/>
  <p>您输入的姓名是：{{name}}</p>
  <!--绑定复选框-->
  <inputtype="checkbox"v-model="isChecked"/>勾选此项
  <p>复选框状态：{{isChecked?'已勾选':'未勾选'}}</p>
   <!--绑定单选框-->
  <input type="radio"v-model="selectedOption" value="A"/>选项 A
  <input type="radio"v-model="selectedOption" value="B"/>选项 B
  <p>您选择的选项是：{{selectedOption}}</p>
  <!--绑定下拉框-->
  <select v-model="selectedItem">
    <optiond isabledvalue="">请选择一个选项</option>
    <option value="苹果">苹果</option>
    <option value="香蕉">香蕉</option>
    <option value="橘子">橘子</option>
  </select>
   <p>您选择的水果是：{{selectedItem}}</p>
</template>
<script set up lang="ts">
  import {ref} from'vue'
  
// 定义双向绑定的状态
  const name=ref<string>('')// 初始值为空字符串
  
  // 定义复选框的绑定状态
  const isChecked=ref<boolean>(false)// 初始状态为未勾选
  
  // 定义单选框的选项状态
  const selectedOption=ref<string>('A')// 初始值为选项 A
  
  // 定义下拉菜单的选项状态
  const selectedItem=ref<string>('')// 初始值为空字符串
</script>
```



- 支持修饰符，如`.lazy`、`.number`和`.trim`，用于控制双向绑定的行为，如延迟同步、自动类型转换、删除首尾空格等。

```html
<template>
    <div>
        <input v-model.lazy="name" placeholder="请输入姓名" />
        <p>您输入的姓名是：{{ name }}</p>
        <input v-model.number="age" type="number" placeholder="请输入年龄"/>
        <p>您的年龄是：{{age}}</p>
        <input v-model.trim="username"placeholder="请输入用户名"/>
        <p>您的用户名是：{{username}}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 定义姓名的状态
const name = ref<string>('')// 初始值为空字符串

// 定义年龄的状态
const age=ref<number|null>(null)

// 定义用户名的状态
const username=ref<string>('')// 初始值为空字符串
</script>

```

效果如视频所示

![My animation2](https://s19.aconvert.com/convert/p3r68-cdx67/8fw63-jyb59.gif)



- 支持在自定义组件中使用`v-model`，通过`modelValue`属性和`update:modelValue`事件实现双向绑定。

## **DOM操作**

- `Vue.js`通常通过模板语法和响应式数据绑定自动更新DOM，但在需要手动操作DOM元素时，可以使用`ref`和生命周期钩子来实现。

  示例代码

  ```html
  <template>
      <div>
          <input ref="inputElement" type="text" placeholder="聚焦在此" />
          <button @click="focusInput">点击聚焦输入框</button>
      </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // 获取 DOM 元素的引用
  const inputElement = ref<HTMLInputElement | null>(null)
  
  // 操作 DOM 元素
  const focusInput = () => {
      if (inputElement.value) {
          inputElement.value.focus()// 让输入框获得焦点
      }
  }
  </script>
  ```

  

- `ref`用于获取DOM元素的引用，可以在生命周期钩子中操作DOM元素，如在组件挂载后（`onMounted`）或更新后（`onUpdated`）进行操作。

示例代码
```html
<template>
    <div ref="box" class="box">我是一个方块</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 获取 DOM 元素引用
const box = ref<HTMLDivElement | null>(null)

// 在组件挂载后操作 DOM
onMounted(() => {
    if (box.value) {
        box.value.style.backgroundColor = 'lightblue'// 修改方块的背景色
    }
})
</script>

<style scoped>
box {
    width: 100px;
    height: 100px;
    background-color: gray;
}
</style>
```





## github仓库展示

![image-20240912214804478](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20240912214804478.png)

## 学习小结

在本次的学习中，在课堂上学会了用`vite`创建`vue`项目的起步操作,`vue3` 中最基本的一些操作，包括声明式渲染，属性绑定，条件渲染等，在这次学习中明显的感觉到`vue3`比`vue2`的更加便捷，逻辑上更加合理，代码更加简洁，所以还要与时俱进。所以还是要与时俱进。还得多多练习代码，代码还是不够熟练，有时候可能忘记下一步该怎么做，技术还是不到位，还得努力学习