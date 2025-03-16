import type { JSX } from "react";

import type { ITreeSelectProps } from "../../types/components/tree-select/tree-select";
import { useTreeSelect } from "./useTreeSelect";

function TreeSelect({
  items,
  accordionProps,
  itemProps,
}: ITreeSelectProps): JSX.Element {
  const { createTree } = useTreeSelect({ accordionProps, itemProps });
  return <>{createTree(items).map((child) => child.element)}</>;
}

export default TreeSelect;
