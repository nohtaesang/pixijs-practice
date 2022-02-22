import React from "react";
import { PixiProvider } from "./contexts/PixiContext";
import { Test } from "./components/Test";

function App() {
  return (
    <PixiProvider>
      <div className="App">
        <Test />
      </div>
    </PixiProvider>
  );
}

export default App;
