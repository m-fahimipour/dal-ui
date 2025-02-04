import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);
  return (
    <button className="bg-pink-300" onClick={() => setCount((c) => c + 1)}>
      button {count}
    </button>
  );
}

export default Button;
