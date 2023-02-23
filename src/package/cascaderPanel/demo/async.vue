<template>
  <ScCascaderPanel :props="props" />
</template>

<script lang="ts" setup>
import type { CascaderProps } from 'sc-ui'
import { ScCascaderPanel } from 'sc-ui'

let id = 0
const props: CascaderProps = {
  lazy: true,
  lazyLoad(node, resolve) {
    const { level } = node
    setTimeout(() => {
      const nodes = Array.from({ length: level + 1 }).map((item) => ({
        value: ++id,
        label: `Option - ${id}`,
        leaf: level >= 2,
      }))
      // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.
      resolve(nodes)
    }, 5000)
  },
}
</script>
