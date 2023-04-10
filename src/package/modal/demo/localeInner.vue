<template>
  <div class="confirm">
    <Space direction="vertical">
      <ConfigProvider
        :locale="locale === 'en' ? enUS : zhCN"
      >
        <ScButton
        @click="confirmHandle"
        >
          confirm
        </ScButton>
        <ScModal
          v-model:visible="visible"
          title="modal测试代码"
        >
          <div>
            测试代码
          </div>
        </ScModal>
        <ScButton
        @click="modalHandle"
        >
          scModal
        </ScButton>
      </ConfigProvider>
    </Space>
  </div>
</template>

<script setup lang="ts">
//@ts-nocheck
import { computed, ref } from 'vue'
import { ScButton, ScModal } from 'sc-ui'
import { Space, Modal, ConfigProvider } from 'ant-design-vue'
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

// console.log('enUS: ', enUS.locale);
// console.log('zhCN.locale: ', zhCN.locale);
// const locale = ref(zhCN.locale);

const visible = ref(false)

interface PropsType {
  locale: string
}

const props = withDefaults(defineProps<PropsType>(), {
  locale: zhCN.locale
})

const locale = computed(() => {
  console.log('props.locale: ', props);
  console.log('en: ', props.locale === 'en' ? enUS : zhCN);
  return props.locale
})

const confirmHandle = () => {
  ScModal.confirm({
    type: 'warning',
    content: '测试代码'
  })
}

const modalHandle = () => {
  visible.value = true
}
</script>

<style lang="less">
</style>