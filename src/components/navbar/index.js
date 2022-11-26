import React from "react";
import "./styles.scss";

import { Link } from "react-router-dom";
// import NavDropdown from 'react-bootstrap/NavDropdown';

import CircumIcon from "@klarr-agency/circum-icons-svelte"; 
 

function Menu() {
  return (
    <nav className="app-menu">
      <ul className="app-menu__list">
        <li className="app-menu__item">
          <Link className="app-menu__link" to="/">
            HOME
          </Link>
        </li>
        <li className="app-menu__item">
          <Link className="app-menu__link" to="/registration">
            SOBRE MIM
          </Link>
        </li>
        <li className="app-menu__item">
          <Link className="app-menu__link" to="/regulation">
            MEU TRABALHO
          </Link>
        </li>
      </ul>
      <ul className="app-social-media">
        <li className="app-menu_icon">
          <Link className="app-menu__link" to="/">
         
          <ion-icon name="logo-whatsapp"></ion-icon>
          </Link>
        </li>
        <li className="app-menu_icon">
          <Link className="app-menu__link" to="/registration">
          <ion-icon name="logo-facebook" ></ion-icon>
          </Link>
        </li>
        <li className="app-menu_icon">
          <Link className="app-menu__link" to="/regulation">
          <ion-icon name="logo-instagram"></ion-icon>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
