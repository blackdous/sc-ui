<template>
  <div>
    <InputSearch
      v-model:value="value"
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
    />
    <br />
    <br />
    <InputSearch
      v-model:value="value"
      placeholder="input search text"
      enter-button
      @search="onSearch"
    />
    <br />
    <br />
    <InputSearch
      v-model:value="value"
      placeholder="input search text"
      enter-button="Search"
      size="large"
      @search="onSearch"
    />
    <br />
    <br />
    <InputSearch
      v-model:value="value"
      placeholder="input search text"
      size="large"
      @search="onSearch"
    >
      <template #enterButton>
        <span>1111</span>
      </template>
    </InputSearch>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { InputSearch } from 'ant-design-vue';
import { ScButton } from 'sc-ui';
export default defineComponent({
  components: {
    InputSearch,
    ScButton
  },
  setup() {
    const value = ref<string>('');

    const onSearch = (searchValue: string) => {
      console.log('use value', searchValue);
      console.log('or use this.value', value.value);
    };

    return {
      value,
      onSearch,
    };
  },
});
</script>
<style scoped>
/* @import ''; */
</style>