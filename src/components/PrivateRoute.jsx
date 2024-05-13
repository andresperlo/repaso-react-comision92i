import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children, role }) => {
  const navigate = useNavigate();
  const token = JSON.parse(sessionStorage.getItem("token")) || "";
  const roleUsuario = JSON.parse(sessionStorage.getItem("role")) || "";

  if (token) {
    if (role === roleUsuario) {
      return children;
    } else {
      if (roleUsuario === "user") {
        navigate("/");
      } else {
        navigate("home-admin");
      }
    }
  } else {
    setTimeout(() => {
      navigate("/");
    }, 100);
  }
};

export default PrivateRoute;
