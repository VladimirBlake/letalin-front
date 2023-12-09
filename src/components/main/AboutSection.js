export default function AboutSection() {
  return (
    <section className="px-4 pt-4 sm:container mx-auto">
      <div>
        <p>
          <span className="font-darco font-bold">ЛЕТАТЛИН</span> — бюро
          Проектирования высокотехнологичных объектов арюгропромышленного
          сектора, промышленных объектов, производственно-логистических
          комплексов
        </p>
        <p className="font-darco font-normal mt-5">
          Проектируем высокотехнологические объекты{" "}
          <span className="font-bold text-[#D56D70]">с 2017 года</span>.
        </p>
      </div>
      <div>
        <button className="w-full h-[52px] mt-6 text-white bg-green rounded-lg sm:w-40 sm:h-12">
          Заказать проект
        </button>
        <div className="hidden md:block px-5 py-3">
          <span className="uppercase font-darco font-bold">
            Проектируем высокотехнологические объекты с 2017 года.
          </span>
        </div>
      </div>
    </section>
  );
}
