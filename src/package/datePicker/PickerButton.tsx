import type { FunctionalComponent } from 'vue';
import type { ButtonProps } from 'ant-design-vue';
import {Button} from 'ant-design-vue';

const PickerButton: FunctionalComponent<ButtonProps> = (props: ButtonProps, { attrs, slots }) => {
  return <Button size="small" type="primary" {...props} {...attrs} v-slots={slots}></Button>;
};
export default PickerButton;
