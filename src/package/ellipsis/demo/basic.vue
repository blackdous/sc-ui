<template>
  <div class="mt20">
    <div style="max-width: 240px">
      <ScEllipsis>
          浮动元素是如何定位的
        正如我们前面提到的那样，当一个元素浮动之后，它会被移出正常的文档流，然后向左或者向右平移，一直平移直到碰到了所处的容器的边框，或者碰到另外一个浮动的元素。
        在下面的图片中，有三个红色的正方形。其中有两个向左浮动，一个向右浮动。要注意到第二个向左浮动的正方形被放在第一个向左浮动的正方形的右边。如果还有更多的正方形这样浮动，它们会继续向右堆放，直到填满容器一整行，之后换行至下一行。
      </ScEllipsis>
    </div>
  </div>
  <div class="mt20" style="max-width: 240px; padding: 4px 3px 5px 2px; border-left: 3px solid transparent; border-right: 2px solid transparent;">
    <ScEllipsis
      is-inherit-parent-width
      :edit="editProps"
    >
    浮动元素是如何定位的 浮动元1111
    </ScEllipsis>
  </div>
  <div class="mt20">
    <ScEllipsis style="width: 240px">
      浮动元素是如何定位的
    </ScEllipsis>
  </div>
  <div class="mt20">
    <ScEllipsis
      style="width: 240px" 
      copy-txt="1111111111"
    >
      <span @click="handleClick">
        浮动元素是如何定位的
      </span>
    </ScEllipsis>
  </div>
  <div class="mt20">
    <ScEllipsis
      style="width: 240px"
      :base-height="26"
      copy-txt="1111111111"
      class="sp20"
    >
      <span @click="handleClick">
        浮动元素是如何定位的 18px11111111111111111111
      </span>
    </ScEllipsis>
  </div>
</template>

<script lang='ts' setup>
import { reactive } from 'vue'
import { ScEllipsis } from 'sc-ui'
const editProps = reactive({
  show: true,
  placeholder: '请输入内容',
  describe: '长度为8-16个字符，以大小字母或中文开头，可包含数字、下划线(-)和连字。',
  maxLength: 160,
  confirmLoading: false,
  showMaxLength: true,
  disabled: false,
  confirmDisabled: false,
  getPopupContainer: (target: HTMLElement) => { return target.parentNode?.parentNode },
  text: 'Aa123456'
})

const handleClick = () => {
  window.location.href = '/tabs/'
}
</script>
<style lang="less">
  .mt20 {
    margin-top: 20px;
  }
  .sp20 {
    .scEllipsis-text {
      font-size: 20px;
    }
  }
</style>
