<template>
  <div class="flexCon">
    <div class="ml20">
      <ScSelect
        v-model:value="value"
        :options="options"
        class="test11"
      >
        <template #prefixIcon>
          <i class="sc-ui sc-tiaozhuan" style="color: rgba(0,0,0,.4); font-size: 14px;"></i>
          <span style="font-size: 14px;color: rgba(0,0,0,.6);padding-left: 2px;">
            标题
          </span>
        </template>
      </ScSelect>
    </div>
    <div class="ml20">
      <ScSelect
        v-model:value="value"
        :options="options"
        class="test11"
      >
        <template #prefixIcon>
          <span style="font-size: 14px;color: rgba(0,0,0,.6);padding-left: 2px;">
            账单类型
          </span>
        </template>
      </ScSelect>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue'
import { ScSelect } from 'sc-ui'

// const options = [...Array(6)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1), label: (i + 10).toString(36) + (i + 1) }))

const value = ref('a1')

const options:any[] = []

for(let i = 0; i< 100; i++) {
  options.push({
    label: 'JackJackJackJackJackJackJackJackJackJackJackJackJackJack' + i,
    value: i,
    key: 'Jack' + i
  })
}

</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
.ml20 + .ml20 {
  margin-left: 20px;
}
.flexCon {
  display: flex;
}
.test11 {
  width: 216px;
}
</style>
