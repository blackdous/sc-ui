<template>
  <!-- wrap-class-name="aaaaaa" -->
  <ScModal 
    :visible="visible === 1"
    title="Basic Modal"
    destroyOnClose
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
    width="80%"
    wrap-class-name="bbbbb"
    destroyOnClose
    @ok="handleOk"
    @cancel="handleCancel"
    cancel-text="取消"
    ok-text="确认"
    maskClosable
    :footer="null"
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
    :onOkDisable="true"
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
  <div class="mrt20">
    <Button class="btn1" @click="openModal(1)">
      打开1
    </Button>
    <Button class="btn1" @click="openModal(2)">
      打开2
    </Button>
  </div>

  <div class="mrt20">
    <Button class="btn1" @click="handle1">
      打开1
    </Button>
    <Button class="btn1" @click="handle2">
      打开2
    </Button>
  </div>

  <Modal
    v-model:visible="visible3"
    destroyOnClose
    @ok="handleOk"
    @cancel="handleCancel2"
    cancel-text="取消"
    ok-text="确认"
    maskClosable
  >
    <template #title>
      Basic Modal
    </template>
  <div>我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</div>
  </Modal>

  <div class="mrt20">
    <Button class="btn1" @click="handleSource1">
      原始modal1
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

import { Button, Modal } from 'ant-design-vue'
import { ScModal } from 'sc-ui'
import '../../../style/index.less'
import { DraggableType } from '../component/type'

const visible: Ref<number> = ref(0)
const visible1: Ref<boolean> = ref(false)
const visible2: Ref<boolean> = ref(false)
const visible3: Ref<boolean> = ref(false)

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

const handleSource1 = () => {
  visible3.value = true
}

const handleDrag = (dragRect:DraggableType) => {
  console.log('dragRect: ', dragRect);

}

</script>

<style lang="less" scoped>
.mrt20 {
  margin-top: 20px;
}
.btn1 {
  margin-left: 20px;
}
</style>