import React, { useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [activeDetail, setActiveDetail] = useState(null);

  const handleRenderDetail = (e) => {
    if (activeDetail) {
      setActiveDetail(null);
    } else {
      setActiveDetail(true);
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
        <ProjectDetails />
      )}
      <Footer />
    </div>
  );
}

export default App;
