import React, { useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [activeDetail, setActiveDetail] = useState(null);
  const [projectId, setProjectId] = useState(null);

  const handleRenderDetail = (projectId) => {
    if (activeDetail) {
      setActiveDetail(null);
      setProjectId(null);
    } else {
      setActiveDetail(true);
      setProjectId(projectId);
    }
  };

  return (
    <div>
      <Header />
      {!activeDetail ? (
        <div className="animate__animated animate__fadeIn animate__faster">
          <Home handleDetail={handleRenderDetail} />
          <Projects handleDetail={handleRenderDetail} />
        </div>
      ) : (
        <div className="animate__animated animate__fadeIn animate__faster">
          <ProjectDetails projectId={projectId} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
