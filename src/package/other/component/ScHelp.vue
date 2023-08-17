<script lang="tsx">
  import type { CSSProperties, PropType } from 'vue';
  import { defineComponent, computed, unref } from 'vue';
  import { Tooltip } from 'ant-design-vue';
  // import { InfoCircleOutlined } from '@ant-design/icons-vue';
  import { getPopupContainer, isString, isArray, getSlot } from '../../../utils';
  import { basePrefixCls } from '../../../constant'


  const props = {
    /**
     * 最大宽度
     * @default: 600px
     */
    maxWidth: { type: String, default: '600px' },
    /**
     * 是否显示序号,在 text 为 string[]情况下生效
     * @default: false
     */
    showIndex: { type: Boolean },

    color: { type: String },

    fontSize: { type: String, default: '14px' },
    /**
     * 显示方向，参考 Tooltip 组件
     */
    placement: { type: String, default: 'right' },
    /**
     * 文本列表
     */
    text: { type: [Array, String] as PropType<string[] | string> },
  };

  export default defineComponent({
    name: 'BzHelp',
    components: { Tooltip },
    props,
    setup(props, { slots }) {
      // const { prefixCls } = useDesign('basic-help');
      const prefixCls = basePrefixCls + 'Basic-help'

      const getTooltipStyle = computed(
        (): CSSProperties => ({ color: props.color, fontSize: props.fontSize }),
      );

      const getOverlayStyle = computed((): CSSProperties => ({ maxWidth: props.maxWidth }));

      function renderTitle() {
        const textList = props.text;

        if (isString(textList)) {
          return <p>{textList}</p>;
        }

        if (isArray(textList)) {
          return textList.map((text, index) => {
            return (
              <p key={text}>
                <>
                  {props.showIndex ? `${index + 1}. ` : ''}
                  {text}
                </>
              </p>
            );
          });
        }
        return null;
      }

      return () => {
        return (
          <Tooltip
            overlayClassName={`${prefixCls}__wrap`}
            title={<div style={unref(getTooltipStyle)}>{renderTitle()}</div>}
            autoAdjustOverflow={true}
            overlayStyle={unref(getOverlayStyle)}
            destroyTooltipOnHide={true}
            placement={props.placement as 'right'}
            getPopupContainer={() => getPopupContainer()}
          >
            <span class={prefixCls}>{getSlot(slots) || <i class="sc-ui sc-question-circle"></i>}</span>
          </Tooltip>
        );
      };
    },
  });
</script>
