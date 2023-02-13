<template>

  <div class="btns">
    <ScPopconfirm
      title="基础气泡确认框文案示意文字按钮"
      describe="带描述的气泡确认框在主要说明文字之外增加了操作相关的详细描述"
      okText="确认"
      cancelText="取消"
      type="warning"
    >
      <ScButton>
        warning
      </ScButton>
    </ScPopconfirm>
    <ScPopconfirm
      title="基础气泡确认框文案示意文字按钮"
      describe="带描述的气泡确认框在主要说明文字之外增加了操作相关的详细描述"
      okText="确认"
      cancelText="取消"
      type="error"
    >
      <ScButton>
        error
      </ScButton>
    </ScPopconfirm>
    <ScPopconfirm
      title="基础气泡确认框文案示意文字按钮"
      describe="带描述的气泡确认框在主要说明文字之外增加了操作相关的详细描述"
      okText="确认"
      cancelText="取消"
      type="success"
    >
      <ScButton>
        success
      </ScButton>
    </ScPopconfirm>
    <ScPopconfirm
      title="基础气泡确认框文案示意文字按钮"
      describe="带描述的气泡确认框在主要说明文字之外增加了操作相关的详细描述"
      okText="确认"
      cancelText="取消"
      type="primary"
    >
      <ScButton>
        primary
      </ScButton>
    </ScPopconfirm>
    <ScPopconfirm
      title="基础气泡确认框文案示意文字按钮"
      describe="带描述的气泡确认框在主要说明文字之外增加了操作相关的详细描述"
      okText="确认"
      cancelText="取消"
    >
      <ScButton>
        default
      </ScButton>
    </ScPopconfirm>

    <ScPopconfirm
      title="基础气泡确认框文案示意文字按钮"
      describe="带描述的气泡确认框在主要说明文字之外增加了操作相关的详细描述"
      okText="确认"
      cancelText="取消"
    >
      <template #icon>
        <QuestionCircleOutlined></QuestionCircleOutlined>
      </template>
      <ScButton>
        custom
      </ScButton>
    </ScPopconfirm>
    
  </div>
</template>

<script setup lang="ts">
import { ScPopconfirm, ScButton } from 'sc-ui'
import { QuestionCircleOutlined } from '@ant-design/icons-vue';

</script>
<style scoped>
/* @import ''; */
</style>
<style scoped>
.btns  button {
  margin-left: 8px;
}
</style>