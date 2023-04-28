<template>
  <div>
    <p class="specCon">
      当前规格：
      <span
        v-show="selectRowInfo"
        class="spec"
      >
        {{ selectRowInfo?.model }} | {{ selectRowInfo?.package }} | {{ selectRowInfo?.cpu }}核 |
        {{ selectRowInfo?.ram }}GB
      </span>
    </p>
    <ScTable
      ref="scTableRef"
      key="key"
      :data-source="renderData"
      :columns="columns"
      :loading="false"
      :customFilter="true"
      :filterTag="false"
      @change="handleControlChange"
      :row-selection="rowSelection"
      :create-button-options="{
        show: false
      }"
      :pagination="false"
    >
      <template #model="{ record }">
        <div>
          <span v-if="record.disabled">
            <Tooltip
              overlayClassName="overlayClassName"
              arrow-point-at-center
              placement="top"
              title="已售罄，请您选择其他类型或者其他数据中心下的本类服务器"
              :getPopupContainer="(triggerNode: HTMLImageElement) => triggerNode.parentNode"
            >
              {{ record.model }}
            </Tooltip>
          </span>
          <span v-else>{{ record.model }}</span>
        </div>
      </template>
      <template #package="{ record }">
        <div>
          <span v-if="record.disabled">
            <Tooltip
              overlayClassName="overlayClassName"
              arrow-point-at-center
              placement="top"
              title="已售罄，请您选择其他类型或者其他数据中心下的本类服务器"
              :getPopupContainer="(triggerNode: HTMLImageElement) => triggerNode.parentNode"
            >
              {{ record.package }}
            </Tooltip>
          </span>
          <span v-else>{{ record.package }}</span>
        </div>
      </template>
      <template #cpu="{ record }">
        <div>
          <span v-if="record.disabled">
            <Tooltip
              overlayClassName="overlayClassName"
              arrow-point-at-center
              placement="top"
              title="已售罄，请您选择其他类型或者其他数据中心下的本类服务器"
              :getPopupContainer="(triggerNode: HTMLImageElement) => triggerNode.parentNode"
            >
              {{ record.cpu }}
            </Tooltip>
          </span>
          <span v-else>{{ record.cpu }}</span>
        </div>
      </template>
      <template #ram="{ record }">
        <div>
          <span v-if="record.disabled">
            <Tooltip
              overlayClassName="overlayClassName"
              arrow-point-at-center
              placement="top"
              title="已售罄，请您选择其他类型或者其他数据中心下的本类服务器"
              :getPopupContainer="(triggerNode: HTMLImageElement) => triggerNode.parentNode"
            >
              {{ record.ram }}
            </Tooltip>
          </span>
          <span v-else>{{ record.ram }}</span>
        </div>
      </template>
      <template #processor="{ record }">
        <div>
          <span v-if="record.disabled">
            <Tooltip
              overlayClassName="overlayClassName"
              arrow-point-at-center
              placement="top"
              title="已售罄，请您选择其他类型或者其他数据中心下的本类服务器"
              :getPopupContainer="(triggerNode: HTMLImageElement) => triggerNode.parentNode"
            >
              {{ record.processor }}
            </Tooltip>
          </span>
          <span v-else>{{ record.processor }}</span>
        </div>
      </template>
      <template #gpu="{ record }">
        <div>
          <span v-if="record.disabled">
            <Tooltip
              overlayClassName="overlayClassName"
              arrow-point-at-center
              placement="top"
              title="已售罄，请您选择其他类型或者其他数据中心下的本类服务器"
              :getPopupContainer="(triggerNode: HTMLImageElement) => triggerNode.parentNode"
            >
              {{ record.gpu }}
            </Tooltip>
          </span>
          <span v-else>{{ record.gpu }}</span>
        </div>
      </template>
      <template #internalNetworkBandwidth="{ record }">
        <div>
          <span v-if="record.disabled">
            <Tooltip
              overlayClassName="overlayClassName"
              arrow-point-at-center
              placement="top"
              title="已售罄，请您选择其他类型或者其他数据中心下的本类服务器"
              :getPopupContainer="(triggerNode: HTMLImageElement) => triggerNode.parentNode"
            >
              {{ record.internalNetworkBandwidth }}
            </Tooltip>
          </span>
          <span v-else>{{ record.internalNetworkBandwidth }}</span>
        </div>
      </template>
      <template #receivePackages="{ record }">
        <div>
          <span v-if="record.disabled">
            <Tooltip
              overlayClassName="overlayClassName"
              arrow-point-at-center
              placement="top"
              title="已售罄，请您选择其他类型或者其他数据中心下的本类服务器"
              :getPopupContainer="(triggerNode: HTMLImageElement) => triggerNode.parentNode"
            >
              {{ record.receivePackages }}
            </Tooltip>
          </span>
          <span v-else>{{ record.receivePackages }}</span>
        </div>
      </template>
      <template #price="{ record }">
        <div>
          <span v-if="record.disabled">
            <Tooltip
              overlayClassName="overlayClassName"
              arrow-point-at-center
              placement="top"
              title="已售罄，请您选择其他类型或者其他数据中心下的本类服务器"
              :getPopupContainer="(triggerNode: HTMLImageElement) => triggerNode.parentNode"
            >
              <span class="price">{{ record.price }}</span>
              <span class="priceUnit">{{ record.priceUnit }}</span>
            </Tooltip>
          </span>
          <span v-else>
            <span class="price">{{ record.price }}</span>
            <span class="priceUnit">{{ record.priceUnit }}</span>
          </span>
        </div>
      </template>
    </ScTable>
  </div>
</template>
<script
  setup
  lang="ts"
>
import { ref, reactive, defineProps, defineEmits, computed } from 'vue'
import { ScTable } from 'sc-ui'
import { Tooltip } from 'ant-design-vue'
import columns from './tableColumns'

const props = defineProps({
  data: {
    type: Array,
    require: true,
    default: () => [
      {
        key: '0210',
        model: '通用型S0',
        package: 'secs.g1.smalll.1',
        cpu: '1',
        ram: '2',
        processor: 'Intel Xeon Gold 6336Y（2.7GHz/3.3GHz)',
        gpu: '高性价比显卡*1',
        internalNetworkBandwidth: '2GBps',
        receivePackages: '30万pps',
        price: '￥' + '132',
        priceUnit: '/月'
        // disabled: true
      },
      {
        key: '0211',
        model: '通用型S1',
        package: 'secs.g1.smalll.1',
        cpu: '1',
        ram: '2',
        processor: 'Intel Xeon Gold 6336Y（2.7GHz/3.3GHz)',
        gpu: '高性价比显卡*1',
        internalNetworkBandwidth: '2GBps',
        receivePackages: '30万pps',
        price: '￥' + '132',
        priceUnit: '/月',
        disabled: true
      },
      {
        key: '0212',
        model: '通用型S2',
        package: 'secs.g1.smalll.1',
        cpu: '1',
        ram: '2',
        processor: 'Intel Xeon Gold 6336Y（2.7GHz/3.3GHz)',
        gpu: '高性价比显卡*1',
        internalNetworkBandwidth: '2GBps',
        receivePackages: '30万pps',
        price: '￥' + '132',
        priceUnit: '/月'
        // disabled: true
      }
    ]
  }
})

const emits = defineEmits(['select'])

const scTableRef = ref(null)
const renderData = ref(props.data)

const selectRowInfo = ref<any>(null)

// 选中操作
type Key = string | number
const state = reactive<{
  selectedRowKeys: Key[]
}>({
  selectedRowKeys: [] // Check here to configure the default column
})

// 通过选中的key值 寻找对应行 以便图表上方展示对应信息
function findRecordByKey(key: Key) {
  selectRowInfo.value = JSON.parse(JSON.stringify(renderData.value)).find((item: any) => {
    return (item.key = key)
  })
}

const rowSelection = computed(() => {
  return {
    selectedRowKeys: state.selectedRowKeys,
    onChange: onSelectChange,
    type: 'radio',
    getCheckboxProps: (record: any) => {
      const props = {
        disabled: record.disabled
      }
      return props
    }
  }
})

const onSelectChange = (selectedRowKeys: Key[]) => {
  console.log('selectedRowKeys changed: ', selectedRowKeys)
  state.selectedRowKeys = JSON.parse(JSON.stringify(selectedRowKeys))
  findRecordByKey(selectedRowKeys[0])
  // 抛出选中的id 以及 对应信息
  // emits('select', selectRowInfo.value)
}

const handleControlChange = (currPagination: any) => {
  console.log('sys：pagination=', currPagination)
  // pagination.value = currPagination
  // params.value.pageIndex = currPagination.current
  // params.value.pageSize = currPagination.pageSize
}
</script>
<style
  lang="less"
  scoped
>
.specCon {
  margin-bottom: 13px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.9);
  .spec {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 3px 3px 3px 3px;
    background: #e5f3fb;
    font-size: 12px;
    color: #008cd3;
  }
}
.price {
  font-size: 14px;
  color: #ff7d00;
  font-weight: 600;
}
.priceUnit {
  font-size: 14px;
}
</style>
