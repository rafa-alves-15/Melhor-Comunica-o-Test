import React from "react";
import { Navbar } from "react-bootstrap";
import "./Navbar.css";

export default function NavbarFix() {
  return (
    <nav>
      <div className="barra">
        <Navbar className="name">
          <div className="p-1">M</div>
          {/* icone do celular */}
          <h1 className="logo">
            <i className="logo fas fa-mobile" />
          </h1>
        </Navbar>
      </div>
    </nav>
  );
}
