import React from "react";
import Primarybutton from "../components/primarybutton/Primarybutton";

function Contact() {
  return (
    <>
<section className="min-h-screen bg-gradient-to-br from-[#0A0E1A] to-[#10182A] text-white flex flex-col justify-start pt-24 px-6 sm:px-12 md:px-20 lg:px-32">
  <div className="w-full max-w-2xl mx-auto space-y-10 text-center">
    <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
    <p className="text-gray-400">
      I'm always open to collaborations, freelance work, or just a
      friendly chat about design and development.
    </p>

    <div className="space-y-6">
      <div className="bg-[#1C243B] p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-semibold mb-1 text-white">📬 Email</h3>
        <p className="text-gray-300">info.poornakawishla@gmail.com</p>
      </div>

      <div className="bg-[#1C243B] p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-semibold mb-1 text-white">🌐 Social</h3>
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
  </div>

  <div className="w-full text-center mt-20">
    <Primarybutton
      buttonText="Back to Home"
      buttonLink="/"
      className="bg-gradient-to-tr from-[#3B76F6] to-[#5F8FFF] hover:opacity-90 px-6 py-2 text-white font-semibold rounded-full shadow-lg transition"
    />
    <div className="mt-6">
      <p className="text-sm text-gray-500">
        Made with 💙{" "}
        <a
          href="https://bento.me/poornakawishla"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Poorna Kawishla
        </a>
      </p>
    </div>
  </div>
</section>

    </>
  );
}

export default Contact;
