import { imgProyects } from "../assets/data";

export const getImgProject = (id) => {
  const imgProject = {
    P001: imgProyects[0],
    P002: imgProyects[1],
    P003: imgProyects[2],
    P004: imgProyects[3],
  };

  const imgProjectDefault = imgProyects[0];
  let img = imgProject[id] || imgProjectDefault;

  return img;
};
