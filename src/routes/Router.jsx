import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "../pages/home";
import Cards from "../pages/Cards";
import Ola from "../component/Ola";
import Japan from "../component/Japan";
import Iceland from "../component/Iceland";
import Morocco from "../component/Morocco";




function Layout() {
  return (
    <>
      <Home />
      <Outlet />
      <Cards />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Ola", element: <Ola /> },
       { path: "/Japan", element: <Japan /> },
      { path: "/Iceland", element: <Iceland /> },
        { path: "/Morocco", element: <Morocco /> },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;