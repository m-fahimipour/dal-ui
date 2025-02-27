import { useRef, type MouseEvent, type RefObject } from "react";

interface IUseRippleEffectReturn {
  rippleRef: RefObject<HTMLSpanElement | null>;
  onClick(e: MouseEvent<HTMLSpanElement>): void;
}

interface IUseRippleEffectProps {
  ripplePosition?: "center" | "float";
}

export function useRippleEffect({
  ripplePosition,
}: IUseRippleEffectProps): IUseRippleEffectReturn {
  const rippleRef: RefObject<HTMLSpanElement | null> =
    useRef<HTMLSpanElement>(null);

  function onClick(e: MouseEvent<HTMLSpanElement>): void {
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
        "Dui-Ripple-root",
        "inline-block",
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
  }

  return {
    rippleRef,
    onClick,
  };
}
