import React, { useState, useEffect } from "react";
import MapGL, { Popup } from "react-map-gl";
import { getProjectsMap } from "../../helpers/getProjects";
import ProjectCard from "../ProjectCard";
import Pins from "./Pins";

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
  const [projects, setProjects] = useState([]);
  const [popupInfo, setPopupInfo] = useState(null);

  useEffect(() => {
    getDataProjects();
  }, []);

  const getDataProjects = () => {
    getProjectsMap()
      .then((item) => {
        setProjects(item);
      })
      .catch((err) => {
        console.log("hubo un error al obtener los datos", err);
      });
  };

  return (
    <>
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Pins data={projects} onClick={setPopupInfo} />
        {popupInfo && (
          <Popup
            tipSize={5}
            anchor="top-right"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeButton={false}
            closeOnClick={true}
            onClose={setPopupInfo}
            className="popupMap"
          >
            <ProjectCard {...popupInfo} mainComponent="map-cards" />
          </Popup>
        )}
      </MapGL>
    </>
  );
};

export default Map;
