---
map:
  path: /cascaderPanel
---

# 级联面板

## 基础面板

<demo src="./demo/basic.vue"
  language="vue"
  title="基础使用方法"
>
</demo>

## expandTrigger

<demo src="./demo/expandTrigger.vue"
  language="vue"
  title="使用hover触发展开子项"
>
</demo>

## 多选

<demo src="./demo/multiple.vue"
  language="vue"
  title="多选"
>
</demo>

## 多选 + checkStrictly(父子节点无关联)

<demo src="./demo/checkStrictly.vue"
  language="vue"
  title="多选 + checkStrictly(父子节点无关联)"
>
</demo>

## 异步加载子节点

<demo src="./demo/async.vue"
  language="vue"
  title="异步加载子节点"
>
</demo>

## 自定义内容

<demo src="./demo/slot.vue"
  language="vue"
  title="自定义内容"
>
</demo>

## 通过expose方法获取节点

<demo src="./demo/expose.vue"
  language="vue"
  title="通过expose方法获取节点"
>
</demo>

## props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| value / v-model | 选中项绑定值 | string/number/object  | - | |
| options | 选项的数据源， value 和 label 可以通过 CascaderProps 自定义. | object | - |  |
| props | 配置选项, 请参阅下面 CascaderPanelProps 表。 | object | - |  |

```ts
export interface OptionsItem {
  value: string | number,
  label: string,
  children: OptionsItem[],
  disabled: boolean,
  [key:string]: nay
}
```

## CascaderPanelProps

| 参数 | 说明 | 类型 | 默认值 | 可选值 | 版本 |
| --- | --- | --- | --- | --- | --- |
| expandTrigger | 次级菜单的展开方式 | enum  | 'click' | 'click' \ 'hover' | |
| multiple | 是否多选 | boolean | false | - | |
| checkStrictly | 是否严格的遵守父子节点不互相关联 | boolean | false | - | |
| emitPath | 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值 | boolean | true | - | |
| lazy | 是否动态加载子节点，需与 lazyLoad 方法结合使用 | boolean | false | - | |
| lazyLoad | 加载动态数据的方法，仅在 lazy 为 true 时有效 | Function | - | - | |
| value | 指定选项的值为选项对象的某个属性值 | string | 'value' | - | |
| label | 指定选项标签为选项对象的某个属性值 | string | 'label' | - | |
| children | 指定选项的子选项为选项对象的某个属性值 | string | 'children' | - | |
| disabled | 指定选项的禁用为选项对象的某个属性值 | string | 'disabled' | - | |
| leaf | 指定选项的叶子节点的标志位为选项对象的某个属性值 | string | 'leaf' | - | |

## expose 方法

| 方法名 | 说明 | 参数 | 版本 |
| --- | --- | --- | --- |
| getCheckedNodes | 获取一个当前选中节点的数组。是否只返回叶选中的节点，默认是 false | leafOnly:boolean  | |
| getCheckedNodeKeys | 获取一个当前选中节点的keys数组。是否只返回叶选中的节点，默认是 false | leafOnly:boolean  | |
| clearCheckedNodes | 清空选中的节点 | -  | |

## slots

| 名字 | 说明 | 参数 | 版本 |
| --- | --- | --- | --- |
| default | 下级节点的自定义内容，它们分别是当前节点对象和节点数据。 |  `object:{ node: any, data: any }`  | |
