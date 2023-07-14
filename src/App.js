import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import ErrorPage from "./pages/ErrorPage";
import UserInfoPage from "./pages/UserInfoPage";
import fetchUserData from "./store/circle-action";

function App() {
  const router = createBrowserRouter([
    {
      path: '/circle',
      element: <Root />,
      children: [
        { path: '/circle/', element: <HomePage />},
        { path: '/circle/users', element: <UsersPage />},
        { path: '/circle/users/:id', element: <UserInfoPage /> },
      ]
    },
    { path: '*', element: <ErrorPage /> }
  ])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserData())
  },[dispatch])
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
