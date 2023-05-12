<template>
  <Drawer
    v-bind="vBind"
    v-model:visible="visibleRef"
    :class="className"
    ref="drawerRef"
  >
    <!-- <template template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot>
    </template> -->

    <template #title>
      <header
        v-if="curProps.title || $slots.title"
        :class="[baseClass + '-header']"
      >
        <div :class="[baseClass + '-title']"  v-if="!$slots.title">
          <span :class="[baseClass + '-txt']">
            {{ curProps.title }}
            <Tooltip placement="bottomRight" trigger="hover">
              <i class="sc-ui sc-question-circle"></i>
              <template #title>
                {{ curProps.helpInfo }}
              </template>
            </Tooltip>
          </span>
          <span v-if="$slots.titleToolbar" :class="[baseClass + '-toolbar']">
            <slot name="titleToolbar"></slot>
          </span>
        </div>
        <slot name="title" v-else></slot>
      </header>
    </template>
    <template #default>
      <span 
        v-if="curProps.closable && curProps.visible" 
        :class="[baseClass + '-close', curProps.confirmLoading || loadingRef ? 'not-allow' : '']"
        @click="handleClose"
      >
        <span :class="[baseClass + '-close__btn']">
          <i class="sc-ui sc-a-Union11"></i>
        </span>
      </span>
      <ScAlert
        v-if="curProps.alertOptions"
        v-bind="curProps.alertOptions"
        ref="alertRef"
        size="mini"
        :class="[baseClass + '-alert']"
      >
      </ScAlert>
      <ScScrollbar
        v-loading="vBind.loading"
        ref="scrollBarRef"
        v-bind="scrollbarProps"
        :wrapClass="baseClass + '-scrollbar'"
        :fullscreen="false"
        :loading-tip="curProps.loadingText || '加载中...'"
      >
        <slot name="default"></slot>
      </ScScrollbar>
      <footer
        v-if="curProps.showFooter || $slots.footer"
        :class="[baseClass + '-footer', curProps.footerAlign ? 'text-' + curProps.footerAlign : '']"
      >
        <template v-if="curProps.showFooter && !$slots.footer">
          <slot name="insertFooter"></slot>
          <ScButton
            v-if="curProps.showCancelBtn"
            v-bind="curProps.cancelButtonProps"
            status="info"
            :loading="cancelLoadingRef"
            :disabled="curProps.confirmLoading || loadingRef"
            @click="handleClose"
          > 
            {{ curProps.cancelText || '取消' }}
          </ScButton>
          <ScButton 
            v-if="curProps.showOkBtn"
            type="primary"
            v-bind="curProps.okButtonProps"
            :loading="curProps.confirmLoading || loadingRef"
            @click="$event => handleOk()"
          >
            {{ curProps.okText || '确定' }}
          </ScButton>
          <slot name="afterFooter"></slot>
        </template>
        <slot name="footer" v-else="$slots.footer"></slot>
      </footer>
    </template>
  </Drawer>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref, unref, watch, nextTick, watchEffect, getCurrentInstance } from 'vue'
import { Drawer, Tooltip } from 'ant-design-vue'

import { ScAlert } from '../../alert'
import { ScScrollbar } from '../../scrollbar'
import { ScButton } from '../../button'
import { basePrefixCls } from '../../../constant'
import { optimizedResize } from '../../../utils/dom/addEventListener'
import { pxToRem, buildUUID, isFunction, deepMerge } from '../../../utils'
import { basicProps } from './props'
import { DrawerMethods, DrawerProps } from './typing'
import LoadingDirective from '../../../directives/loading'

export default defineComponent({
  name: 'ScDrawer',
  inheritAttrs: false,
  components: { Drawer, Tooltip, ScAlert, ScScrollbar, ScButton },
  props: basicProps,
  emits: ['update:visible', 'close', 'register', 'ok', 'cancel'],
  directives: {
    loading: LoadingDirective
  },
  setup (props, { attrs, emit, expose }) {
    const baseClass = basePrefixCls + 'Drawer'
    const uuid = baseClass + buildUUID()
    const maxHeight = ref()
    const drawerRef = ref()
    const loadingRef = ref(false)
    const visibleRef = ref(false)
    const propsRef = ref()
    const cancelLoadingRef = ref(false)
    const scrollbarRef = ref()
    const alertRef = ref()

    const curProps = computed(() => {
      return {
        ...props,
        ...attrs,
      }
    })
    const vBind = computed(() => {
      const { widthSize, width, confirmLoading, maskClosable } = props
      return {
        ...props,
        ...attrs,
        ...propsRef.value,
        title: undefined,
        width: width ? width : (widthSize === 'middle' ? 500 : widthSize === 'large' ? 760 : 300),
        closable: false,
        maskClosable: confirmLoading ? false : maskClosable
      }
    })
    const className = computed(() => {
      const classNames = [baseClass, uuid]
      return classNames
    })

    const scrollbarProps = computed(() => {
      const { scrollbarOptions } = unref(curProps)
      // const bbb = {
      //   ...scrollbarOptions,
      //   // @ts-ignore
      //   maxHeight: scrollbarOptions?.maxHeight ? scrollbarOptions?.maxHeight :  maxHeight.value,
      //   // @ts-ignore
      //   height: scrollbarOptions?.maxHeight ? scrollbarOptions?.maxHeight :  maxHeight.value
      // }
      return {
        ...scrollbarOptions,
        // @ts-ignore
        maxHeight: scrollbarOptions?.maxHeight ? scrollbarOptions?.maxHeight :  maxHeight.value,
        // @ts-ignore
        height: scrollbarOptions?.maxHeight ? scrollbarOptions?.maxHeight :  maxHeight.value
      }
    })
    const updateMaxHeight = () => {
      if (window) {
        const headerHeight:number = document.querySelector('.' + uuid + ' .ant-drawer-header')?.scrollHeight || 0
        const footerHeight:number = document.querySelector('.' + uuid + ' .scDrawer-footer')?.scrollHeight || 0
        const alertHeight:number = (document.querySelector('.' + uuid + ' .scDrawer-alert')?.scrollHeight || 0) + 4
        const innerHeightView:number = (window && window?.innerHeight) || 0
        maxHeight.value = pxToRem(innerHeightView - headerHeight - footerHeight - alertHeight + 'px')
      }
    }
    onMounted(() => {
      // updateMaxHeight()
      optimizedResize.add(updateMaxHeight)
    })

    watch(() => visibleRef.value, (val) => {
      emit('update:visible', val)
      if (val) {
        nextTick(() => {
          updateMaxHeight()
        })
      }
    })

    watchEffect(() => {
      visibleRef.value = !!(unref(vBind).visible)
    })

    /**
     * @description: 设置modal参数
    */
    function setDrawerProps(props: Partial<DrawerProps>): void {
      // Keep the last setModalProps
      propsRef.value = deepMerge(unref(propsRef) || ({} as any), props);
      if (Reflect.has(props, 'visible')) {
        // @ts-ignore
        visibleRef.value = !!props?.visible;
      }
    }

    const handleClose = async(e:Event) => {
      e?.stopPropagation();
      const { confirmLoading } = curProps.value
      if (confirmLoading || loadingRef.value) {
        return false
      }
      if (unref(vBind).closeFunc && isFunction(unref(vBind).closeFunc)) {
        cancelLoadingRef.value = true
        // @ts-ignore
        const isClose: boolean = await unref(vBind).closeFunc()
        visibleRef.value = isClose
        cancelLoadingRef.value = false
        emit('close', false)
        emit('cancel', false)
        return;
      } else {
        visibleRef.value = false
        emit('close', false)
        emit('cancel', false)
      }
    }

    const handleOk = async () => {
      const { onOk } = curProps.value
      try {
        if (onOk && isFunction(onOk)) {
          const ret = onOk(false)
          // @ts-ignore
          if(ret && ret.then) {
            loadingRef.value = true
            // @ts-ignore
            ret.then((res:any) => {
              loadingRef.value = false
            }).catch((error: any) => {
              console.log('error: ', error);
              loadingRef.value = false
            })
          } 
        }
      } catch (error) {
        loadingRef.value = false
        console.log('error: ', error);
      }
    }

    const modalMethods: DrawerMethods = {
      setDrawerProps,
      emitVisible: undefined
    };

    const instance = getCurrentInstance();
    if (instance) {
      emit('register', modalMethods, instance.uid)
    }

    expose({
      setDrawerProps,
      scrollbarRef,
      alertRef
    })

    return {
      vBind,
      curProps,
      className,
      baseClass,
      maxHeight,
      scrollbarProps,
      drawerRef,
      uuid,
      loadingRef,
      visibleRef,
      cancelLoadingRef,
      scrollbarRef,
      alertRef,
      handleClose,
      handleOk
    }
  }
})
</script>