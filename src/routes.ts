import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { Technology } from "./components/Technology";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about-us",
    Component: AboutUs,
  },
  {
    path: "/technology",
    Component: Technology,
  },
]);