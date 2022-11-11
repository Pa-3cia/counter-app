import React from "react";
import Routers from "./routes";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Routers />
    </ErrorBoundary>
  );
}

export default App;
