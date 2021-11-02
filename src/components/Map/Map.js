import React, { useState, useEffect } from "react";
import MapGL, { Popup } from "react-map-gl";
//import MapGL, { Popup, StaticMap } from "react-map-gl";
import { getProjectsMap } from "../../helpers/getProjects";
import ProjectCard from "../ProjectCard";
import Pins from "./Pins";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoicmFxdWVsLWdvbnphbGV6IiwiYSI6ImNrdXV0OXhpdzRrbXoydXBod28xNjhtcm4ifQ.GoIBzGc8Pt6lhIbKM-v4CA";

const Map = ({ handleDetail }) => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "95vh",
    latitude: 22.744857,
    longitude: -109.286823,
    zoom: 4.4,
    //latitude: 24.1439,
    //longitude: -110.315,
    minZoom: 4.4,
    maxZoom: 4.4,
    dragPan: false,
    dragRotate: false,
    scrollZoom: true,
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
            captureScroll={false}
            //captureClick={true}
          >
            <ProjectCard
              {...popupInfo}
              mainComponent="map-cards"
              handleDetail={handleDetail}
            />
          </Popup>
        )}
      </MapGL>
    </>
  );
};

export default Map;
