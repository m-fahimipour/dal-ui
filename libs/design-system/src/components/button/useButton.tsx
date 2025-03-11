import { useLayoutEffect, useState, type ReactNode } from "react";

import type { TButtonProps } from "../../types/components/button/Button";

interface IUseButtonReturn {
  loadingComponent?: ReactNode;
}

interface IUseButtonProps {
  loadingProps?: TButtonProps["loadingProps"];
}

export function useButton({ loadingProps }: IUseButtonProps): IUseButtonReturn {
  const [loadingComponent, setLoadingComponent] = useState<ReactNode>();

  useLayoutEffect(() => {
    if (loadingProps?.type == "line-spinner") {
      import(/* @vite-ignore */ "./components/loading/line-spinner/LineSpinner")
        .then((components) =>
          setLoadingComponent(
            <components.LineSpinner className={loadingProps.className ?? ""} />,
          ),
        )
        .catch(() => {});
    } else if (loadingProps?.type == "dot-spinner") {
      import(/* @vite-ignore */ "./components/loading/dot-spinner/DotSpinner")
        .then((components) =>
          setLoadingComponent(
            <components.DotSpinner className={loadingProps.className ?? ""} />,
          ),
        )
        .catch(() => {});
    }
  }, [loadingProps?.type]);

  return {
    loadingComponent,
  };
}
