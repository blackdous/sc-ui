<template>
  <div class="disFlex">
    <ScIcon type="icon-tiaozhuan"></ScIcon>
    <ScIcon type="icon-wodepingzheng"></ScIcon>
    <ScIcon type="icon-Frame1"></ScIcon>
    <ScIcon type="icon-bell-fill"></ScIcon>
    <ScIcon type="icon-ziwang"></ScIcon>
    <ScIcon type="icon-hourglass"></ScIcon>
    <ScIcon type="icon-a-Union11" class="sss"></ScIcon>
  </div>
</template>

<script lang='ts' setup>
import { ScIcon } from 'sc-ui'
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
