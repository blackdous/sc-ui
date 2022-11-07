import type { Plugin, Component, PropType } from 'vue';
export declare const withInstall: <T>(component: T, alias?: string) => T & Plugin;
export declare const definePropType: <T>(val: any) => PropType<T>;
export declare const iconPropType: PropType<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
