import React, { useState } from "react";
import projects from "../JS/projectsData";
import Primarybutton from "../components/primarybutton/Primarybutton";
import { MoveRight } from "lucide-react";

const TABS = {
  BEHANCE: "Behance Projects",
  LIVE: "Live Projects",
};

const ITEMS_PER_PAGE = 5;

function Homepage() {
  const [activeTab, setActiveTab] = useState(TABS.BEHANCE);
  const [currentPage, setCurrentPage] = useState(1);

  const projectList =
    activeTab === TABS.LIVE ? projects.live : projects.behance;

  const totalPages = Math.ceil(projectList.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProjects = projectList.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="relative bg-gradient-to-r from-[#3B76F6] via-[#2CB67D] to-[#716EF1] bg-[length:400%_400%] animate-gradient-x text-white min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0E1A]/80 z-0"></div>

        <div className="relative z-10 max-w-4xl text-center space-y-8 w-full">
          <h1 className="text-4xl md:text-5xl font-bold">Hey, I'm Poorna 👋</h1>
          <p className="text-lg md:text-xl text-gray-300">
            UI/UX Designer · ReactJS Developer · Human-Centered Thinker
          </p>

          <Primarybutton
            buttonText="Contact Me"
            buttonLink="/contact"
            className="text-white bg-[#1C243B] hover:bg-[#2A2F4D] px-6 py-3 rounded-lg"
          />

          <div className="flex justify-center gap-4">
            <a
              href="https://www.behance.net/poornakawishla"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.shields.io/badge/Behance-1769ff?style=flat-square&logo=behance&logoColor=white"
                alt="Behance"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/poornakawishla/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://www.instagram.com/poornakawishla"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.shields.io/badge/Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white"
                alt="Instagram"
              />
            </a>
          </div>

          {/* Tabs */}
          <div className="flex justify-center space-x-4 mt-8">
            {Object.values(TABS).map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  activeTab === tab
                    ? "bg-white text-black"
                    : "bg-[#1C243B] text-white"
                }`}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-6 text-left max-w-xl mx-auto mt-10">
            {visibleProjects.map((project, index) => (
              <div key={index} className="bg-[#1b2238] p-6 rounded-lg shadow-lg w-full">
                <h3 className="text-[30px] font-semibold flex items-center gap-2">
                  {project.icon && (
                    <span role="img" aria-label="icon">
                      {project.icon}
                    </span>
                  )}
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.description}</p>
                {project.link && project.linkLabel && (
                  <p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center mt-5 gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors group"
                    >
                      {project.linkLabel}
                      <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-[#1C243B] rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="py-2 text-white">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-[#1C243B] rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Homepage;
