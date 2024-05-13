import { BrowserRouter } from "react-router-dom";
import RViews from "./routes/RViews";
import "./App.css";
import NavbarC from "./components/NavbarC";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarC />
        <RViews />
      </BrowserRouter>
    </>
  );
};

export default App;
