<template>
  <div title="抽屉组件使用示例">
    <ScAlert message="使用 useDrawer 进行抽屉操作" show-icon />
    <ScButton type="primary" class="my-4" @click="openDrawerLoading"> 打开Drawer </ScButton>

    <ScAlert message="内外同时控制显示隐藏" show-icon />
    <ScButton type="primary" class="my-4" @click="openDrawer2(true)"> 打开Drawer </ScButton>
    <ScAlert message="自适应高度/显示footer" show-icon />
    <ScButton type="primary" class="my-4" @click="openDrawer3(true)"> 打开Drawer </ScButton>

    <ScAlert message="内外数据交互" show-icon />
    <ScButton type="primary" class="my-4" @click="send"> 打开Drawer并传递数据 </ScButton>
    <ScAlert message="详情页模式" show-icon />
    <ScButton type="primary" class="my-4" @click="openDrawer5(true)"> 打开详情Drawer </ScButton>
    <Drawer1 @register="register1" />
    <Drawer2 @register="register2" />
    <Drawer3 @register="register3" />
    <Drawer4 @register="register4" />
    <Drawer5 @register="register5" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { ScAlert, ScButton } from 'sc-ui';
  import { useDrawer } from '../../component/useDrawer';
  import Drawer1 from './Drawer1.vue';
  import Drawer2 from './Drawer2.vue';
  import Drawer3 from './Drawer3.vue';
  import Drawer4 from './Drawer4.vue';
  import Drawer5 from './Drawer5.vue';

  export default defineComponent({
    components: { ScAlert, ScButton, Drawer1, Drawer2, Drawer3, Drawer4, Drawer5 },
    setup() {
      const [register1, { openDrawer: openDrawer1, setDrawerProps }] = useDrawer();
      const [register2, { openDrawer: openDrawer2 }] = useDrawer();
      const [register3, { openDrawer: openDrawer3 }] = useDrawer();
      const [register4, { openDrawer: openDrawer4 }] = useDrawer();
      const [register5, { openDrawer: openDrawer5 }] = useDrawer();
      function send() {
        openDrawer4(true, {
          data: 'content',
          info: 'Info',
        });
      }
      function openDrawerLoading() {
        openDrawer1();
        setDrawerProps({ loading: true });
        setTimeout(() => {
          setDrawerProps({ loading: false });
        }, 2000);
      }
      return {
        register1,
        openDrawer1,
        register2,
        openDrawer2,
        register3,
        openDrawer3,
        register4,
        register5,
        openDrawer5,
        send,
        openDrawerLoading,
      };
    },
  });
</script>
