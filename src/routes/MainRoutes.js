import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Components/HomePage/HomePage";
import { useAuth } from "../Contexts/AuthContextProvider";
import AddProductPage from "../Pages/AddProductPage";
import AuthPage from "../Pages/AuthPage";

const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    { link: "/auth", element: <AuthPage />, id: 1 },
    { link: "/", element: <HomePage />, id: 2 },
    { link: "/addproduct", element: <AddProductPage />, id: 3 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
