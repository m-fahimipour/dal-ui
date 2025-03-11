import { cloneElement, useMemo, type JSX } from "react";

import { twJoin } from "tailwind-merge";

import type { IFormLabel } from "../../types/components/form-label/form-label";
import { Typography } from "../typography";

function FormLabel({
  control,
  label,
  componentsProps,
  labelPosition = "end",
  // input props
  disabled,
  checked,
  onChange,
  isIndeterminate,
  // 
  ...labelProps
}: IFormLabel): JSX.Element {
  const positionLabelStyles: {
    [key in IFormLabel["labelPosition"] as key extends undefined
      ? never
      : key]: string;
  } = useMemo(() => {
    return {
      start: "flex-row-reverse gap-2",
      end: "gap-2",
      top: "flex-col-reverse gap-2",
      bottom: "flex-col gap-2",
    };
  }, []);

  return (
    <label
      {...labelProps}
      className={twJoin(
        "Dui-FormLabel-root",
        (disabled || control.props.disabled) && "Dui-disabled",
        (checked || control.props.checked) && "Dui-checked",
        "inline-flex items-center",
        positionLabelStyles[labelPosition],
        labelProps.className,
      )}
    >
      {cloneElement(control, {
        ...(disabled && { disabled }),
        ...(onChange && { onChange }),
        ...(checked && { checked }),
        ...(isIndeterminate && { isIndeterminate }),
      })}

      {typeof label === "string" ? (
        <Typography
          {...componentsProps?.typography}
          className={twJoin(
            "Dui-label-root",
            "transition-colors",
            componentsProps?.typography?.className,
            disabled || control.props.disabled
              ? "text-disabled-2"
              : "cursor-pointer",
          )}
        >
          {label}
        </Typography>
      ) : (
        // TODO => حتما در داکیومنت مشخص شود که در صورت کامپوننت بود عنوان، رنگ (text-disabled-2) داده شود.
        label
      )}
    </label>
  );
}

export default FormLabel;
