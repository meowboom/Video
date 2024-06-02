import { createBrowserRouter } from "react-router-dom";
import DailyTop from "../entities/Daily/DailyTop";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import MyProfile from "../pages/MyProfil/MyProfile";
import TariffPlans from "../pages/TariffPlan/TariffPlans";
import FilmCards from "../widget/FilmCards/FilmCards";
import FilmPage from "../widget/FilmPage/FilmPage";
import MainBody from "../widget/MainBody/MainBody";
import App from "../app";
import ProtectedRoute from "../pages/ProtectRoute/ProtectRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <HomeScreen children={<MainBody children={<FilmCards />} />} />
      </App>
    ),
  },
  {
    path: "/my-profile",
    element: (
      <ProtectedRoute>
        <MyProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/tariff-plans",
    element: <TariffPlans />,
  },
  {
    path: "/:id",
    element: (
      <App>
        <HomeScreen children={<MainBody children={<FilmPage />} />} />
      </App>
    ),
  },
  {
    path: "/:id",
    element: (
      <App>
        <HomeScreen children={<MainBody children={<DailyTop />} />} />
      </App>
    ),
  },
]);
