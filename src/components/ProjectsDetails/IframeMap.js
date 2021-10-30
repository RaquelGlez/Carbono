import React from "react";

export const IframeMap = () => {
  return (
    <>
      <iframe
        title="proyecto"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891237.9507214797!2d-92.6536353239104!3d17.64720958911027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE1JzI5LjUiTiA5McKwMjYnMzguNSJX!5e0!3m2!1ses!2smx!4v1635612625090!5m2!1ses!2smx"
        width="600"
        height="450"
        style={{ border: 0 }}
        //allowfullscreen=""
        //  allow-scripts
        // allow-same-origin
        loading="lazy"
        sandbox="allow-scripts allow-popups allow-same-origin"
      ></iframe>
    </>
  );
};
