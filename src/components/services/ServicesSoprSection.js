import Sopr from "@/images/services/sopr.png";
import Image from "next/image";

export default function ServicesSoprItem() {
  return (
    <section className="sm:container sm:mx-auto">
      <h2 className="mt-12 px-4 sm:px-0 font-darco font-bold text-xl">
        Техническое сопровождение государственных и коммерческих экспертиз
        проектных документаций, разработанных ООО «ЛЕТАТЛИН»
      </h2>
      <Image src={Sopr} alt="" className="mt-4 w-full h-auto" />
    </section>
  );
}
