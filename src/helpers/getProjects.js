export const getProjects = async () => {
  const urlString = "https://fieldops-api.toroto.mx/api/projects";
  const res = await fetch(urlString);
  console.log("res data", res);
  if (!res.ok) {
    const { url, status, statusText } = res;
    if (status === 400) {
      const err = 400;
      throw err;
    } else {
      throw Error(`${status} ${statusText} in fetch ${url}`);
    }
  }

  const projectsData = await res.json();
  const projects = projectsData.data;
  console.log("projects", projectsData.data);
  return projects;
};

export const getProject = async (id) => {
  const urlString = "https://fieldops-api.toroto.mx/api/projects";
  const urlProject = `${urlString}/${id}`;

  const res = await fetch(urlProject);
  console.log("res data", res);
  if (!res.ok) {
    const { url, status, statusText } = res;
    if (status === 400) {
      const err = 400;
      throw err;
    } else {
      throw Error(`${status} ${statusText} in fetch ${url}`);
    }
  }

  const projectData = await res.json();
  const project = projectData.data;
  console.log("project---", projectData.data);
  return project;
};

// Caso prueba markers con popups

export const dataMap = async () => {
  const dataApi = await getProjects();
  console.log("data para mapa", dataApi);

  const keysMap = ["id", "location", "name", "description"];
  let objetItem = {};
  let dataMap = [];

  dataApi.forEach((item) => {
    //console.log("item de dataApi", item);

    //let point = item;
    console.log("point de dataApi", item);
    const keys = Object.keys(item);
    console.log("keys de dataApi", keys);

    keys.forEach((key, index) => {
      //  console.log("data keys foreach----", `${key}: ${point[key]}`);
      if (key === "images") {
        console.log("esto es una imagen");
      } else if (key === "geometry") {
        console.log("estas son coordenadas");
      } else if (keysMap.includes(key)) {
        console.log("keys en el else", key);
        objetItem[key] = item[key];
        console.log("objetItem luego del else", objetItem);
      }
      return objetItem;
    });
  });
  dataMap.push(objetItem);
  console.log("data map luego del else", dataMap);
};
