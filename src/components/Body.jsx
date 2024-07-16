import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./SignUp";
import HomePage from "./HomePage";
import Login from "./Login";

const Body = () => {
  let appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/homePage",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
