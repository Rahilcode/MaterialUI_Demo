import "./App.css";
import GoogleMapCom from "./components/GoogleMapCom";
import MaterialPage from "./components/MaterialPage";
// import Stepper from "./components/Stepper";
import React, { Suspense } from "react";
// import ErrorBoundary from "./components/ErrorBoundary";

const Stepper = React.lazy(() => import("./components/Stepper"));

function App() {
  return (
    <div className="App">
      <MaterialPage />
    </div>
  );
}

export default App;
