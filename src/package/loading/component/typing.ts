import { SizeEnum } from '../../../enums/SizeEnum'
import { VNode } from 'vue'

export interface LoadingProps {
  isFullPage: boolean
  tip: string
  size: SizeEnum
  absolute: boolean
  loading: boolean
  background: string
  theme: 'dark' | 'light'
  indicator: VNode
}
