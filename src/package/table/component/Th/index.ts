import { defineAsyncComponent } from "vue";

const TdComponents:{
  [key:string]: any
} = {}
const components = import.meta.glob('./*.vue')
for (const [key, value] of Object.entries(components)) {
  const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
  //@ts-ignore
  TdComponents[name] = defineAsyncComponent(value)
}

export default TdComponents