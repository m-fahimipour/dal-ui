import {
  Children,
  cloneElement,
  isValidElement,
  useState,
  type ReactNode,
} from "react";

import { twJoin } from "tailwind-merge";

import type { IAccordionWrapperProps } from "../../types/components/accordion/accordion-wrapper";
import { Block } from "../block";

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

  function handlerExpanded(): void {
    if (typeof isExpanded == "undefined") {
      setIsExpandedInner((isPrev: boolean) => !isPrev);
    } else {
      onChange?.(!isExpanded);
    }
  }

  return (
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
      {Children.map(children, (child: ReactNode, index: number) => {
        if (isValidElement<HTMLElement>(child))
          return cloneElement<any>(
            child,
            index == 0
              ? {
                  isExpanded: isExpanded ?? isExpandedInner,
                  handlerExpanded,
                }
              : { isExpanded: isExpanded ?? isExpandedInner },
          );
      })}
    </Block>
  );
}

export default AccordionWrapper;
