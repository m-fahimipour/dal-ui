import { twJoin } from "tailwind-merge";

interface ISpinner1 {
  className?: string;
}

export function Spinner1({ className }: ISpinner1): JSX.Element {
  return (
    <>
      <span
        className={twJoin(
          "Dui-spinner1-root",
          "aspect-square h-1/2 rounded-full border-2 border-l-transparent",
          className || "border-white",
        )}
      />

      <style>{`
      .Dui-spinner1-root {
            animation:animate-hide-enter 400ms forwards, var(--animate-spin);
        }

        @keyframes animate-hide-enter {
            from {
            opacity:0;
            }
            to {
            opacity:1;
            }
        }
        `}</style>
    </>
  );
}
