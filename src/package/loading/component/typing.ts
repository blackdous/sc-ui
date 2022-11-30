/*
 * @Description:
 * @Author: Format-qi jsq15517589670@163.com
 * @Date: 2022-05-10 17:21:00
 * @LastEditors: 庞昭昭
 * @LastEditTime: 2022-11-04 13:40:39
 */
import { SizeEnum } from '@/enums/sizeEnum'
import { VNode } from 'vue'

export interface LoadingProps {
  tip: string
  size: SizeEnum
  absolute: boolean
  loading: boolean
  background: string
  theme: 'dark' | 'light'
  indicator: VNode
}
