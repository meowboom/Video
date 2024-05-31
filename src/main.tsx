import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Wrapper from "./pages/Wrapper/Wrapper.tsx";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./data/router.tsx";
import App from "./app.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <App>
          <RouterProvider router={router} />
        </App>
      </Wrapper>
    </QueryClientProvider>
  </React.StrictMode>,
);

