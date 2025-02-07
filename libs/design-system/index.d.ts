import type { IButtonProps } from "./src/button/types";

declare module "design-system-tw" {
  export function Button(props: IButtonProps): JSX.Element;
}
