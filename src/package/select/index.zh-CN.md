---
map:
  path: /select
---

# Select 选择器

## 组件类型

### 单选选择器

<demo src="./demo/basic.vue"
  language="vue"
  title="单选选择器"
  >
</demo>

## 搜索框

<demo src="./demo/search.vue"
  language="vue"
  title="搜索框"
  >
</demo>

## 组件大小

<demo src="./demo/size.vue"
  language="vue"
  title="组件大小"
  >
</demo>

## 带tooltip

<demo src="./demo/tooltip.vue"
  language="vue"
  title="带tooltip"
  >
</demo>

## 标签选择器状态

<demo src="./demo/checkbox.vue"
  language="vue"
  title="标签选择器状态"
  >
</demo>

## PrefixIcon slot

<demo src="./demo/prefix.vue"
  language="vue"
  title="PrefixIcon slot"
  >
</demo>

## Api

除 参考官方 [Select 配置](https://2x.antdv.com/components/select-cn#API)外，扩展以下参数


| 属性               | 类型                                                      | 默认值  | 可选值 | 说明                     |
| ------------------ | --------------------------------------------------------- | ------- | ------ | ------------------------ |
| optionMode      | string                                              | -  |  `checkbox`      |  如果使用`optionMode`属性 `#dropdownRender` slot 将无效|
| prefixIcon      | slot                                            | -  |  -      |  支持自定义slot传入，通过`template='prefixIcon'` 来使用|
| widthSize      | string                                            | `x`  |  `'l', 'xs', 'x', 'md', 'xl'`      |  控制select 宽度|
| tooltip      | boolean                                            | true  |  -     |  文字长处最大宽度出现。。。,是否显示tooltip显示 |
| infoTooltip      | string                                            | -  |  -     |  是否显示提示信息按钮;有提示内容时显示 |
| tooltipAlign      | string                                            | 'right'  |  'left'/'right'   |  提示框显示在左侧或者右侧 |
| isAddTooltipScrollHeight      | boolean                                            | true  |  -     |  tooltip 显示位置是否增加滚动条高度；防止fixed 定位时 错位问题 |

## 事件

事件与官方 [Select 事件](https://2x.antdv.com/components/select-cn#API) 相同

| 事件名称 | 说明                                 | 回调参数    |
| -------- | ------------------------------------ | ----------- |
| allowClear   | 点击清除按钮时触发 | function(e) |

## expose

| 事件名称 | 说明                                 | 回调参数    |
| -------- | ------------------------------------ | ----------- |
|  computePrefixWidth  | 计算prefix 传入元素宽度 | function(e) |
