import React from "react";

const MissionVision = () => {
  return (
    <section
      id="mission"
      className="scroll-mt-24 relative bg-fixed bg-center bg-cover bg-no-repeat py-16"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/mission-bg.jpeg)`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Mission Card */}
        <div className="backdrop-blur-sm bg-white/60 rounded-xl shadow-lg p-8 text-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/mission.png`}
            alt="Mission Icon"
            className="h-16 mx-auto mb-4"
          />
          <h3 className="text-3xl font-poppins font-bold text-blue-900 mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed text-md text-justify">
            To provide quality primary education by developing knowledge, skills,
            attitudes, and virtues of the students through effective educational methods.
          </p>
        </div>

        {/* Vision Card */}
        <div className="backdrop-blur-sm bg-white/60 rounded-xl shadow-lg p-8 text-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/vision.png`}
            alt="Vision Icon"
            className="h-20 mx-auto "
          />
          <h3 className="text-3xl font-poppins font-bold text-blue-900 mb-4">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed text-md">
            To provide quality primary education by developing knowledge, skills,
            and attitudes of the students to shape future-ready citizens.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
