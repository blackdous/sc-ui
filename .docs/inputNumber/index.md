---
map:
  path: /inputNumber
realPath: src/package/inputNumber/index.zh-CN.md
---

# InputNumber 数字输入框

数字输入框由增加、减少按钮、数值输入组成。每次点击增加按钮（或减少按钮），数字增长（或减少）的量是恒定的。

## 组件类型

### 双侧调整数字输入框

<demo src="./demo/bothSides.vue"
  language="vue"
  title="双侧调整数字输入框"
  desc="双侧调整数字输入框"
  >
</demo>

### 右侧调整数字输入框

<demo src="./demo/internal.vue"
  language="vue"
  title="右侧调整数字输入框"
  desc="右侧调整数字输入框"
  >
</demo>

## 组件大小

**双侧调整数字输入框（提供小、中（默认）、大 3 种尺寸，高度分别为24px、32px和40px**

<demo src="./demo/bothSidesSize.vue"
  language="vue"
  title="双侧调整数字输入框组件大小"
  desc="双侧调整数字输入框组件大小"
  >
</demo>

**右侧调整数字输入框（提供小、中（默认）、大 3 种尺寸，高度分别为24px、32px和40px**

<demo src="./demo/internalSize.vue"
  language="vue"
  title="右侧调整数字输入框组件大小"
  desc="右侧调整数字输入框组件大小"
  >
</demo>

## Api

除 参考官方 [InputNumber 配置](https://2x.antdv.com/components/input-number-cn#API)外，扩展以下参数

| 属性               | 类型                                                      | 默认值  | 可选值 | 说明                     |
| ------------------ | --------------------------------------------------------- | ------- | ------ | ------------------------ |
| mode      | `Mode`                                                 | 'bothSides'  |  'bothSides'、'internal'     | 每列筛选的数据源 |
| size      | `Size`                                                 | 'default'  |  'large'、'default'、'small'     | 每列筛选的数据源 |

```ts
type Mode = 'bothSides' | 'internal' 
type Size = 'large' | 'default' | 'small'
```

## 事件

事件与官方 [InputNumber 事件](https://2x.antdv.com/components/input-number-cn#API) 相同
