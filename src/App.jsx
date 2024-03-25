import { BrowserRouter } from "react-router-dom";
import RViews from "./routes/RViews";
import "./App.css";
import NavbarC from "./components/NavbarC";

const App = () => {
  return (
    <>
      <NavbarC />
      <BrowserRouter>
        <RViews />
      </BrowserRouter>
    </>
  );
};

export default App;
