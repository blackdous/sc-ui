<template>
  <div class="disFlex">
    <div id="bid"></div>
  </div>
</template>

<script lang='ts' setup>
import { onMounted } from 'vue'
import lottie from 'lottie-web'

// import alertCircle from './alertCircle.json'
import visibilityV2 from './visibilityV2.json'

onMounted(() => {
  lottie.loadAnimation({
    container: document.getElementById('bid'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: visibilityV2
    // path: alertCircle
  })
})
</script>

<style scoped>
.sss {
  font-size: 22px;
  color: red;
}
.disFlex {
  align-items: center;
}
.disFlex .anticon  {
  padding: 2px 14px;
}
</style>
