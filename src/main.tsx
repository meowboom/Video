import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Wrapper from "./pages/Wrapper/Wrapper.tsx";
import HomeScreen from "./pages/HomeScreen/HomeScreen.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyProfile from "./pages/MyProfil/MyProfile.tsx";
import TariffPlans from "./pages/TariffPlan/TariffPlans.tsx";
import FilmPage from "./widget/FilmPage/FilmPage.tsx";
import FilmCards from "./widget/FilmCards/FilmCards.tsx";
import { FILMS } from "./widget/FilmCards/data.tsx";
import MainBody from "./widget/MainBody/MainBody.tsx";
import DailyTop from "./entities/Daily/DailyTop.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeScreen
        children={<MainBody children={<FilmCards arr={FILMS} />} />}
      />
    ),
  },
  {
    path: "/my-profile",
    element: <MyProfile />,
  },
  {
    path: "/tariff-plans",
    element: <TariffPlans />,
  },
  {
    path: "/:title",
    element: <HomeScreen children={<MainBody children={<FilmPage />} />} />,
  },
  {
    path: "/:title",
    element: <HomeScreen children={<MainBody children={<DailyTop />} />} />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <RouterProvider router={router} />
      </Wrapper>
    </QueryClientProvider>
  </React.StrictMode>,
);
