import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "./Map/Map";
import { ButtonPrimary } from "../helpers/Buttons";
import { chevron_down } from "../assets/data";

export const Home = () => {
  return (
    <div className="home__container">
      <div className="home__map">
        <Map />
      </div>
      <div className="home__mobile-image"></div>
      <div className="home__content">
        <h3 className="home__content-h3">Somos desarrolladores de proyectos</h3>
        <h6 className="home__content-h6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </h6>
        <div className="home__content-button">
          <ButtonPrimary text="Proponer un proyecto" color="black" />
        </div>
      </div>
      <div className="home__list-btn">
        <span>Ver lista completa de proyectos</span>
        <a href="#proyectos">
          <img src={chevron_down} alt="icono de ir a proyectos" />
        </a>
      </div>
    </div>
  );
};
