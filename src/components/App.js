import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ListPhone from "./Lista/Tabela";
import AddMobile from "./AddMobile/AddMobile";
import EditMobile from "./EditMobile/EditMobile";
import DelMobile from "./DelMobile/DelMobile";
import NavbarFix from "./Navbar/Navbar";
import FooterFix from "./Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavbarFix />
      <div className="container mt-5">
        <Route exact path="/" component={ListPhone} />
        <Route path="/add-phone" component={AddMobile} />
        <Route path="/edit-phone/:_id" component={EditMobile} />
        <Route path="/delete-phone/:_id" component={DelMobile} />
      </div>
      <FooterFix />
    </BrowserRouter>
  );
}

export default App;
