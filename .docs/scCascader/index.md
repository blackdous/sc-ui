---
map:
  path: /scCascader
realPath: src/package/scCascader/index.zh-CN.md
---

# 新scCascader

## 组件类型

## 基础组件

<demo src="./demo/basic.vue"
  language="vue"
  title="基础组件"
  >
</demo>

## options字节点disabled

<demo src="./demo/disabled.vue"
  language="vue"
  title="options字节点disabled"
  >
</demo>

## 可清除allowClear

<demo src="./demo/allowClear.vue"
  language="vue"
  title="可清除allowClear"
  >
</demo>

## 仅展示最后一级

<demo src="./demo/last.vue"
  language="vue"
  title="仅展示最后一级"
  >
</demo>

## 多选

<demo src="./demo/multiple.vue"
  language="vue"
  title="多选"
  >
</demo>

## prefixIcon

<demo src="./demo/prefix.vue"
  language="vue"
  title="prefixIcon"
  >
</demo>

## 懒加载

<demo src="./demo/lazy.vue"
  language="vue"
  title="懒加载"
  >
</demo>

- 通过`lazy`开启动态加载
- `lazyload`方法有两个参数，第一个参数`node`为当前点击的节点，第二个`resolve`为数据加载完成的回调(必须调用)。

## 可搜索

<demo src="./demo/search.vue"
  language="vue"
  title="可搜索"
  >
</demo>

- 通过添加filterable来启用过滤。
- 接受一个函数，第一个参数是节点node，第二个参数是搜索关键词keyword，通过返回布尔值表示是否命中。

## 自定义节点内容

<demo src="./demo/customNode.vue"
  language="vue"
  title="自定义节点内容"
  >
</demo>

## ScCascaderNew 整体 Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 | 版本 |
| --- | --- | --- | --- | --- | --- |
| v-model | 选中项绑定值 | string / number / object  | 'click' | - | |
| options | 选项的数据源， value 和 label 可以通过 CascaderProps 自定义. | object | - | - | |
| props | 配置选项, 请参阅下面 CascaderProps 表。 | object | false | - | |
| size | 尺寸 | string | 'large'、 'default' 、 'small' | - | |
| disabled | 是否禁用 | boolean | false | - | |
| clearable | 是否支持清空选项 | boolean | - | - | |
| allowClear | 是否支持清空选项 | boolean | - | - | |
| show-all-levels | 输入框中是否显示选中值的完整路径 | boolean | true | - | |
| collapse-tags | 多选模式下是否折叠Tag | boolean | - | - | |
| collapse-tags-tooltip | 当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true | boolean | false | - | |
| separator | 用于分隔选项的字符 | string | '/' | - | |
| filterable | 该选项是否可以被搜索 | boolean | - | - | |
| filter-method | 自定义搜索逻辑，第一个参数是node，第二个参数是keyword，返回的布尔值表示是否保留该选项 | Function | - | - | |
| debounce | 搜索关键词正在输入时的去抖延迟，单位为毫秒 | boolean | - | - | |
| before-filter | 过滤函数调用前，所要调用的钩子函数，该函数接收要过滤的值作为参数。 如果该函数的返回值是 false 或者是一个被拒绝的 Promise，那么接下来的过滤逻辑便不会执行。 | Function | - | - | |
| popper-class | 弹出内容的自定义类名 | string | - | - | |
| popupClassName | 弹出内容的自定义类名 | string | - | - | |
| popupStyle | 自定义浮层样式 | object | - | - | |
| popupPlacement | 浮层预设位置：bottomLeft bottomRight topLeft topRight | Enum | - | - | |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | Function(triggerNode) | () => document.body | - | |

## Events

| 事件名  |   说明    |   类型    |
| --- | --- | --- |
| change | 当绑定值变化时触发的事件 | `Function: (value: CascaderValue) => void`  |
| expand-change | 当展开节点发生变化时触发 | `Function: (value: CascaderValue) => void`  |
| blur | 当失去焦点时触发 | `Function: (event: FocusEvent) => void` |
| visible-change | 下拉框出现/隐藏时触发 | `Function: (value: boolean) => void`  |
| remove-tag | 在多选模式下，移除Tag时触发 | `Function: (value: CascaderNode['valueByOption']) => void`  |

## Slots

| 插槽名  |   说明    |   作用域    |
| --- | --- | --- |
| default | 自定义备选项的节点内容，分别为当前节点的 Node 对象和数据 | `object:{ node: any, data: any }` |
| empty | 无匹配选项时的内容 | - |
| prefixIcon | 新增组件前缀icon | - |

## Exposes

| 事件名  |   说明    |   类型    |
| --- | --- | --- |
| getCheckedNodes | 获取一个当前选中节点的数组。(仅仅是传单) 是否只返回叶选中的节点，默认是 false | `Function: (leafOnly: boolean) => CascaderNode[]` | -  |
| cascaderPanelRef | cascader 面板的 ref | `object: ComputedRef<any>`  |
| togglePopperVisible | 切换 popper 可见状态 | `Function: (visible?: boolean) => void`  |

## Props 字段参数

| 参数 | 说明 | 类型 | 默认值 | 可选值 | 版本 |
| --- | --- | --- | --- | --- | --- |
| expandTrigger| 次级菜单的展开方式 | enum  | 'click'、'hover' | - | |
| multiple | 是否多选 | boolean  | false | - | |
| checkStrictly | 是否严格的遵守父子节点不互相关联 | boolean  | false | - | |
| emitPath | 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值 | boolean  | true | - | |
| lazy | 是否动态加载子节点，需与 lazyLoad 方法结合使用 | boolean  | false | - | |
| lazyLoad | 加载动态数据的方法，仅在 lazy 为 true 时有效 | `Function: (node: Node, resolve: Resolve) => void`  | false | - | |
| label | 指定选项标签为选项对象的某个属性值 | string  | 'label' | - | |
| value | 指定选项标签为选项对象的某个属性值 | string  | 'value' | - | |
| children | 指定选项的子选项为选项对象的某个属性值 | string  | 'children' | - | |
| disabled | 指定选项的子选项为选项对象的某个属性值 | string  | 'disabled' | - | |
| leaf | 指定选项的叶子节点的标志位为选项对象的某个属性值 | string  | 'leaf' | - | |
| hoverThreshold | hover 时展开菜单的灵敏度阈值 | number  | 500 | - | |
