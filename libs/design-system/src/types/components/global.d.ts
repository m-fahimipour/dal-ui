export type TFilterFalseValueKey<T extends object> = {
  [key in keyof T as T[key] extends true ? key : never]: T[key];
};

export interface IBreakpoints {
  sm: "sm";
  md: "md";
  lg: "lg";
  xl: "xl";
  xxl: "2xl";
}

export type TAdaptiveBreakpoints<T extends object> = {
  [key in keyof T as key extends string
    ? `${keyof IBreakpoints}:${key}`
    : never]: T[key];
};
