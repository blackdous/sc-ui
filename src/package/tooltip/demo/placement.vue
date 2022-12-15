<template>
  <div id="components-Tooltip-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <Tooltip placement="topLeft">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>TL</Button>
      </Tooltip>
      <Tooltip placement="top">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>Top</Button>
      </Tooltip>
      <Tooltip placement="topRight">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>TR</Button>
      </Tooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <Tooltip placement="leftTop">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>LT</Button>
      </Tooltip>
      <Tooltip placement="left">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>Left</Button>
      </Tooltip>
      <Tooltip placement="leftBottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>LB</Button>
      </Tooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
      <Tooltip placement="rightTop">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>RT</Button>
      </Tooltip>
      <Tooltip placement="right">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>Right</Button>
      </Tooltip>
      <Tooltip placement="rightBottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>RB</Button>
      </Tooltip>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <Tooltip placement="bottomLeft">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>BL</Button>
      </Tooltip>
      <Tooltip placement="bottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip placement="bottomRight">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>BR</Button>
      </Tooltip>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Tooltip, Button } from 'ant-design-vue'
import '../../../style/index.less'
export default defineComponent({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      buttonWidth: 70,
    };
  },
});
</script>
<style scoped>
#components-Tooltip-demo-placement {
  padding: 40px;
}
#components-Tooltip-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
