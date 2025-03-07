export type TFilterFalseValue<T extends object> = {
  [key in keyof T as T[key] extends true ? key : never]: T[key];
};

interface IDefaultBreakpoints {
  sm: true;
  md: true;
  lg: true;
  xl: true;
  xxl: true;
  "max-sm": true;
  "max-md": true;
  "max-lg": true;
  "max-xl": true;
  "max-xxl": false;
}

export interface IBreakpoints extends IDefaultBreakpoints{}

export type TExtractStringKeys<T extends object> = {
  [key in keyof T]: key extends string ? key : never;
}[keyof T];

export type TAdaptiveBreakpointsObject<
  IValues extends object,
  Breakpoints extends object = IBreakpoints
> = {
  [key in keyof TFilterFalseValue<Breakpoints>]: keyof TFilterFalseValue<IValues>;
};

export type TAdaptiveBreakpointsArray<
  IValues extends object,
  Breakpoints extends object = IBreakpoints
> = `${TExtractStringKeys<Breakpoints>}:${TExtractStringKeys<TFilterFalseValue<IValues>>}`[];
