<template>
  <div>
    <ScDescription
      @register="register"
    >
    </ScDescription>
    <ScDescription
      title="基础示例"
      :collapseOptions="{ canExpand: true, describe: 'help me' }"
      :column="4"
      :data="mockData"
      :schema="schema"
      :bordered="false"
    >

    </ScDescription>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { ScDescription, useDescription, ScEllipsis } from 'sc-ui'
import { Tooltip } from 'ant-design-vue'

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
  const renderInnerTitle = h('span',['用户名', h(Tooltip, {
    title: () => 'tooltip'
  }, [ h('i', { class: 'sc-ui sc-question-circle' })])] )
  const schema: DescItem[] = [
    {
      field: 'username',
      label: '用户名'
    },
    {
      field: 'nickName',
      label: '昵称',
      render: (curVal, data) => {
        return h(ScEllipsis, { hoverSuffix: true, copyTxt: '复制内容', tooltip: false }, { default: () => curVal + '--' + data.username })
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
    collapseOptions: { canExpand: true, describe: 'help me' },
    column: 4,
    data: mockData,
    schema: schema,
    bordered: false,
    useCollapse: false,
    layout: 'vertical'
  });
</script>
<style scoped>
/* @import 'comment'; */
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
