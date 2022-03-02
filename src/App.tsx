import React from "react";
import { PixiContext, PixiProvider } from "./contexts/PixiContext";
import { Container } from "./components/Container";
import { useContextSelector } from "use-context-selector";

function App() {
  return (
    <PixiProvider>
      <div className="App">
        <Container />
      </div>
    </PixiProvider>
  );
}

export default App;

// https://www.pixijselementals.com/#finally-some-code
