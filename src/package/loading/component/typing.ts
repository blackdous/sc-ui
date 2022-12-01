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
