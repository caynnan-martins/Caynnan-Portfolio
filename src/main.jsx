import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/index.css'


import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './View/Pages/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/> ,
  },
]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);