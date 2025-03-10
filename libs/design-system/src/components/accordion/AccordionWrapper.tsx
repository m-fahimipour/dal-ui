import { useMemo, useState } from "react";

import { twJoin } from "tailwind-merge";

import type { IAccordionWrapperProps } from "../../types/components/accordion/accordion-wrapper";
import { Block } from "../block";
import { AccordionContextProvider } from "./context/AccordionContext";
import type { IValueAccordionContext } from "./context/type";

function AccordionWrapper({
  children,
  isExpanded,
  defaultIsExpanded,
  disabled,
  onChange,
  ...accordionWrapperProps
}: IAccordionWrapperProps): JSX.Element {
  const [isExpandedInner, setIsExpandedInner] = useState<boolean>(
    Boolean(defaultIsExpanded),
  );

  const contextValue: IValueAccordionContext = useMemo(() => {
    return {
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

  return (
    <AccordionContextProvider value={contextValue}>
      <Block
        {...accordionWrapperProps}
        className={twJoin(
          "Dui-AccordionWrapper-root",
          disabled && "Dui-disabled",
          (isExpanded || isExpandedInner) && "Dui-Expanded",
          "flex flex-col",
          accordionWrapperProps.className,
        )}
      >
        {children}
      </Block>
    </AccordionContextProvider>
  );
}

export default AccordionWrapper;
