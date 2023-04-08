<template>
  <div>
    <ScBadge
      color="rgb(0, 168, 112)"
      shadow
      class="test"
    >
      <template #text>
        <span>
          运行中
        </span>
        <span>
          #00A870
        </span>
      </template>
    </ScBadge>
  </div>
  <div>
    <ScBadge
      color="#AEB1C1"
      class="test"
      shadow
    >
      <template #text>
        <span>
          运行中
        </span>
        <span>
          AEB1C1
        </span>
      </template>
    </ScBadge>
  </div>
</template>

<script lang='ts' setup>
import {  } from 'vue'
import { ScBadge } from 'sc-ui'
</script>
