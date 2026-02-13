import React, { useRef } from "react";

const Contact = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 text-center">

        <h1 className="text-4xl md:text-7xl font-heading  font-bold tracking-tight">
          CONTACT ME<span className="text-gray-400">.</span>
        </h1>

        <div className="w-24 h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 mt-6"></div>

        <h2 className="mt-8 font-heading text-lg md:text-2xl font-semibold text-gray-200">
          Let’s Build a Website That Grows Your Business
        </h2>

        <p className="mt-6 max-w-3xl font-heading text-gray-400 text-base md:text-lg leading-relaxed">
          I design and develop modern business websites that build trust,
          attract customers, and drive real results. Whether you're launching
          a new brand or upgrading your current online presence, I create
          fast, responsive, and conversion-focused websites tailored to
          your business goals.
        </p>

        <button
          onClick={scrollToForm}
          className="mt-10 px-8 md:px-10 py-3 md:py-4 font-heading rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-black font-semibold hover:scale-105 transition duration-300"
        >
          START YOUR PROJECT
        </button>
      </section>

      {/* FULL WIDTH DIVIDER */}
      <div className="w-full h-[1px] bg-white/10"></div>

      {/* CONTACT SECTION */}
      <section
        ref={formRef}
        className="min-h-screen font-heading bg-black text-white flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-4xl md:text-6xl uppercase font-heading leading-tight">
              Let's Build <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Something Great
              </span>
            </h1>

            <p className="text-gray-400 font-heading mt-6 text-base md:text-lg">
              Have a project in mind? I help brands and startups build modern,
              fast, and high-performing websites.
            </p>

            <div className="mt-8 space-y-3 font-heading text-gray-300 text-sm md:text-base">
              <p>📩 fkuser@gmail.com</p>
              <p>📍 India</p>
              <p>💼 Available for Freelance</p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl">
            <form className="space-y-8">

              {/* NAME */}
              <div>
                <label className="text-sm text-gray-400">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-3 bg-transparent border-b border-gray-600 px-1 py-2 focus:outline-none focus:border-pink-500 transition"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm text-gray-400">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-3 bg-transparent border-b border-gray-600 px-1 py-2 focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm text-gray-400">Your Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full mt-3 bg-transparent border-b border-gray-600 px-1 py-2 focus:outline-none focus:border-cyan-400 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-black font-semibold hover:scale-105 transition duration-300"
              >
                Send Message 🚀
              </button>

            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
