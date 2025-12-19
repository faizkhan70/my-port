import React from "react";

const Marquee = () => {
  return (
    <section className="bg-white text-black pb-20 sm:pb-28 lg:pb-44 overflow-hidden">
      
      {/* Row 1 */}
      <div className="whitespace-nowrap animate-marquee text-4xl sm:text-5xl lg:text-[7vw] font-heading font-semibold leading-none tracking-tight">
        <span className="flex items-center gap-4 sm:gap-6 lg:gap-8 px-6 lg:px-8">
          CREATE <img src="https://i.ibb.co/C5jKdQbv/ice-crystal-528524-1280-removebg-preview.png" alt="" className="marquee-star1 w-16 sm:w-20 lg:w-[13vw]" />
          DESIGN <img src="https://i.ibb.co/C5jKdQbv/ice-crystal-528524-1280-removebg-preview.png" alt="" className="marquee-star1 w-16 sm:w-20 lg:w-[13vw]" />
          INSPIRE <img src="https://i.ibb.co/C5jKdQbv/ice-crystal-528524-1280-removebg-preview.png" alt="" className="marquee-star1 w-16 sm:w-20 lg:w-[13vw]" />
          CREATE <img src="https://i.ibb.co/C5jKdQbv/ice-crystal-528524-1280-removebg-preview.png" alt="" className="marquee-star1 w-16 sm:w-20 lg:w-[13vw]" />
          DESIGN <img src="https://i.ibb.co/C5jKdQbv/ice-crystal-528524-1280-removebg-preview.png" alt="" className="marquee-star1 w-16 sm:w-20 lg:w-[13vw]" />
          INSPIRE <img src="https://i.ibb.co/C5jKdQbv/ice-crystal-528524-1280-removebg-preview.png" alt="" className="marquee-star1 w-16 sm:w-20 lg:w-[13vw]" />
        </span>
      </div>

      {/* Row 2 */}
      <div className="whitespace-nowrap animate-marquee-reverse text-4xl sm:text-5xl lg:text-[7vw] font-heading font-semibold leading-none tracking-tight">
        <span className="flex items-center gap-4 sm:gap-6 lg:gap-8 px-6 lg:px-8">
          CREATE <img src="https://i.ibb.co/C5jKdQbv/ice-crystal-528524-1280-removebg-preview.png" alt="" className="marquee-star2 w-16 sm:w-20 lg:w-[13vw]" />
          DESIGN <img src="https://i.ibb.co/C5jKdQbv/ice-crystal-528524-1280-removebg-preview.png" alt="" className="marquee-star2 w-16 sm:w-20 lg:w-[13vw]" />
          INSPIRE <img src="https://i.ibb.co/C5jKdQbv/ice-crystal-528524-1280-removebg-preview.png" alt="" className="marquee-star2 w-16 sm:w-20 lg:w-[13vw]" />
          CREATE <img src="https://i.ibb.co/C5jKdQbv/ice-crystal-528524-1280-removebg-preview.png" alt="" className="marquee-star2 w-16 sm:w-20 lg:w-[13vw]" />
          DESIGN <img src="https://i.ibb.co/C5jKdQbv/ice-crystal-528524-1280-removebg-preview.png" alt="" className="marquee-star2 w-16 sm:w-20 lg:w-[13vw]" />
          INSPIRE <img src="https://i.ibb.co/C5jKdQbv/ice-crystal-528524-1280-removebg-preview.png" alt="" className="marquee-star2 w-16 sm:w-20 lg:w-[13vw]" />
        </span>
      </div>

    </section>
  );
};

export default Marquee;
