<template>
  <ScModal
    @register="register"
    title="Modal Title"
    :helpMessage="['提示1', '提示2']"
    :okButtonProps="{ disabled: true }"
  >
    <ScButton type="primary" @click="closeModal" class="mr-2"> 从内部关闭弹窗 </ScButton>
    <ScButton type="primary" @click="setModalProps"> 从内部修改title </ScButton>
  </ScModal>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useModalInner, ScModal, ScButton } from 'sc-ui';
  export default defineComponent({
    components: {
      ScModal,
      ScButton
    },
    setup() {
      const [register, { closeModal, setModalProps }] = useModalInner();
      // console.log('setModalProps: ', setModalProps);
      return {
        register,
        closeModal,
        setModalProps: () => {
          setModalProps({ title: 'Modal New Title' });
        },
      };
    },
  });
</script>
