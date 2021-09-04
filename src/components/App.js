import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ListPhone from "./Lista/Tabela";
import AddMobile from "./AddMobile/AddMobile.js";
import NavbarFix from "./Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <NavbarFix />
      <div className="container mt-5">
        <Route exact path="/" component={ListPhone} />
        <Route path="/add-phone" component={AddMobile} />
      </div>
    </BrowserRouter>
  );
}

export default App;