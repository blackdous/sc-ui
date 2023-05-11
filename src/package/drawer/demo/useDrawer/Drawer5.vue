<template>
  <ScDrawer v-bind="$attrs" :isDetail="true" title="Drawer Title5">
    <p class="h-20">Content Message</p>
    <template #titleToolbar> toolbar </template>
  </ScDrawer>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { ScDrawer } from 'sc-ui';
  export default defineComponent({
    components: { ScDrawer },
  });
</script>
