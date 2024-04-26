import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DesktopOne from "pages/Loginpage";
import FrameThirtyNine from "pages/Registerpage";
import DesktopThree from "pages/Profilepage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "desktopone",
      element: <DesktopOne />,
    },
    {
      path: "framethirtynine",
      element: <FrameThirtyNine />,
    },
    {
      path: "desktopthree",
      element: <DesktopThree />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
