<template>
  <div ref="wrapEl"
    v-loading="loadingRef"
  >
    <h3>
      组件方式
    </h3>
    <Button class="my-16 mr-16" type="primary" @click="openCompFullLoading">
      全屏 Loading
    </Button>
    <Button class="my-16" type="primary" @click="openCompAbsolute"> 容器内 Loading </Button>
    <ScLoading :loading="loading" :absolute="absolute" :theme="theme" :isFullPage="isFullPage" :background="background" :tip="tip" />

    <h3>
      函数方式
    </h3>

    <Button class="my-16 mr-16" type="primary" @click="openFnFullLoading">
      全屏 Loading
    </Button>
    <Button class="my-16" type="primary" @click="openFnWrapLoading">
      容器内 Loading
    </Button>

    <h3>
      指令方式
    </h3>
    <Button class="my-16 mr-16" type="primary" @click="openDirectiveLoading">
      打开指令Loading
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, reactive, inject } from 'vue'
import { Alert, Button } from 'ant-design-vue'
import { useLoading, ScLoading, installGlobalDirectives } from 'sc-ui'

import '../../../style/index.less'

export default defineComponent({
  components: { Alert, Button, ScLoading },
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
    }
  }
})
</script>
