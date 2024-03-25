export const titlePage = (idPage) => {
  switch (idPage) {
    case "home":
      document.title = "Pagina Principal";
      break;
    case "login":
      document.title = "Iniciar Sesion";
      break;
    case "register":
      document.title = "Dar el Alta en la web";
      break;

    default:
      document.title = "ERROR: 404";
      break;
  }
};
