import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../pages/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
