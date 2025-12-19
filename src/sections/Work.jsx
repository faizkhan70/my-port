import React, { useRef, useEffect } from "react";
import GradientButton from "../components/GradientButton";
import project from "../components/ProjectData";
import { gsap } from "gsap";

const Work = () => {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;

    tweenRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: 30, // speed (lower = faster)
      ease: "linear",
      repeat: -1,
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  const pauseScroll = () => tweenRef.current?.pause();
  const resumeScroll = () => tweenRef.current?.resume();

  return (
    <section className="bg-white text-black py-20 sm:py-24 lg:py-40 overflow-hidden">
      {/* Title */}
      <div className="main-container pb-8 lg:pb-12 flex flex-col md:flex-row gap-6 justify-between items-start md:items-end">
        <div className="max-w-xl">
          <h3 className="mb-3 text-lg font-semibold">Selected Work</h3>
          <p className="text-base sm:text-lg lg:text-xl">
            A showcase of my selected projects—designed to inspire, engage,
            and deliver real results.
          </p>
        </div>

        <GradientButton text="Explore All" link="/projects" className="btn-light" />
      </div>

      {/* Auto Scroll Wrapper */}
      <div
        ref={wrapperRef}
        className="relative overflow-hidden mt-6"
        onMouseEnter={pauseScroll}
        onMouseLeave={resumeScroll}
      >
        <div
          ref={trackRef}
          className="flex gap-4 lg:gap-8 w-max"
        >
          {/* duplicate projects for infinite loop */}
          {[...project, ...project].map(({ id, name, Image, link }, index) => (
            <a
              key={`${id}-${index}`}
              href={link}
              className="relative rounded-2xl min-w-[340px] lg:min-w-[480px] h-64 lg:h-96 block overflow-hidden group"
            >
              <img
                src={Image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <span className="absolute top-4 right-4 bg-black text-white uppercase px-5 py-1 rounded-full text-sm lg:text-lg">
                {name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
