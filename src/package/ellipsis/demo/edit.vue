<template>
  <ScEllipsis 
    style="max-width: 240px" 
    hoverSuffix
    :tooltip="false"
    line-clamp="3"
    :edit="editProps"
    @edit-confirm="handleConfirm"
  >
    正如我们前面提到的那样，
    当一个元素浮动之后，它会被移出正常的文档流，然后向左或者向右平移，一直平移直到碰到了所处的容器的边框，或者碰到另外一个浮动的元素。
在下面的图片中，有三个红色的正方形。其中有两个向左浮动，一个向右浮动。要注意到第二个向左浮动的正方形被放在第一个向左浮动的正方形的右边。如果还有更多的正方形这样浮动，它们会继续向右堆放，直到填满容器一整行，之后换行至下一行。
  </ScEllipsis>
</template>

<script lang='ts' setup>
import { reactive } from 'vue'
import { ScEllipsis } from 'sc-ui'
import { message } from 'ant-design-vue'

const editProps = reactive({
  show: true,
  placeholder: '请输入内容',
  describe: '长度为8-16个字符，以大小字母或中文开头，可包含数字、下划线(-)和连字。',
  maxLength: 160,
  confirmLoading: false,
  showMaxLength: true,
  disabled: true,
  confirmDisabled: true,
  text: 'Aa123456'
})

const handleConfirm = (val: string, closeFnc: () => any) => {
  if (!val) {
    message.warning({
      content: '请输入内容',
      duration: 1.5
    })
    return false
  }

  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*(){}[\]/?.>,<'";:]{8,16}$/
  if (pattern.test(val)) {
    editProps.confirmLoading = true
    setTimeout(() => {
      editProps.confirmLoading = false
      closeFnc()
      message.success({
        content: '修改成功',
        duration: 1.5
      })
    }, 1500)
  } else {
    message.warning({
      content: '输入的内容不符合规则',
      duration: 1.5
    })
  }
}
</script>
