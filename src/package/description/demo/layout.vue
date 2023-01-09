<template>
  <div>
    <ScDescription
      title="基础示例"
      :collapseOptions="{ canExpand: true, describe: 'help me' }"
      :column="4"
      :data="mockData"
      :schema="schema"
      :bordered="false"
    >
      <!-- layout="vertical" -->

    </ScDescription>
    <ScDescription
      @register="register"
    >
      <!-- layout="vertical" -->

    </ScDescription>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { ScDescription, useDescription } from 'sc-ui'
import '../../../style/index.less'

const mockData: Recordable = {
    username: 'test',
    nickName: 'VB',
    age: '123',
    phone: '15695909xxx',
    email: '190848757@qq.com',
    addr: '厦门市思明区',
    sex: '男',
    certy: '3504256199xxxxxxxxx',
    tag: 'orange',
  };
  const schema: DescItem[] = [
    {
      field: 'username',
      label: h('span', { class: '' }, ['用户名', h('i', { class: 'sc-ui sc-question-circle' })]),
    },
    {
      field: 'nickName',
      label: '昵称',
      render: (curVal, data) => {
        return h('span', { class: '' }, [curVal + '--' + data.username, h('i', { class: 'sc-ui sc-file-copy' })])
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
  ];
  const [register] = useDescription({
    title: 'useDescription',
    data: mockData,
    schema: schema,
  });
</script>

<style lang="less" scoped>

</style>