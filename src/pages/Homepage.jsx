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
    <div className="relative bg-gradient-to-r from-[#18233d] via-[#10182A] to-[#10182A] text-white min-h-screen">
      <div className="flex items-center justify-center px-6 pt-30 pb-10 overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0A0E1A]/80 z-0"></div>

        {/* Main content */}
        <div className="relative z-10 max-w-5xl w-full text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            Hey, It's Poorna
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            UI/UX Designer · ReactJS Developer · Human-Centered Thinker · Strategist
          </p>

          <Primarybutton
            buttonText="Contact Me"
            buttonLink="/contact"
            className="bg-gradient-to-tr from-[#3B76F6] to-[#5F8FFF] hover:opacity-90 px-6 py-2 text-white font-semibold rounded-full shadow-lg transition"
          />

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {/* your links remain the same */}
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-3 mt-8">
            {Object.values(TABS).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                  activeTab === tab
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white border-white/30 hover:border-white/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full">
            {visibleProjects.map((project, index) => (
              <div
                key={index}
                className="bg-[#141A2F]/70 backdrop-blur-md border border-white/10 p-6 rounded-[8px] transition hover:shadow-xl hover:-translate-y-1 duration-300 text-left"
              >
                <h3 className="text-[24px] md:text-[26px] font-semibold flex items-center gap-2 text-white mb-2">
                  {project.icon && (
                    <span role="img" aria-label="icon">
                      {project.icon}
                    </span>
                  )}
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                {project.link && project.linkLabel && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center mt-5 gap-2 px-6 py-3 bg-gradient-to-tr from-[#070c17] to-[#0d162f] text-white font-medium rounded-[8px] hover:opacity-90 transition group"
                  >
                    {project.linkLabel}
                    <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
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

          {/* Footer */}
          <p className="text-sm text-gray-500 text-center pt-6">
            Made with 💙{" "}
            <a
              href="https://bento.me/poornakawishla"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline"
            >
              Poorna Kawishla
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
