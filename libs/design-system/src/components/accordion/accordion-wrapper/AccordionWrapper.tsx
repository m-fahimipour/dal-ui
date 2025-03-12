import { twJoin } from "tailwind-merge";

import type { JSX } from "react";

import type { IAccordionWrapperProps } from "../../../types/components/accordion/accordion-wrapper";
import { Block } from "../../block";
import { AccordionContextProvider } from "../context/AccordionContext";
import { useAccordionWrapper } from "./useAccordionWrapper";

function AccordionWrapper({
  children,
  isExpanded,
  defaultIsExpanded,
  disabled,
  onChange,
  ...accordionWrapperProps
}: IAccordionWrapperProps): JSX.Element {
  const { contextValue } = useAccordionWrapper({
    defaultIsExpanded,
    disabled,
    isExpanded,
    onChange,
  });

  return (
    <AccordionContextProvider value={contextValue}>
      <Block
        {...accordionWrapperProps}
        className={twJoin(
          "Dui-AccordionWrapper-root",
          disabled && "Dui-disabled",
          contextValue.isExpanded && "Dui-Expanded",
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
