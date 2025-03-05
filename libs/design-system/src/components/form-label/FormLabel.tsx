import { cloneElement, useMemo } from "react";

import { twJoin } from "tailwind-merge";

import type { IFormLabel } from "../../types/components/form-label/form-label";
import { Typography } from "../typography";

function FormLabel({
  control,
  label,
  componentsProps,
  labelPosition = "right",
  disabled,
  checked,
  onChange,
  ...labelProps
}: IFormLabel): JSX.Element {
  const positionLabelStyles: {
    [key in IFormLabel["labelPosition"] as key extends undefined
      ? never
      : key]: string;
  } = useMemo(() => {
    return {
      left: "flex-row-reverse gap-2",
      right: "gap-2",
      top: "flex-col-reverse gap-2",
      bottom: "flex-col gap-2",
    };
  }, []);

  return (
    <label
      {...labelProps}
      className={twJoin(
        "Dui-FormLabel-root",
        disabled && "Dui-disabled",
        "inline-flex items-center",
        positionLabelStyles[labelPosition],
        labelProps.className,
      )}
    >
      {cloneElement(control, {
        disabled,
        onChange,
        checked,
      })}

      {typeof label === "string" ? (
        <Typography
          {...componentsProps?.typography}
          className={twJoin(
            "Dui-label-root",
            "cursor-pointer transition-colors",
            componentsProps?.typography?.className,
            disabled && "text-disabled-2",
          )}
        >
          {label}
        </Typography>
      ) : (
        label
      )}
    </label>
  );
}

export default FormLabel;
