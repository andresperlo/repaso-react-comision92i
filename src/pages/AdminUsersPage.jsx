import { useEffect, useState } from "react";
import TableC from "../components/TableC";
import { titlePage } from "../helpers/titlePage";
import clienteAxios, { configHeader } from "../helpers/clientAxios";

const AdminUsersPage = ({ idPage }) => {
  const [users, setUsers] = useState([]);

  const getAllUser = async () => {
    const getUsers = await clienteAxios.get("/users", configHeader);
    setUsers(getUsers.data.getUsers);
  };

  useEffect(() => {
    titlePage("adminUsers");
    getAllUser();
  }, []);
  return (
    <>
      <TableC array={users} idPage={idPage} />;
    </>
  );
};

export default AdminUsersPage;
