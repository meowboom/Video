import { createBrowserRouter } from "react-router-dom";
import DailyTop from "../entities/Daily/DailyTop";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import MyProfile from "../pages/MyProfil/MyProfile";
import TariffPlans from "../pages/TariffPlan/TariffPlans";
import FilmCards from "../widget/FilmCards/FilmCards";
import FilmPage from "../widget/FilmPage/FilmPage";
import MainBody from "../widget/MainBody/MainBody";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen children={<MainBody children={<FilmCards />} />} />,
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
      path: "/:id",
      element: <HomeScreen children={<MainBody children={<FilmPage />} />} />,
    },
    {
      path: "/:id",
      element: <HomeScreen children={<MainBody children={<DailyTop />} />} />,
    },
  ]);