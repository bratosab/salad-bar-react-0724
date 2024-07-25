import { createBrowserRouter } from "react-router-dom";
import { Main } from "../layouts/Main";
import { Home } from "../pages/Home";
import { SaladOrder } from "../pages/SaladOrder";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "salad/:orderId",
        element: <SaladOrder />
      },
    ],
  },
]);
