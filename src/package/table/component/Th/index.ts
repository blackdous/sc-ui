import { defineAsyncComponent } from "vue";

const TdComponents:{
  [key:string]: any
} = {}
const components = import.meta.glob('./*.vue')
for (const [key, value] of Object.entries(components)) {
  const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
  //@ts-ignore
  TdComponents[name] = defineAsyncComponent(value)
  for (let i = 1; i < 15; i++) {
    //@ts-ignore
    TdComponents[name + i] = defineAsyncComponent(value)
  }
}

export default TdComponents