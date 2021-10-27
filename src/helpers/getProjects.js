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
