---
map:
  path: /sensitiveOperations
realPath: src/package/sensitiveOperations/index.zh-CN.md
---

# 敏感操作验证

## 基础用法

**index.js/index.ts**

```js
  import { useSensitiveOperationsModal } from '@sincerecloud/sc-ui'
  import {
    verificationValid,
    verificationWays,
    verificationCodeSend,
    verificationCodeCheck,
    verificationCodeEmailSend,
    verificationCodeEmailCheck
  } from '@/api/sms'

  const createSensitiveOperationsModal = useSensitiveOperationsModal({
    verificationValid,
    verificationWays,
    verificationCodeSend,
    verificationCodeCheck,
    verificationCodeEmailSend,
    verificationCodeEmailCheck,
    langConfig: {
      yanZhengMa: '验证码',
      houChongChi: '后重试',
      faSongYanZhengMa: '发送验证码',
      qingXianShuRuYanZhengMa: '请先输入验证码',
      qingFaSongYanZhengMa: '请发送验证码',
      yanZhengFangShi: '验证方式',
      shouJiYanZheng: '手机验证',
      youXiangYanZheng: '邮箱验证',
      ninYiKaiQiCaoZuoBaohu: '您已开启操作保护，为了保障您的账号和资源安全，请进行身份验证。如需关闭操作保护，请在“安全设置>操作保护”中关闭。',
      shenFenYanZhengWeiQueBaoBenCi: '身份验证：为确保本次操作安全，请完成身份验证',
      phone: '手机号',
      youXiang: '邮箱',
      shouJi: '手机',
      ramFangWenKongZhi: 'RAM访问控制',
      anQuanSheZhi: '安全设置',
      ninShangWeiBangDingQianWang: '您尚未绑定{type}，可前往{page}进行绑定'
    }
  })

```

**components**

```js
  import createSensitiveOperationsModal from '@/xxx/index.ts'
  createSensitiveOperationsModal({
    sensitiveOperationId: id,
    callbackOk: (code) => {
      if (!batch) {
        changePwdDialogModal.code = code
        type.visible = true
      } else {
        batchSettingModal.visible = true
      }
      // 验证成功回调方法
    }
  })
```

## 示例
<demo src="./demo/basic.vue"
  language="vue"
  title="单选选择器"
  >
</demo>

## API

| 属性               | 类型                            | 默认值  | 可选值 | 说明                     |
| ------------------ | --------------------------- | ------- | ------ | ------------------------ |
| title      | string            | -  |  -     |  标题 |
| callbackOk      |    () => any        | -  |  -     |  回调方法、验证通过或不需要验证都要执行 |
| sensitiveOperationId      |    string       | -  |  -     |  需要敏感验证的类型 |
| close      |    () => any       | -  |  -     |  关闭回调 |
| verificationWays      |    (config:T) => Promise       | -  |  -     |  验证接口 |
| verificationCodeSend      |    (config:T) => Promise       | -  |  -     |  验证接口 |
| verificationCodeCheck      |    (config:T) => Promise       | -  |  -     |  验证接口 |
| verificationCodeEmailSend      |    (config:T) => Promise       | -  |  -     |  验证接口 |
| verificationCodeEmailCheck      |    (config:T) => Promise      | -  |  -     |  验证接口 |
| verificationValid      |    (config:T) => Promise       | -  |  -     |  验证接口 |
| loadingFun      |    (loading: boolean) => any       | -  |  -     |  loading状态回调 |
| catchFun      |    (error?: any) => any       | -  |  -     |  错误捕获回调 |
| finallyFun      |    (error?: any) => any       | -  |  -     |  执行完成回调 |
| forcePass      |    boolean       | -  |  -     |  是否强制执行校验 |
| langConfig      |    object       | -  |  -     |  多语言相关 |
| userInfo      |    object       | -  |  -     |  用户信息 |

```js
// langConfig 默认值
const langConfig =  {
    yanZhengMa: '验证码',
    houChongChi: '后重试',
    faSongYanZhengMa: '发送验证码',
    qingXianShuRuYanZhengMa: '请先输入验证码',
    qingFaSongYanZhengMa: '请发送验证码',
    yanZhengFangShi: '验证方式',
    shouJiYanZheng: '手机验证',
    youXiangYanZheng: '邮箱验证',
    ninYiKaiQiCaoZuoBaohu: '您已开启操作保护，为了保障您的账号和资源安全，请进行身份验证。如需关闭操作保护，请在“安全设置>操作保护”中关闭。',
    shenFenYanZhengWeiQueBaoBenCi: '身份验证：为确保本次操作安全，请完成身份验证',
    phone: '手机号',
    youXiang: '邮箱',
    shouJi: '手机',
    ramFangWenKongZhi: 'RAM访问控制',
    anQuanSheZhi: '安全设置',
    ninShangWeiBangDingQianWang: '您尚未绑定{type}，可前往{page}进行绑定'
}
```
