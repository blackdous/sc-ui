<template>
  <Space :size="12" align="start">
    <div v-for="item in tableList" :key="item.status">
      <div class="tags-title">
        {{ item.name }}
      </div>
      <template v-for="tag in item.list">
        <div class="mrt-10 disflex">
          <ScTag
            type="light"
            :status="item.status"
            :loading="tag.includes('中')"
          >
            {{tag}}
          </ScTag>
          <ScTag
            v-if="specialObj[item.status] && specialObj[item.status][tag]"
            :type="specialObj[item.status][tag].type"
            :status="specialObj[item.status][tag].status"
            :border="specialObj[item.status][tag].border"
            :tooltip-des="specialObj[item.status][tag].tooltip"
          >
            {{specialObj[item.status][tag].name}}
          </ScTag>
        </div>
      </template>
    </div>
  </Space>
</template>

<script lang='ts' setup>
import { Space } from 'ant-design-vue';
import { ScTag } from 'sc-ui'

const specialObj = {
  primary: {
    '待反馈': {
      name: '待补充信息',
      type: 'outline',
      status: '',
      border: false
    }
  },
  success: {
    '已开票1': {
      name: '退票中',
      type: 'outline',
      status: 'warning',
      border: false
    },
    '已开票2': {
      name: '退票驳回',
      type: 'outline',
      status: 'freeze',
      border: false,
      tooltip: '退票驳回'
    }
  }
}

const tableList = [
  {
    status: 'freeze',
    name: '失效标签',
    list: ['已停用', '已结单', '已关机', '已冻结', '已取消', '已驳回', '已过期', '失效耗尽', '失效过期', '失效退订']
  },
  {
    value: '',
    name: '默认标签',
    list: ['未绑定', '未开启']
  },
  {
    status: 'primary',
    name: '待处理标签',
    list: ['待支付', '待确认', '待审核', '待挂载', '待反馈']
  },
  {
    status: 'process',
    name: '处理中标签',
    list: ['处理中', '审核中', '恢复中', '开票中', '重启中', '创建中', '升级中', '扩容中', '备份中', '释放中', '更配中']
  },
  {
    status: 'success',
    name: '正常标签',
    list: ['支付成功', '充值成功', '操作成功', '已完成', '已绑定', '已开启', '已开通', '已开票1', '已开票2', '开启', '开启', '正常', '可用', '收入', '运行', '运行中', '使用中']
  },
  {
    status: 'warning',
    name: '异常标签',
    list: ['部分异常', '创建异常', '异常', '禁用', '删除', '删除中', '退票中', '卸载中']
  },
  {
    status: 'error',
    name: '禁示标签',
    list: ['开通失败', '授权失败', '操作失败', '审核失败', '重启失败', '创建失败', '错误', '失败', '支出', '开启', '销毁中']
  }
]

</script>

<style scoped>
.light-demo > div {
  padding-top: 10px;
}
.tags-title {
  font-family: PingFang SC;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  color: rgba(0, 0, 0, .4);
}
.mrt-10 {
  margin-top: 10px;
}
.disflex {
  display: flex;
}
</style>