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
  const { refComponent } = useCollapse({ isCollapsed });

  return (
    <Block
      {...rest}
      component="div"
      ref={refComponent}
      className={twJoin(
        "Dui-Collapse-root",
        isCollapsed && "Dui-Collapsed",
        "overflow-hidden transition-[height] h-0",
      )}
    >
      {children}
    </Block>
  );
}

export default Collapse;
