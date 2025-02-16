import type { IButtonProps } from "./src/components/button/types";

declare module "design-system-tw" {
  export function Button(props: IButtonProps): JSX.Element;
}
