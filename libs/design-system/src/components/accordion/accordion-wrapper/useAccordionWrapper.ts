import { useMemo, useState } from "react";

import type { IAccordionWrapperProps } from "../../../types/components/accordion/accordion-wrapper";
import type { IValueAccordionContext } from "../context/type";

interface IUseAccordionWrapperReturn {
  contextValue: IValueAccordionContext;
}

export function useAccordionWrapper({
  defaultIsExpanded,
  disabled,
  isExpanded,
  onChange,
}: Pick<
  IAccordionWrapperProps,
  "defaultIsExpanded" | "disabled" | "isExpanded" | "onChange"
>): IUseAccordionWrapperReturn {
  const [isExpandedInner, setIsExpandedInner] = useState<boolean>(
    Boolean(defaultIsExpanded),
  );

  const contextValue: IValueAccordionContext = useMemo(() => {
    return {
      disabled,
      isExpanded: isExpanded || isExpandedInner,
      handlerExpanded(): void {
        if (typeof isExpanded == "undefined") {
          setIsExpandedInner((isPrev: boolean) => !isPrev);
        } else {
          onChange?.(!isExpanded);
        }
      },
    };
  }, [isExpanded, isExpandedInner]);

  return {
    contextValue,
  };
}
