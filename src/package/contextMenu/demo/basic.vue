<template>
  <div class="demoButton">
    <ScButton
      type="primary" @contextmenu="handleContext"
    >
      右键点击
    </ScButton>
  </div>
  <div class="demoButton">
    <ScButton
      type="primary" @contextmenu="handleMultipleContext"
    >
      右键点击
    </ScButton>
  </div>
</template>

<script lang='ts' setup>
import { useContextMenu, ScButton, message } from 'sc-ui'

const [createContextMenu] = useContextMenu();
function handleContext(e: MouseEvent) {
  createContextMenu({
    event: e,
    items: [
      {
        label: 'New',
        // icon: 'bi:plus',
        handler: () => {
          message.success('click new');
        },
      },
      {
        label: 'Open',
        // icon: 'bx:bxs-folder-open',
        handler: () => {
          message.success('click open');
        },
      },
    ],
  });
}

function handleMultipleContext(e: MouseEvent) {
  createContextMenu({
    event: e,
    items: [
      {
        label: 'New',
        icon: 'bi:plus',

        children: [
          {
            label: 'New1-1',
            // icon: 'bi:plus',
            divider: true,
            children: [
              {
                label: 'New1-1-1',
                handler: () => {
                  message.success('click new');
                },
              },
              {
                label: 'New1-2-1',
                disabled: true,
              },
            ],
          },
          {
            label: 'New1-2',
            // icon: 'bi:plus',
          },
        ],
      },
    ],
  });
}
</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
.demoButton {
  margin: 20px;
}
</style>
