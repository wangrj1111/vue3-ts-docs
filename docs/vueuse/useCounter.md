# useCounter的用法

# 基本用法
```js
import { useCounter } from '@vueuse/core'
const { count, inc, dec, set, reset } = useCounter()
```

# 类型声明
```ts
export interface UseCounterOptions {
  min?: number
  max?: number
}
/**
 * Basic counter with utility functions.
 *
 * @see https://vueuse.org/useCounter
 * @param [initialValue]
 * @param options
 */
export declare function useCounter(
  initialValue?: MaybeRef<number>,
  options?: UseCounterOptions,
): {
  count: Ref<number, MaybeRef<number>>
  inc: (delta?: number) => number
  dec: (delta?: number) => number
  get: () => number
  set: (val: number) => number
  reset: (val?: number) => number
}
```