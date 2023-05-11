<template>
  <ScDrawer v-bind="$attrs" title="Modal Title" width="50%" showFooter @ok="handleOk">
    <p class="h-20" v-for="index in 40" :key="index">根据屏幕高度自适应</p>
    <template #insertFooter>
      <ScButton> btn</ScButton>
    </template>
    <template #centerFooter>
      <ScButton> btn2</ScButton>
    </template>

    <template #appendFooter>
      <ScButton> btn3</ScButton>
    </template>

    <!-- <template #footer>
      <bz-button> customerFooter</bz-button>
    </template> -->
  </ScDrawer>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { ScDrawer, ScButton } from 'sc-ui';
  export default defineComponent({
    components: { ScDrawer, ScButton },
    setup() {
      return {
        handleOk: () => {
          console.log('=====================');
          console.log('ok');
          console.log('======================');
        },
      };
    },
  });
</script>
