<template>
  <ScModal
    v-bind="$attrs"
    @register="register"
    title="Modal Title"
    @visible-change="handleVisibleChange"
  >
    <div class="pt-3px pr-3px">
      {{ model }}
    </div>
  </ScModal>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue';
  import { useModalInner, ScModal} from 'sc-ui';

  export default defineComponent({
    props: {
      userData: { type: Object },
    },
    components: {
      ScModal
    },
    setup(props) {
      const modelRef = ref({});

      const [register] = useModalInner((data) => {
        data && onDataReceive(data);
      });

      function onDataReceive(data) {
        console.log('Data Received', data);
        modelRef.value = { data: data.data, info: data.info };
      }

      function handleVisibleChange(v) {
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      return { register, model: modelRef, handleVisibleChange };
    },
  });
</script>
<style scoped>
/* @import 'comment'; */
</style>