<template>
  <div class="mt20">
    <ScSelect
      class="aaaa"
      autoAdjustOverflow
      placement="top"
      :tooltip="true"
      v-model:value="value"
      :options="list"
      @change="handleChange"
    >
    </ScSelect>
  </div>
</template>

<script lang='ts' setup>
import { ref, unref, onMounted, watch } from 'vue'
// import { SelectOption } from 'ant-design-vue'
import { ScSelect } from 'sc-ui'

const value = ref('jack1')
const valueAsync = ref()

const handleChange = (val:string) => {
  console.log('val: handleChange', val);
}

watch(() => valueAsync.value, (val) => {
  console.log('val: watch', val);

})

interface ListItem {
  label: string, 
  value: number, 
  key: string
}

const list = ref<Array<ListItem>>([])

const listAsync = ref<any>([])

const mockFetch = () => {
  return new Promise(function(resolve){
    setTimeout(function(){
      let result = [...new Array(100).keys()].map((i) => {
        return {
          label: 'Async' + i,
          value: i + '',
          key: 'Async' + i
        }
      })
      resolve(result);
    },2000);
  });
}

for (let i = 0;i < 100;  i++) {
  list.value = [...unref(list), {
    label: i % 2 === 0 ? 'JackJackJackJackJackJackJackJackJackJackJackJackJackJack' + i : 'JackJack' + i,
    value: i,
    key: 'Jack' + i
  }]
}

const fetchList = () => {
  console.log(listAsync.value);
  
  mockFetch().then((res:any)=> {
    console.log(res);
    console.log(res[0]);
    listAsync.value = res
    valueAsync.value = res[0].value
  })
}

onMounted(() => {
  fetchList()
})

</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
.aaaa {
  width: 100px;
}
.mt20 {
  margin-top: 20px;
}
.posFixed {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  padding: 32px;
}
</style>

<style>

</style>
