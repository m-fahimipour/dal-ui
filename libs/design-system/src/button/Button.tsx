import { useState } from "react";

import type { IProps } from "./types";

function Button({ isLoading }: IProps) {
  const [count, setCount] = useState<number>(0);
  return (
    <button
      className="bg-pink-500"
      onClick={() => setCount((c: number) => c + 1)}
    >
      button {count}

      <div />
    </button>
  );
}

export default Button;
