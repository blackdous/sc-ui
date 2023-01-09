import type { NamePath } from 'ant-design-vue/lib/form/interface';
import type { ColProps } from 'ant-design-vue/lib/grid/Col';
import type { HTMLAttributes, VNodeChild } from 'vue';

export interface FormItem {
  /**
   * 是否显示 “：”
   * @default true
   * @type boolean
   */
  colon?: boolean;

  /**
   * 额外的提示信息。 它类似于help。
   * @type any (string | slot)
   */
  extra?: string | VNodeChild | JSX.Element;

  /**
   * 与 validateStatus 一起使用，此选项指定验证状态图标。 建议仅与输入一起使用。
   * @default false
   * @type boolean
   */
  hasFeedback?: boolean;

  /**
   *  提示消息。
   * @type any (string | slot)
   */
  help?: string | VNodeChild | JSX.Element;

  label?: string | VNodeChild | JSX.Element;

  /**
   * 标签的布局。 可以将跨度偏移设置为 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12} 与 <Col> 相同
   * @type Col
   */
  labelCol?: ColProps & HTMLAttributes;

  /**
   * 是否必选。
   * @default false
   * @type boolean
   */
  required?: boolean;

  /**
   * 验证状态。
   * @type string
   */
  validateStatus?: '' | 'success' | 'warning' | 'error' | 'validating';

  /**
   * 输入控件的布局，和 labelCol 一样
   * @type Col
   */
  wrapperCol?: ColProps;
  /**
   * 设置子标签htmlFor。
   */
  htmlFor?: string;

  labelAlign?: 'left' | 'right';
  /**
   * 模型的关键。 在 validate 和 resetFields 方法的设置中，是必需的
   */
  name?: NamePath;

  rules?: object | object[];
  /**
   * 是否自动关联表单域。 在大多数情况下，可以设置自动关联。
   * 如果不满足自动关联的条件，可以手动关联。
   */
  autoLink?: boolean;
  /**
   * 是否停止验证该字段的第一个错误规则
   */
  validateFirst?: boolean;
  /**
   * 何时验证子节点的值
   */
  validateTrigger?: string | string[] | false;
}
