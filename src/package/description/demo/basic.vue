<template>
  <div>
    <!-- layout="vertical" -->
    <ScDescription
      title="通过title字段设置"
      :collapseOptions="{ canExpand: true, describe: 'help me' }"
      :column="2"
      :bordered="false"
      :useCollapse="false"
      >
        <DescriptionsItem label="UserName">Zhou Maomao
        </DescriptionsItem>
        <DescriptionsItem label="Telephone">
          18100000001
        </DescriptionsItem>
        <DescriptionsItem label="Live">Hangzhou, Zhejiang
        </DescriptionsItem>
        <DescriptionsItem label="Remark">
          <ScLink hoverUnderline type="primary" href="https://www.baidu.com">安全组名称1</ScLink>
          <ScLink hoverUnderline type="primary" href="https://www.baidu.com">安全组名称2</ScLink>
          <ScLink hoverUnderline type="primary" href="https://www.baidu.com">安全组名称3</ScLink>
        </DescriptionsItem>
        <DescriptionsItem label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </DescriptionsItem>
    </ScDescription>
    <ScDescription
      :title="renderTitle"
      :collapseOptions="{ canExpand: true, describe: 'help me' }"
      :column="4"
      :data="mockData"
      :schema="schema"
      layout="vertical"
      :bordered="false"
      :useCollapse="false"
      >
    </ScDescription>
    <ScDescription
      :collapseOptions="{ canExpand: true, describe: 'help me' }"
      :column="4"
      :data="mockData"
      :schema="schema"
      layout="vertical"
      :bordered="false"
      :useCollapse="false"
      >
      <template #title>
        <span>
          通过template #title字段设置
        </span>
      </template>
    </ScDescription>
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
      :collapseOptions="{ canExpand: true, describe: 'help me' }"
      :column="4"
      :data="mockData"
      :schema="schema"
      layout="vertical"
      :bordered="false"
      >
        <template #title>
          通过 solt=title 显示title
        </template>
    </ScDescription>
    <!-- <ScDescription
      title="基础示例2"
      :collapseOptions="{ canExpand: true, describe: 'help me' }"
      :column="4"
      :data="mockData"
      :schema="schema"
      :bordered="false"
      >

    </ScDescription>
    <ScDescription
      title="基础示例3"
      :collapseOptions="{ canExpand: true, describe: 'help me' }"
      :column="4"
      :data="mockData"
      layout="vertical"
      :schema="schema"
      :bordered="false"
      >

    </ScDescription>
    <ScDescription
      title="基础示例4"
      :collapseOptions="{ canExpand: true, describe: 'help me' }"
      :column="4"
      :data="mockData"
      :schema="schema"
      :bordered="false"
      >

    </ScDescription> -->
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { ScDescription, ScLink } from 'sc-ui'
import { DescriptionsItem } from 'ant-design-vue';

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
  const renderTitle = h('span', { class: '' }, ['使用h函数', h('i', { class: 'sc-ui sc-question-circle copy' })])
  const schema: DescItem[] = [
    {
      field: 'username',
      label: h('span', { class: '' }, ['用户名', h('i', { class: 'sc-ui sc-question-circle copy' })]),
    },
    {
      field: 'nickName',
      label: '昵称',
      render: (curVal, data) => {
        return h('span', { class: '' }, [curVal + '--' + data.username, h('i', { class: 'sc-ui sc-file-copy copy' })])
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
<style scoped>
.copy {
  color: #008CD3;
  margin-left: 4px;
  cursor: pointer;
}
.copy:hover {
  color: #45ABDF;
}
.copy:active {
  color: #007DBD;
}
</style>
<style scoped>
/* @import 'comment'; */
</style>