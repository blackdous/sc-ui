import { VNode } from 'vue';
import { ExtractPropTypes } from "vue/dist/vue"

import { withInstall } from "../../utils/index"
import scBreadcrumb from './component/ScBreadcrumb.vue'
import { Props } from "./component/type"

export const ScBreadcrumb = withInstall(scBreadcrumb) as unknown as VNode

export declare type BreadcrumbProps = Partial<ExtractPropTypes<typeof Props>> 