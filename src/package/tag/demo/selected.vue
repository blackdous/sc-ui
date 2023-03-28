<template>
  <Space direction="vertical" :size="12">
    <div>
      <ScTag
        v-model:checked="checked1"
        selected
        type="dark"
        @change="handleChange"
      >
        默认标签
      </ScTag>
    </div>
  </Space>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue'
import { Space } from 'ant-design-vue';
import { ScTag } from 'sc-ui'

const checked1 = ref(false)

const handleChange = (checked: boolean) => {
  console.log('checked: change', checked)
}

watch(() => checked1.value, (val) => {
  console.log('val: watch', val);
})
</script>
