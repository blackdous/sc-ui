import { defineComponent } from "vue";

const THComponents:{
  [key:string]: any
} = {}
const components = import.meta.glob('./*.vue', { eager: true })
for (const [key, value] of Object.entries(components)) {
  const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
  //@ts-ignore
  THComponents[name] = defineComponent(value).default
  for (let i = 1; i < 15; i++) {
    //@ts-ignore
    THComponents[name + i] = defineComponent(value).default
  }
}

export default THComponents