<template>
  <div>
    <ScSwitch
      v-model:checked="checked"
      checked-children="开" un-checked-children="关"
    >
      
    </ScSwitch>
  </div>
  <div>
    <ScSwitch
      v-model:checked="checked1"
    >
      <template #checkedChildren>
        <CheckOutlined />
      </template>
      <template #unCheckedChildren>
        <CloseOutlined/>
      </template>
    </ScSwitch>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScSwitch } from 'sc-ui'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons-vue'
import '../../../style/index.less'

const checked = ref(false)
const checked1 = ref(false)

</script>
