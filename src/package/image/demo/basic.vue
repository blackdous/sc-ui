<template>
  <ScImage
    :src="srcRef"
    class="img111"
  ></ScImage>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScImage } from 'sc-ui'

const srcRef = ref()

setTimeout(() => {
  srcRef.value = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  console.log('srcRef.value: ', srcRef.value);
  
}, 1500)
</script>

<style>
.img111 {
  width: 230px;
  height: 330px;
}
</style>