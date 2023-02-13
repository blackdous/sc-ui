<template>
  <ScModal v-bind="$attrs" style="top: 20px" title="Modal Title" :helpMessage="['提示1', '提示2']" width="700px">
    <ScScrollbar minHeight="100px" maxHeight="300px">
      <p class="h-20" v-for="index in 20" :key="index">根据屏幕高度自适应</p>
    </ScScrollbar>
  </ScModal>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { ScModal, ScScrollbar } from 'sc-ui';
  export default defineComponent({
    components: {
      ScModal,
      ScScrollbar
    },
    setup() {
      return {};
    },
  });
</script>
<style scoped>
@import '';
</style>