---
map:
  path: /formIp
realPath: src/package/formIp/index.zh-CN.md
---

# Ip 输入框

## Ipv4

<demo src="./demo/ipv4.vue"
  language="vue"
  title="Ipv4"
  >
</demo>

## props

| 属性名              | 类型                               | 默认值  | 可选值 | 说明                          |
| ------------------ |----------------------------------- | ------- | ------ | ------------------------ |
| value      | string                 | -  |  `...`      |  用于绑定输入框 |
| disabled      | boolean                 | - |  -     |  用于控制是否禁用 |
| disabledIndex      | array[number]                 | - |  -     |  根据下标控制单个输入框disabled状态 |
| parseSeparator      | string              | '.' |  -     |  传入value，通过split('parseSeparator') 切割数组 |
| joinSeparator      | string              | '.' |  -     |  输入完成，返回数据拼接字符 |
| inputNumberOptions      | ScInputNumberProps、Array(ScInputNumberProps)            | `{ max: 255, min: 0, precision: 0, showControl: false, autoFocus: false }` |  -  |  配置所有InputNumber，或者配置当个输入框InputNumber |
<!-- | parseType      | string              | 'ipv4' |  'ipv4'、‘ipv6’     |  切换默认值`...`、`......` | -->

## 事件

| 事件名称 | 说明                                 | 回调参数    |
| -------- | ------------------------------------ | ----------- |
| change   | 点击清除按钮时触发 | function(e) |

## slots

| 名称 | 说明                                 |
| -------- | ------------------------------------ |
| labelSeparator   | 用于替换默认链接InputNumber |
