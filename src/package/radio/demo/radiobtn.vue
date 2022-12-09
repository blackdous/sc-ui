<template>
  <div>
    <Radio
      v-model:checked="checked"
    >
      未选中
    </Radio>
  </div>
</template>

<script setup lang="ts">
import { Radio } from 'ant-design-vue'
import { ref } from 'vue'
import "ant-design-vue/dist/antd.css"
import '../../../style/index.less'

const checked = ref<boolean>(false)
</script>
