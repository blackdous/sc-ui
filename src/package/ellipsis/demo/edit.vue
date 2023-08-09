<template>
  <ScEllipsis 
    style="max-width: 240px" 
    hoverSuffix
    line-clamp="3"
    :tooltip="false"
    :edit="editProps"
    @edit-confirm="handleConfirm"
    @edit-input-change="handleInputChange"
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

const rules = {
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'change' },
    { min: 8, max: 16, message: 'Length should be 3 to 5', trigger: 'change' },
  ]
}

const editProps = reactive({
  show: true,
  placeholder: '请输入内容',
  describe: '长度为1-128个字符，以大小字母或中文开头，可包含数字、下划线(-)和连字。',
  maxLength: 160,
  confirmLoading: false,
  disabled: false,
  confirmDisabled: false,
  text: '',
  rules
})

const handleConfirm = (val: string, closeFnc: () => any, editFormRef: object) => {
  console.log('editFormRef: ', editFormRef);
  if (!val) {
    return false
  }

  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*(){}[\]/?.>,<'";:]{8,16}$/
  if (pattern.test(val)) {
    editProps.confirmLoading = true
    setTimeout(() => {
      editProps.confirmLoading = false
      setTimeout(() => {
        closeFnc()
      }, 1000)
      message.success({
        content: '修改成功',
        duration: 1.5
      })
    }, 1500)
  } else {
    // message.warning({
    //   content: '输入的内容不符合规则',
    //   duration: 1.5
    // })
  }
}

const handleInputChange = () => {
  editProps.confirmDisabled = true
  setTimeout(() => {
    editProps.confirmDisabled = false
  }, 1500)
}
</script>
