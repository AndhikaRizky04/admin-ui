import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./Pages/signIn.jsx";
import SignUpPage from "./Pages/signUp.jsx";
import ErrorRoute from "./Pages/errorRoute.jsx";
import ForgetPassword from "./Pages/forgetpassword.jsx";
import DashboardPage from "./Pages/dashboard.jsx";
import BalancePage from "./Pages/balance.jsx";
import ExpensesPage from "./Pages/expenses.jsx";
import GoalPage from "./Pages/goal.jsx";


const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
    },
    {
      path: "/eror",
      element: <ErrorRoute />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/forgetpassword",
      element: <ForgetPassword />,
    },
    {
      path: "/balance",
      element: <BalancePage />,
    },
    {
      path: "/bills",
      element: <ErrorRoute />,
    },
    {
      path: "/transaction",
      element: <ErrorRoute />,
    },
    {
      path: "/expenses",
      element: <ExpensesPage />,
    },
    {
      path: "/goals",
      element: <GoalPage />,
    },
    {
      path: "/settings",
      element: <ErrorRoute />,
    },
    {
      path: "/logout",
      element: <SignInPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
