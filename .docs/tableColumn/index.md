---
map:
  path: /tableColumn
realPath: src/package/tableColumn/index.zh-CN.md
---

# 表格筛选Column组件

## 基础组件

<demo src="./demo/basic.vue"
  language="vue"
  title="基础组件"
  desc="基础组件"
  >
</demo>

## 异步更新

<demo src="./demo/async.vue"
  language="vue"
  title="异步更新"
  desc="异步更新"
  >
</demo>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| visible | 显示隐藏 | boolean | - |  |
| checkList | 要筛选column列表 | array | 暂无数据 |  |

```ts
interface ColumnItem {
  label: string,
  value: string,
  key: string,
  disabled: boolean
  checked: boolean
}
```

**支持设置Modal上的属性；会穿透到组件上**

## 事件

| 名称              | 说明             |  参数 | 版本  |
| ----------------- | ---------------- | --------------------------- | -- |
| okModal        | 点击确认按钮后执行的事件 | `{ keys: '选中数据的key集合', checkedList: '选中数据的集合', delItemKeys: '相对于上次选中，当前所减少的选中key的集合' }` |  |
| cancelModal           | 点击取消按钮后执行的事件 | - | - |
