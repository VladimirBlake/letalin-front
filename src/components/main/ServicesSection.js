import Image from "next/image";
import Service1 from "@/images/service1.png";
import Service2 from "@/images/service2.png";
import Service3 from "@/images/service3.png";
import Service4 from "@/images/service4.png";
import ServicesItem from "./ServicesItem";

const items = [
  {
    serviceImg: Service1,
    name: "Генеральный подряд",
    desc: "Выполняем ключевые функции на этапах подготовки, проектирования, строительства и ввода в эксплуатацию. Обеспечиваем гарантированное качество работы в рамках проектного бюджета и в соответствии с техническим заданием. Контролируем соблюдение нормативных требований на каждом этапе работ.",
  },
  {
    serviceImg: Service2,
    name: "Нормативный надзор и аудит",
    desc: "Обеспечиваем соответствие выполненных работ требованиям проектной документации и законодательству РФ. Контроль производится только квалифицированными специалистами с использованием последних аттестованных средств измерения.",
  },
  {
    serviceImg: Service3,
    name: "Проекты “под ключ” ЕРСМ",
    desc: "Контролируем процесс исполнения работ. Заказчик сам утверждает подрядчиков и поставщиков. Наши специалисты оказывают консультационные услуги и проводит переговоры с партнерами и исполнителями Заказчика при необходимости.",
  },
  {
    serviceImg: Service4,
    name: "Проекты “под ключ” ЕРС",
    desc: "Обеспечение полного цикла строительства объекта: от проектирования до ввода в эксплуатацию. Самостоятельно подбираем поставщиков и подрядчиков, организуем их работу и ведем переговоры с корпоративными партнерами. Несем гарантийные обязательства по реализованному проекту в полном объеме.",
  },
];

export default function ServicesSection() {
  return (
    <section className="px-4 xl:px-0 pt-16 xl:pt-24 sm:container sm:mx-auto">
      <h2 className="font-darco font-bold text-2xl md:text-3xl xl:text-4xl">
        Чем можем помочь?
      </h2>
      <div className="grid grid-cols-1 mt-4 gap-y-3 sm:grid-cols-2 sm:gap-x-3 xl:grid-cols-4 xl:gap-x-5 xl:mt-7">
        {items.map((x) => (
          <ServicesItem key={x.name} {...x} />
        ))}
      </div>
    </section>
  );
}
