export const getProjects = async () => {
  const urlString = "https://fieldops-api.toroto.mx/api/projects";
  const res = await fetch(urlString);
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

// Caso markers con popups
export const getProjectsMap = () => {
  return new Promise(function (resolve, reject) {
    const mapProjects = [];

    getProjects()
      .then((projects) => {
        projects.map((item) => {
          mapProjects.push({
            id: item.id,
            location: item.location,
            name: item.name,
            description: item.description,
            longitude: item.geometry.coordinates[0][0][0],
            latitude: item.geometry.coordinates[0][0][1],
            //ubication: item.geometry.coordinates[0][0],
            services: [],
          });
          resolve(mapProjects);
          return mapProjects;
        });
      })
      .catch((err) => {
        const msgError = "Ha ocurrido un error al obtener los datos";
        console.log(`${msgError}`, err);
        reject(msgError);
      });
  });
};
