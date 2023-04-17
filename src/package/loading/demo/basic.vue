<template>
  <div ref="wrapEl"
    v-loading="loadingRef"
    class="loading-demo"
  >
    <h3>
      组件方式
    </h3>
    <Button class="my-16 mr-16" @click="openCompFullLoading">
      全屏 Loading
    </Button>
    <Button class="my-16" @click="openCompAbsolute"> 容器内 Loading </Button>
    <ScLoading :loading="loading" :absolute="absolute" :isFullPage="isFullPage" />

    <h3>
      函数方式
    </h3>

    <Button class="my-16 mr-16" @click="openFnFullLoading">
      全屏 Loading
    </Button>
    <Button class="my-16" @click="openFnWrapLoading">
      容器内 Loading
    </Button>

    <h3>
      指令方式
    </h3>
    <Button class="my-16 mr-16" @click="openDirectiveLoading">
      打开指令Loading
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, reactive, inject } from 'vue'
// import { Alert } from 'ant-design-vue'
import { useLoading, ScLoading, installGlobalDirectives, ScButton } from 'sc-ui'

export default defineComponent({
  components: { Button: ScButton, ScLoading },
  setup () {
    const wrapEl = ref<ElRef>();
    const loadingRef = ref(false);
    const compState = reactive({
      absolute: false,
      loading: false,
      isFullPage: true
      // theme: 'dark',
      // background: 'rgba(111,111,111,.7)',
      // tip: '加载中...',
    });

    const globalApp = inject('globalApp')
    // @ts-ignore
    installGlobalDirectives(globalApp)

    const [openFullLoading, closeFullLoading] = useLoading({
      // tip: '加载中...',
    });

    const [openWrapLoading, closeWrapLoading] = useLoading({
      target: wrapEl,
      props: {
        // tip: '加载中...',
        isFullPage: false,
        absolute: true,
      },
    });
    

    function openLoading(absolute: boolean, isFullPage: boolean) {
      compState.absolute = absolute;
      compState.loading = true;
      compState.isFullPage = isFullPage
      setTimeout(() => {
        compState.loading = false;
      }, 2000);
    }

    function openCompFullLoading() {
      openLoading(false, true);
    }

    function openCompAbsolute() {
      openLoading(true, false);
    }

    function openFnFullLoading() {
      openFullLoading();

      setTimeout(() => {
        closeFullLoading();
      }, 2000);
    }

    function openFnWrapLoading() {
      openWrapLoading();

      setTimeout(() => {
        closeWrapLoading();
      }, 2000);
    }

    function openDirectiveLoading() {
      loadingRef.value = true;
      setTimeout(() => {
        loadingRef.value = false;
      }, 2000);
    }
    return {
      openCompFullLoading,
      openFnFullLoading,
      openFnWrapLoading,
      openCompAbsolute,
      // wrapEl,
      loadingRef,
      openDirectiveLoading,
      ...toRefs(compState),
      wrapEl
    }
  }
})
</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
.loading-demo h3 {
  margin-bottom: 16px;
}
  
.loading-demo .scbutton {
  margin-right: 8px;
}
</style>