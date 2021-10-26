import React, { useState } from "react";
import { dataHeader } from "../assets/data";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="header">
      <section className="header__container">
        <button
          className="menu-btn"
          //onClick={handleMenu}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <img
            src={dataHeader.menu}
            alt="icono menu hamburguesa"
            className={`${openMenu ? `none` : ``}`}
          />
          <img
            src={dataHeader.closeMenu}
            alt="icono cerrar menu"
            className={`${openMenu ? `` : `none`}`}
          />
        </button>
        <div className="header__logo">
          <a href="/">
            <img src={dataHeader.logo} alt="logo mybrand" />
          </a>
        </div>
        <nav
          className={`menu ${openMenu ? `none` : ``} ${
            openMenu ? `is-active` : ``
          }`}
        >
          <a href="#proyectos" onClick={() => setOpenMenu(false)}>
            PROYECTOS
          </a>
          <a href="#sobretoroto" onClick={() => setOpenMenu(false)}>
            SOBRE TOROTO
          </a>
          <a href="#blog" onClick={() => setOpenMenu(false)}>
            BLOG
          </a>
          <a href="#metaregistro" onClick={() => setOpenMenu(false)}>
            <img src={dataHeader.externalLink} alt="icono link externo" />
            META REGISTRO
          </a>
          <a href="#contacto" onClick={() => setOpenMenu(false)}>
            CONTACTO
          </a>
        </nav>
      </section>
    </div>
  );
};
