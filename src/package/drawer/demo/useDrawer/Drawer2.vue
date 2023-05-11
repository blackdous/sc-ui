<template>
  <ScDrawer v-bind="$attrs" @register="register" title="Drawer Title" width="50%">
    Drawer Info.
    <ScButton type="primary" @click="closeDrawer"> 内部关闭drawer </ScButton>
  </ScDrawer>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { ScDrawer, useDrawerInner, ScButton } from 'sc-ui';
  export default defineComponent({
    components: { ScDrawer, ScButton },
    setup() {
      const [register, { closeDrawer }] = useDrawerInner();
      return { register, closeDrawer };
    },
  });
</script>
