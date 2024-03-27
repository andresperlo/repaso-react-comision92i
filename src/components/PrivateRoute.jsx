const PrivateRoute = ({ children, role }) => {
  const token = false;
  const user = {
    id: 1,
    role: "user",
  };

  if (token) {
    if (role === user.role) {
      return children;
    } else {
      if (user.role === "user") {
        location.href = "/user";
      } else {
        location.href = "/home-admin";
      }
    }
  } else {
    location.href = "/";
  }
};

export default PrivateRoute;
