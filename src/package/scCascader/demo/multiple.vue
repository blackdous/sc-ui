<template>
  <div class="mt-20">
    <p>去除第一行checkbox</p>
    <ScCascaderNew 
      v-model="value4" 
      allowClear
      :props="props"
      :options="options" 
      popupClassName="notFirstColumnCheckbox"
      @change="handleChange" 
    />
  </div>
  <div class="mt-20">
    <p>普通多选</p>
    <ScCascaderNew 
      v-model="value" 
      allowClear
      :props="{...props, emitPath: false}"
      :options="options" 
      @change="handleChange" 
    />
  </div>
  <div class="mt-20">
    <p>只展示最后一级多选</p>
    <ScCascaderNew 
      v-model="value1" 
      allowClear
      placeholder="只展示最后一级多选"
      :props="props"
      :options="options"
      :showAllLevels="false"
      @change="handleChange" 
    />
  </div>
  <div class="mt-20">
    <p>只展示最后一级多选，折叠选中</p>
    <ScCascaderNew 
      v-model="value2" 
      allowClear
      :props="props"
      :options="options"
      :show-all-levels="false"
      collapse-tags
      @change="handleChange" 
    />
      <!-- :showAllLevels="false" -->
  </div>
  <div class="mt-20">
    <p>只展示最后一级多选，折叠选中，使用tooltip显示</p>
    <ScCascaderNew 
      v-model="value3" 
      allowClear
      :props="{...props, emitPath: false}"
      :options="options"
      collapse-tags
      :show-all-levels="false"
      collapseTagsTooltip
      @change="handleChange" 
    />
      <!-- :showAllLevels="false" -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { ScCascaderNew } from 'sc-ui';

const value = ref(["table","tag","docs"])
const value1 = ref([])
const value2 = ref([])
const value3 = ref(["table","tag","docs"])
const value4 = ref([])

const props = {
  multiple: true
}

const handleChange = (value:any) => {
  console.log(JSON.stringify(value))
}

const options = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        disabled: true,
        children: [
          {
            value: 'consistency',
            label: 'Consistency',
          },
          {
            value: 'feedback',
            label: 'Feedback',
          },
          {
            value: 'efficiency',
            label: 'Efficiency',
          },
          {
            value: 'controllability',
            label: 'Controllability',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation',
            disabled: true,
          },
          {
            value: 'top nav',
            label: 'Top Navigation',
          },
        ],
      },
    ],
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout',
          },
          {
            value: 'color',
            label: 'Color',
          },
          {
            value: 'typography',
            label: 'Typography',
          },
          {
            value: 'icon',
            label: 'Icon',
            disabled: true,
          },
          {
            value: 'button',
            label: 'Button',
          },
        ],
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio',
          },
          {
            value: 'checkbox',
            label: 'Checkbox',
          },
          {
            value: 'input',
            label: 'Input',
          },
          {
            value: 'input-number',
            label: 'InputNumber',
          },
          {
            value: 'select',
            label: 'Select',
          },
          {
            value: 'cascader',
            label: 'Cascader',
          },
          {
            value: 'switch',
            label: 'Switch',
          },
          {
            value: 'slider',
            label: 'Slider',
          },
          {
            value: 'time-picker',
            label: 'TimePicker',
          },
          {
            value: 'date-picker',
            label: 'DatePicker',
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker',
          },
          {
            value: 'upload',
            label: 'Upload',
          },
          {
            value: 'rate',
            label: 'Rate',
          },
          {
            value: 'form',
            label: 'Form',
          },
        ],
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table',
          },
          {
            value: 'tag',
            label: 'Tag',
          },
          {
            value: 'progress',
            label: 'Progress',
          },
          {
            value: 'tree',
            label: 'Tree',
          },
          {
            value: 'pagination',
            label: 'Pagination',
          },
          {
            value: 'badge',
            label: 'Badge',
          },
        ],
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert',
          },
          {
            value: 'loading',
            label: 'Loading',
          },
          {
            value: 'message',
            label: 'Message',
          },
          {
            value: 'message-box',
            label: 'MessageBox',
          },
          {
            value: 'notification',
            label: 'Notification',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'Menu',
          },
          {
            value: 'tabs',
            label: 'Tabs',
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb',
          },
          {
            value: 'dropdown',
            label: 'Dropdown',
          },
          {
            value: 'steps',
            label: 'Steps',
          },
        ],
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog',
          },
          {
            value: 'tooltip',
            label: 'Tooltip',
          },
          {
            value: 'popover',
            label: 'Popover',
          },
          {
            value: 'card',
            label: 'Card',
          },
          {
            value: 'carousel',
            label: 'Carousel',
          },
          {
            value: 'collapse',
            label: 'Collapse',
          },
        ],
      },
    ],
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components',
      },
      {
        value: 'sketch',
        label: 'Sketch Templates',
      },
      {
        value: 'docs',
        label: 'Design Documentation',
      },
    ],
  },
]
</script>
<style scoped>
.mt-20 {
  margin-top: 20px;
}
</style>
