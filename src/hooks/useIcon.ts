import { createFromIconfontCN } from '@ant-design/icons-vue'

const isBrowser = () => typeof window !== 'undefined';

export default function useIcon<ExtraCommonProps extends { [key: string]: any } | undefined> (
  extraCommonProps: ExtraCommonProps
) {

  let scriptUrl = '//at.alicdn.com/t/c/font_3690753_2defazcohtu.js'
  if (isBrowser()) {
    if (window?.iconfontUrl) {
      scriptUrl = window.iconfontUrl
    }
  }
  console.log('scriptUrl: ', scriptUrl);
  const ScIconComponent = createFromIconfontCN({
    scriptUrl: scriptUrl, // 在 iconfont.cn 上生成,
    extraCommonProps: extraCommonProps
  })

  return ScIconComponent
}