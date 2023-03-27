import { defineComponent } from "vue";
// import TdCopy from "./TdCopy.vue";
// import TdEllipsis from "./TdEllipsis.vue";
// import TdHandle from "./TdHandle.vue";
// import TdStatus from "./TdStatus.vue";

const TdComponents:{
  [key:string]: any
} = {}
const components = import.meta.glob('./*.vue', { eager: true })
for (const [key, value] of Object.entries(components)) {
  const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
  //@ts-ignore
  TdComponents[name] = defineComponent(value).default
}


export default TdComponents

// export { TdCopy, TdEllipsis, TdStatus, TdHandle }
