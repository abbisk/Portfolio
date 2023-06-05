import logo from "./logo.svg";
import "./App.css";
import { AppRouter } from "./routes/router";
import React, { StrictMode } from "react";

function App() {
  return (
    <React.Fragment>
      <StrictMode>
        <div className="page-container">
        {/* <div> */}
          <AppRouter />
        </div>
      </StrictMode>
    </React.Fragment>
  );
}

export default App;
