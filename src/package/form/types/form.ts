import type { NamePath, RuleObject } from 'ant-design-vue/lib/form/interface';
import type { VNode } from 'vue';
import type { ButtonProps as AntdButtonProps } from '../../button/index';
import type { FormItem } from './formItem';
import type { ColEx, ComponentType } from './index';
import type { TableActionType } from '../../table';
import type { CSSProperties } from 'vue';
import type { RowProps } from 'ant-design-vue/lib/grid/Row';

export type FieldMapToTime = [string, [string, string], string?][];

export type Rule = RuleObject & {
  trigger?: 'blur' | 'change' | ['change', 'blur'];
};

export interface RenderCallbackParams {
  schema: FormSchema;
  values: Recordable;
  model: Recordable;
  field: string;
}

interface ButtonProps extends AntdButtonProps {
  text?: string;
}

export interface FormActionType {
  submit: () => Promise<void>;
  setFieldsValue: <T>(values: T) => Promise<void>;
  resetFields: () => Promise<void>;
  getFieldsValue: () => Recordable;
  clearValidate: (name?: string | string[]) => Promise<void>;
  updateSchema: (data: Partial<FormSchema> | Partial<FormSchema>[]) => Promise<void>;
  resetSchema: (data: Partial<FormSchema> | Partial<FormSchema>[]) => Promise<void>;
  setProps: (formProps: Partial<FormProps>) => Promise<void>;
  removeSchemaByFiled: (field: string | string[]) => Promise<void>;
  appendSchemaByField: (
    schema: FormSchema,
    prefixField: string | undefined,
    first?: boolean | undefined,
  ) => Promise<void>;
  validateFields: (nameList?: NamePath[]) => Promise<any>;
  validate: (nameList?: NamePath[]) => Promise<any>;
  scrollToField: (name: NamePath, options?: ScrollOptions) => Promise<void>;
}

type RegisterFn = (formInstance: FormActionType) => void;

export type UseFormReturnType = [RegisterFn, FormActionType];

export interface FormProps {
  name?: string;
  layout?: 'vertical' | 'inline' | 'horizontal';
  // Form value
  model?: Recordable;
  labelWidth?: number | string;
  labelAlign?: 'left' | 'right';
  rowProps?: RowProps;
  submitOnReset?: boolean;
  submitOnChange?: boolean;
  labelCol?: Partial<ColEx>;
  wrapperCol?: Partial<ColEx>;
  baseRowStyle?: CSSProperties;
  baseColProps?: Partial<ColEx>;
  schemas?: FormSchema[];
  // 用于合并到动态控件表单项中的值
  mergeDynamicData?: Recordable;
  // Compact mode for search forms
  compact?: boolean;
  // 空行跨度
  emptySpan?: number | Partial<ColEx>;
  size?: 'default' | 'small' | 'large';
  disabled?: boolean;
  // 用于将表单内时间区域的应设成 2 个字段
  fieldMapToTime?: FieldMapToTime;
  // 自动设置表单内组件的 placeholder，自定义组件需自行实现
  autoSetPlaceHolder?: boolean;
  // 在input中输入时按回车自动提交
  autoSubmitOnEnter?: boolean;
  // 如果表单项有校验，会自动生成校验信息，该参数控制是否将字段中文名字拼接到自动生成的信息后方
  rulesMessageJoinLabel?: boolean;
  // 是否显示收起展开按钮
  showAdvancedButton?: boolean;
  // 是否聚焦第一个输入框，只在第一个表单项为 input 的时候作用
  autoFocusFirstItem?: boolean;
  // 如果 showAdvancedButton 为 true，超过指定行数行默认折叠
  autoAdvancedLine?: number;
  // 折叠时始终保持显示的行数
  alwaysShowLines?: number;
  // W是否显示操作按钮(重置/提交)
  showActionButtonGroup?: boolean;

  // 注册按钮配置
  resetButtonOptions?: Partial<ButtonProps>;

  // 提交按钮配置
  submitButtonOptions?: Partial<ButtonProps>;

  // 操作按钮外层 Col 组件配置，如果开启 showAdvancedButton，则不用设置
  actionColOptions?: Partial<ColEx>;
  showResetButton?: boolean;
  showSubmitButton?: boolean;

  resetFunc?: () => Promise<void>;
  submitFunc?: () => Promise<void>;
  transformDateFunc?: (date: any) => string;
  colon?: boolean;
}
export interface FormSchema {
  // 字段名
  field: string;
  // 表单更新事件名称
  changeEvent?: string;
  // Variable name bound to v-model Default value
  valueField?: string;
  // 标签名
  label: string | VNode;
  className?: string;
  // 二级标签名 灰色
  subLabel?: string;
  // 标签名右侧温馨提示
  helpMessage?:
    | string
    | string[]
    | ((renderCallbackParams: RenderCallbackParams) => string | string[]);
  // 标签名右侧温馨提示组件 props
  helpComponentProps?: Partial<HelpComponentProps>;
  // 覆盖统一设置的 labelWidth
  labelWidth?: string | number;
  // 禁用 form 全局设置的 labelWidth,自己手动设置 labelCol 和 wrapperCol
  disabledLabelWidth?: boolean;
  // 组件类型
  component: ComponentType;
  // 所渲染的组件的 props
  componentProps?:
    | ((opt: {
        schema: FormSchema;
        tableAction: TableActionType;
        formActionType: FormActionType;
        formModel: Recordable;
      }) => Recordable)
    | object;
  // 简化 rules 配置，为 true 则转化成 [{required:true}]
  required?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);

  suffix?: string | number | ((values: RenderCallbackParams) => string | number);

  // 校验规则
  rules?: Rule[];
  // 校验信息是否加入 label
  rulesMessageJoinLabel?: boolean;

  // 参考 FormItem
  itemProps?: Partial<FormItem>;

  // 参考 actionColOptions
  colProps?: Partial<ColEx>;

  // 默认值
  defaultValue?: any;
  // 高级选项
  isAdvanced?: boolean;

  // Matching details components
  span?: number;
  // 动态判断当前组件是否显示，js 控制，会删除 dom
  ifShow?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);
  // 动态判断当前组件是否显示，css 控制，不会删除 dom
  show?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);

  // 自定义渲染组件
  render?: (renderCallbackParams: RenderCallbackParams) => VNode | VNode[] | string;

  // 自定义渲染组件（需要自行包含 formItem）
  renderColContent?: (renderCallbackParams: RenderCallbackParams) => VNode | VNode[] | string;
  // 自定义渲染组内部的 slot
  renderComponentContent?:
    | ((renderCallbackParams: RenderCallbackParams) => any)
    | VNode
    | VNode[]
    | string;

  // 自定义 slot，渲染组件
  slot?: string;
  // 自定义 slot，渲染组件 （需要自行包含 formItem）
  colSlot?: string;
  // 动态判断当前组件是否禁用
  dynamicDisabled?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);
  // 动态判返当前组件你校验规则
  dynamicRules?: (renderCallbackParams: RenderCallbackParams) => Rule[];
}
export interface HelpComponentProps {
  maxWidth: string;
  // 是否显示序列号
  showIndex: boolean;
  // 文本列表
  text: any;
  color: string;
  fontSize: string;
  icon: string;
  absolute: boolean;
  position: any;
}
