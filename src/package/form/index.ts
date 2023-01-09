import { withInstall } from "../../utils/index"
import scForm from './ScForm.vue'

export { useForm } from './hooks/useForm'

export { default as ApiSelect } from './component/ApiSelect.vue'
export { default as RadioButtonGroup } from './component/RadioButtonGroup.vue'
export { default as ApiTreeSelect } from './component/ApiTreeSelect.vue'
export { default as ApiTree } from './component/ApiTree.vue'
export { default as ApiRadioGroup } from './component/ApiRadioGroup.vue'
export { default as ApiCascader } from './component/ApiCascader.vue'

export const ScForm = withInstall(scForm)