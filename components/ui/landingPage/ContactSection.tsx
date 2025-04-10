import * as React from "react";
import { QuestionInput } from "./QuestionInput";
import Image from "next/image";

export const ContactSection: React.FC = () => {
  return (
    <aside className="ml-5 w-[45%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full font-semibold max-md:mt-10 max-md:max-w-full ">
        <div className="flex flex-col pl-10 text-black max-md:pl-5 max-md:max-w-full ">
          <div className="w-[385px] h-[385px] mt-20 self-end relative">
            <Image
              src="/images/contact-section.jpg"
              alt="Contact illustration"
              width={385} // Set width to 385px
              height={385} // Set height to 385px to maintain aspect ratio
              className="object-contain rounded-[100px] w-full h-full" // Ensure image stays within rounded bounds
            />
          </div>
          <h2 className="self-center mt-12 text-3xl max-md:mt-10">
            Any Question?
          </h2>
          <p className="self-start text-base">
            You can ask anything you want to know Feedback
          </p>
        </div>
        <QuestionInput />
      </div>
    </aside>
  );
};
