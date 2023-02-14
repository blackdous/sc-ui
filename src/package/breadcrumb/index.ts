// import { VNode } from 'vue';
import { ExtractPropTypes } from "vue/dist/vue"

import { withInstall } from "../../utils/index"
import scBreadcrumb from './component/ScBreadcrumb.vue'
import scBreadcrumbItem from './component/ScBreadcrumbItem.vue'
import { Props } from "./component/type"

export const ScBreadcrumb = withInstall(scBreadcrumb)
export const ScBreadcrumbItem = withInstall(scBreadcrumbItem)

export declare type BreadcrumbProps = Partial<ExtractPropTypes<typeof Props>> 