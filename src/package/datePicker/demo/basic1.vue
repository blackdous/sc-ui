<template>
  <div class="monitor">
    <div class="timeSelect">
      <span
        class="filterItem pointer"
        :class="{ filterItemActive: index === activeTimeFilterIndex }"
        v-for="(item, index) in filterList"
        :key="index"
        @click="filterTimeChange(index, item)"
      >
        {{ item.name }}
      </span>

      <ScRangePicker
        v-model:value="dateRange"
        @calendarChange="calendarChange"
        @ok="confirm"
        @openChange="openChange"
        :disabled-date="disabledDate"
        :disabled-time="disabledRangeTime"
        :show-time="{
          hideDisabledOptions: true,
          defaultValue: [dayjs('00:00:00', 'HH:mm')]
        }"
        format="YYYY-MM-DD HH:mm"
        immediateCalendarChangeDateRangePicker
        style="width: 320px"
      />
    </div>
    <p class="gap"></p>
  </div>
</template>
<script
  lang="ts"
  setup
>
import { reactive, ref } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import { ScRangePicker } from 'sc-ui'

// 默认选中1h的时间段
const timeSlot = reactive({
  startTime: dayjs().startOf('second').subtract(1, 'hour').unix(),
  endTime: dayjs().unix()
})
const activeTimeFilterIndex = ref(0)
const filterList = [
  {
    name: '1(h)',
    startTime: () => dayjs().startOf('second').subtract(1, 'hour').unix(),
    endTime: () => dayjs().unix()
  },
  {
    name: '3(h)',
    startTime: () => dayjs().startOf('second').subtract(3, 'hour').unix(),
    endTime: () => dayjs().unix()
  },
  {
    name: '24(h)',
    startTime: () => dayjs().startOf('second').subtract(24, 'hour').unix(),
    endTime: () => dayjs().unix()
  },
  {
    name: '3(天)',
    startTime: () => dayjs().startOf('second').subtract(3, 'day').unix(),
    endTime: () => dayjs().unix()
  },
  {
    name: '7(天)',
    startTime: () => dayjs().startOf('second').subtract(7, 'day').unix(),
    endTime: () => dayjs().unix()
  }
]

// 时间筛选项改变
function filterTimeChange(index: number, time: any) {
  activeTimeFilterIndex.value = index
  timeSlot.startTime = time?.startTime()
  timeSlot.endTime = time?.endTime()
  dateRange.value = []
  console.log('sys: 时间段改变=', index, timeSlot)
}

// 时间段改变
const dateRange = ref<Dayjs[]>([]) // 时间筛选器的值
const pickerStartTime = ref<Dayjs>()
const pickerEndTime = ref<Dayjs>()

// 日期限制
const minDate = ref()
const maxDate = ref()
// 时间限制
const range = (start: number, end: number) => {
  const result = []

  for (let i = start; i < end; i++) {
    result.push(i)
  }

  return result
}
const disabledRangeTime = (_: Dayjs, type: 'start' | 'end') => {
  // hover 的时候就会调用
  if (type === 'start') {
    // TODO 如果是打开的是今天的话 禁用时间变成当前时间到24小时
    console.log('asjxhoisadhj==', dayjs(minDate.value).day(), dayjs(maxDate.value).day())
    if (dayjs(minDate.value).isSame(maxDate.value, 'day')) {
      console.log(
        '开始时间跟结束时间是同一天===',
        range(dayjs(maxDate.value).hour() + 1, 23),
        range(dayjs(maxDate.value).minute() + 1, 59)
      )
      return {
        disabledHours: () => range(dayjs(maxDate.value).hour() + 1, 24),
        disabledMinutes: () => range(dayjs(maxDate.value).minute() + 1, 60)
        // disabledSeconds: () => range(dayjs(minDate.value).second(), 60)
      }
    } else {
      console.log('开始时间跟结束时间不是同一天****')
      return {
        disabledHours: () => range(0, dayjs(minDate.value).hour()),
        disabledMinutes: () => range(0, dayjs(minDate.value).minute())
        // disabledSeconds: () => range(0, dayjs(minDate.value).second())
      }
    }
  }
  return {
    disabledHours: () => range(dayjs(maxDate.value).hour() + 1, 24),
    disabledMinutes: () => range(dayjs(maxDate.value).minute() + 1, 60)
    // disabledSeconds: () => range(dayjs(maxDate.value).second(), 60)
  }
}

function disabledDate(current: Dayjs) {
  // 判断当前日期是否是属于15天以内的日期 不属于禁用
  if (current > maxDate.value || current < minDate.value) {
    return true
  } else {
    return false
  }
}
// 日历隐藏时 会先改变显示状态  然后触发确定
function confirm(data: Dayjs[]) {
  pickerStartTime.value = data[0]
  pickerEndTime.value = data[1]
  // calculateDisabledDate(data)
  console.log('ssy: 时间确定=', data[0], data[1])
  // if (data[0] && data[1]) {
  //   console.log('sys: 时间差==', pickerEndTime.value.diff(pickerStartTime.value, 'day'))
  //   if (pickerEndTime.value.diff(pickerStartTime.value, 'day') > 31) {
  //     dateRange.value = []
  //     pickerStartTime.value = undefined
  //     pickerEndTime.value = undefined
  //     // return message.error($t('overview.shiJianDuanMax'))
  //   }
  //   // 结束时间不能大于开始时间
  //   if (data[1].unix() > data[0].unix()) {
  //     // getSummaryData(data[0].unix(), data[1].unix())
  //     // getChartData(data[0].unix(), data[1].unix())
  //     timeSlot.startTime = data[0].unix()
  //     timeSlot.endTime = data[1].unix()
  //   }

  //   // 请求之后 重置
  //   pickerStartTime.value = undefined
  //   pickerEndTime.value = undefined
  // }
}
// 打开日历面板
const openChange = () => {
  console.log('打开日历===')
  // 重置限制范围 @TODO  根据集群创建时间判断最小时间
  // 如果集群创建时间在15天以内 那么选择集群创建时间为最小开始时间
  // 如果集群创建时间在15天以外 那么选择距离当前15天之前的时间作为最小开始时间
  minDate.value = dayjs().endOf('second').subtract(15, 'day')
  maxDate.value = dayjs().endOf('second')
}
function calendarChange(dates: any, dateStrings: any, info: { range: 'start' | 'end' } | undefined) {
  console.log('sys: 日历改变==', dates, dateStrings, info)
  // @TODO 根据选择的时间重置minDate以及maxDate
  // if (dates === null) {
  //   // filterTimeChange(0, filterList[0])
  // } else {
  //   // activeTimeFilterIndex.value = 9
  //   calculateDisabledDate(dates)
  // }
  // if (info) {

  // }
  // 点击确定以后才会有 选择的类型
  calculateDisabledDate(dates)
}

const calculateDisabledDate = (dates: Array<any>) => {
  if (dates[0]) {
    console.error('给最小值赋值')
    minDate.value = dates[0]
    // 有开始时间了
    maxDate.value =
      dayjs(dates[0]).endOf('second').add(15, 'day') > dayjs().endOf('second')
        ? dayjs().endOf('second')
        : dayjs(dates[0]).endOf('second').add(15, 'day')
  }

  if (dates[1]) {
    // maxDate.value = dates[1]
    const clusterCreateTime = dayjs() // 集群结束时间
    // 有结束时间了
    minDate.value =
      dayjs(dates[1]).endOf('second').subtract(15, 'day') < clusterCreateTime
        ? clusterCreateTime
        : dayjs(dates[1]).endOf('second').subtract(15, 'day')
  }
}
</script>
