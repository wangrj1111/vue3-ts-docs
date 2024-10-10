# 安装
```bash
npm i @vueuse/core
```
# 使用示例

只需从中导入您需要的函数`@vueuse/core`
```vue
<script setup>
import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'

// tracks mouse position
const { x, y } = useMouse()

// is user prefers dark theme
const isDark = usePreferredDark()

// persist state in localStorage
const store = useLocalStorage(
  'my-storage',
  {
    name: 'Apple',
    color: 'red',
  },
)
</script>
```