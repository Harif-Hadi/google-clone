import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";

import "./App.css";
import ErrorElement from "./pages/ErrorElement";

const App = () => {
  const router = createBrowserRouter([
    {
      errorElement: <ErrorElement errorMessage="Page not found" />,
      children: [
        { path: "/", element: <SignUp /> },
        { path: "/search", element: <Search /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
