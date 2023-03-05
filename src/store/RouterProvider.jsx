import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from "react-router-dom";
import LanguagesScreen from "../components/Languages/LanguagesScreen";
import PatientScreen from "../components/Patient/PatientScreen";
import NurseScreen from "../components/Nurse/NurseScreen";
import OptionsScreen from "../components/Options/OptionsScreen";
import LoginScreen from "../components/Login/LoginScreen";
import InfoScreen from "../components/Info/InfoScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LanguagesScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/patient",
    element: <PatientScreen />,
  },
  {
    path: "/nurse",
    element: <NurseScreen />,
  },
  {
    path: "/settings",
    element: <OptionsScreen />
  },
  {
    path: "/info",
    element: <InfoScreen />
  },
]);

export default function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}
