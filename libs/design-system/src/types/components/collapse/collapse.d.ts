import type { JSX } from "react";

import type { TBlockProps } from "../block/Block";

export type TCollapseProps = {
  isCollapsed: boolean;
} & TBlockProps;

declare const Collapse: (props: TCollapseProps) => JSX.Element;

export default Collapse;
