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

const RViews = () => {
  return (
    <>
      <Routes>
        <Route
          path="/admin/users"
          /* element={
            <PrivateRoute role="admin">
              <AdminUsersPage />
            </PrivateRoute>
          } */
          element={<AdminUsersPage />}
        />
        <Route path="/admin/products" element={<AdminProductsPage />} />
        <Route path="/admin/users" element={<AdminUsersPage />} />
        <Route path="/home-admin" element={<AdminPage />} />
        <Route path="/user/fav" element={<FavoritePage />} />
        <Route path="/user/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
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
