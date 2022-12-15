<template>
  <ScModal 
    v-model:visible="visible"
    title="Basic Modal" 
    @ok="handleOk"
    cancel-text="取消"
    ok-text="确认"
    maskClosable
    isDraggable
    @dragChange="handleDrag"
  >
    <div>我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</div>
  </ScModal>
  <Button @click="openModal">
    打开
  </Button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

import { Button } from 'ant-design-vue'
import { ScModal } from 'sc-ui'
import { DraggableType } from '../component/type'
import '../../../style/index.less'

const visible: Ref<boolean> = ref(false)

const openModal = () => {
  visible.value = true
}

const handleOk = (e: MouseEvent) => {
  console.log(e);
  visible.value = false;
};

const handleDrag = (dragRect:DraggableType) => {
  console.log('dragRect: ', dragRect);

}

</script>

<style lang="less">
</style>