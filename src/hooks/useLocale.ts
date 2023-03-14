import { inject } from "vue"
import en_US from "../locale/en"
import zh_CN from "../locale/zh"


interface LocaleDataType {
  antLocale?: {
    [key:string]: any
  }
  curLocale?: {
    [key:string]: any
  }
}

export default function useLocale ():LocaleDataType {
  const localeData = inject<LocaleDataType>('localeData', {} as LocaleDataType) || {}
  const { antLocale } = localeData
  if (!antLocale) {
    return {
      curLocale: zh_CN
    }
  }
  const curLocale = antLocale.Locale === 'en' ? en_US : zh_CN
  return {
    antLocale,
    curLocale
  }
}