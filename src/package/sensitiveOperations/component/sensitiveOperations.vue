<template>
  <ScModal
    :visible="visible"
    :width="486"
    :title="title"
    type="warning"
    @ok="onVerificationModalOk"
    :maskClosable="false"
    :centered="true"
    :confirmLoading="confirmLoading"
    :infoDes="infoDes"
    :onOkDisable="!showVerifyNum"
    @cancel="close"
  >
    <Spin :spinning="loading">
      <Form
        ref="formRef"
        labelAlign="left"
        :colon="false"
        class="user-form"
        :label-col="{ span: 6 }"
        :model="form"
      >
        <FormItem :label="langConfig.yanZhengFangShi">
          <ScRadioGroup
            v-model:value="verifyType"
            class="w100"
            @change="doVerifyTypeChange"
          >
            <Radio
              v-for="item in verifyTypeList"
              :value="item.value"
              :key="item.value"
              >{{ item.text }}</Radio
            >
          </ScRadioGroup>
        </FormItem>
        <FormItem :label="verifyTypeLabel">
          <template v-if="showVerifyNum">
            <Input
              v-if="verifyType === 'phone'"
              v-model:value="form.showPhoneNumber"
              disabled
              style="width: 300px"
            />
            <Input
              v-else
              v-model:value="form.showEmail"
              disabled
              style="width: 300px"
            />
          </template>
          <span
            class="color-warning"
            v-else
            >{{ unBindHintText }}</span
          >
        </FormItem>
        <FormItem
          :label="'验证码'"
          name="code"
          :validateFirst="true"
          :rules="[codeCustomValidate, { pattern: /^[0-9]+$/, message: '请输入数字'}, { min: 6, message: '至少输入6字符', trigger: 'change' }]"
        >
          <Input
            v-model:value="typeObj[verifyType].code"
            :maxlength="6"
            style="width: 300px"
            :disabled="!showVerifyNum"
            @change="doCodeChange"
          >
            <template #suffix>
              <ScButton
                size="small"
                :disabled="currentVerify.isCounting || !showVerifyNum"
                :loading="currentVerify.countLoading"
                type="primary"
                @click="sendCode"
                >{{
                  currentVerify.isCounting
                    ? `${currentVerify.count}S${langConfig.houChongChi}`
                    : `${langConfig.faSongYanZhengMa}`
                }}</ScButton
              >
            </template>
          </Input>
        </FormItem>
      </Form>
    </Spin>
  </ScModal>
</template>

<script lang='ts'>
import { defineComponent, ref, computed, reactive, onMounted } from 'vue'
import { Spin, Form, FormItem, Radio, Input } from 'ant-design-vue'
import { mobilFormat, emailFormat } from '@sincerecloud/sc-utils'

import { ScModal } from '../../modal'
import { ScRadioGroup } from '../../radio'
import { ScButton } from '../../button'
import { baseProps } from './type'
import { isFunction } from '../../../utils'

export default defineComponent({
  name: 'SensitiveOperationsModal',
  components: {
    ScModal,
    Spin,
    ScRadioGroup,
    Form,
    FormItem,
    Radio,
    Input,
    ScButton
  },
  props: baseProps(),
  setup(props) {
    const { 
      verificationWays, 
      verificationCodeSend, 
      verificationCodeCheck, 
      verificationCodeEmailSend, 
      verificationCodeEmailCheck,
      close,
      langConfig
    } = props
    const form = ref<{
      showPhoneNumber: string
      phoneNumber: string
      email: string
      showEmail: string
      code: string
      sensitiveOperationId: string,
      builtin: number
    }>({
      showPhoneNumber: '',
      phoneNumber: '',
      email: '',
      showEmail: '',
      code: '',
      sensitiveOperationId: '',
      builtin: 0
    })
    const loading = ref(false)
    const confirmLoading = ref(false)
    const verifyType = ref('phone') // 验证类型

    const title = computed(() => props.title || '敏感操作验证')

    // const langConfig = computed(() => props.langConfig)

    // 短信验证码自定义校验
    const codeCustomValidate = {
      validator: async (rule: any, value: boolean) => {
        const sent = Boolean(currentVerify.value.sequenceNumber) // 是否已经发送过验证码
        if (sent) {
          if (value) {
            return Promise.resolve()
          } else {
            return Promise.reject(`${langConfig.qingXianShuRuYanZhengMa}`)
          }
        } else {
          return Promise.reject(`${langConfig.qingFaSongYanZhengMa}`)
        }
      },
      trigger: 'change'
    }

    // 公共数据
    const commonObj = {
      isCounting: false, // 倒计时中
      countLoading: false, // 发送验证码loading
      count: 60, // 倒计时秒数
      code: '', // 验证码
      sequenceNumber: '' // 操作序号
    }

    // 不同校验类型维护的数据
    const typeObj = reactive({
      phone: { ...commonObj },
      email: { ...commonObj }
    } as { [key:string]: any })

    // 验证类型集合
    const verifyTypeList = [
      {
        value: 'phone',
        text: langConfig.shouJiYanZheng
      },
      {
        value: 'email',
        text: langConfig.youXiangYanZheng
      }
    ]

    const infoDes = computed(() => {
      // 1:内置，0:非内置
      if (form.value?.builtin === 0) {
        return langConfig.ninYiKaiQiCaoZuoBaohu
      } else {
        return langConfig.shenFenYanZhengWeiQueBaoBenCi
      }
    })

    // 存在验证类型号码（手机号/邮箱）
    const showVerifyNum = computed(() => {
      return (
        (verifyType.value === 'phone' && !!form.value?.phoneNumber) || (verifyType.value === 'email' && !!form.value?.email)
      )
    })

    // 验证类型label
    const verifyTypeLabel = computed(() => {
      if (verifyType.value === 'phone') {
        return langConfig.shouJi
      } else {
        return langConfig.youXiang
      }
    })

    // 验证类型文案
    const verifyTypeText = computed(() => {
      if (verifyType.value === 'phone') {
        return langConfig.shouJi
      } else {
        return langConfig.youXiang
      }
    })

    // 不同验证类型的接口及入参
    const currentVerify = computed(() => {
      const obj = {
        phone: {
          sendCodeData: {
            phoneNumber: form.value?.phoneNumber,
            sensitiveOperationId: form.value?.sensitiveOperationId
          },
          sendCodeFun: verificationCodeSend,
          checkCodeFun: verificationCodeCheck,
          ...typeObj.phone
        },
        email: {
          sendCodeData: {
            email: form.value.email,
            sensitiveOperationId: form.value.sensitiveOperationId
          },
          sendCodeFun: verificationCodeEmailSend,
          checkCodeFun: verificationCodeEmailCheck,
          ...typeObj.email
        }
      }
      return obj[verifyType.value]
    })

    // 未绑定相关验证方式文案
    const unBindHintText = computed(() => {
      const page = isChildUser.value
        ? langConfig.ramFangWenKongZhi
        : langConfig.anQuanSheZhi
      return `您尚未绑定${verifyTypeText.value}，可前往${page}进行绑定`
    })

    // 是否是子用户
    const isChildUser = computed(() => {
      return userInfo.value.type !== 1
    })

    // 用户信息
    const userInfo = computed(() => {
      return props.userInfo || {}
    })

    onMounted(() => {
      init()
    })

    const init = async () => {
      loading.value = true
      try {
        form.value = await verificationWays({ sensitiveOperationId: props.sensitiveOperationId })
        form.value.showPhoneNumber = mobilFormat(form.value.phoneNumber || '')
        form.value.showEmail = emailFormat(form.value.email || '')
      } finally {
        loading.value = false
      }
    }

    // 校验类型选项变化
    const doVerifyTypeChange = (e: { target: HTMLInputElement }) => {
      // 短信验证码自定义校验
      formRef.value.clearValidate()
      form.value.code = typeObj[e.target.value].code
    }

    // 输入验证码变化
    const doCodeChange = (e: { target: HTMLInputElement }) => {
      form.value.code = e.target.value
    }

    // 获取验证码
    const sendCode = async () => {
      const type = verifyType.value
      typeObj[type].countLoading = true
      try {
        const res = await currentVerify.value.sendCodeFun(currentVerify.value.sendCodeData)
        typeObj[type].sequenceNumber = res.sequenceNumber
        sendSuccess(type)
      } finally {
        typeObj[type].countLoading = false
      }
    }

    /**
     * 发送验证码倒计时
     * @param type 校验类型
     */
    const sendSuccess = (type: string) => {
      typeObj[type].isCounting = true
      typeObj[type].count = 60
      let timer = setInterval(() => {
        typeObj[type].count -= 1
        if (typeObj[type].count === 0) {
          typeObj[type].isCounting = false
          clearInterval(timer)
          timer = null
        }
      }, 1000)
    }

    const formRef = ref()

    // 表单校验
    const onVerificationModalOk = async () => {
      // 短信验证码自定义校验
      await formRef.value.validate()
      confirmLoading.value = true
      try {
        const data = {
          sensitiveOperationId: form.value.sensitiveOperationId,
          sequenceNumber: typeObj[verifyType.value].sequenceNumber,
          verificationCode: typeObj[verifyType.value].code
        }
        await currentVerify.value.checkCodeFun(data)
        // 校验完成，执行成功回调
        if (isFunction(close)) {
          close()
        }
        props.callbackOk && props.callbackOk()
      } finally {
        confirmLoading.value = false
      }
    }
    return {
      loading,
      codeCustomValidate,
      verifyType,
      verifyTypeLabel,
      verifyTypeList,
      infoDes,
      showVerifyNum,
      unBindHintText,
      form,
      typeObj,
      currentVerify,
      formRef,
      title,
      langConfig,

      onVerificationModalOk,
      sendSuccess,
      doVerifyTypeChange,
      doCodeChange,
      sendCode
    }
  }
})
</script>
