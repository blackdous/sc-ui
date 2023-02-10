<template>
  <div>
    <ConfigProvider
    >
      <Transfer
        show-search
        class="tree-transfer"
        :data-source="dataSource"
        :target-keys="targetKeys"
        :render="item => item.title"
        @change="onChange"
      >
        <!-- :show-select-all="false" -->
        <template #children="{ direction, selectedKeys, onItemSelect }">
          <Tree
            v-if="direction === 'left'"
            blockNode
            checkable
            checkStrictly
            defaultExpandAll
            :checkedKeys="[...selectedKeys, ...targetKeys]"
            :treeData="treeData"
            @check="
              (_, props) => {
                onChecked(_, props, [...selectedKeys, ...targetKeys], onItemSelect);
              }
            "
            @select="
              (_, props) => {
                onChecked(_, props, [...selectedKeys, ...targetKeys], onItemSelect);
              }
            "
          />
        </template>
      </Transfer>
      <template #renderEmpty>
        <EmptyVue></EmptyVue>
      </template>
    </ConfigProvider>
  </div>
</template>
<script lang="ts">
import { CheckEvent } from 'ant-design-vue/es/tree/Tree';
import { computed, defineComponent, ref } from 'vue';
import { Switch, Transfer, ConfigProvider, Tree } from 'ant-design-vue';
import EmptyVue from '../component/Empty.vue'
interface TreeDataItem {
  key: string;
  title: string;
  disabled?: boolean;
  children?: TreeDataItem[];
}
const tData: TreeDataItem[] = [
  { key: '0-0', title: '0-0' },
  {
    key: '0-1',
    title: '0-1',
    children: [
      { 
        key: '0-1-0', title: '0-1-0',
        children: [
          { key: '0-1-0-1', title: '0-1-0-1', },
          { key: '0-1-0-2', title: '0-1-0-2', }
        ]
      },
      { key: '0-1-1', title: '0-1-1' },
    ],
  },
  { 
    key: '0-2', title: '0-3',
    children: [
      { key: '0-2-0', title: '0-2-0' },
      { key: '0-2-1', title: '0-2-1' },
    ],
  }
];

const transferDataSource: TreeDataItem[] = [];
function flatten(list: TreeDataItem[] = []) {
  list.forEach(item => {
    transferDataSource.push(item);
    flatten(item.children);
  });
}
flatten(JSON.parse(JSON.stringify(tData)));

function isChecked(selectedKeys: string[], eventKey: string) {
  return selectedKeys.indexOf(eventKey) !== -1;
}

function handleTreeData(data: TreeDataItem[], targetKeys: string[] = []): TreeDataItem[] {
  data.forEach(item => {
    item['disabled'] = targetKeys.includes(item.key);
    if (item.children) {
      handleTreeData(item.children, targetKeys);
    }
  });
  return data;
}

export default defineComponent({
  components: {
    Switch,
    Transfer,
    EmptyVue,
    Tree,
    ConfigProvider
  },
  setup() {
    const targetKeys = ref<string[]>([]);

    const dataSource = ref<TreeDataItem[]>(transferDataSource);

    const treeData = computed<TreeDataItem[]>(() => {
      return handleTreeData(tData, targetKeys.value);
    });

    const onChange = (keys: string[]) => {
      targetKeys.value = keys;
    };
    const onChecked = (
      _: Record<string, string[]>,
      e: CheckEvent,
      checkedKeys: string[],
      onItemSelect: (n: any, c: boolean) => void,
    ) => {
      const { eventKey } = e.node;
      onItemSelect(eventKey, !isChecked(checkedKeys, eventKey));
    };
    return {
      targetKeys,
      dataSource,
      treeData,
      onChange,
      onChecked,
    };
  },
});
</script>
<style scoped>
.tree-transfer .ant-transfer-list:first-child {
  width: 50%;
  flex: none;
}
.tableEmpty {
  min-height: 100px;
  padding-top: 0;
}

</style>