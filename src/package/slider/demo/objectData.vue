<template>
  <div>
    <ScSlider
      :data="data"
      :infos="tooltipInfos"
      v-model:value="valueRef"
      unit="个月"
      :customMarker="true"
      @change="handleChange"
    >
    </ScSlider>
  </div>
</template>

<script lang='ts' setup>
import { ref, watch, h } from 'vue'
import { ScSlider } from 'sc-ui'

const valueRef = ref('1')

watch(() => valueRef.value, (val) => {
  console.log('val: ', val);
})

const handleChange = (val:string) => {
  console.log('val: ', val);
}

const data = {'1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '12': 12}

const tooltipInfos = {
  '1': {
    bgColor: 'rgb(252, 117, 66)',
    desc: '1111111111 +++++  AA',
    color: '#fff',
    Icon: h('i', { class: 'sc-ui sc-gift' }),
    // dotLabel: 'labelAAA',
    marker:{"label":"1", icon: h('i', { class: 'sc-ui sc-gift' }), markerColor: 'rgb(252, 117, 66)'}
  },
  '2': {
    bgColor: 'rgb(252, 117, 66)',
    desc: '2222222222 +++++  BBBBBB',
    color: '#fff',
    Icon: 'https://iph.href.lu/16x16',
    // label: 'labeBBBBBB',
    marker:{"label":"2", icon: 'https://iph.href.lu/16x16'}
  },
  '3': {
    bgColor: 'rgb(252, 117, 66)',
    desc: '333333 +++++  CCCCCCC',
    color: '#fff',
    Icon: 'https://iph.href.lu/16x16',
    marker:{"label":"3"}
  },
  '4': {
    bgColor: 'rgb(252, 117, 66)',
    desc: '4444444 +++++  DDDDDDDD',
    color: '#fff',
    marker:{"label":"4月"}
  },
  '5': {
    bgColor: 'rgb(252, 117, 66)',
    desc: '4444444 +++++  DDDDDDDD',
    color: '#fff',
    marker:{"label":"5月", icon: h('i', { class: 'sc-ui sc-gift' }), markerColor: 'rgb(252, 117, 66)'}
  },
  '6': {
    bgColor: 'rgb(252, 117, 66)',
    desc: '4444444 +++++  DDDDDDDD',
    color: '#fff',
    marker:{"label":"6月"}
  },
  '7': {
    bgColor: 'rgb(252, 117, 66)',
    desc: '4444444 +++++  DDDDDDDD',
    color: '#fff',
    marker:{"label":"7月"}
  },
  '12': {
    bgColor: 'rgb(252, 117, 66)',
    desc: '优惠半年',
    color: '#fff',
    dotLabel: '一年',
    Icon: h('i', { class: 'sc-ui sc-gift' }),
    marker:{"label":"一年"}
  },
}
    

</script>
