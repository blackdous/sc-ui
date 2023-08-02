<template>
  <ScEllipsis 
    style="max-width: 240px" 
    hoverSuffix
    :tooltip="false"
    copyTxt="11111"
    >
    <!-- line-clamp="3" -->
    浮动元素是如何定位的
  </ScEllipsis>
</template>

<script lang='ts' setup>
import { ScEllipsis } from 'sc-ui'
</script>
