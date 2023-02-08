<template>
  <div>
    <ScDescription
      title="通过title字段设置"
      :collapseOptions="{ canExpand: true, describe: 'help me' }"
      :column="4"
      :data="mockData"
      :schema="schema"
      layout="vertical"
      :bordered="false"
      >
    </ScDescription>
    <ScDescription
      :title="renderTitle"
      :column="4"
      :data="mockData"
      :schema="schema"
      layout="vertical"
      :bordered="false"
      >
    </ScDescription>
    <ScDescription
      :column="4"
      :data="mockData"
      :schema="schema"
      layout="vertical"
      :bordered="false"
      >
      <template #title>
        <span>
          通过template #title字段设置
        </span>
      </template>
    </ScDescription>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { ScDescription } from 'sc-ui'

const mockData: Recordable = {
    username: 'test',
    nickName: 'VB',
    age: '123',
    phone: '15695909xxx',
    email: '190848757@qq.com',
    addr: '厦门市思明区',
    addr1: '厦门市思明区1111',
    sex: '男',
    certy: '3504256199xxxxxxxxx',
    tag: 'orange',
  };
  const renderTitle = h('span', { class: '' }, [h('span', { innerHTML: '使用h函数' }), h('i', { class: 'sc-ui sc-question-circle', style: { color: '#008CD3', marginLeft: '4px' } })])
  const schema: DescItem[] = [
    {
      field: 'username',
      label: h('span', { class: '' }, ['用户名', h('i', { class: 'sc-ui sc-question-circle', style: { color: '#008CD3', marginLeft: '4px' } })]),
    },
    {
      field: 'nickName',
      label: '昵称',
      render: (curVal, data) => {
        return h('span', { class: '' }, [curVal + '--' + data.username, h('i', { class: 'sc-ui sc-file-copy', style: { color: '#008CD3', marginLeft: '4px'} })])
      },
    },
    {
      field: 'phone',
      label: '联系电话',
    },
    {
      field: 'email',
      label: '邮箱',
    },
    {
      field: 'addr',
      label: '地址',
    },
    {
      field: 'addr1',
      label: '地址1',
    },
  ];
</script>

<style lang="less" scoped>
// .sc-file-copy {
//   color: @primary-color;
// }
</style>