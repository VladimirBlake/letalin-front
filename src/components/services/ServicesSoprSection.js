import Sopr from "../../../public/sopr.png";
import Image from "next/image";

export default function ServicesSoprItem() {
  return (
    <section className="sm:container sm:mx-auto xl:h-[520px] xl:bg-serviceSopr xl:bg-cover xl:bg-no-repeat xl:bg-bottom xl:rounded-3xl xl:p-8 xl:mt-14">
      <h2 className="mt-12 px-4 sm:px-0 font-darco font-bold text-xl xl:mt-0 xl:text-white xl:w-[1000px] xl:text-2xl">
        Техническое сопровождение государственных и коммерческих экспертиз
        проектных документаций, разработанных ООО «ЛЕТАТЛИН»
      </h2>
      <Image src={Sopr} alt="" className="mt-4 w-full h-auto xl:hidden" />
    </section>
  );
}
