<template>
  <div>
    <ScAlert
      message="使用 useModal 进行弹窗操作"
      show-icon
    />
    <ScButton class="my-16" @click="openModalLoading">
      打开弹窗,加载动态数据并自动调整高度(默认可以拖动/全屏)
    </ScButton>

    <ScAlert message="内外同时同时显示隐藏" show-icon />
    <ScButton  class="my-16" @click="openModal2"> 打开弹窗 </ScButton>
    <ScAlert message="自适应高度" show-icon />
    <ScButton  class="my-16" @click="openModal3"> 打开弹窗 </ScButton>

    <ScAlert message="内外数据交互" show-icon />
    <ScButton  class="my-16" @click="send"> 打开弹窗并传递数据 </ScButton>

    <ScAlert message="使用动态组件的方式在页面内使用多个弹窗" show-icon />
    <a-space>
      <ScButton  class="my-16" @click="openTargetModal(1)"> 打开弹窗1 </ScButton>
      <ScButton  class="my-16" @click="openTargetModal(2)"> 打开弹窗2 </ScButton>
      <ScButton  class="my-16" @click="openTargetModal(3)"> 打开弹窗3 </ScButton>
      <ScButton  class="my-16" @click="openTargetModal(4)"> 打开弹窗4 </ScButton>
    </a-space>

    <component :is="currentModal" v-model:visible="modalVisible" :userData="userData" />

    <Modal1 @register="register1"/>
    <Modal2 @register="register2" />
    <Modal3 @register="register3" />
    <Modal4 @register="register4" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, shallowRef, ComponentOptions, ref, nextTick } from 'vue';
  import { Space } from 'ant-design-vue';
  import { useModal, ScButton, ScAlert } from 'sc-ui';
  import Modal1 from './Modal1.vue';
  import Modal2 from './Modal2.vue';
  import Modal3 from './Modal3.vue';
  import Modal4 from './Modal4.vue';

  export default defineComponent({
    components: { ScAlert, ASpace: Space, Modal1, Modal2, Modal3, Modal4, ScButton },
    setup() {
      const currentModal = shallowRef<Nullable<ComponentOptions>>(null);
      const [register1, { openModal: openModal1 }] = useModal();
      const [register2, { openModal: openModal2 }] = useModal();
      const [register3, { openModal: openModal3 }] = useModal();
      const [register4, { openModal: openModal4 }] = useModal();
      const modalVisible = ref<Boolean>(false);
      const userData = ref<any>(null);

      function send() {
        openModal4(true, {
          data: 'content',
          info: '我是默认信息',
        });
      }
      function openModalLoading() {
        openModal1(true);
      }

      function openTargetModal(index) {
        switch (index) {
          case 1:
            currentModal.value = Modal1;
            break;
          case 2:
            currentModal.value = Modal2;
            break;
          case 3:
            currentModal.value = Modal3;
            break;
          default:
            currentModal.value = Modal4;
            break;
        }
        nextTick(() => {
          // ' useModal '不能与动态组件一起使用
          // 通过' userData ' prop传递数据
          userData.value = { data: Math.random(), info: '我是传递的信息' };
          // 打开目标弹窗
          modalVisible.value = true;
        });
      }

      return {
        register1,
        openModal1,
        register2,
        openModal2,
        register3,
        openModal3,
        register4,
        openModal4,
        modalVisible,
        userData,
        openTargetModal,
        send,
        currentModal,
        openModalLoading,
      };
    },
  });
</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
  .demo-slot .ant-alert {
    margin: 16px 0;
  }
</style>