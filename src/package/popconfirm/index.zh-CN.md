---
map:
  path: /popconfirm
---

# Popconfirm 气泡确认框

气泡确认框通常用于不会造成严重后果的二次确认场景，其会在点击元素上弹出浮层进行提示确认。气泡确认框没有蒙层，点击确认框以外的区域即可关闭。

## 组件类型

### 基础气泡确认框

<demo src="./demo/basic.vue"
  language="vue"
  title="基础气泡确认框"
  >
</demo>

### 带图标气泡确认框

<demo src="./demo/status.vue"
  language="vue"
  title="带图标气泡确认框"
  >
</demo>

### 带描述气泡确认框

<demo src="./demo/describe.vue"
  language="vue"
  title="带描述气泡确认框"
  >
</demo>

## 组件出现位置

<demo src="./demo/placement.vue"
  language="vue"
  title="组件出现位置"
  >
</demo>

## okBeforeFun函数、

<demo src="./demo/beforeFunc.vue"
  language="vue"
  title="okBeforeFun函数、"
  >
</demo>


## Api

除 参考官方 [Popconfirm 配置](https://2x.antdv.com/components/popconfirm-cn#API)外，扩展以下参数

| 属性               | 类型                                                      | 默认值  | 可选值 | 说明                     |
| ------------------ | --------------------------------------------------------- | ------- | ------ | ------------------------ |
| type      | string                                              | -  |  'primary', 'success', 'warning', 'error', 'default'      | 用于操作icon更改演示 |
| isShowIcon      | boolean                                              |  true  |  -      | 是否显示props.icon；不影响 #icon 传入的 icon |
| describe      | string                                              | -  |  -      | 显示描述性文字 |
| okBeforeFun      | function                                              | -  |  -      | 用于点击确认按钮前执行，返回boolean，用于关闭pop；支持异步函数 |
| cancelBeforeFun      | function                                              | -  |  -      | 用于点击取消按钮前执行，返回boolean，用于关闭；支持异步函数  |
