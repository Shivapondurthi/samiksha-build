import * as React from "react";
import Image from "next/image";
 
export const FooterSocialLinks: React.FC = () => {

  return (
<section className="flex gap-10 self-end mt-20 max-md:mt-10">
<a href="#" aria-label="Social Media Link 1">
<Image
          fill

          src=""

          alt="Social Media Icon 1"

          className="object-contain shrink-0 aspect-[1.58] rounded-[30px] w-[79px]"

        />
</a>
<a href="#" aria-label="Social Media Link 2">
<Image
            fill
            src=""

          alt="Social Media Icon 2"

          className="object-contain shrink-0 aspect-[1.06] rounded-[80px] w-[53px]"

        />
</a>
</section>

  );

};

 