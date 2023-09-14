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

## labelSeparator

<demo src="./demo/slot.vue"
  language="labelSeparator"
  title="labelSeparator"
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
| inputNumberOptions      | ScInputNumberProps、Array(ScInputNumberProps)            | `{ max: 255, min: 0 }` |  -  |  配置所有Input，或者配置当个输入框Input |
| needDefault      | boolean            | true |  -  |  是否需要自动填充`0` |
| copyDisabled      | boolean            | false |  -  |  粘贴是否填充disabled中的值 |

```js
// InputNumberOptions 继承 ScInputNumberProps 基础上新增 tooltipDes、tooltipTrigger参数
interface InputNumberOptions {
  tooltipDes: string | vnode,
  tooltipTrigger: string | ['hover', 'focus']
}
```
<!-- | parseType      | string              | 'ipv4' |  'ipv4'、‘ipv6’     |  切换默认值`...`、`......` | -->

## 事件

| 事件名称 | 说明                                 | 回调参数    |
| -------- | ------------------------------------ | ----------- |
| change   | 点击清除按钮时触发 | function(e) |

## slots

| 名称 | 说明                                 |
| -------- | ------------------------------------ |
| labelSeparator   | 用于替换默认链接InputNumber |
