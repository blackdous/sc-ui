---
map:
  path: /cascaderPanel
realPath: src/package/cascaderPanel/index.zh-CN.md
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

## props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| textColor | message字体颜色跟随type | boolean  | flase | |
| afterClose | 关闭动画结束后触发的回调函数 | () => void | - |  |

## expose


