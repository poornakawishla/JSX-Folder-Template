import React from "react";
import Primarybutton from "../components/primarybutton/Primarybutton";

function Contact() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-[#0A0E1A] to-[#10182A] text-white flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-2xl space-y-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400">
            I'm always open to collaborations, freelance work, or just a
            friendly chat about design and development.
          </p>

          <div className="space-y-6">
            <div className="bg-[#1C243B] p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold mb-1 text-white">
                📬 Email
              </h3>
              <p className="text-gray-300">info.poornakawishla@gmail.com</p>
            </div>

            <div className="bg-[#1C243B] p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold mb-1 text-white">
                🌐 Social
              </h3>
              <div className="flex justify-center gap-6 mt-2">
                <a
                  href="https://www.behance.net/poornakawishla"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#1769ff]"
                >
                  Behance
                </a>
                <a
                  href="https://www.linkedin.com/in/poornakawishla/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#0A66C2]"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/poornakawishla"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#E4405F]"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-sm text-gray-500">
              Made with 💙 by Poorna Kawishla
            </p>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <Primarybutton
            buttonText="Back to Home"
            buttonLink="/"
            className="text-white bg-[#1C243B] hover:bg-[#2A2F4D] px-6 py-3 rounded-lg"
          />
         </div>
      </section>
      );
    </>
  );
}

export default Contact;
