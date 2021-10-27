import React from "react";

import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL from "react-map-gl";
import MapGL from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoicmFxdWVsLWdvbnphbGV6IiwiYSI6ImNrdXV0OXhpdzRrbXoydXBod28xNjhtcm4ifQ.GoIBzGc8Pt6lhIbKM-v4CA";

export const Home = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "90vh",
    //latitude: 37.7577,
    // longitude: -122.4376,
    latitude: 24.1439,
    longitude: -110.315,
    //zoom: 5,
    zoom: 4.5,
    /* scrollZoom: false,
    boxZoom: false,
    doubleClickZoom: false, */
    dragPan: false,
    dragRotate: false,
    scrollZoom: false,
    touchZoom: false,
    touchRotate: false,
    keyboard: false,
    doubleClickZoom: false,
    //mapStyle: "mapbox://styles/mapbox/streets-v11",

    //mapStyle="mapbox://styles/mapbox/dark-v9",
    // mapbox: "styles/mapbox/light-v10",
    // mapbox: "styles/mapbox/streets-v11", 24.143993339507308, -110.31508926272554
  });

  return (
    <div className="home__container">
      <div className="map">
        {/* <ReactMapGL
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      /> */}

        <MapGL
          {...viewport}
          //width="100vw"
          //height="100vh"
          //mapStyle="mapbox://styles/mapbox/dark-v9"
          //mapStyle="mapbox://styles/mapbox/light-v10"
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={setViewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      </div>
      <div className="home__content">
        <h3>Somos desarrolladores de proyectos</h3>
        <h6>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </h6>
      </div>
    </div>
  );
};
