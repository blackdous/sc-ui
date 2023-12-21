<template>
  <div class="mt20">
    <ScEllipsis v-if="true" isCollapse line-clamp="5" :tooltip="false">
      电灯熄灭 物换星移 泥牛入海<br>
      黑暗好像 一颗巨石 按在胸口<br>
      独脚大盗 百万富翁 摸爬滚打<br>
      独脚大盗 百万富翁 摸爬滚打<br>
      独脚大盗 百万富翁 摸爬滚打<br>
      独脚大盗 百万富翁 摸爬滚打<br>
      黑暗好像 一颗巨石 按在胸口
    </ScEllipsis>
  </div>
  <div class="mt20">
    <ScEllipsis isCollapse line-clamp="3" :tooltip="false" style="max-width: 600px;">
      浮动元素是如何定位的
正如我们前面提到的那样，当一个元素浮动之后，它会被移出正常的文档流，然后向左或者向右平移，一直平移直到碰到了所处的容器的边框，或者碰到另外一个浮动的元素。
在下面的图片中，有三个红色的正方形。其中有两个向左浮动，一个向右浮动。要注意到第二个向左浮动的正方形被放在第一个向左浮动的正方形的右边。如果还有更多的正方形这样浮动，它们会继续向右堆放，直到填满容器一整行，之后换行至下一行。
    </ScEllipsis>
  </div>
</template>

<script lang='ts' setup>
import { ScEllipsis } from 'sc-ui'
</script>
<style scoped>
.mt20 {
  margin-top: 20px;
}

</style>
