<template>
  <div class="mt20">
    <ScEllipsis :line-clamp="2" style="max-width: 220px;">
      {{str}}
    </ScEllipsis>
  </div>
  <!-- <div class="mt20">
    <ScEllipsis :line-clamp="2" style="max-width: 220px;">
      电灯熄灭 物换星移 泥牛入海<br>黑暗好像 电灯熄灭  泥牛入海
      电灯熄灭 物换星移 泥牛入海<br>黑暗好像 电灯熄灭  泥牛入海
    </ScEllipsis>
  </div> -->
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScEllipsis } from 'sc-ui'

const str = ref<string>('1212312312312as da12312 3as dqwe 1231 12121')

setTimeout(() => {
  str.value = '1212312312312as da12312 3as dqwe 1231 1212112131231231222'
}, 3000)
</script>
<style>
  .mt20 {
    margin-top: 20px;
  }
</style>
