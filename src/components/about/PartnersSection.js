import Image from "next/image";
import Partner1 from "@/images/partners/partner1.png";
import Partner2 from "@/images/partners/partner2.png";
import Partner3 from "@/images/partners/partner3.png";
import Partner4 from "@/images/partners/partner4.png";
import Partner5 from "@/images/partners/partner5.png";
import Partner6 from "@/images/partners/partner6.png";
import Blueprint2 from "@/images/about/blueprint2.png";
import Blueprint3 from "@/images/about/blueprint3.png";

export default function PartnersSection() {
  return (
    <section className="relative max-sm:overflow-x-clip px-4 xl:px-0 pt-16 sm:container sm:mx-auto pb-8">
      <Image
        src={Blueprint2}
        alt=""
        className="absolute -z-10 -rotate-[23deg] max-w-none w-[610px] h-auto -left-56 top-24 md:left-auto md:rotate-0 md:top-12 lg:right-0 xl:w-[872px] xl:-right-24 xl:-top-10"
      />
      <Image
        src={Blueprint3}
        alt=""
        className="-z-10 hidden lg:block absolute max-w-none w-[400px] h-auto xl:w-[447px] xl:top-24 xl:-left-16"
      />
      <h2 className="font-darco text-2xl font-bold md:text-xl xl:text-4xl">
        Наши партнёры
      </h2>
      <div className="grid grid-cols-2 gap-y-10 items-center justify-around mt-8 lg:grid-cols-3 lg:gap-y-14 xl:grid-cols-[173px_minmax(0,_1fr)_320px]">
        <div className="flex justify-center lg:order-1 lg:justify-start">
          <Image
            src={Partner1}
            alt=""
            className="w-[100px] h-[100px] lg:w-[173px] lg:h-[173px]"
          />
        </div>
        <div className="flex justify-center lg:order-4 lg:justify-start">
          <Image
            src={Partner2}
            alt=""
            className="w-[100px] h-[100px] lg:w-[173px] lg:h-[173px]"
          />
        </div>
        <div className="flex justify-center lg:order-2">
          <Image
            src={Partner3}
            alt=""
            className="w-[144px] h-auto lg:w-[400px] xl:w-[496px]"
          />
        </div>
        <div className="flex justify-center lg:order-5">
          <Image
            src={Partner4}
            alt=""
            className="w-[144px] h-auto lg:w-[300px] xl:w-[440px]"
          />
        </div>
        <div className="flex justify-center lg:order-3 lg:justify-end">
          <Image
            src={Partner5}
            alt=""
            className="w-[149px] h-auto lg:w-[200px] xl:w-[320px]"
          />
        </div>
        <div className="flex justify-center lg:order-6 lg:justify-end">
          <Image
            src={Partner6}
            alt=""
            className="w-[124px] h-auto lg:w-[200px] xl:w-[320px]"
          />
        </div>
      </div>
    </section>
  );
}
