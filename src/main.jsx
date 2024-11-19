import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { 
  createBrowserRouter, 
  RouterProvider 
} from "react-router-dom";

import "./styles/index.css";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signup',
    element: <Signup />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
