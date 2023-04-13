<template>
  <ScCascaderNew :props="props" />
</template>

<script lang="ts" setup>

import { ScCascaderNew } from 'sc-ui';
import type { ScCascaderNewProps } from 'sc-ui'

let id = 0
const props: ScCascaderNewProps = {
  lazy: true,
  lazyLoad(node:any, resolve: any) {
    const { level } = node
    setTimeout(() => {
      const nodes = Array.from({ length: level + 1 }).map((item) => ({
        value: ++id,
        label: `Option - ${id}`,
        leaf: level >= 2,
      }))
      // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.
      resolve(nodes)
    }, 1000)
  },
}
</script>
