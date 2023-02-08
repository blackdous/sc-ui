<template>
  <div id="components-ScPopconfirm-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <ScPopconfirm placement="topLeft">
        <template #title>
          <span>prompt text</span>
        </template>
        <ScButton>TL</ScButton>
      </ScPopconfirm>
      <ScPopconfirm placement="top">
        <template #title>
          <span>prompt text</span>
        </template>
        <ScButton>Top</ScButton>
      </ScPopconfirm>
      <ScPopconfirm placement="topRight">
        <template #title>
          <span>prompt text</span>
        </template>
        <ScButton>TR</ScButton>
      </ScPopconfirm>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <ScPopconfirm placement="leftTop">
        <template #title>
          <span>prompt text</span>
        </template>
        <ScButton>LT</ScButton>
      </ScPopconfirm>
      <ScPopconfirm placement="left">
        <template #title>
          <span>prompt text</span>
        </template>
        <ScButton>Left</ScButton>
      </ScPopconfirm>
      <ScPopconfirm placement="leftBottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <ScButton>LB</ScButton>
      </ScPopconfirm>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
      <ScPopconfirm placement="rightTop">
        <template #title>
          <span>prompt text</span>
        </template>
        <ScButton>RT</ScButton>
      </ScPopconfirm>
      <ScPopconfirm placement="right">
        <template #title>
          <span>prompt text</span>
        </template>
        <ScButton>Right</ScButton>
      </ScPopconfirm>
      <ScPopconfirm placement="rightBottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <ScButton>RB</ScButton>
      </ScPopconfirm>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <ScPopconfirm placement="bottomLeft">
        <template #title>
          <span>prompt text</span>
        </template>
        <ScButton>BL</ScButton>
      </ScPopconfirm>
      <ScPopconfirm placement="bottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <ScButton>Bottom</ScButton>
      </ScPopconfirm>
      <ScPopconfirm placement="bottomRight">
        <template #title>
          <span>prompt text</span>
        </template>
        <ScButton>BR</ScButton>
      </ScPopconfirm>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
// import { ScPopconfirm, ScButton } from 'ant-design-vue'
import { ScButton, ScPopconfirm } from 'sc-ui';
export default defineComponent({
  components: {
    ScButton,
    ScPopconfirm
  },
  setup() {
    return {
      buttonWidth: 70,
    };
  },
});
</script>
<style scoped>
#components-ScPopconfirm-demo-placement {
  padding: 40px;
}
#components-ScPopconfirm-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
