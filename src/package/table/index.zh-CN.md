---
map:
  path: /table
---

# table 表格

基于[ant-design-vue table](https://2x.antdv.com/components/table-cn)基础上二次封装的table组件

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

| 事件名称 | 说明                                 | 回调参数    |
| change       | 分页、排序、筛选变化时触发                         | Function(pagination, filters, sorter, { currentDataSource }) |

- change  可以监听分页、filter、sort查询数据 阐述

## 自定义Filter组件

<demo src="./demo/header.vue"
  language="vue"
  title="table表格"
  desc="自定义"
  >
</demo>

## 带头部操作的表格

<demo src="./demo/header.vue"
  language="vue"
  title="table表格"
  desc="头部组件"
  >
</demo>


