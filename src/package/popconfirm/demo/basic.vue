<template>

  <div class="btns">
    <ScPopconfirm
      title="基础气泡确认框文案示意文字按钮"
      okText="确认"
      cancelText="取消"
      icon=""
      :isShowIcon="false"
    >
      <ScButton>
        基础气泡确认框
      </ScButton>
    </ScPopconfirm>
    
  </div>
</template>

<script setup lang="ts">
import { ScPopconfirm, ScButton} from 'sc-ui'

</script>