import { twJoin } from "tailwind-merge";

import type { JSX } from "react";

import type { TCollapseProps } from "../../types/components/collapse/collapse";
import { Block } from "../block";
import { useCollapse } from "./useCollapse";

function Collapse({
  children,
  isCollapsed,
  ...rest
}: TCollapseProps): JSX.Element {
  const { refComponent, isFirstRender } = useCollapse({ isCollapsed });

  return (
    <Block
      {...rest}
      component="div"
      ref={refComponent}
      className={twJoin(
        "overflow-hidden bg-red-200 transition-[height]",
        isFirstRender.current && "h-0",
      )}
      style={{
        ...(isCollapsed && { height: refComponent.current?.scrollHeight }),
      }}
    >
      {children}
    </Block>
  );
}

export default Collapse;
