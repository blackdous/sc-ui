import type { TagProps } from 'ant-design-vue';
import { Tag } from 'ant-design-vue';

export default function PickerTag(props: TagProps, { slots, attrs }) {
  return <Tag color="blue" {...props} {...attrs} v-slots={slots} />;
}
