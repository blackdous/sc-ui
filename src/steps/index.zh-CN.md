---
map:
  path: /steps
---

# Steps步骤条

引导用户按照流程完成任务的分步导航条， 可根据实际应用场景设定步骤，步骤不得少于 2 步。

## simple 模式

<demo src="./demo/simple.vue"
  language="vue"
  desc="设置simple 属性即可实现, wait 是未完成状态，sucess 为完成状态">
</demo>

## 基础用法

简单的步骤条。

<demo src="./demo/basic.vue"
  language="vue"
  desc="设置 active 属性，接受一个 Number，表明步骤的 index，从 0 开始。 需要定宽的步骤条时，设置 space 属性即可，它接受 Number， 单位为 px， 如果不设置，则为自适应。 设置 finish-status 属性可以改变已经完成的步骤的状态">
</demo>

## 含状态的步骤条

每一步骤显示出该步骤的状态。

<demo src="./demo/status.vue"
  language="vue"
  desc="也可以使用 `title` 具名插槽，可以用`slot` 的方式来取代属性的设置， 在本文档最后的列表中有所有的插槽可供参考.">
</demo>

## 居中的步骤条

<demo src="./demo/center.vue"
  language="vue"
  title="标题和描述可以居中。"
  >
</demo>

## 带图标的步骤条

<demo src="./demo/icon.vue"
  language="vue"
  title="可以在步骤栏中使用各种自定义图标。"
  desc="通过 icon 属性来设置图标， 图标的类型可以参考 Icon 组件的文档， 除此以外，还能通过具名 slot 来使用自定义的图标。"
  >
</demo>

## vertical

<demo src="./demo/vertical.vue"
  language="vue"
  title="垂直方向的步骤条。"
  desc="只需要在 el-steps 元素中设置 direction 属性为 vertical 即可。"
  >
</demo>

## Steps 属性

<API src="./component/ScSteps.vue" lang="zh"></API>

## Step 属性

<API src="./component/ScStep.vue" lang="zh"></API>