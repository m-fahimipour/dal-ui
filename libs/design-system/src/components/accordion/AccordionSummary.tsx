import { twJoin, twMerge } from "tailwind-merge";

import type { MouseEvent } from "react";

import type { IAccordionSummaryProps } from "../../types/components/accordion/accordion-summary";
import { Button } from "../button";
import { Typography } from "../typography";
import { useAccordionContext } from "./context/AccordionContext";
import type { IValueAccordionContext } from "./context/type";

function AccordionSummary({
  children,
  expandedIcon,
  componentsProps,
}: IAccordionSummaryProps): JSX.Element {
  const value: IValueAccordionContext = useAccordionContext();

  return (
    <h3 className="Dui-Accordion-heading">
      <Button
        {...componentsProps?.button}
        hasRippleEffect={componentsProps?.button?.hasRippleEffect ?? false}
        variant={componentsProps?.button?.variant ?? "btn-text"}
        aria-expanded={
          componentsProps?.button?.["aria-expanded"] ?? value.isExpanded
        }
        className={twMerge(
          "w-full justify-between rounded-[0px] hover:bg-transparent",
          componentsProps?.button?.className,
        )}
        duiCn={twJoin(
          "Dui-AccordionSummary-root",
          value.isExpanded && "Dui-Expanded",
        )}
        onClick={(e: MouseEvent<HTMLButtonElement>) => {
          value.handlerExpanded?.();
          componentsProps?.button?.onClick?.(e);
        }}
      >
        <Typography
          className={twJoin("Dui-AccordionSummery-content", "flex grow-1")}
        >
          {children}
        </Typography>

        <Typography
          {...componentsProps?.expandedIcon}
          className={twMerge(
            "inline-flex h-6 w-6 items-center justify-center transition-transform",
            !expandedIcon &&
              "after:inline-block after:h-2 after:w-2 after:border-r-2 after:border-b-2",
            !value.isExpanded && !expandedIcon && "rotate-45",
            value.isExpanded && !expandedIcon && "rotate-225",
            value.isExpanded && expandedIcon && "rotate-180",
            componentsProps?.expandedIcon?.className,
          )}
        >
          {expandedIcon}
        </Typography>
      </Button>
    </h3>
  );
}

export default AccordionSummary;
