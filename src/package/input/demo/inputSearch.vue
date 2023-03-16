<template>
  <div>
    <InputSearch
      v-model:value="value"
      placeholder="input search text"
      style="width: 200px"
      v-stopEvent.default
      @keydown="handleKeyDown"
      @search="onSearch"
      @press-enter="onSearch"
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
import { defineComponent, ref, inject } from 'vue';
import { InputSearch } from 'ant-design-vue';
import { ScButton, installGlobalDirectives } from 'sc-ui';
export default defineComponent({
  components: {
    InputSearch,
    ScButton
  },
  setup() {
    const value = ref<string>('');

    const globalApp = inject('globalApp')
    // @ts-ignore
    installGlobalDirectives(globalApp)

    const onSearch = (searchValue: string) => {
      console.log('use value', searchValue);
      console.log('or use this.value', value.value);
    };

    const handleKeyDown = (event:Event) => {
      console.log('event: InputSearch', event.keyCode);

    }

    return {
      value,
      onSearch,
      handleKeyDown,
    };
  },
});
</script>
<style scoped>
/* @import 'comment'; */
</style>