import type { Ref } from 'vue';
import type { StepItemState } from './Step.vue';
export interface StepsProp {
    /**
     * 每个 step 的间距，不填写将自适应间距。 支持百分比。
     */
    space?: number | string;
    /**
     * 显示方向
     */
    direction?: 'horizontal' | 'vertical';
    /**
     * 设置当前激活步骤
     */
    active?: number;
    /**
     * 进行居中对齐
     */
    alignCenter?: boolean;
    /**
     * 是否应用简洁风格
     */
    simple?: boolean;
    /**
     * 设置结束步骤的状态
     * 可选值 'wait' | 'process' | 'finish' | 'error' | 'success'
     */
    finishStatus?: 'wait' | 'process' | 'finish' | 'error' | 'success';
    /**
     * 设置当前步骤的状态
     * 可选值 'wait' | 'process' | 'finish' | 'error' | 'success'
     */
    processStatus?: 'wait' | 'process' | 'finish' | 'error' | 'success';
}
declare const _sfc_main: import("vue").DefineComponent<{
    space: {
        type: (NumberConstructor | StringConstructor)[];
        required: false;
    };
    direction: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    active: {
        type: NumberConstructor;
        required: false;
    };
    alignCenter: {
        type: BooleanConstructor;
        required: false;
    };
    simple: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    finishStatus: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    processStatus: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {
    props: any;
    emit: (event: "change", newVal: number, oldVal: number) => void;
    steps: Ref<StepItemState[]>;
    prefixCls: import("vue").ComputedRef<string[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (newVal: number, oldVal: number) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    space?: unknown;
    direction?: unknown;
    active?: unknown;
    alignCenter?: unknown;
    simple?: unknown;
    finishStatus?: unknown;
    processStatus?: unknown;
} & {
    direction: string;
    alignCenter: boolean;
    simple: boolean;
    finishStatus: string;
    processStatus: string;
} & {
    space?: string | number | undefined;
    active?: number | undefined;
}> & {
    onChange?: ((newVal: number, oldVal: number) => any) | undefined;
}, {
    direction: string;
    alignCenter: boolean;
    simple: boolean;
    finishStatus: string;
    processStatus: string;
}>;
export default _sfc_main;
