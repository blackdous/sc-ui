<template>
  <ScDrawer v-bind="$attrs" title="Drawer Title" width="50%"> Drawer Info. </ScDrawer>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { ScDrawer } from 'sc-ui';
  export default defineComponent({
    components: { ScDrawer },
    setup() {
      return {};
    },
  });
</script>
