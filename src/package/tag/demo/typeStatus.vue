<template>
  <Space direction="vertical" :size="12">
    <div style="color: red;font-size: 16px;">*优先使用tag</div>
    <div class="light-demo">
      <div>
        <ScTag type="light">未绑定/未启用</ScTag>
      </div>
      <div>
        <ScTag type="light" status="primary">待确认/待审核/待挂载/恢复中</ScTag>
      </div>
      <div>
        <ScTag type="light" status="process">处理中/开票中/退票中/运行中/创建中</ScTag>
      </div>
      <div>
        <ScTag type="light" status="success">已开通/启用/成功/正常/使用中</ScTag>
      </div>
      <div>
        <ScTag type="light" status="warning">部分异常/禁用/待补充信息/删除/删除中</ScTag>
      </div>
      <div>
        <ScTag type="light" status="error" tooltip-des="开通失败/授权失败开通失败/授权失败">开通失败/授权失败</ScTag>
      </div>
      <div>
        <ScTag type="light" status="freeze">已停用/已结单/已关机/已过期/已冻结</ScTag>
      </div>
      <div>
        <ScTag type="light" color="#87d068">默认标签</ScTag>
      </div>
    </div>
    <div class="light-demo">
      <div>
        <ScTag type="light" :loading="loadingRef">未绑定/未启用</ScTag>
      </div>
      <div>
        <ScTag type="light" status="primary" :loading="loadingRef">待确认/待审核/待挂载/恢复中</ScTag>
      </div>
      <div>
        <ScTag type="light" status="process" :loading="loadingRef">处理中/开票中/退票中/运行中/创建中</ScTag>
      </div>
      <div>
        <ScTag type="light" status="success" :loading="loadingRef">已开通/启用/成功/正常/使用中</ScTag>
      </div>
      <div>
        <ScTag type="light" status="warning" :loading="loadingRef">部分异常/禁用/待补充信息/删除/删除中</ScTag>
      </div>
      <div>
        <ScTag type="light" status="error" :loading="loadingRef">开通失败/授权失败</ScTag>
      </div>
      <div>
        <ScTag type="light" status="freeze" :loading="loadingRef">已停用/已结单/已关机/已过期/已冻结</ScTag>
      </div>
      <div>
        <ScTag type="light" color="#87d068" :loading="loadingRef">默认标签</ScTag>
      </div>
    </div>

    <div>其他tag类型</div>
    <div>
      <ScTag type="dark">默认标签</ScTag>
      <ScTag type="dark" status="primary">默认标签</ScTag>
      <ScTag type="dark" status="success">默认标签</ScTag>
      <ScTag type="dark" status="warning">默认标签</ScTag>
      <ScTag type="dark" status="error">默认标签</ScTag>
      <ScTag type="dark" color="#87d068">默认标签</ScTag>
    </div>
    <div>
      <ScTag type="outline">默认标签</ScTag>
      <ScTag type="outline" status="primary">默认标签</ScTag>
      <ScTag type="outline" status="success">默认标签</ScTag>
      <ScTag type="outline" status="warning">默认标签</ScTag>
      <ScTag type="outline" status="error">默认标签</ScTag>
      <ScTag type="outline" color="#87d068">默认标签</ScTag>
    </div>
    <div>
      <ScTag type="lightOutline">默认标签</ScTag>
      <ScTag type="lightOutline" status="primary">默认标签</ScTag>
      <ScTag type="lightOutline" status="success">默认标签</ScTag>
      <ScTag type="lightOutline" status="warning">默认标签</ScTag>
      <ScTag type="lightOutline" status="error">默认标签</ScTag>
      <ScTag type="lightOutline" color="#87d068">默认标签</ScTag>
    </div>
  </Space>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { Space } from 'ant-design-vue';
import { ScTag } from 'sc-ui'

const loadingRef = ref(true)
</script>

<style scoped>
.light-demo > div {
  padding-top: 10px;
}
</style>