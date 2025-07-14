import React from "react";

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 bg-white pb-16 lg:pt-15">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left - Images */}
        <div className="hidden md:block md:w-1/2 space-y-6">
          {/* First row: about1 and about2 side by side */}
          <div className="flex gap-4">
            <img
              src={`${process.env.PUBLIC_URL}/images/about1.png`}
              alt="School Activity 1"
              className="w-1/2 h-[200px] object-cover rounded-lg shadow-lg"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/about2.png`}
              alt="School Activity 2"
              className="w-1/2 h-[200px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Second row: about3 full width */}
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/images/about3.jpeg`}
              alt="School Activity 3"
              className="w-full h-[200px] rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right - Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-blue-900 mb-6 -mt-6">
            About Our School
          </h2>
          <p className="text-gray-700 text-lg mb-6 mt-6 pt-3 leading-relaxed text-justify">
            Established in 1920, University of El Dorado has long been a home to critical thinking, 
            progressive education, and a conscientious community. This private non-profit university 
            is committed to pushing positive change and creating a caring world for everyone.
            conscientious community. This private non-profit university is committed to pushing 
            positive change and creating a caring world for everyone.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed text-justify">
            With experienced teachers, modern facilities, and a supportive
            community, we aim to empower every student to achieve their full
            potential and prepare them for a bright future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
