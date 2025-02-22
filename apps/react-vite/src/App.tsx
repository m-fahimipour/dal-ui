import { useState } from "react";

import { Button, Typography } from "design-system-tw";
import { ThemeProvider } from "design-system-tw/theme";
import { changeTheme } from "design-system-tw/utils";

import reactLogo from "./assets/react.svg";

import "./App.css";

import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <div>
        <button onClick={changeTheme}>change theme</button>

        <a href="https://vite.dev" rel="noreferrer" target="_blank">
          <img alt="Vite logo" className="logo" src={viteLogo} />
        </a>

        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <img alt="React logo" className="logo react" src={reactLogo} />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="bg-amber-400 [&_.Dalui-typography-root]:text-primary-main">
        Click on the Vite and React logos to learn more
        <Typography component="p" variants="body2">
          <Typography>تست شد</Typography>

          <Typography component="h4" variants="body1">
            سلام
          </Typography>
        </Typography>
      </p>

      <Button className="border border-amber-300 dark:bg-secondary-main text-primary-4">
        کلیک کنید!
      </Button>
    </ThemeProvider>
  );
}

export default App;
