import { Link } from "react-router-dom";
import AdminProductsPage from "./AdminProductsPage";
import AdminUsersPage from "./AdminUsersPage";

const AdminPage = () => {
  return (
    <>
      <h3>Vista previa de la tabla de usuarios</h3>
      <hr />
      <div className="w-75 text-center">
        <Link to={"/admin/users"} className="nav-link">
          <AdminUsersPage idPage="homeAdmin" />
        </Link>
      </div>
      <h3>Vista previa de la tabla de productos</h3>
      <hr />
      <div className="w-75">
        <Link to={"/admin/products"} className="nav-link">
          <AdminProductsPage idPage="homeAdmin" />
        </Link>
      </div>
    </>
  );
};

export default AdminPage;
