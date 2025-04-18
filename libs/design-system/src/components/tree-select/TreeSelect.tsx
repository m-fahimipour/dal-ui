import type { JSX } from "react";

import type { ITreeSelectProps } from "../../types/components/tree-select/tree-select";
import { useTreeSelect } from "./useTreeSelect";

function TreeSelect({
  items,
  accordionProps,
  itemProps,
}: ITreeSelectProps): JSX.Element {
  const { data } = useTreeSelect({
    items,
    accordionProps,
    itemProps,
  });
  
  return (
    <>{data?.map((child: ITreeSelectProps["items"][number]) => child.element)}</>
  );
}

export default TreeSelect;
