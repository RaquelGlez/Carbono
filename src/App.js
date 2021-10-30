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
        <div>
          <Home handleDetail={handleRenderDetail} />
          <Projects handleDetail={handleRenderDetail} />
        </div>
      ) : (
        <ProjectDetails projectId={projectId} />
      )}
      <Footer />
    </div>
  );
}

export default App;
