import { twJoin } from "tailwind-merge";

import type { IButtonProps } from "../../types/components/button/Button";

function Button({
  children,
  // size,
  // variant,
  // isLoading,
  className,
  ...otherProps
}: IButtonProps): JSX.Element {
  return (
    <button
      {...otherProps}
      className={twJoin("rounded-full w-[116px] h-12 bg-pink-600", className)}
    >
      {children}
    </button>
  );
}

export default Button;
