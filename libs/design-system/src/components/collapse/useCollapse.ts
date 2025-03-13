import { useEffect, useRef, type RefObject } from "react";

import type { TCollapseProps } from "../../types/components/collapse/collapse";

interface IUseCollapseReturn {
  refComponent: RefObject<HTMLDivElement | null>;
}
export function useCollapse({
  isCollapsed,
}: Pick<TCollapseProps, "isCollapsed">): IUseCollapseReturn {
  const refComponent: IUseCollapseReturn["refComponent"] =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (refComponent.current && !isCollapsed) {
      refComponent.current.style.height =
        refComponent.current.scrollHeight + "px";

      timeoutId = setTimeout(() => {
        // for responsive
        refComponent.current!.style.height = "auto";
        refComponent.current!.style.overflow = "visible";
      }, 250 /*because animation time is equal 250ms*/);
    } else if (refComponent.current && isCollapsed) {
      // for close animation
      refComponent.current.style.height =
        refComponent.current.scrollHeight + "px";

      timeoutId = setTimeout(() => {
        refComponent.current!.style.height = 0 + "px";
        refComponent.current!.style.overflow = "hidden";
      });
    }

    return (): void => clearTimeout(timeoutId);
  }, [isCollapsed]);

  return {
    refComponent,
  };
}
