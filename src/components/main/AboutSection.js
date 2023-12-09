export default function AboutSection() {
  return (
    <section className="px-4 pt-4 xl:pt-8 sm:container mx-auto xl:px-0">
      <div>
        <p className="xl:text-2xl">
          <span className="font-darco font-bold md:text-xl xl:text-3xl">
            ЛЕТАТЛИН
          </span>{" "}
          — бюро проектирования высокотехнологичных объектов агропромышленного
          сектора, промышленных объектов, производственно-логистических
          комплексов
        </p>
        <p className="font-darco font-normal mt-5 md:text-xl xl:hidden">
          Проектируем высокотехнологические объекты{" "}
          <span className="font-bold text-[#D56D70]">с 2017 года</span>.
        </p>
      </div>
      <div className="lg:flex items-center lg:mt-6 xl:mt-7">
        <button className="w-full h-[52px] mt-6 lg:mt-0 text-white bg-green rounded-lg sm:w-40 sm:h-12 md:rounded-xl">
          Заказать проект
        </button>
        <div className="hidden lg:block px-4 py-2 ml-8 border-black border-2">
          <span className="uppercase font-darco font-bold">
            Проектируем высокотехнологические объекты с 2017 года.
          </span>
        </div>
      </div>
    </section>
  );
}
