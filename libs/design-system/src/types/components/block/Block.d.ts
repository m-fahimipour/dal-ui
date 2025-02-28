import type { AllHTMLAttributes, HTMLElementType, ReactNode } from "react";

export interface IBlockProps extends AllHTMLAttributes<HTMLElement> {
    children?: ReactNode;
    component?: HTMLElementType;
}

declare const Block: (props: IBlockProps) => JSX.Element;

export default Block;