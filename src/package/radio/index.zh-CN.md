---
map:
  path: /radio
---

# Radio 单选框

在 (antd-design-vue/radio)[https://antdv.com/components/radio-cn] 基础开发的，**其他api 都相同**

## 组件类型

### 基础单选框

<demo src="./demo/radiobtn.vue"
  language="vue"
  title="基础单选框"
  >
</demo>

### 按钮单选框

<demo src="./demo/basic.vue"
  language="vue"
  title="按钮单选框"
  >
</demo>

### 单选组合框

<demo src="./demo/radiogroup.vue"
  language="vue"
  title="按钮单选框"
  >
</demo>

## 组件状态

<demo src="./demo/radiostatus.vue"
  language="vue"
  title="组件状态"
  >
</demo>

### 新增 styleMode 属性

<demo src="./demo/styleMode.vue"
  language="vue"
  title="通过scLine 修改了样式"
  desc="新增了 styleMode, 默认值为 scLine"
  >
</demo>

### 新增 tooltip 属性

<demo src="./demo/tooltip.vue"
  language="vue"
  title="tooltip"
  desc="新增了 tooltip, 默认值为 scLine"
  >
</demo>

## ScRadioGroup 新增属性

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| style-mode | string | - | 'scLine' | styleMode 可选值为 'scLine'|
| triggerMultiple | boolean | false | - | 是否多次触发change事件 |
| options | 'Array[TooltipButtonProps]' | - | - | 要展示radioGroup |
| size | string | - | 'large' | 设置组件大小 |

```ts
  export interface TooltipButtonProps {
    toolOptions?: TooltipProps,
    tooltipDes?: string,
    label?: string,
    value?: string | number,
    disabled?: boolean,
    overlayClassName?: string
  }
```
