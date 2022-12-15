<template>
  <ScModal 
    v-model:visible="visible"
    title="Basic Modal"
    @ok="handleOk"
    cancel-text="取消"
    ok-text="确认"
    maskClosable
  >
    <template #footer>
      <div class="scModal-footer">
        <Button
          class="scModal-footer__cancel"
          @click="handleOk"
        >
          取消
        </Button>
        <Button
          class="scModal-footer__ok"
          type="primary"
          @click="handleOk"
        >
          确认
        </Button>
      </div>
    </template>
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
import '../../../style/index.less'

const visible: Ref<boolean> = ref(false)

const openModal = () => {
  visible.value = true
}

const handleOk = (e: MouseEvent) => {
  console.log(e);
  visible.value = !visible.value;
};

</script>

<style lang="less">
</style>