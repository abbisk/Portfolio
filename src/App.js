import logo from "./logo.svg";
import "./App.css";
import AppRoutes from "./routes/router";
import React, { StrictMode } from "react";

function App() {
  return (
    <React.Fragment>
      {/* <StrictMode> */}
        <div className="page-container">
        {/* <div> */}
          <AppRoutes/>
        </div>
      {/* </StrictMode> */}
    </React.Fragment>
  );
}

export default App;
