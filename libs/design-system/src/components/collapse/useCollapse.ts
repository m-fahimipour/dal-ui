import { useEffect, useRef, type RefObject } from "react";

import type { TCollapseProps } from "../../types/components/collapse/collapse";

export function useCollapse({
  isCollapsed,
}: Pick<TCollapseProps, "isCollapsed">) {
  const isFirstRender: RefObject<boolean> = useRef<boolean>(true);
  const refComponent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (refComponent.current && isCollapsed) {
      timeoutId = setTimeout(() => {
        // for responsive
        refComponent.current!.style.height = "auto";
      }, 250);
    } else if (refComponent.current && !isCollapsed && !isFirstRender.current) {
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
  }, [isCollapsed]);

  return {
    refComponent,
    isFirstRender,
  };
}
