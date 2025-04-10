"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface ImageItem {
  src: string;
  text: string;
}

const images: ImageItem[] = [
  { src: "/images/img-student.png", text: "Rajat Vora I am immensely grateful to the faculty members for their invaluable guidance and unwavering support throughout my UPSC preparation journey. Their assistance has been instrumental in my progress at every stage." },
  { src: "/images/img-student.png", text: "Rajat Vora I am immensely grateful to the faculty members for their invaluable guidance and unwavering support throughout my UPSC preparation journey. Their assistance has been instrumental in my progress at every stage." },
  { src: "/images/img-student.png", text: "Rajat Vora I am immensely grateful to the faculty members for their invaluable guidance and unwavering support throughout my UPSC preparation journey. Their assistance has been instrumental in my progress at every stage." },
  { src: "/images/img-student.png", text: "Rajat Vora I am immensely grateful to the faculty members for their invaluable guidance and unwavering support throughout my UPSC preparation journey. Their assistance has been instrumental in my progress at every stage." },
  { src: "/images/img-student.png", text: "Rajat Vora I am immensely grateful to the faculty members for their invaluable guidance and unwavering support throughout my UPSC preparation journey. Their assistance has been instrumental in my progress at every stage." },
  { src: "/images/img-student.png", text: "Rajat Vora I am immensely grateful to the faculty members for their invaluable guidance and unwavering support throughout my UPSC preparation journey. Their assistance has been instrumental in my progress at every stage." },
];

export default function TestimonialCarousel() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="flex flex-col items-center  bg-[#0F6CB4] py-16">
  <h2 className="text-4xl font-bold mb-4 text-white font-medium">What Students Say?</h2>
  <div className="w-full max-w-7xl py-8">
    <Slider {...settings}>
      {images.map((item, i) => (
        <div key={i} className="p-4">
          <div className="rounded-lg p-4 flex flex-col text-center items-center">
            <div className="w-[100px] h-[100px] mb-4"> {/* Set specific width and height */}
              <Image
                src={item.src}
                alt={item.text}
                width={100}  // Set the width of the image
                height={100} // Set the height of the image
                className="rounded-full object-cover" // Ensure the image is rounded and covers the area
              />
            </div>
            <p className="mt-2 text-white">{item.text}</p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

  );
}
