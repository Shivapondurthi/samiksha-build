"use client";
import React from "react";
import Carousel from "./Carousel";


const mentors = [
  {
    imageUrl:
"/images/profile.png",    name: "HON RAJEEV MISHRA",
    title: "Deputy Commissioner",
  },
  {
    imageUrl:
"/images/profile.png",    name: "HON RAJEEV MISHRA",
    title: "Deputy Commissioner",
  },
  {
    imageUrl:
"/images/profile.png",    name: "HON RAJEEV MISHRA",
    title: "Deputy Commissioner",
  },
  {
    imageUrl:
"/images/profile.png",  name: "HON RAJEEV MISHRA",
  title: "Deputy Commissioner",
  },
  {
    imageUrl:
"/images/profile.png",    name: "HON RAJEEV MISHRA",
    title: "Deputy Commissioner",
  },
];

const TopRankers: React.FC = () => {
  return (
    <section className="overflow-hidden relative w-full bg-white py-16">
      <div className="absolute w-[800px] h-[860px] top-[0] left-0 opacity-100 rotate-182">
        <svg
          width="795"
          height="779"
          viewBox="1 1 795 779"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M26.9041 440.802C-8.28356 424.039 -8.95182 374.195 25.7738 356.496L714.387 5.50838C746.015 -10.6123 783.412 12.8039 782.722 48.2962L776.958 344.786L794.053 729.738C795.627 765.163 758.9 789.505 726.887 774.255L26.9041 440.802Z"
            fill="#0F6CB4"
          />
        </svg>
      </div>
      <div className="px-4 mx-auto max-w-screen-lg text-center relative">
        <div className="w-[168px] h-2 mx-auto mt-6 mb-6 flex items-center justify-between">
          <div className="w-[60px] h-[3px] bg-[#0f6cb4]" />
          <div className="w-2 h-2 rounded-full bg-[#0f6cb4]" />
          <div className="w-[60px] h-[3px] bg-[#0f6cb4]" />
        </div>
        <h2 className="text-4xl font-bold text-sky-700 mb-6">
          EXCELLENCE OF OUR STUDENTS
        </h2>
        <p className="text-lg text-black mb-8">
          Transform Your Skills with Professional Guidance
        </p>
        <Carousel mentors={mentors} />
      </div>
    </section>
  );
};

export default TopRankers;
