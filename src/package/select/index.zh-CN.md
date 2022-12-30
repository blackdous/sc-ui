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

## 组件大小

<demo src="./demo/size.vue"
  language="vue"
  title="组件大小"
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


## 事件

事件与官方 [Select 事件](https://2x.antdv.com/components/select-cn#API) 相同

| 事件名称 | 说明                                 | 回调参数    |
| -------- | ------------------------------------ | ----------- |
| allowClear   | 点击清除按钮时触发 | function(e) |
