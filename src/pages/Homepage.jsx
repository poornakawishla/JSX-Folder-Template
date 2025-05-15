import React from "react";

function Homepage() {
  return (
    <>
    <div className="relative bg-gradient-to-r from-[#3B76F6] via-[#2CB67D] to-[#716EF1] bg-[length:400%_400%] animate-gradient-x text-white min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0E1A]/80 z-0"></div>

      <div className="relative z-10 max-w-4xl text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold">Hey, I'm Poorna 👋</h1>
        <p className="text-lg md:text-xl text-gray-300">
          UI/UX Designer · ReactJS Developer · Human-Centered Thinker
        </p>

        <div className="flex justify-center gap-4">
          <a href="https://www.behance.net/poornakawishla" target="_blank" rel="noreferrer">
            <img src="https://img.shields.io/badge/Behance-1769ff?style=flat-square&logo=behance&logoColor=white" alt="Behance" />
          </a>
          <a href="https://www.linkedin.com/in/poornakawishla/" target="_blank" rel="noreferrer">
            <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/poornakawishla" target="_blank" rel="noreferrer">
            <img src="https://img.shields.io/badge/Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white" alt="Instagram" />
          </a>
        </div>

        <div className="space-y-6 text-left max-w-xl mx-auto mt-10">
          <div>
            <h3 className="text-xl font-semibold">🌌 Project Dreamscape</h3>
            <p className="text-gray-300">
              <a
                href="https://projectdreamscape.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline"
              >
                projectdreamscape.netlify.app
              </a><br />
              Experimental UI with seamless transitions & scroll animations (React JS)
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">🏠 NexusHome</h3>
            <p className="text-gray-300">
              <a
                href="https://www.behance.net/gallery/224976693/NexusHome-Smart-Home-App"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline"
              >
                Smart Home App on Behance
              </a><br />
              Clean, futuristic UX for smart home systems
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">📸 Capture Eye Studio</h3>
            <p className="text-gray-300">
              <a
                href="https://www.behance.net/gallery/209909555/Capture-Eye-Studio-Website-Design"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline"
              >
                Creative Studio Portfolio on Behance
              </a><br />
              Minimal, visual-forward portfolio site for a creative studio
            </p>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Homepage;
