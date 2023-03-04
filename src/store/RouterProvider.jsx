import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from "react-router-dom";
import Landing from "../components/Landing/LandingScreen";
import Patient from "../components/Patient/PatientScreen";
import Nurse from "../components/Nurse/NurseScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/patient",
    element: <Patient />,
  },
  {
    path: "/nurse",
    element: <Nurse />,
  },
]);

export default function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}
