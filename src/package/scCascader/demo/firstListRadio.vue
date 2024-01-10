<template>
  <div class="mt-20">
    <p>展开子节点hover</p>
    <ScCascaderNew
      ref="ScCascaderNewRef"
      v-model="value1"
      :options="options"
      show-all-levels
      :props="props"
      @change="handleChange1"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { ScCascaderNew } from 'sc-ui';
// import { Cascader } from 'ant-design-vue';

const value1 = ref(['3', 'all222'])

const ScCascaderNewRef = ref()

const props = {
  multiple: true
}

const handleChange1 = (value:any, options:any) => {
  console.log('options: ', options);
  const diffParentValueIndex = value.findIndex((item:any, index:number) => {
    if (index === 0) {
      return false
    }
    return item[0] !== value[index - 1][0]
  })
  if (diffParentValueIndex !== -1) {
    value1.value = value.slice(diffParentValueIndex)
  }
}

const options =  [{
	"id": "1",
	"name": "CPU使用率",
	"type": "1",
	"unit": "%",
	"subNames": null,
	"label": "CPU使用率",
	"value": "1"
}, {
	"id": "2",
	"name": "内存使用率",
	"type": "2",
	"unit": "%",
	"subNames": null,
	"label": "内存使用率",
	"value": "2"
}, {
	"id": "3",
	"name": "磁盘读带宽",
	"type": "3",
	"unit": "MB/s",
	"subNames": null,
	"label": "磁盘读带宽",
	"value": "3",
	"children": [{
		"label": "全部",
		"value": ""
	}, {
		"label": "全部222",
		"value": "all222"
	}, {
		"label": "全部333",
		"value": "all333"
	}]
}, {
	"id": "4",
	"name": "磁盘写带宽",
	"type": "4",
	"unit": "MB/s",
	"subNames": null,
	"label": "磁盘写带宽",
	"value": "4",
	"children": [{
		"label": "全部",
		"value": ""
	}, {
		"label": "全部444",
		"value": "all444"
	}]
}, {
	"id": "5",
	"name": "磁盘每秒读次数",
	"type": "5",
	"unit": "Ops",
	"subNames": null,
	"label": "磁盘每秒读次数",
	"value": "5",
	"children": [{
		"label": "全部",
		"value": ""
	}]
}, {
	"id": "6",
	"name": "磁盘每秒写次数",
	"type": "6",
	"unit": "Ops",
	"subNames": null,
	"label": "磁盘每秒写次数",
	"value": "6",
	"children": [{
		"label": "全部",
		"value": ""
	}]
}, {
	"id": "7",
	"name": "网卡出流量",
	"type": "7",
	"unit": "MBps",
	"subNames": null,
	"label": "网卡出流量",
	"value": "7",
	"children": [{
		"label": "全部",
		"value": ""
	}]
}, {
	"id": "8",
	"name": "网卡入流量",
	"type": "8",
	"unit": "MBps",
	"subNames": null,
	"label": "网卡入流量",
	"value": "8",
	"children": [{
		"label": "全部",
		"value": ""
	}]
}]
</script>
<style scoped>
.mt-20 {
  margin-top: 20px;
}
.testClass {
  color: rgb(0, 0, 0, 0.9);
}
</style>

<style>

</style>
