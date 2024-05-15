import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Wrapper from "./pages/Wrapper/Wrapper.tsx";
import HomeScreen from "./pages/HomeScreen/HomeScreen.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Wrapper>
      <HomeScreen />
    </Wrapper>
  </React.StrictMode>,
);
