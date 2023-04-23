<template>
  <!-- wrap-class-name="aaaaaa" -->
  <ScModal
    :visible="visible === 1"
    title="Basic Modal"
    destroyOnClose
    ok-text="确认"
    closable
    :show-cancel-btn="false"
    @ok="handleOk1"
    @cancel="handleCancel"
    :loading="true"
    maskClosable
  >
    <ScTable
      :columns="columns"
    ></ScTable>
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
    title="Basic Modal22222222"
    destroyOnClose
    @ok="handleOk"
    @cancel="handleCancel1"
    cancel-text="取消"
    ok-text="确认"
    :maskClosable="false"
    :confirm-loading="loadingRef"
    >
    <div>我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</div>
  </ScModal>
  <ScModal 
    v-model:visible="visible2"
    title="Basic Modal111111111"
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
    closable
    :title="null"
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
import { ScModal, ScTable } from 'sc-ui'
import { DraggableType } from '../component/type'

const visible: Ref<number> = ref(0)
const visible1: Ref<boolean> = ref(false)
const visible2: Ref<boolean> = ref(false)
const visible3: Ref<boolean> = ref(false)

const loadingRef = ref(false)


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
    slots: { customRender: 'name' },
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

const openModal = (num:number) => {
  console.log('num: ', num);
  visible.value = num
}

const handle1 = () => {
  visible1.value = true
  loadingRef.value = true
  setTimeout(() => {
    loadingRef.value = false
  }, 10000)
}
const handle2 = () => {
  visible2.value = true
}

const handleOk = (e: MouseEvent) => {
  console.log(e);
  // visible.value = 0;
};

const handleOk1 = async (e: MouseEvent) => {
  console.log(e);
  // loadingRef.value = true

  // const newPromise = new Promise((resolve) => {
  //   const timer = setTimeout(async () => {
  //     console.log('异步更新')
  //     resolve(true)
  //     clearTimeout(timer)
  //   }, 3500)
  // })
  try {
    const aaa =  await new Promise((resolve) => {
      const timer = setTimeout(async () => {
        console.log('异步更新')
        resolve(true)
        visible.value = 0
        clearTimeout(timer)
      }, 3500)
    })
    
    console.log('aaa: ', aaa);
  } finally {
    console.log(1111)
  }

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
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
.mrt20 {
  margin-top: 20px;
}
.btn1 {
  margin-left: 20px;
}
</style>