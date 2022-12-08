import { SizeEnum } from '../../../enums/SizeEnum'
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
