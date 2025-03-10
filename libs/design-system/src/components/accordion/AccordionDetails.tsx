import { useEffect, useRef, useState, type RefObject } from "react";

import { twJoin } from "tailwind-merge";

import { Typography } from "../typography";
import { useAccordionContext } from "./context/AccordionContext";
import type { IValueAccordionContext } from "./context/type";

function AccordionDetails() {
  const value: IValueAccordionContext = useAccordionContext();
  const isFirstRender: RefObject<boolean> = useRef<boolean>(true);
  const refComponent: RefObject<HTMLParagraphElement | null> =
    useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (refComponent.current && value.isExpanded) {
      timeoutId = setTimeout(() => {
        // for responsive
        refComponent.current!.style.height = "auto";
      }, 250);
    } else if (
      refComponent.current &&
      !value.isExpanded &&
      !isFirstRender.current
    ) {
      // for close animation
      refComponent.current!.style.height =
        refComponent.current.scrollHeight + "px";
      timeoutId = setTimeout(() => {
        refComponent.current!.style.height = 0 + "px";
      });
    }

    // check first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }

    return (): void => clearTimeout(timeoutId);
  }, [value.isExpanded]);

  return (
    <Typography
      component="p"
      refComponent={refComponent}
      className={twJoin(
        "overflow-hidden bg-red-200 transition-[height]",
        isFirstRender.current && "h-0",
      )}
      style={{
        ...(value.isExpanded && { height: refComponent.current?.scrollHeight }),
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
      eveniet modi eligendi, autem blanditiis velit earum perferendis quos,
      mollitia ad consequatur porro accusantium temporibus, molestiae dolorem
      dolores omnis hic deleniti. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Vel facilis neque, eveniet itaque ut dolore fuga
      quibusdam nam voluptate accusantium deleniti ipsum sunt cupiditate
      expedita dolorem quo quidem laudantium aliquam.
    </Typography>
  );
}

export default AccordionDetails;
