import { createFromIconfontCN } from '@ant-design/icons-vue'

export default function useIcon<ExtraCommonProps extends { [key: string]: any } | undefined> (
  extraCommonProps: ExtraCommonProps
) {
  const ScIconComponent = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_3690753_0hakpp8jgt2p.js', // 在 iconfont.cn 上生成,
    extraCommonProps: extraCommonProps
  })

  return ScIconComponent
}