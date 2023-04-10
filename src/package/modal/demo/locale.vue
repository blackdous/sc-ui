<template>
  <div class="confirm">
    <ConfigProvider
      :locale="locale === 'en' ? enUS : zhCN"
    >
      <Space direction="vertical">
        <RadioGroup v-model:value="locale">
          <RadioButton key="en" :value="enUS.locale">English</RadioButton>
          <RadioButton key="cn" :value="zhCN.locale">中文</RadioButton>
        </RadioGroup>

        <div style="height: 20px;"></div>
        <ConfirmInner :locale="locale"></ConfirmInner>
      </Space>
    </ConfigProvider>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { ConfigProvider, RadioButton, RadioGroup} from 'ant-design-vue'
import { ScModal } from 'sc-ui'
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

import ConfirmInner from './localeInner.vue'

const locale = ref(zhCN.locale)

ScModal.changeConfirmLocale(zhCN)

watch(() => locale.value, (val) => {
  console.log('val: ', val);
  val  === 'en' ? ScModal.changeConfirmLocale(enUS) : ScModal.changeConfirmLocale(zhCN)
})
</script>

<style lang="less">
</style>