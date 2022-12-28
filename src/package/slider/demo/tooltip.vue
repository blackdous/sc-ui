<template>
  <div>
    <ScSlider
      :data="data"
      :tooltipInfos="tooltipInfos"
      v-model:value="valueRef"
      @change="handleChange"
    >
      
    </ScSlider>
  </div>
</template>

<script lang='ts' setup>
import { computed, ref, watch, h } from 'vue'
import { ScSlider } from 'sc-ui'

const valueRef = ref('1')

watch(() => valueRef.value, (val) => {
  console.log('val: ', val);
})

const handleChange = (val:string) => {
  console.log('val: ', val);
}

const data = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', '6': 'F', '7': 'G' }

const tooltipInfos = {
  '1': {
    bgColor: 'rgb(252, 117, 66)',
    desc: '1111111111 +++++  AA',
    color: '#fff',
    Icon: h('span', { class: 'sc-ui ' }),
    dotLabel: 'label1111AAA'
  },
  '2': {
    bgColor: 'rgb(252, 117, 66)',
    desc: '2222222222 +++++  BBBBBB',
    color: '#fff',
    Icon: 'https://iph.href.lu/16x16',
    label: 'label1111BBBBBB'
  },
  '3': {
    bgColor: 'rgb(252, 117, 66)',
    desc: '333333 +++++  CCCCCCC',
    color: '#fff',
    Icon: 'https://iph.href.lu/16x16',
  },
  '4': {
    bgColor: 'rgb(252, 117, 66)',
    desc: '4444444 +++++  DDDDDDDD',
    color: '#fff',
  }
}
    

</script>
