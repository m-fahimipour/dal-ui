import { twJoin } from "tailwind-merge";

import type { JSX } from "react";

interface IDotSpinner {
  className?: string;
}
export function DotSpinner({ className }: IDotSpinner): JSX.Element {
  return (
    <>
      <div className="Dui-dot-loader-root relative aspect-square h-1/2">
        {new Array(12).fill(0).map((_, index: number) => {
          const style: React.CSSProperties & { [key: string]: string } = {
            "--i": `${index + 1}`,
            transform: "rotate(calc(30deg * var(--i)))",
          };

          return (
            <span
              key={index}
              style={style}
              className={twJoin(
                "absolute inset-0 after:absolute after:top-0 after:left-0 after:inline-block after:aspect-square after:h-1/5 after:rounded-full",
                className || "after:bg-white",
              )}
            />
          );
        })}
      </div>

      <style>
        {`
        .Dui-dot-loader-root > span::after {
            transform: scale(0);
            animation: custom-puls 1.2s infinite;
            animation-delay: calc(0.1s * var(--i));
        }

        @keyframes custom-puls{

            0%,20% {
                 transform: scale(1)
            }

            100% {
                 transform:scale(0)
            }

        }
        `}
      </style>
    </>
  );
}
