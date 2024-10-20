import ErrorRoute from "./Pages/errorRoute";
import ForgotPassword from "./Pages/ForgotPassword";
import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <div>Halaman Utama</div>,
    },
    {
      path: "/eror",
      element: <ErrorRoute/>
    },
    {
      path: "/login",
      element: <SignInPage/>
    },
    {
      path: "/register",
      element: <SignUpPage/>
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword/>
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;