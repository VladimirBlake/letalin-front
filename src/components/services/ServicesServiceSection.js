import Image from "next/image";
import Arrow from "@/images/services/arrow.svg";
import { useState } from "react";

export default function ServicesServiceSection({ image, title, description }) {
  const [isDescriptionShown, setIsDescriptionShown] = useState(false);
  return (
    <section className="mt-14 sm:container sm:mx-auto">
      <h2 className="px-4 sm:px-0 font-darco font-bold text-xl">{title}</h2>
      <Image src={image} alt="" className="w-full h-auto mt-5" />
      <div
        onClick={() => setIsDescriptionShown(!isDescriptionShown)}
        className="px-4 sm:px-0 mt-5"
      >
        <div className="flex items-center">
          <span className="font-objectSans text-lg">Описание</span>
          <div className="rounded-full w-[20px] h-[20px] border-[1.2px] border-r-black ml-2 relative top-[-2px] flex justify-center items-center">
            <Image
              src={Arrow}
              alt=""
              className={isDescriptionShown ? "" : "rotate-180"}
            />
          </div>
        </div>
        {isDescriptionShown && (
          <p className="font-objectSans text-black mt-3">{description}</p>
        )}
      </div>
    </section>
  );
}
