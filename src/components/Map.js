/* mapboxgl.accessToken =
  "pk.eyJ1IjoicmFxdWVsLWdvbnphbGV6IiwiYSI6ImNrdXV0OXhpdzRrbXoydXBod28xNjhtcm4ifQ.GoIBzGc8Pt6lhIbKM-v4CA";

const map = new mapboxgl.Map({
  container: "map",
  //style: "mapbox://styles/mapbox/satellite-streets-v11",
  //style: "mapbox://styles/mapbox/navigation-day-v1",
  //style: "mapbox://styles/mapbox/dark-v10",
  style: "mapbox://styles/mapbox/streets-v11",
  //center: [-74.082412, 4.639386],
  center: [-99.16751193946651, 19.426902264417436],
  zoom: 9,
}); */
import React from "react";

import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL from "react-map-gl";
import MapGL from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoicmFxdWVsLWdvbnphbGV6IiwiYSI6ImNrdXV0OXhpdzRrbXoydXBod28xNjhtcm4ifQ.GoIBzGc8Pt6lhIbKM-v4CA";

const Map = () => {
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
    <>
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
    </>
  );
};

export default Map;
