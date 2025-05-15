import React, { useState } from "react";
import Primarybutton from "../components/primarybutton/Primarybutton";
import { MoveRight, Search } from "lucide-react";
import LinkList from "../JS/LinkList";
import Navbar from "../components/navbar/Navbar";

const ITEMS_PER_PAGE = 12;

function Homepage() {
  const tabKeys = Object.keys(LinkList);
  const [activeTab, setActiveTab] = useState(tabKeys[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const projectList = LinkList[activeTab] || [];

  // Filter links based on search
  const searchTerm = search.toLowerCase();
  const filteredLinks = projectList.filter((item) => {
    if (searchTerm === "") return true;
    return (
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
    );
  });

  // Pagination logic on filtered links
  const totalPages = Math.ceil(filteredLinks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleLinks = filteredLinks.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSearch(""); // Optionally clear search on tab change
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  return (
    <>
      <div className="relative bg-gradient-to-r from-[#18233d] via-[#10182A] to-[#10182A] text-white min-h-screen">
        <div className="flex items-center justify-center pt-30 pb-10 overflow-hidden">
          <div className="absolute inset-0 bg-[#0A0E1A]/80 z-0"></div>

          <div className="relative z-10 max-w-[90%] w-full text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              LinkHub
            </h1>
            <p className="text-lg md:text-xl text-gray-400 ">
              Discover a curated collection of useful links for everyone—students,
              professionals, and curious minds. Explore tools, resources, and
              inspiration to boost productivity and learning.
            </p>

            <Primarybutton
              buttonText="Back To Home"
              buttonLink="https://poornajsx.netlify.app/"
              className="bg-gradient-to-tr from-[#3B76F6] to-[#5F8FFF] hover:opacity-90 px-6 py-2 text-white font-semibold rounded-full shadow-lg transition"
            />
            <br />
            <input
              type="text"
              className="form-control w-full max-w-md p-2 mt-4 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Search..."
              value={search}
              onChange={handleSearchChange}
            />
            {/* Tabs */}
            <div className="flex justify-center gap-3 mt-8 flex-wrap">
              {tabKeys.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${activeTab === tab
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white border-white/30 hover:border-white/50"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Link Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full">
              {visibleLinks.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#141A2F]/70 backdrop-blur-md border border-white/10 p-6 rounded-2xl transition hover:shadow-xl hover:-translate-y-1 duration-300 text-left"
                >
                  <h3 className="text-[20px] font-semibold text-white mb-2 flex items-center gap-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  {item.link && item.linkLabel && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center mt-5 gap-2 px-5 py-2.5 bg-gradient-to-tr from-[#3B76F6] to-[#5F8FFF] text-white font-medium rounded-full hover:opacity-90 transition group"
                    >
                      {item.linkLabel}
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
         <Navbar />
      </div>
     
    </>
  );
}

export default Homepage;
