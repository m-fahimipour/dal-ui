import { useMemo } from "react";
import type { IUseDefaultProps } from "../types/functions";
import { useTheme } from "@dui/theme";

export function useDefaultProps<T>(props: IUseDefaultProps<T>): T {
  const theme = useTheme();
  const { componentName, componentProps } = props;

  const mergedClassName: Set<string> = useMemo(() => {
    return new Set([
      ...(theme["components"]?.[componentName]?.defaultProps?.[
        "className"
      ]?.split(" ") || []),
      ...(componentProps?.className?.split(" ") || []),
    ]);
  }, [
    componentProps.className,
    theme["components"]?.[componentName]?.defaultProps?.["className"],
  ]);

  const mergedProps = useMemo(() => {
    return {
      ...theme["components"]?.[componentName]?.defaultProps,
      ...componentProps,
      className:
        mergedClassName.size === 0 ? "" : [...mergedClassName].join(" "),
    };
  }, [{}]);

  return mergedProps;
}
