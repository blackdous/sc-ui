---
map:
  path: /table
realPath: src/package/table/index.zh-CN.md
---

# table 表格

基于[ant-design-vue table](https://2x.antdv.com/components/table-cn)基础上二次封装的table组件, 部分方法是从`vben`的table上拿过来的

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
| type | { componentName: 'tdCopy'、 'tdEllipsis' 、 ’tdHandle‘ 、’tdStatus‘, props: { text: string } } 用于设置组件内部提供的组件 | Object | 无 | |
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

参数如下：

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

### multipleBtns 组件

**组件支持`solt`传入(`multipleBtns`)**

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| show | 是否显示 | boolean | 无 | |
| options | 展示文本 | ButtonType[] | 无 | |

```ts
interface ButtonType {
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
`action`如果为`string`可以自己监听`@multipleChange` 事件，会回传当前点击的按钮信息；如果`action`为可执行函数参数为`当前table参数 + tableref`

#### 事件

| 事件名称 | 说明   | 回调参数    |
| --- | --- | --- |
| multipleChange | 点击按钮回调事件 | Function(fetchPrams) |

### search 组件

**组件支持`solt`传入(`search`)**

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| show | 是否显示 | boolean | 无 | |
| showSelect | 是否显示select框 | boolean | 无 | |
| typeList | 展示文本 | ButtonProps[] | 无 | |
| action | 点击搜索icon执行函数 | string && fn | 无 | |

```ts
  export interface ButtonProps {
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
`action`事件，点击函数执行函数，也可以通过`searchClick`事件监听

#### 事件

| 事件名称 | 说明   | 回调参数    |
| --- | --- | --- |
| selectChange | 搜索组件中的select组件选中时的回调 | Function(fetchPrams) |
| searchClick | 搜索组件点击搜索icon时的回调 | Function(fetchPrams) |

## 自定义Action列

支持自定义`solt`，slot名称`#action`

<demo src="./demo/action.vue"
  language="vue"
  title="自定义Action列"
  desc="自定义Action列"
  >
</demo>

### table API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| actionsOptions | 用于操作按钮的显示操作 | Object | 无 | |

```ts
interface ActionItemProps {
  label: string,
  isShow?: boolean | (() => boolean),
  key?: string,
  isDisabled?: boolean | (() => boolean),
  loading?: boolean | (() => boolean),
  tooltipDes?: string,
  children?: Array<ActionItemProps>,
  action?: string | (() => void)
}
```

### column API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| slots | { customRender: 'action' } | Object | 无 | |
| actionsOptions | 用于操作按钮的显示操作 | Object | 无 | |

### 其他

- `isDisabled` 支持`boolean`类型,或者传入`Fn`；参数为`fetchParams`
- `isShow` 支持`boolean`类型,或者传入`Fn`；参数为`fetchParams`
- `action` 支持`boolean`类型,或者传入`Fn`；参数为`fetchParams`
- `loading` 支持`boolean`类型,或者传入`Fn`；参数为`fetchParams`

`actionsOptions`支持两种来源，一种是在`table`组件上传入，可以通过`dataSource`中的数据覆盖每条的具体状态；另一种就是在`dataSource`的每条数据中传入`actionsOptions`来分别控制状态；

示例代码

```js
// 传入table的 actionsOptions
const actions = [{
  label: '创建快照',
  isShow: true,
  loading: ({tableRef, selectedRowKeysRef}) => {
    console.log('selectedRowKeysRef: ', selectedRowKeysRef);
    if (selectedRowKeysRef.length > 3) {
      return true
    }
    return false
  },
  // 设定key
  key: 'aa',
  isDisabled: false,
  action: (data:any) => {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
  },
  tooltipDes: '创建快照创建快照aa',
}]

const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: '111111111112333333333333333asdasdasdasdasdqweqweqweqweqweqweasdasdqweqweqweqwdadasdasd',
    // 指定key的状态
    'aa': {
      loading: true,
      disable: false
    },
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London London',
    // 指定key的状态
    'bb': {
      loading: false,
      disable: true
    },
  }
]
```

## 其他

### raido 单选table

<demo src="./demo/radio.vue"
  language="vue"
  title="radio table表格"
  desc="radio table表格"
  >
</demo>

### expandedRow 展开

<demo src="./demo/expandedRow.vue"
  language="vue"
  title="expandedRow table表格"
  desc="expandedRow table表格"
  >
</demo>

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
| filterMultiple | 用于是否开启多选 | boolean | false |  |
| filterTag | 是否开启选中标签模式 | boolean | false |  |

**不传上述参数就可以使用默认自带的筛选组件**

## Table-fetch

### 配置api

<demo src="./demo/api.vue"
  language="vue"
  title="api table表格"
  desc="api table表格"
  >
</demo>

## useTable

使用组件自带的 **useTable** 可以方便使用表单

下面是一个使用简单表格的示例，

<demo src="./demo/useTable.vue"
  language="vue"
  title="useTable表格"
  desc="useTable表格"
  >
</demo>

### Methods

**clearFilterDropdownRef**

类型：`(props: Partial<Column>) => void`

说明: 用于清除当前列筛选的数据值

**setSearchOptions**

类型：`(props: Partial<SearchOptions>) => void`

说明: 用于设置搜索组件配置

**setMutilpAction**

类型：`(props: Partial<MutilpActionOptions>) => void`

说明: 用于设置单选按钮组配置

**setFilterColumnRef**

类型：`(props: Partial<Column>) => void`

说明: 用于设置自定义列原数据

**setFilterColumnChecked**

类型：`(props: Partial<string[key]>) => void`

说明: 用于设置自定义列选中数据

**setFilterColumnDisabled**

类型：`(props: Partial<string[key]>) => void`

说明: 用于设置自定义列disabled状态数据

**clearFilter**

类型：`() => void`

说明: 用于清除头部状态

**setProps**

类型：`(props: Partial<BasicTableProps>) => void`

说明: 用于设置表格参数

**reload**

类型：`(opt?: FetchParams) => Promise<void>`

说明: 刷新表格

**setLoading**

类型：`(loading: boolean) => void`

说明: 设置表格 loading 状态

**getDataSource**

获取表格数据

类型：`<T = Recordable>() => T[]`

说明: 获取表格数据

**getRawDataSource**

获取后端接口原始数据

类型：`<T = Recordable>() => T`

说明: 获取后端接口原始数据

**getColumns**

类型：`(opt?: GetColumnsParams) => BasicColumn[]`

说明: 获取表格数据

**setColumns**

类型：`(columns: BasicColumn[] | string[]) => void`

说明: 设置表头数据

**setTableData**

类型：`<T = Recordable>(values: T[]) => void`

说明: 设置表格数据

**setPagination**

类型：`(info: Partial<PaginationProps>) => void`

说明: 设置分页信息

**deleteSelectRowByKey**

类型：`(key: string) => void`

说明: 根据 key 删除取消选中行

**getSelectRowKeys**

类型：`() => string[]`

说明: 获取选中行的 keys

**getSelectRows**

类型：`<T = Recordable>() => T[]`

说明: 获取选中行的 rows

**clearSelectedRowKeys**

类型：`() => void`

说明: 清空选中行

**setSelectedRowKeys**

类型：`(rowKeys: string[] | number[]) => void`

说明: 设置选中行

**getPaginationRef**

类型：`() => PaginationProps | boolean`

说明: 获取当前分页信息

**getShowPagination**

类型：`() => boolean`

说明: 获取当前是否显示分页

**setShowPagination**

类型：`(show: boolean) => Promise<void>`

说明: 设置当前是否显示分页

**getRowSelection**

类型：`() => TableRowSelection<Recordable>`

说明: 获取勾选框信息

**updateTableData**

类型：`(index: number, key: string, value: any)=>void`

说明: 更新表格数据

**updateTableDataRecord**

类型： `(rowKey: string | number, record: Recordable) => Recordable | void`

说明： 根据唯一的 `rowKey` 更新指定行的数据.可用于不刷新整个表格而局部更新数据

**deleteTableDataRecord**

类型： `(rowKey: string | number | string[] | number[]) => void`

说明： 根据唯一的`rowKey` 动态删除指定行的数据.可用于不刷新整个表格而局部更新数据

**insertTableDataRecord**

类型： `(record: Recordable, index?: number) => Recordable | void`

说明： 可根据传入的 `index` 值决定插入数据行的位置，不传则是顺序插入，可用于不刷新整个表格而局部更新数据

**expandAll**

类型：`() => void`

说明: 展开树形表格

**collapseAll**

类型：`() => void`

说明: 折叠树形表格

## Props

::: tip 温馨提醒

- 除以下参数外，官方文档内的 props 也都支持，具体可以参考 [antv table](https://2x.antdv.com/components/table-cn/#API)
- 注意：`defaultExpandAllRows`、`defaultExpandedRowKeys` 属性在basicTable中不受支持，并且在`antv table` v2.2.0之后也被移除。

:::

| 属性                    | 类型                                               | 默认值  | 可选值 | 说明                                                                                            | 版本 |
| ----------------------- | -------------------------------------------------- | ------- | ------ | ----------------------------------------------------------------------------------------------- | ---- |
| isTreeTable             | `boolean`                                          | `false` | -      | 是否树表                                                                                        |      |
| filterLeftStyle             | `Object`                                          | - | -      | 用于设置filterLeft 模块样式                                                                                        |      |
| filterRightStyle             | `Object`                                          | - | -      | 用于设置filterRight 模块样式                                                                                        |      |
| isTreeTable             | `boolean`                                          | `false` | -      | 是否树表                                                                                        |      |
| upTitle             | `string`                                          | `点击升序` | -      | 升序按钮hover时显示的文字                                                                                        |      |
| downTitle             | `string`                                          | `点击降序` | -      | 降序按钮hover时显示的文字                                                                                        |      |
| cancelUpTitle             | `string`                                          | `点击取消升序` | -      | 已升序按钮hover时显示的文字                                                                                        |      |
| cancelDownTitle             | `string`                                          | `点击去取消降序` | -      | 已降序按钮hover时显示的文字                                                                                        |      |
| size             | `middle、small`                                          | `middle` | -      | 表格大小                                                                                       |      |
| api                     | `(...arg: any) => Promise<any>`                    | -       | -      | 请求接口，可以直接将`src/api内的函数直接传入`     
| sortFn                  | `(sortInfo: SorterResult<any>) => any`             | -       | -      | 自定义排序方法。见下方全局配置说明   **如果使用api，必须要配置sortFn 方法 **                                                         |      |
| filterFn                | `(sortInfo: Partial<Recordable<string[]>>) => any` | -       | -      | 自定义过滤方法。见下方全局配置说明   **如果使用api，必须要配置filterFn 方法 **                                          |      |
| beforeFetch             | `(T)=>T`                                           | -       | -      | 请求之前对参数进行处理                                                                          |      |
| afterFetch              | `(T)=>T`                                           | -       | -      | 请求之后对返回值进行处理                                                                        |      |
| fetchSetting            | `FetchSetting`                                     | -       | -      | 接口请求配置，可以配置请求的字段和响应的字段名，见下方全局配置说明                              |      |
| immediate               | `boolean`                                          | `true`  | -      | 组件加载后是否立即请求接口，在 api 有传的情况下，如果为 false，需要自行使用 reload 加载表格数据 |      |
| searchInfo              | `any`                                              | -       | -      | 额外的请求参数                                                                                  |
| columns                 | `any`                                              | -       | -      | 表单列信息 BasicColumn[]                                                                        |      |
| dataSource              | `any[]`                                            | -       | -      | 表格数据，非 api 加载情况                                                                       |      |
| bordered                | `boolean`                                          | `false` | -      | 是否显示表格边框                                                                                |      |
| pagination              | `any`                                              | -       | -      | 分页信息配置，为 `false` 不显示分页                                                             |      |
| loading                 | `boolean`                                          | `false` | -      | 表格 loading 状态                                                                               |      |
| scroll                  | `any`                                              | -       | -      | 参考官方文档 scroll                                                                             |      |
| createButton                  | `CreateButton`                                              | -       | -      |  头部创建按钮                                                                             |      |
| multipleActionOptions                  | `MutilpActionOptions`                                              | -       | -      |  用于展示单选按钮组                                                                           |      |
| searchOptions                  | `SearchOptions`                                              | -       | -      |   头部搜索组件配置数据                                                                        |      |
| activeOptions                  | `ActiveOptions`                                              | -       | -      |   用于配置是否显示刷新、自定列按钮                                                                     |      |
| actionsOptions                  | `ActionsOptions`                                              | -       | -      |   用于全局配置操作列数据；会被record 上的 数据覆盖                                                     |      |
| columnModalList                  | `ColumnModalList`                                              | -       | -      |   用于配置自定义数据源                                                    |      |
| customFilter                  | `boolean`                                              | -       | -      |   是否显示自定义筛选组件；数据源来源于`column.typelist`                                            |   `false`   |
| filterTag                  | `boolean`                                              | `true`     | -      |   是否显示筛选列选中的tag标签                                            |      |
| langLocale                  | `Pagintion lang`                                           | -     | -      |   用于配置table组件的 语言包；语言包来之`and-design-vue`；                                          |      |
| isTreeTable                  | `boolean`                                              | `false`     | -      |   是否是树状结构                                            |      |


### CreateButton

```ts

export interface CreateButton {
  // 是否显示
  show?: boolean,
  // 显示文字
  text?: string,
  // 是否可用
  isDisabled?: boolean,
  // icon?: string,
  // type?: string,
  // 绑定的方法
  action?: (...arg:any) => void
}
```

### MutilpActionOptions

```ts
  interface ButtonType {
    // tooltip配置
    toolOptions?: TooltipProps,
    // tooltip title 显示内容
    tooltipDes?: string,
    // button 显示内容
    label?: string,
    // button 选中
    value?: string | number,
    // button 是否可用
    disabled?: boolean | ((...args: any) => boolean),
    // tooltip 自定义样式
    overlayClassName?: string,
    // 点击按钮后触发的事件 或 执行action 方法
    action?: string | ((...args: any) => void)
  }

  export interface MutilpActionOptions {
    // 是否显示 单选按钮组
    show?: boolean,
    options?: Array<ButtonType>,
    [key:string]: any
  }
```

### searchOptions

```ts

export interface SearchOptions {
  // 是否显示搜索组件
  show?: boolean,
  // 是否显示select 组件
  showSelect?: boolean,
  // select 数据来源，数组|普通方法|promise
  typeList?: (...arg: any) => Promise<any> | Array<{label: string, value: string, disabled: boolean}>,
  // 点击搜索方法执行action函数
  action?: (fetchParams: FetchParams) => void,
  // select loading状态
  loading: boolean,
  // select 站位字符串、宽度
  selectOptions?: {
    placeholder?: string,
    width?: string
  },
  // input 站位字符串、宽度、最大输入长度、是否出现清空按钮
  inputOptions?: {
    // 支持函数 参数如当前选中select
    placeholder?: string | (selectItem) => string,
    // 新增 validator 函数用于 校验当前input 中的值；参数1 选中typeList的某一项的值 参数2 输入的内容；返回值1 result 校验结果 返回值2 tip 提示内容
    validator: (selectItem:typeList[item], value:string) => { result: boolean, tip: string },
    // validator 触发时机，value 值修改 `change`; 点击 search icon 为 `search`; 两者都要 `all`
    validatorTrigger: 'all' | 'search' | 'change',
    maxlength?: number,
    width?: string,
    allowClear?: boolean
  }
}
```

### ActiveOptions

```ts
export interface ActiveOptions {
  reload?: {
    // tooltip 显示 文字
    text?: string,
    // 是否显示
    show?: boolean,
    // 点击事件是否可用
    isDisabled?: boolean,
    // 自定义方法，点击按钮执行action方法，如果不传，刷新当前页面
    action?: Fn
  },
  columnDialog: {
    // tooltip 显示 文字
    text?: string,
    // 是否显示
    show?: boolean,
    // 点击事件是否可用
    isDisabled?: boolean
  },
  download?: {
    // tooltip 显示 文字
    text?: string,
    // 是否显示
    show?: boolean,
     // 点击事件是否可用
    isDisabled?: boolean,
    // 自定义方法，点击按钮执行action方法，如果不传，href有值直接执行
    action?: Fn,
    href?: string
  },
}
```

### ActionsOptions

```ts
  export interface ActionItemProps {
    // 显示的文字
    label: string,
    // 是否显示
    isShow?: boolean | (() => boolean),
    // key用于区分
    key?: string,
    // 是否可点击
    isDisabled?: boolean | (() => boolean),
    // 当前按钮loading状态
    loading?: boolean | (() => boolean),
    // tooltip显示文字
    tooltipDes?: string,
    // 嵌套结构
    children?: Array<ActionItemProps>,
    // 点击要监听的事件或要执行的方法
    action?: string | (() => void)
  }

  export interface ActionProps {
    // 默认展示2个按钮，其他按钮收缩
    showBtn?: number,
    // 按钮组数据
    actions?: Array<ActionItemProps>,
    // 当前行数据
    record?: any
  }
```

## Column

除 参考官方 [Column 配置](https://2x.antdv.com/components/table-cn/#Column)外，扩展以下参数

| 属性               | 类型                                                      | 默认值  | 可选值 | 说明                     |
| ------------------ | --------------------------------------------------------- | ------- | ------ | ------------------------ |
| filterList      | `FilterItem[]`                                                 | -   | -      | 每列筛选的数据源 |
| filterSelected      | `FilterItem[]`                                                 | -   | -      | 每列已经筛选的数据项 |
| type      | `Type`                                                 | -   | `tdStatus 、 tdCopy 、 tdEllipsis 、tdHandle`     | 每列使用内置组件配置 |
| filtered      | boolean                                           | -   |   -    | 选中之后filtericon 会高亮 |
| filterMultiple      | boolean                                           | -   |   -    | filter是否可以多选 |
| notShowFilter      | boolean                                           | -   |   -    | 是否在自定义列中显示 |
| titleType      | `TitleType`                                           | -   |   `thDescribe`、 `thUnit` | 头部内置自定义组件(**如需使用多个 请把componentName命名为 thDescribe1、thDescribe2 依次递增**) |
|  slots      |   `customRender`、  `title`                                     | -   |   - | `customRender`不要和`tdStatus 、 tdCopy 、 tdEllipsis 、tdHandle` 重名； `title` 不要和 `thDescribe`、 `thUnit` 重名 |


### filterType

```js
  interface FilterType {
    label?: string, // column title 字段
    value?: [string, number], column dataIndex 字段
    disabled?: boolean, 是否可选字段
    checked?: boolean, 
  }
```
### Type

```ts
  type: {
    // 使用的组件名 tdStatus | tdCopy | tdEllipsis | tdHandle
    componentName: string,
    props: any
  }
```

### TitleType

```ts
  titleType: {
    // 使用的组件名 `thDescribe`、 `thUnit`
    componentName: string,
    props: {
      // 设置column 名称
      text: 'columnName',
      // tooltip提示框
      describe: '',
      // 单位
      unit: ''
    }
  }
```

## 事件

::: tip 温馨提醒

除以下事件外，官方文档内的 event 也都支持，具体可以参考 [antv table](https://2x.antdv.com/components/table-cn/#API)

:::

| 事件             | 回调参数                                | 说明                                |
| ---------------- | --------------------------------------- | ----------------------------------- |
| fetch-success    | `Function({items,total})`               | 接口请求成功后触发                  |
| fetch-error      | `Function(error)`                       | 错误信息                            |
| selection-change | `Function({keys，rows})`                | 勾选事件触发                        |
| on-action | `Function({...FetchParams, record, acitonItem})`                | 操作列点击事件触发                       |
| create-click | `Function({...FetchParams})`                | 头部创建按钮点击触发                 |
| multiple-change | `Function({...FetchParams, multipleItem})`                | 头部按钮组点击触发                       |
| search-click | `Function({...FetchParams})`                | 头部点击搜索icon触发                     |
| filter | `Function({...FetchParams})`                | 点击筛选事件触发                       |


## Slots

::: tip 温馨提醒

除以下参数外，官方文档内的 slot 也都支持，具体可以参考 [antv table](https://2x.antdv.com/components/table-cn/#API)

:::
'createButton', 'search', 'multipleBtns'

| 名称              | 说明             |  版本  |
| ----------------- | ---------------- | -- |
| createButton        | 表格顶部左侧创建按钮|  |
| multipleBtns           | 表格顶部左侧侧区域 |  |
| search | 表格顶部右侧区域 搜索组件      |  |
| tableActive | 表格顶部右侧区域 刷新、自定义列组件      |  |
| EmptyVue | 表格空数据状态组件     |  | 

## 组件

| 名称              | 说明             |  版本  |
| ----------------- | ---------------- | -- |
| ScTable        | 主表格组件 |  |
|  Copy         | 用于定制copy 组件 |  |
| TableActions | 用于定制操作列组件 , 传入表格solt名字为`action`    |  |

```ts
// Copy 组件需要的参数
const props = () => ({
  column: {
    type: Object,
    default: () => ({})
  },
  record: {
    type: Object,
    default: () => ({})
  },
  index: {
    type: Number,
    default: 0
  },
  text: {
    type: [String, Number],
    default: ''
  }
})
```

```ts
export interface ActionItemProps {
  label: string,
  isShow?: boolean | (() => boolean),
  key?: string,
  isDisabled?: boolean | (() => boolean),
  loading?: boolean | (() => boolean),
  tooltipDes?: string,
  children?: Array<ActionItemProps>,
  action?: string | (() => void)
}

// TableActions 组件需要的参数
export interface ActionProps {
  // 显示几个btn，其他btn隐藏
  showBtn?: number,
  // 操作按钮数据
  actions?: Array<ActionItemProps>,
  // 当前列数据
  record?: any,
  // 当前表格储存的参数
  fetchParams?: any
}
```

```ts
  export interface fetchParams {
    // 内部table(ant-design-table 的 table实例)表格实例
    tableRef,
    // 头部单选按钮组 选中的值
    multipleValue: string,
    // 搜索组件 select选中的值
    searchSelect: string,
    // 搜索组件 input输入的值
    searchText: string,
    // 列筛选的字段
    filters: {},
    // 多选或者单选选中的行数据只有key
    selectedRowKeysRef: [],
    // 多选或者单选选中的行数据
    selectedRowRef: [],
    // 当前列数据源
    columns: [],
    // 分页状态
    pagination: {},
    // 列排序状态
    sorter: {}
  }
```

## 汇总

<demo src="./demo/all.vue"
  language="vue"
  title="table头部操作按钮"
  desc="table头部操作按钮"
  >
</demo>
