import { useRef, type MouseEvent, type RefObject } from "react";

import { twJoin } from "tailwind-merge";

import type { IRippleProps } from "../../../types/components/button/Button";
import { Typography } from "../../typography";

function RippleEffect({
  bgColor,
  ripplePosition,
  className,
}: IRippleProps): JSX.Element {
  const rippleRef: RefObject<HTMLSpanElement | null> =
    useRef<HTMLSpanElement>(null);

  return (
    <Typography
      component="span"
      refComponent={rippleRef}
      className={twJoin(
        "Dui-ripple-root absolute inset-0",
        className ?? "rounded-full",
      )}
      onClick={(e: MouseEvent<HTMLSpanElement>) => {
        if (window) {
          const span: HTMLSpanElement = document.createElement("span");

          const diagonal: number = Math.max(
            Number(rippleRef.current?.offsetHeight),
            Number(rippleRef.current?.offsetWidth),
          );

          const dimensions: DOMRect | undefined =
            rippleRef.current?.getBoundingClientRect();

          span.style.width = `${diagonal}px`;
          span.style.height = `${diagonal}px`;

          if (ripplePosition == "center") {
            span.style.top = "50%";
            span.style.left = "50%";
            span.style.transform = "translate(-50%,-50%)";
          } else {
            span.style.top = `${e.clientY - Number(dimensions?.top)}px`;
            span.style.left = `${e.clientX - Number(dimensions?.left)}px`;
          }

          span.classList.add(
            "inline-block",
            bgColor || "bg-white",
            "absolute",
            "opacity-0",
            "rounded-full",
            "-translate-1/2",
            "pointer-events-none",
          );

          //   add animation class
          span.classList.add("animate-ripple");

          span.addEventListener("animationend", () => {
            span.remove();
          });

          rippleRef.current?.append(span);
        }
      }}
    />
  );
}

export default RippleEffect;
