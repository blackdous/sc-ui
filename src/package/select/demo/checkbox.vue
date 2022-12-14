<template>
  <div class="mt20">
    <ScSelect
      v-model:value="value"
      style="width: 280px"
      :options="options"
      mode="tags"
      placeholder="请选择"
      optionMode="checkbox"
      @change="handleChange"
      allow-clear="true"
    >
    </ScSelect>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScSelect } from 'sc-ui'
import "ant-design-vue/dist/antd.css"
import '../../../style/index.less'

const value = ref(['a1'])

const options = [...Array(6)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1), label: (i + 10).toString(36) + (i + 1) }))

const handleChange = (val:string) => {
  console.log('val: ', val);
}

</script>

<style scoped>
.mt20 {
  margin-top: 20px;
}
</style>
