<template>
  <div class="mb20">
    <ScRadioGroup @change="valChange" v-model:value="value1" styleMode="scLine">
      <RadioButton value="random">随机可用区</RadioButton>
      <RadioButton value="a">可用区A</RadioButton>
      <RadioButton value="b" disabled>可用区B</RadioButton>
      <RadioButton value="c">可用区C</RadioButton>
    </ScRadioGroup>
  </div>
  <div class="mb20">
    <ScRadioGroup @change="valChange" v-model:value="value1" styleMode="btnLine">
      <RadioButton value="random">随机可用区</RadioButton>
      <RadioButton value="a">可用区A</RadioButton>
      <RadioButton value="b" disabled>可用区B</RadioButton>
      <RadioButton value="c">可用区C</RadioButton>
    </ScRadioGroup>
  </div>
  <div class="mb20">
    <ScRadioGroup @change="valChange" widthSize="large" v-model:value="value1" styleMode="scLine">
      <RadioButton value="random">随机可用区</RadioButton>
      <RadioButton value="a">可用区A</RadioButton>
      <RadioButton value="b" disabled>可用区B</RadioButton>
      <RadioButton value="c">可用区C</RadioButton>
    </ScRadioGroup>
  </div>
  <div class="mb20">
    <ScRadioGroup @change="valChange" class="radio-min-width142" v-model:value="value1" styleMode="scLine">
      <RadioButton value="random">随机可用区</RadioButton>
      <RadioButton value="a">可用区A</RadioButton>
      <RadioButton value="b" disabled>可用区B</RadioButton>
      <RadioButton value="c">可用区C</RadioButton>
    </ScRadioGroup>
  </div>
  <div class="mb20">
    <ScRadioGroup @change="valChange" v-model:value="value1" styleMode="btnTabs">
      <RadioButton value="random">随机</RadioButton>
      <RadioButton value="a">可用</RadioButton>
      <RadioButton value="b" disabled>可用</RadioButton>
      <RadioButton value="c">可用</RadioButton>
    </ScRadioGroup>
  </div>
</template>

<script setup lang="ts">
import { RadioButton } from 'ant-design-vue'
import { ScRadioGroup } from 'sc-ui'
import { ref } from 'vue'

const value1 = ref<string>('a')

const valChange = (e:Event) => {
  console.log('e: ', e);
}
</script>
<style scoped>
.mb20 {
  margin-bottom: 20px;
}
</style>