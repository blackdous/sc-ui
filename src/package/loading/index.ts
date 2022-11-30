/*
 * @Description:
 * @Author: Format-qi jsq15517589670@163.com
 * @Date: 2022-05-10 17:21:00
 * @LastEditors: Format-qi jsq15517589670@163.com
 * @LastEditTime: 2022-08-30 09:40:42
 */
import { withInstall } from '@/utils'

import bzLoading from './src/Loading.vue'

export const BzLoading = withInstall(bzLoading)

export { useLoading } from './src/useLoading'
export { createLoading } from './src/createLoading'

export type { LoadingProps } from './src/typing'
