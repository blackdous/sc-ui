---
map:
  path: /table
realPath: src/package/table/index.zh-CN.md
---

# table 表格

基于[ant-design-vue table](https://2x.antdv.com/components/table-cn)基础上二次封装的table组件

## 自定义Action列

<demo src="./demo/action.vue"
  language="vue"
  title="自定义Action列"
  desc="自定义Action列"
  >
</demo>

## 基础组件

<demo src="./demo/basic.vue"
  language="vue"
  title="基础表格table表格"
  desc="基础表格"
  >
</demo>

### 新增相关APi

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| type | { componentName: 'copy' or 'ellipsis', props: { text: string } } 用于设置组件内部提供的组件 | Object | 无 | |
| pagination | [pagination](https://2x.antdv.com/components/pagination/) | object | 无 | |
| scroll | { x: string, y: string } 设定滚动高度、宽度 默认滚动高度为 460px | Object | 无 |  |
| loading | true & false 设定loading状态 | boolean | false |  |
| locale | 'zh'&&'en' 控制表格中英文切换 | string | false |  |

### 新增slots

- #renderEmpty 用于无数据是空数据

### expose 方法

- `getLoading` 获取loading状态
- `setLoading` 设置loading状态
- `setPagination` 设置分页状态
- `getPagination` 获取分页状态
- `setShowPagination`
- `getShowPagination`

### 事件

| 事件名称 | 说明   | 回调参数    |
| --- | --- | --- |
| change       | 分页、排序、筛选变化时触发  | Function(pagination, filters, sorter, { currentDataSource, fetchParams }) |



## 带刷新&筛选column的组件

**支持自定义solt组件`#tableActive`**

<demo src="./demo/basicCol.vue"
  language="vue"
  title="table头部操作按钮"
  desc="table头部操作按钮"
  >
</demo>

### table API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| activeOptions | 用于配置否显示`reload`、`columnDialog` 组件 | Object | 无 | |

参数如下


```js
const activeOptions = {
    reload: {
      text: '刷新',
      show: true,
      showTooltip: true,
      action: Function
    },
    columnDialog: {
      text: '定制列',
      show: true,
      showTooltip: true
    }
  }
```

reload参数中的`action`方法，参数为`fetchParams`


## 自定义Filter组件

<demo src="./demo/filter.vue"
  language="vue"
  title="自定义Filter组件"
  desc="通过slots: { filterDropdown: 'filterDropdown', filterIcon: 'filterIcon' }, filterList: list, 配置筛选组件和数据"
  >
</demo>

### table API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| customFilter | true & false 设定是否开启自定义筛选框 | boolean | false |  |

### column API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| slots | 内置组件: `{filterDropdown: 'filterDropdown', filterIcon: 'filterIcon'}` | Object | - |  |
| filterList | 自定义筛选数组，支持 自定义方法(返回数组、参数`{propsRef, fetchParams}`)、数组 | Array | - |  |

**不传上述参数就可以使用默认自带的筛选组件**


## 带头部操作的表格

<demo src="./demo/header.vue"
  language="vue"
  title="table头部操作按钮"
  desc="table头部操作按钮"
  >
</demo>

### CreateBtn组件

**组件支持`solt`传入(`createButton`)**

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| show | 是否显示 | boolean | 无 | |
| text | 展示文本 | string | 无 | |
| isDisabled | 是否禁用 | boolean | 无 |  |
| action | 创建方法 | Fn | wu |  |

#### 事件

| 事件名称 | 说明   | 回调参数    |
| --- | --- | --- |
| createClick | 点击按钮回调事件 | Function(fetchPrams) |

### mutilpBtns 组件

**组件支持`solt`传入(`mutilpBtns`)**

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| show | 是否显示 | boolean | 无 | |
| mutilpList | 展示文本 | ButtonType[] | 无 | |

```ts
interface ButtonType {
  tooltipDis?: boolean,
  toolOptions?: TooltipProps,
  tooltipDes?: string,
  label?: string,
  value?: string | number,
  disabled?: boolean | ((...args: any) => boolean),
  overlayClassName?: string,
  action?: string | ((...args: any) => void)
}
```

`disabled`支持函数，并且必须返回`boolean`，如果使用函数参数为`当前table参数 + tableref`。 
`action`如果为`string`可以自己监听`@mutilpChange` 事件，会回传当前点击的按钮信息；如果`action`为可执行函数参数为`当前table参数 + tableref`

#### 事件


| 事件名称 | 说明   | 回调参数    |
| --- | --- | --- |
| mutilpChange | 点击按钮回调事件 | Function(fetchPrams) |


### serach 组件

**组件支持`solt`传入(`serach`)**

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| show | 是否显示 | boolean | 无 | |
| showSelect | 是否显示select框 | boolean | 无 | |
| typeList | 展示文本 | ButtonProps[] | 无 | |
| action | 点击搜索icon执行函数 | string && fn | 无 | |

```ts
  export interface ButtonProps {
    tooltipDis?: boolean,
    toolOptions?: TooltipProps,
    tooltipDes?: string,
    label?: string,
    value?: string | number,
    disabled?: boolean | (fetchPrams:any) = boolean,
    action?: string | (fetchPrams:any) = void
  }
```

`typeLise` 支持数组、普通函数、promise函数
`select`组件选中，执行`action`方法，参数`fetachParams`; 选中事件可以监听`selectChange`事件
`action`事件，点击函数执行函数，也可以通过`serachClick`事件监听

#### 事件

| 事件名称 | 说明   | 回调参数    |
| --- | --- | --- |
| selectChange | 搜索组件中的select组件选中时的回调 | Function(fetchPrams) |
| serachClick | 搜索组件点击搜索icon时的回调 | Function(fetchPrams) |


## 汇总

<demo src="./demo/all.vue"
  language="vue"
  title="table头部操作按钮"
  desc="table头部操作按钮"
  >
</demo>
