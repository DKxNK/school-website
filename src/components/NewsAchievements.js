import React, { useRef, useState } from "react";
import "./NewsAchievements.css";

const newsItems = [
  {
    id: 1,
    title: "ශීල සමාදාන වැඩ සටහන",
    date: "July 1, 2025",
    description:
      "Students and teachers participated in a special Sil program to mark Poson Poya Day, promoting mindfulness, discipline, and Buddhist values within the school community.",
    image: `${process.env.PUBLIC_URL}/images/news/poson poya day.jpeg`,
  },
  {
    id: 2,
    title: "දන්සැල",
    date: "June 15, 2025",
    description:
      "A special almsgiving ceremony was organized at the school’s Dana Sala, where students, staff, and parents came together to offer meals and practice generosity in honor of Buddhist traditions.",
    image: `${process.env.PUBLIC_URL}/images/news/dansala.jpeg`,
  },
  {
    id: 3,
    title: "සිංහල හින්දු අළුත් අවුරුද්ද",
    date: "June 15, 2025",
    description:
      "Students and Teachers joyfully celebrated the Sinhala Hindu New Year with traditional games, cultural performances, and community gatherings, fostering unity and cultural pride.",
    image: `${process.env.PUBLIC_URL}/images/news/new_year.jpeg`,
  },
  {
    id: 4,
    title: "ආදී ශිෂ්‍ය සංගමය",
    date: "June 20, 2025",
    description:
      "The Old Pupils Association of our school continues to foster strong bonds among former students, supporting current students and organizing events that celebrate the rich heritage and achievements of our alma mater",
    image: `${process.env.PUBLIC_URL}/images/news/old-pupils-association.jpeg`,
  },
  {
    id: 5,
    title: "බැති ගී සරණිය",
    date: "June 20, 2025",
    description:
      "The 'Songs of Devotion 2024' event showcased heartfelt performances by students, celebrating spiritual and cultural heritage through traditional and contemporary devotional songs.",
    image: `${process.env.PUBLIC_URL}/images/news/songs-of-devotion.jpeg`,
  },
  {
    id: 6,
    title: "වැඩිහිටි නිවාසයකට පිහිට වීම",
    date: "June 20, 2025",
    description:
      "Students and staff actively participated in a community service initiative by providing assistance and support to a local elderly care home, fostering compassion and social responsibility.",
    image: `${process.env.PUBLIC_URL}/images/news/elderly-care-home.jpeg`,
  },
  {
    id: 7,
    title: "අත්කම් නිර්මාණ ප්‍රදර්ශනය",
    date: "June 20, 2025",
    description:
      "Our students showcased their creativity and craftsmanship in a vibrant handicraft exhibition, displaying a variety of handmade items that reflect cultural heritage and artistic skills",
    image: `${process.env.PUBLIC_URL}/images/news/handicraft-exhibition.jpeg`,
  },
  {
    id: 8,
    title: "ශිෂ්‍ය නායක පදක්කම් පැලඳවීම",
    date: "June 20, 2025",
    description:
      "A formal ceremony was held to honor our student leaders by awarding them their badges, recognizing their dedication, leadership qualities, and commitment to representing the school with pride.",
    image: `${process.env.PUBLIC_URL}/images/news/student-leader-badge.jpeg`,
  },
  {
    id: 9,
    title: "නව බුදු මැදුර විවෘත කිරීම",
    date: "June 20, 2025",
    description:
      "The school proudly inaugurated the new Buddha Shrine, providing a serene space for meditation, reflection, and spiritual activities that nurture the values of peace and mindfulness among students and staff",
    image: `${process.env.PUBLIC_URL}/images/news/new-buddha-shrine.jpeg`,
  },
];

const achievementsItems = [
  {
    id: 1,
    title: "District Football Champions",
    date: "June 2025",
    description:
      "Our football team won the district championship for the 3rd year!",
    image: `${process.env.PUBLIC_URL}/images/achievements/football-champions.jpg`,
  },
  {
    id: 2,
    title: "Math Olympiad Gold Medal",
    date: "May 2025",
    description:
      "Student Jane Doe won the gold medal in the National Math Olympiad.",
    image: `${process.env.PUBLIC_URL}/images/achievements/math-olympiad.jpg`,
  },
];

const Modal = ({ item, onClose }) => {
  if (!item) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-5/6 md:w-2/3 max-w-xl p-6 max-h-[90vh] overflow-y-auto relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-56 lg:h-auto object-cover rounded-md mb-4"
        />
        <h3 className="text-2xl font-bold font-poppins text-blue-900 mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{item.date}</p>
        <p className="text-gray-700 text-base leading-relaxed text-justify">{item.description}</p>
      </div>
    </div>
  );
};

const NewsAchievements = () => {
  const [activeTab, setActiveTab] = useState("news");
  const [selectedItem, setSelectedItem] = useState(null);
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  const currentItems = activeTab === "news" ? newsItems : achievementsItems;

  return (
    <section id="news" className="scroll-mt-24 bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-poppins font-extrabold text-blue-900 mb-8 text-center">
          News & Achievements
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setActiveTab("news")}
            className={`px-6 py-2 rounded-md font-semibold ${
              activeTab === "news"
                ? "bg-blue-800 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            News
          </button>
          <button
            onClick={() => setActiveTab("achievements")}
            className={`px-6 py-2 rounded-md font-semibold ${
              activeTab === "achievements"
                ? "bg-blue-800 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Achievements
          </button>
        </div>

        {/* Arrows & Cards Container */}
        <div className="flex items-center justify-center space-x-4">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="hidden md:inline-block bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition"
            aria-label="Scroll left"
          >
            &#8592;
          </button>

          {/* Cards Section */}
          <div className="overflow-hidden w-full md:max-w-[350px] lg:max-w-[760px] xl:max-w-[1200px]">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto scrollbar-hide space-x-6 lg:p-4 "
              style={{ scrollBehavior: "smooth" }}
            >
              {currentItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="card border-2 w-[250px] sm:w-[160px] md:w-[350px] hover:shadow-lg transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3
                      className={`text-[18px] font-semibold font-poppins ${
                        activeTab === "news" ? "text-blue-900" : "text-green-700"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                    <p className="text-gray-700 text-sm text-justify line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="hidden md:inline-block bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition"
            aria-label="Scroll right"
          >
            &#8594;
          </button>
        </div>

        {/* Modal */}
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      </div>
    </section>
  );
};

export default NewsAchievements;
