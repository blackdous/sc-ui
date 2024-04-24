<template>
  <div class="progress-wrapper">
    <h3>不带信息</h3>
    <Progress :percent="40" status="active" size="small" :show-info="false"></Progress>
    <Progress :percent="100" status="active" size="small" :show-info="false"></Progress>
    <h3>带信息</h3>
    <Progress :percent="30" size="small" status="active"></Progress>
    <Progress :percent="100" size="small" status="active"></Progress>
  </div>
  <div class="progress-wrapper">
    <Progress :percent="30" size="small" status="active"></Progress>
    <Progress :percent="40" size="small" status="active" :show-info="false"></Progress>
  </div>
  <div class="progress-wrapper">
    mini 滚动条
    <Progress :percent="30" size="small" status="active" class="mini-progress"></Progress>
    <Progress :percent="88" size="small" status="active" class="mini-progress"></Progress>
    <Progress :percent="100" size="small" status="active" class="mini-progress" :show-info="false"></Progress>
  </div>
  

</template>

<script lang='ts' setup>
import {  } from 'vue'
import { Progress } from 'ant-design-vue'
</script>
<style lang="less">
  .progress-wrapper {
    width: 200px;
    margin-bottom: 20px;
  }
</style>