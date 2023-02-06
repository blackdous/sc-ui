<template>
  <a-col v-bind="actionColOpt" v-if="showActionButtonGroup">
    <div 
      :style="{ textAlign: actionColOpt.style.textAlign, width: '100%', paddingLeft: `${labelWidth}` }"
      :class="formAction"
    >
      <!-- width: `calc(100% - ${pxToRem(labelWidth)})` -->
      <FormItem>
        <slot name="resetBefore"></slot>
        <ScButton
          status="info"
          class="mr-4"
          v-bind="getResetBtnOptions"
          @click="resetAction"
          v-if="showResetButton"
        >
          {{ getResetBtnOptions.text }}
        </ScButton>
        <slot name="submitBefore"></slot>

        <ScButton
          type="primary"
          class="mr-4"
          v-bind="getSubmitBtnOptions"
          @click="submitAction"
          v-if="showSubmitButton"
        >
          {{ getSubmitBtnOptions.text }}
        </ScButton>

        <slot name="advanceBefore"></slot>
        <ScButton
          type="link"
          size="small"
          @click="toggleAdvanced"
          :class="[`${formAction}-collapse-btn`]"
          v-if="showAdvancedButton && !hideAdvanceBtn"
        >
          {{ isAdvanced ? '收起' : '展开' }}
          <!-- <BzArrow class="ml-1" :expand="!isAdvanced" up /> -->
          <i :class="['sc-ui', 'sc-xiangxia', isAdvanced ? 'up' : 'down']"></i>
        </ScButton>
        <slot name="advanceAfter"></slot>
      </FormItem>
    </div>
  </a-col>
</template>
<script lang="ts">
  import type { ColEx } from '../types/index';
  //import type { ButtonProps } from 'ant-design-vue/es/button/buttonTypes';
  import { defineComponent, computed, PropType } from 'vue';
  import { Form, Col } from 'ant-design-vue';
  import { ScButton, ButtonProps } from '../../button';
  import { useFormContext } from '../hooks/useFormContext';
  import { PropTypes, transformPxtoRem } from '../../../utils';
  import { basePrefixCls } from '../../../constant';

  type ButtonOptions = Partial<ButtonProps> & { text: string };

  export default defineComponent({
    name: 'BasicFormAction',
    components: {
      FormItem: Form.Item,
      ScButton,
      [Col.name]: Col,
    },
    props: {
      labelWidth: {
        type: [String, Number]
      },
      showActionButtonGroup: PropTypes.bool.def(true),
      showResetButton: PropTypes.bool.def(true),
      showSubmitButton: PropTypes.bool.def(true),
      showAdvancedButton: PropTypes.bool.def(true),
      resetButtonOptions: {
        type: Object as PropType<ButtonOptions>,
        default: () => ({}),
      },
      submitButtonOptions: {
        type: Object as PropType<ButtonOptions>,
        default: () => ({}),
      },
      actionColOptions: {
        type: Object as PropType<Partial<ColEx>>,
        default: () => ({}),
      },
      actionSpan: PropTypes.number.def(6),
      isAdvanced: PropTypes.bool,
      hideAdvanceBtn: PropTypes.bool,
      layout: String as PropType<'horizontal'|'vertical'|'inline'>
    },
    emits: ['toggle-advanced'],
    setup(props, { emit }) {
      // console.log('props: ', props);
      const formAction = [basePrefixCls + 'FormAction']
      const actionColOpt = computed(() => {
        const { showAdvancedButton, actionSpan: span, actionColOptions } = props;
        const actionSpan = 24 - span;
        const advancedSpanObj = showAdvancedButton
          ? { span: actionSpan < 6 ? 24 : actionSpan }
          : {};
        const actionColOpt: Partial<ColEx> = {
          style: { textAlign: 'left' },
          span: showAdvancedButton ? 6 : 4,
          ...advancedSpanObj,
          ...actionColOptions
        };
        return actionColOpt;
      });

      const labelWidth = computed(() => {
        return props.layout !== 'vertical' ? transformPxtoRem(props.labelWidth || '') : 0
      })

      const getResetBtnOptions = computed((): ButtonOptions => {
        return Object.assign(
          {
            text: '重置',
          },
          props.resetButtonOptions,
        );
      });

      const getSubmitBtnOptions = computed(() => {
        return Object.assign(
          {
            text: '查询',
          },
          props.submitButtonOptions,
        );
      });

      function toggleAdvanced() {
        emit('toggle-advanced');
      }

      return {
        formAction,
        actionColOpt,
        labelWidth,
        getResetBtnOptions,
        getSubmitBtnOptions,
        toggleAdvanced,
        ...useFormContext(),
      };
    },
  });
</script>
