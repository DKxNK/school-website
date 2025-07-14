import React, { useState, useEffect, useRef } from "react";
import styles from "./hero.module.css";

const images = [
  `${process.env.PUBLIC_URL}/images/home1.png`,
  `${process.env.PUBLIC_URL}/images/home2.png`,
  `${process.env.PUBLIC_URL}/images/home3.jpeg`,
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const timeoutRef = useRef(null);

  // Change slide with fade effect
  useEffect(() => {
    // Start fade out just before image changes
    timeoutRef.current = setTimeout(() => {
      setFade(true); // start fadeOut
    }, 4000); // fade starts 1s before slide change (slide change = 5s)

    // Change image after fade out
    const changeTimeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setFade(false); // fade back in
    }, 5000);

    return () => {
      clearTimeout(timeoutRef.current);
      clearTimeout(changeTimeout);
    };
  }, [currentIndex]);

  // Manually change slide (reset fade timers)
  const setSlide = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(false);
    }, 500);
  };

  return (
    <section id="hero" className="scroll-mt-24 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left - Text */}
        <div className="text-center md:text-left ">
          <p className="text-3xl md:text-4xl text-blue-700 font-welcome md:pb-2">Welcome To</p>

          <h1 className="text-[42px]  md:text-[46px] font-heading text-blue-900 font-semibold leading-tight pb-2">
            Methodist Primary School
          </h1>

          <h2 className="text-[20px] text-blue-600 font-bold tracking-wide uppercase pb-4">
            Panadura
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed pb-4">
            We are committed to nurturing young minds with quality education,
            strong values, and a love for learning — helping every child shine
            in academics, sports, and life.
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Right - Image + Dots */}
        <div className="relative flex flex-col items-center">
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt="School"
            className={`${styles.imageZoom} rounded-lg shadow-lg w-full h-[400px] object-cover ${
              fade ? styles.fadeOut : styles.fadeImage
            }`}
          />

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === idx
                    ? "bg-blue-700"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
