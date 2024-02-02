import Image from "next/image";
import Service1 from "../../../public/service-extra-1.png";
import Service2 from "../../../public/service-extra-2.png";
import Blueprint from "@/images/services/blueprint2.png";

export default function ExtraServicesSection() {
  return (
    <section className="relative xl:container xl:mx-auto xl:grid xl:grid-cols-2 xl:gap-x-6 xl:grid-rows-[438px] xl:mt-16">
      <Image
        src={Blueprint}
        alt=""
        className="hidden xl:block absolute -z-10 -left-20 bottom-8"
      />
      <div className="sm:container sm:mx-auto xl:bg-serviceExtra1 xl:bg-cover xl:bg-no-repeat xl:rounded-3xl xl:p-7">
        <h2 className="mt-12 px-4 sm:px-0 font-darco font-bold text-xl xl:mt-0 xl:text-white">
          Выполнение авторского надзора за строительством по проектной и рабочей
          документациями, разработанными ООО «ЛЕТАТЛИН».
        </h2>
        <Image src={Service1} alt="" className="w-full h-auto mt-4 xl:hidden" />
      </div>
      <div className="sm:container sm:mx-auto xl:bg-serviceExtra2 xl:bg-cover xl:bg-no-repeat xl:rounded-3xl xl:p-7">
        <h2 className="mt-12 px-4 sm:px-0 font-darco font-bold text-xl xl:mt-0 xl:text-white">
          Выполнение функций технического заказчика.
        </h2>
        <Image src={Service2} alt="" className="w-full h-auto mt-4 xl:hidden" />
      </div>
    </section>
  );
}
