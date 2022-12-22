<template>
  <ScModal
    v-bind="$attrs"
    destroyOnClose
    @register="register"
    title="Modal Title"
    @visible-change="handleShow"
    style="top: 20px"
  >
    <template #insertFooter>
      <ScButton type="primary" danger @click="setLines" :disabled="loading"
        >点我更新内容</ScButton
      >
    </template>
    <template v-if="loading">
      <div class="empty-tips">加载中，稍等3秒……</div>
    </template>
    <template v-if="!loading">
      <ScScrollbar minHeight="100px" maxHeight="300px">
        <ul>
          <li v-for="index in lines" :key="index">加载完成{{ index }}！</li>
        </ul>
      </ScScrollbar>
    </template>
  </ScModal>
</template>
<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  import { useModalInner, ScModal, ScButton, ScScrollbar } from 'sc-ui';
  export default defineComponent({
    components: {
      ScModal,
      ScButton,
      ScScrollbar
    },
    setup() {
      const loading = ref(true);
      const lines = ref(10);
      const [register, { setModalProps, redoModalHeight }] = useModalInner();

      watch(
        () => lines.value,
        () => {
          redoModalHeight();
        },
      );

      function handleShow(visible: boolean) {
        if (visible) {
          loading.value = true;
          setModalProps({ loading: true, confirmLoading: true });
          setTimeout(() => {
            lines.value = Math.round(Math.random() * 30 + 5);
            loading.value = false;
            setModalProps({ loading: false, confirmLoading: false });
          }, 3000);
        }
      }

      function setLines() {
        lines.value = Math.round(Math.random() * 20 + 10);
      }
      return { register, loading, handleShow, lines, setLines };
    },
  });
</script>
<style scoped>
  .empty-tips {
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
</style>
