---
map:
  path: /icon
realPath: src/package/icon/index.zh-CN.md
---

# Icon

<demo src="./demo/basic.vue"
  language="vue"
  title="Icon"
  desc="Icon"
  >
</demo>

## props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| type | 指定iconfont上的class | string  | - | |
| class | 自定义class | string | - |  |
| style | 自定义style | string | - |  |

## useIcon

```ts
interface ExtraCommonProps { 
  class, 
  attrs, 
  props, 
  on, 
  style 
}
const ScIconComponent = useIcon({} as ExtraCommonProps)
```

用于生成自定义源的Icon组件
