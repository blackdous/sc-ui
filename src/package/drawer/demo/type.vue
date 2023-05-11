<template>
  <ScDrawer 
    v-model:visible="visible"
    title="Basic Modal" 
    @ok="handleOk"
    cancel-text="取消"
    ok-text="确认"
    maskClosable
    :alert-options="alertOptionsRef"
  >
    <div style="background-color: #fff;">我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</div>
  </ScDrawer>
  <Space>
    <Button @click="() => { alertOptionsRef.type = 'info'; openModal('infoinfoinfo') }">
      info
    </Button>
    <Button @click="() => { alertOptionsRef.type = 'success'; openModal('successsuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccess') }">
      success
    </Button>
    <Button @click="() => { alertOptionsRef.type = 'warning'; openModal('warningwarningwarningwarningwarningwarningwarningwarningwarningwarningwarningwarningwarningwarningwarningwarning') }">
      warning
    </Button>
    <Button @click="() => { alertOptionsRef.type = 'error'; openModal('errorerrorerrorerror') }">
      error
    </Button>
  </Space>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Ref } from 'vue'

import { Button, Space } from 'ant-design-vue'
import { ScDrawer } from 'sc-ui'

const visible: Ref<boolean> = ref(false)
const alertOptionsRef = reactive({
  message: '被授权主体支持用户、用户组、角色',
  type: 'info',
  textColor: true,
  showIcon: true
})

const openModal = (infoDes: string) => {
  alertOptionsRef.message = infoDes
  visible.value = true
}

const handleOk = (e: MouseEvent) => {
  console.log(e);
  visible.value = false;
};

</script>
<style scoped>
/* @import 'comment'; */
</style>