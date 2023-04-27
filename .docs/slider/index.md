---
map:
  path: /slider
realPath: src/package/slider/index.zh-CN.md
---

# Slider 滑动条

滑块（滑动型输入器），是帮助用户在连续或间断的区间内，通过滑动来选择合适数值（一个数值或范围数值）的控件。

- 如果`max`、`min`、`value`值都为异步赋值，请保证先传入`max`、`min`值；再传入`value`；不然`value`值会被重置为`min`值

## 组件类型

<demo src="./demo/basic.vue"
  language="vue"
  title="使用showMinMaxMarker='true'; 必须存在min、max字段并且不使用自定义marks"
  >
</demo>

## disabled

<demo src="./demo/disabled.vue"
  language="vue"
  title="disabled=true"
  >
</demo>

## 带tooltip

**data为数组时**，需要指定`data-value`和`data-label`为同一个`key`

<demo src="./demo/tooltip.vue"
  language="vue"
  title="使用infos数据结构；customMaker='true' 显示默认自定义marker组件"
  >
</demo>

**data为对象时**

<demo src="./demo/objectData.vue"
  language="vue"
  title="使用infos数据结构；customMaker='true' 显示默认自定义marker组件"
  >
</demo>

## API

`props`请参考[vue-slider-component/props](https://nightcatsama.github.io/vue-slider-component/#/api/props)；只标注新增API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| wrapperWidth | 滚动条宽度 |  [Number, String] | 480 | -|
| value | 滚动的值 |  [Number, String] | 0 | |
| step | inputNumber 刻度值 |  [Number, String] | 10 | |
| min | 最小值 |  [Number] | 0 | |
| max | 最大值 |  [Number] | 100 | |
| dotWidth | 拖拽模块的最宽度 |  [Number, String] | 0 | |
| isShowNextUnit | 是否在组件最后显示单位 |  Boolean | - | |
| unit | 单位；用于拖拽块的内容显示 | String | 'Mbps' | |
| infos | 用于默认自定义 `tooltip`、`marker`的数据 | Infos | - | |
| customMarker | 是否显示自定义`marker`; 结合`infos`数据使用  | Boolean | - | |
| showMinMaxMarker | 是否显示最大值、最小值的marker;**与customMarker**冲突  | Boolean | - | |
| inputNumberOptions | 是否显示`InputNumber`组件; 请在`value`值为`Number`类型是使用  | InputNumberOptions | - | |
| dotCircle | 是否启用dot为原点交互 |  boolean | false | - |

```ts
export interface Info {
  bgColor?: string;
  desc?: string;
  color?: string;
  Icon?: string | VNode;
  dotLabel?: string;
  label?: string;
  marker?: {
    markerColor?: string;
    icon?: string | VNode;
    label?: string;
  };
}
export interface Infos {
  [key:string]: Info
}

export interface InputNumberOptions {
  placeholder?: ''
}

```

## 事件

| 事件名称 | 说明                 | 回调参数                | 版本 |
| -------- | -------------------- | ----------------------- | ---- |
| change    | 拖拽、输入时触发 | (e: val) => void | -    |
