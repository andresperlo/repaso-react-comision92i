import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactPage from "../pages/ContactPage";
import ProductPage from "../pages/ProductPage";
import AdminPage from "../pages/AdminPage";
import AdminUsersPage from "../pages/AdminUsersPage";
import AdminProductsPage from "../pages/AdminProductsPage";
import PrivateRoute from "../components/PrivateRoute";
import FavoritePage from "../pages/FavoritePage";
import CartPage from "../pages/CartPage";
import RecoveryPass from "../pages/RecoveryPass";
import ChangePass from "../pages/ChangePass";

const RViews = () => {
  return (
    <>
      <Routes>
        <Route
          path="/admin/users"
          element={
            <PrivateRoute role="admin">
              <AdminUsersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <PrivateRoute role="admin">
              <AdminProductsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <PrivateRoute role={"admin"}>
              <AdminUsersPage />
            </PrivateRoute>
          }
        />
        <Route path="/recoveryPass" element={<RecoveryPass />} />

        <Route
          path="/home-admin"
          element={
            <PrivateRoute role={"admin"}>
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/fav"
          element={
            <PrivateRoute role={"user"}>
              <FavoritePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/cart"
          element={
            <PrivateRoute role="user">
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/changePass/:token" element={<ChangePass />} />
        <Route path="/sign-up" element={<RegisterPage />} />
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default RViews;
