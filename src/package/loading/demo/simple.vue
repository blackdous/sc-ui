<template>
  <div>
    <ScLoading
      :loading="loadingRef"
      :is-full-page="false"
    >
    </ScLoading>
    <ScLoading
      :loading="loadingRef1"
      tip="加载中..."
      :indicator="null"
      :is-full-page="false"
    >
    </ScLoading>
    <ScLoading
      :loading="loadingRef2"
      tip="加载中..."
      :is-full-page="false"
    >
    </ScLoading>
    <ScButton
      @click="handleClick"
    >
      仅图标加载
    </ScButton>
    <ScButton
      @click="handleClick1"
    >
      仅文字加载
    </ScButton>
    <ScButton
      @click="handleClick2"
    >
      图片和文字加载
    </ScButton>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScLoading, ScButton } from 'sc-ui'
const loadingRef = ref(false)
const loadingRef1 = ref(false)
const loadingRef2 = ref(false)

const handleClick = () => {
  loadingRef.value = !loadingRef.value
  setTimeout(() => {
    loadingRef.value = false
  }, 1500)
}
const handleClick1 = () => {
  loadingRef1.value = !loadingRef1.value
  setTimeout(() => {
    loadingRef1.value = false
  }, 1500)
}
const handleClick2 = () => {
  loadingRef2.value = !loadingRef2.value
  setTimeout(() => {
    loadingRef2.value = false
  }, 1500)
}
</script>
<style lang="less" scoped>
  div {
    & > button {
      margin-left: 10px;
    }
  }
</style>