import React from "react";
import { useState } from "react";
import { dataHeader } from "../assets/data";
import MapGL, { Marker } from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoicmFxdWVsLWdvbnphbGV6IiwiYSI6ImNrdXV0OXhpdzRrbXoydXBod28xNjhtcm4ifQ.GoIBzGc8Pt6lhIbKM-v4CA";

const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "90vh",
    latitude: 24.1439,
    longitude: -110.315,
    zoom: 4.5,
    dragPan: false,
    dragRotate: false,
    scrollZoom: false,
    touchZoom: false,
    touchRotate: false,
    keyboard: false,
    doubleClickZoom: false,
  });

  return (
    <>
      <MapGL
        {...viewport}
        //width="100vw" //height="100vh"
        //mapStyle="mapbox://styles/mapbox/dark-v9"
        //mapStyle="mapbox://styles/mapbox/light-v10"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Marker
          latitude={19.412469827363218}
          longitude={-99.16919524950755}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <div>
            <img src={dataHeader.logo} alt="marcador" />
          </div>
        </Marker>
      </MapGL>
    </>
  );
};

export default Map;
