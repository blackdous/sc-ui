<template>
  <div style="max-width: 240px;padding: 6px;">
    <!-- {{ScText1}} -->
    <component :is='ScText1'></component>
  </div>
  <div>
    <!-- {{ScText1}} -->
    <component :is='ScText2'></component>
  </div>
  <!-- <ConfigProvider :locale="enUS"> -->
  <div class="mt20" style="min-width: 100px">
    <Input v-model:value="inputValue" />
  </div>
  <div class="mt20" style="min-width: 100px">
    <div style="">
      <ScEllipsis
        style="max-width: 240px;"
        :edit="editProps"
      >
        112333444121111{{inputValue}}
        <!-- data_disk_1702348175692222 -->
        <!-- 正如我们前面提到的那样，当一个元素浮动之后，它会被移出正常的文档流，然后向左或者向右平移，一直平移直到碰到了所处的容器的边框，或者碰到另外一个浮动的元素。
        在下面的图片中，有三个红色的正方形。其中有两个向左浮动，一个向右浮动。要注意到第二个向左浮动的正方形被放在第一个向左浮动的正方形的右边。如果还有更多的正方形这样浮动，它们会继续向右堆放，直到填满容器一整行，之后换行至下一行。 -->
      </ScEllipsis>
    </div>
  </div>
  <div class="mt20" style="max-width: 240px; padding: 4px 3px 5px 2px; border-left: 3px solid transparent; border-right: 2px solid transparent;">
    <ScEllipsis
      is-inherit-parent-width
      :edit="editProps"
    >
    浮动元素是如何定位的 浮动元1111
    </ScEllipsis>
  </div>
  <div class="mt20">
    <ScEllipsis style="width: 40px">
      浮动元素是如何定位的
    </ScEllipsis>
  </div>
  <div class="mt20">
    <ScEllipsis style="max-width: 80px">
      浮动元abd素 浮动元abd素
    </ScEllipsis>
  </div>
  <div class="mt20">
    <ScEllipsis
      style="width: 240px" 
      copy-txt="1111111111"
      :beforeCallback="beforeCallback"
      :afterCallback="afterCallback"
    >
      <span @click="handleClick">
        浮动元素是如何定位的 浮动元素是如何定位的
      </span>
    </ScEllipsis>
  </div>
  <div class="mt20">
    <ScEllipsis
      style="width: 240px"
      :base-height="26"
      copy-txt="1111111111"
      class="sp20"
    >
      <span @click="handleClick">
        浮动元素是如何定位的 18px11111111111111111111
      </span>
    </ScEllipsis>
  </div>
  <!-- </ConfigProvider> -->
</template>

<script lang='ts' setup>
import { reactive, ref, createVNode } from 'vue'
import { ScEllipsis } from 'sc-ui'
import { Input } from 'ant-design-vue'
// import { ConfigProvider } from 'ant-design-vue'

// import enUS from 'ant-design-vue/es/locale/en_US'
// import zhCN from 'ant-design-vue/es/locale/zh_CN'

const ScText1 = createVNode(
  ScEllipsis,
  {
    hrefLink: true,
    lineClamp: 2,
    hoverSuffix: false,
    isInheritParentWidth: true,
    style: { 'max-width': '240px' },
  },
  { default: () => createVNode('p', { style: { 'whiteSpace': 'pre-wrap' }}, {default: () => 'A          1asdasdasdasdaasdasdasdasdasdasdasdadsadsada'})}
)
const ScText2 = createVNode(
  ScEllipsis,
  {
    hrefLink: true,
    lineClamp: 2,
    hoverSuffix: false,
    style: { 'max-width': '240px' },
  },
  { default: () => createVNode('p', { 'whiteSpace': 'pre-wrap' }, {default: () => `测试模型导入各参数校验100个字符内……&**%￥@*（（（（））））））delete * where 1=1`})}
)
const inputValue = ref('');

const editProps = reactive({
  show: true,
  placeholder: '请输入内容',
  describe: '长度为8-16个字符，以大小字母或中文开头，可包含数字、下划线(-)和连字。',
  maxLength: 160,
  confirmLoading: false,
  showMaxLength: true,
  disabled: false,
  confirmDisabled: false,
  getPopupContainer: (target: HTMLElement) => { return target.parentNode?.parentNode },
  text: 'data_disk_1703644711112223344'
})

const handleClick = () => {
  window.location.href = '/tabs/'
}

const beforeCallback = () => {
  console.log('copy: beforeCallback')
}
const afterCallback = () => {
  console.log('copy: afterCallback')
}
</script>
<style lang="less">
  .mt20 {
    margin-top: 20px;
  }
  .sp20 {
    .scEllipsis-text {
      font-size: 20px;
    }
  }
</style>
