import { createElement } from "react";

import { twJoin } from "tailwind-merge";

import type { IBlockProps } from "../../types/components/block/Block";

function Block({ children, component = "div", className, ...rest }: IBlockProps): JSX.Element {
    return createElement(component, {
        ...rest,
        className: twJoin("Dui-Block-root", className)
    }, children);
}

export default Block;