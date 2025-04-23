import type { JSX } from "react";

import type {
  ITreeSelectProps,
  TTreeSelectItem,
} from "../../types/components/tree-select/tree-select";
import { useTreeSelect } from "./useTreeSelect";

function TreeSelect({
  items,
  accordionProps,
  itemProps,
  changeHandler,
}: ITreeSelectProps): JSX.Element {
  const { data } = useTreeSelect({
    items,
    accordionProps,
    itemProps,
    changeHandler,
  });

  return <>{data?.map((child: TTreeSelectItem) => child.element)}</>;
}

export default TreeSelect;
