---
map:
  path: /link
realPath: src/package/link/index.zh-CN.md
---

# Link 链接

按照时间顺序或倒序规则的展示信息内容。

## 组件类型

## 基础文字链接

<demo src="./demo/basic.vue"
  language="vue"
  title="基础文字链接"
  >
</demo>

## 下划线文字链接

<demo src="./demo/underline.vue"
  language="vue"
  title="下划线文字链接"
  >
</demo>

## 前置图标文字链接

<demo src="./demo/prepend.vue"
  language="vue"
  title="前置图标文字链接"
  >
</demo>

## 后置图标文字链接

<demo src="./demo/append.vue"
  language="vue"
  title="后置图标文字链接"
  >
</demo>

## 组件状态

<demo src="./demo/status.vue"
  language="vue"
  title="组件状态"
  >
</demo>

## 组件大小

<demo src="./demo/size.vue"
  language="vue"
  title="组件大小"
  >
</demo>

## href && handle

<demo src="./demo/href.vue"
  language="vue"
  title="href && handle"
  >
</demo>

## props

| 属性         | 类型                         | 默认值  | 可选值 | 说明                     |
| ------------------ | --------------------------- | ------- | ------ | ------------------------ |
| size      | string     | medium |  medium、small、large   |  设置Link 组件大小 |
| type      | string     | default |  'primary', 'success', 'warning', 'info', 'danger', 'default'   |  设置tag样式模式 |
| underline      | boolean     | -  | - |  是否显示下划线 |
| disabled      | boolean     | false |  -   |  组件禁用状态 |
| href      | string     | -  |  -   |  原生 href 属性 |
| icon      | string / Component     | -  |  -   |  图标组件 |

## Slots

| 名字 | 说明 | 参数 | 版本 |
| --- | --- | --- | --- |
| default | 自定义默认内容 |  -  | - |
| icon | 自定义图标组件 |  -  | - |

