<template>
    <ScModal 
      :visible="visible === 1"
      title="Basic Modal"
      destroyOnClose
      wrap-class-name="aaaaaa"
      width="100px"
      @ok="handleOk"
      cancel-text="取消"
      ok-text="确认"
      @cancel="handleCancel"
      maskClosable
    >
    <!-- @dragChange="handleDrag" -->
    <div>我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</div>
  </ScModal>
  <ScModal 
    :visible="visible === 2"
    title="Basic Modal"
    wrap-class-name="bbbbb"
    destroyOnClose
    @ok="handleOk"
    @cancel="handleCancel"
    cancel-text="取消"
    ok-text="确认"
    maskClosable
    >
    <div>22222是文案限制长度，我是文案限制长度</div>
  </ScModal>
  <ScModal
    v-model:visible="visible1"
    title="Basic Modal"
    destroyOnClose
    @ok="handleOk"
    @cancel="handleCancel1"
    cancel-text="取消"
    ok-text="确认"
    maskClosable
    >
    <div>我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</div>
  </ScModal>
  <ScModal 
    v-model:visible="visible2"
    title="Basic Modal"
    destroyOnClose
    @ok="handleOk"
    @cancel="handleCancel2"
    cancel-text="取消"
    ok-text="确认"
    maskClosable
    >
    <div>22222是文案限制长度，我是文案限制长度</div>
  </ScModal>
  <div>
    <Button @click="openModal(1)">
      打开1
    </Button>
    <Button @click="openModal(2)">
      打开2
    </Button>
  </div>

  <div>
    <Button @click="handle1">
      打开1
    </Button>
    <Button @click="handle2">
      打开2
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

import { Button } from 'ant-design-vue'
import { ScModal } from 'sc-ui'
import '../../../style/index.less'
import { DraggableType } from '../component/type'

const visible: Ref<number> = ref(0)
const visible1: Ref<boolean> = ref(false)
const visible2: Ref<boolean> = ref(false)

const openModal = (num:number) => {
  console.log('num: ', num);
  visible.value = num
}

const handle1 = () => {
  visible1.value = true
}
const handle2 = () => {
  visible2.value = true
}

const handleOk = (e: MouseEvent) => {
  console.log(e);
  visible.value = 0;
};

const handleCancel = () => {
  visible.value = 0
}
const handleCancel1 = () => {
  visible1.value = false
}
const handleCancel2 = () => {
  visible2.value = false
}

const handleDrag = (dragRect:DraggableType) => {
  console.log('dragRect: ', dragRect);

}

</script>

<style lang="less">
</style>