import { iconPropType } from "@/utils";
export interface StepsPropType {
    space?: string | number;
    direction?: 'horizontal' | 'vertical';
    active?: number;
    alignCenter?: boolean;
    simple?: boolean;
    finishStatus?: 'wait' | 'process' | 'finish' | 'error' | 'success';
    processStatus?: 'wait' | 'process' | 'finish' | 'error' | 'success';
}
export interface StepPropType {
    title?: string;
    description?: string;
    status?: 'wait' | 'process' | 'finish' | 'error' | 'success' | '';
    icon?: typeof iconPropType;
}
export declare const stepsEmits: {
    change: (newVal: number, oldVal: number) => boolean;
};
