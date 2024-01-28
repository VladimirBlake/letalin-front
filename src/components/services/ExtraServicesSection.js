import Image from "next/image";
import Service1 from "@/images/services/service-extra-1.png";
import Service2 from "@/images/services/service-extra-2.png";

export default function ExtraServicesSection() {
  return (
    <section>
      <div className="sm:container sm:mx-auto">
        <h2 className="mt-12 px-4 sm:px-0 font-darco font-bold text-xl">
          Выполнение авторского надзора за строительством по проектной и рабочей
          документациями, разработанными ООО «ЛЕТАТЛИН».
        </h2>
        <Image src={Service1} alt="" className="w-full h-auto mt-4" />
      </div>
      <div className="sm:container sm:mx-auto">
        <h2 className="mt-12 px-4 sm:px-0 font-darco font-bold text-xl">
          Выполнение функций технического заказчика.
        </h2>
        <Image src={Service2} alt="" className="w-full h-auto mt-4" />
      </div>
    </section>
  );
}
