// useDefaultProps section

interface IDefaultPropsTypography<T> {
  componentName: "typography";
  componentProps: {
    className?: string;
  } & T;
}

interface IDefaultPropsBlock<T> {
  componentName: "block";
  componentProps: {
    className?: string;
  } & T;
}

export type IUseDefaultProps<T> =
  | IDefaultPropsTypography<T>
  | IDefaultPropsBlock<T>;

export declare const useDefaultProps: <T>(props: IUseDefaultProps<T>) => T;

//////////////////////////////////////////////
