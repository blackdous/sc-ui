// declare global {
// }
declare type NonNullable<T> = T extends null | undefined ? never : T;
declare type Recordable<T = any> = Record<string, T>;
declare type EmitType = (event: string, ...args: any[]) => void;
declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}
declare type TimeoutHandle = ReturnType<typeof setTimeout>;