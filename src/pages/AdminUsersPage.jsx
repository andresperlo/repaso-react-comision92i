import { useEffect, useState } from "react";
import TableC from "../components/TableC";
import { titlePage } from "../helpers/titlePage";

const AdminUsersPage = ({ idPage }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    titlePage("adminUsers");
  }, []);
  return (
    <>
      <TableC array={users} idPage={idPage} />;
    </>
  );
};

export default AdminUsersPage;
