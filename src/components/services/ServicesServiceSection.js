import Image from "next/image";
import Arrow from "@/images/services/arrow.svg";
import { useState } from "react";

export default function ServicesServiceSection({ image, title, description }) {
  const [isDescriptionShown, setIsDescriptionShown] = useState(false);
  return (
    <section className="mt-14 sm:container sm:mx-auto xl:grid xl:grid-rows-[auto_minmax(0,_1fr)] xl:grid-cols-2 xl:gap-x-20">
      <h2 className="px-4 sm:px-0 font-darco font-bold text-xl xl:order-1 xl:text-[28px]">
        {title}
      </h2>
      <Image
        src={image}
        alt=""
        className="w-full h-auto mt-5 xl:order-2 xl:row-span-2 xl:w-[603px] xl:h-[389px] xl:mt-0 xl:rounded-2xl"
      />
      <div
        onClick={() => setIsDescriptionShown(!isDescriptionShown)}
        className="px-4 sm:px-0 mt-5 xl:order-3 xl:mt-4"
      >
        <div className="flex items-center xl:hidden">
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
        <p className="hidden font-objectSans text-black mt-3 xl:block xl:mt-0">
          {description}
        </p>
      </div>
    </section>
  );
}
