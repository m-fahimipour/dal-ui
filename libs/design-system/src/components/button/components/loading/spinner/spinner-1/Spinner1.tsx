import { twJoin } from "tailwind-merge";

export function Spinner1(): JSX.Element {
  return (
    <>
      <span
        className={twJoin(
          "Dui-spinner1-root",
          "aspect-square h-1/2 rounded-full border-2 border-white border-l-transparent",
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
