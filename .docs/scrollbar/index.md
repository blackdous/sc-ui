---
map:
  path: /scrollbar
realPath: src/package/scrollbar/index.zh-CN.md
---

# Scrollbar 滚动条

用于替换浏览器原生滚动条。

## 竖向滚动

通过 `height` 属性设置滚动条高度，若不设置则根据父容器高度自适应。

<demo src="./demo/basic.vue"
  language="vue"
  title="竖向滚动"
  >
</demo>

## 横向滚动

当元素宽度大于滚动条宽度时，会显示横向滚动条。

<demo src="./demo/horizontal.vue"
  language="vue"
  title="横向滚动"
  >
</demo>

## max-height

当元素高度超过最大高度，才会显示滚动条。

<demo src="./demo/maxHeight.vue"
  language="vue"
  title="max-height"
  >
</demo>

## 暴露的一些方法

<demo src="./demo/func.vue"
  language="vue"
  title="暴露的一些方法"
  desc="handleScroll、scrollTo、setScrollTop、setScrollLeft、update、wrapRef"
  >
</demo>

## API

| 属性               | 类型                                                      | 默认值  | 可选值 | 说明                     |
| ------------------ | --------------------------------------------------------- | ------- | ------ | ------------------------ |
| height      | string / number                                              | -  |  -    |  滚动条高度 |
| max-height      | string / number                                              | -  |  -    |  滚动条最大高度 |
| min-height      | string / number                                              | -  |  -    |  滚动条最小高度 |
| native      | boolean                                              | false  |  -    |  是否使用原生滚动条样式 |
| wrap-style      | string / object                                            | -  |  -    |  包裹容器的自定义样式 |
| wrap-class      | string                                              | -  |  -    |  包裹容器的自定义类名 |
| view-style      | string / object                                             | -  |  -    |  视图的自定义样式 |
| view-class      | string                                             | -  |  -    |  视图的自定义类名 |
| noresize     | boolean                                             | false  |  -    |  不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能 |
| tag      | string                                             | div  |  -    |  视图的元素标签 |
| always     | boolean                                             | false  |  -    |  滚动条总是显示 |
| min-size     | number                                             | 20  |  -    |  滚动条最小尺寸 |
| scrollbar-size     | string                                             | -  |  ['small', 'medium', 'large']    |  滚动条大小；small 4px medium 6px large 8px |

## 事件

| 事件名称 | 说明                                 | 回调参数    |
| -------- | ------------------------------------ | ----------- |
| scroll   | 当触发滚动事件时，返回滚动的距离 | (e: { scrollLeft: number, scrollTop: number }) => void |

## 对外暴露的方法

| 名称 | 说明                                 | 回调参数    |
| -------- | ------------------------------------ | ----------- |
| handleScroll   | 触发滚动事件 | () => void |
| scrollTo   | 滚动到一组特定坐标 | (x, y) => void |
| setScrollTop   | 设置滚动条到顶部的距离 | (scrollTop: number) => void |
| setScrollLeft   | 设置滚动条到左边的距离 | (scrollLeft: number) => void |
| update   | 手动更新滚动条状态 | () => void |
| wrapRef   | 滚动条包裹的 ref 对象 | object |

