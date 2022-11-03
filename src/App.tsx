import React from "react";
import { Helmet } from "react-helmet-async";
import Router from "./Routes/Router";

function App() {
  return (
    <>
      <Router />
      <Helmet>
        <title>알티모빌리티</title>
      </Helmet>
    </>
  );
}

export default App;
