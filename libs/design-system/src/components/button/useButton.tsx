import { useLayoutEffect, useState, type ReactNode } from "react";

import type { IButtonProps } from "../../types/components/button/Button";

interface IUseButtonReturn {
    loadingComponent?: ReactNode
}

interface IUseButtonProps {
    loadingProps?: IButtonProps["loadingProps"]
}

export function useButton({ loadingProps }: IUseButtonProps): IUseButtonReturn {
    const [loadingComponent, setLoadingComponent] = useState<ReactNode>();

    useLayoutEffect(() => {
        if (loadingProps?.type == "spinner1") {
            import("./components/loading/line-spinner/LineSpinner")
                .then((components) =>
                    setLoadingComponent(
                        <components.LineSpinner className={loadingProps.className ?? ""} />,
                    ),
                )
                .catch(() => { });
        } else if (loadingProps?.type == "dot1") {
            import("./components/loading/dot-spinner/DotSpinner")
                .then((components) =>
                    setLoadingComponent(
                        <components.DotSpinner className={loadingProps.className ?? ""} />,
                    ),
                )
                .catch(() => { });
        }
    }, [loadingProps?.type]);

    return {
        loadingComponent
    }
}