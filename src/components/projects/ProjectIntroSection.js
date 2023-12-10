export default function ProjectIntroSection() {
  return (
    <section className="mt-16 lg:mt-24">
      <div className="px-4 md:p-0 bg-projects bg-cover h-[250px] relative md:h-[350px] xl:h-[523px]">
        <div className="md:container md:mx-auto md:relative h-full md:pt-20 xl:pt-32">
          <h1 className="font-darco font-bold text-white text-xl absolute left-4 bottom-3 md:relative md:left-0 md:bottom-0 md:w-[500px] xl:text-3xl">
            Мы обладаем глубокой экспертизой в промышленном проектировании.
          </h1>
          <p className="hidden md:block text-white md:w-[500px] mt-4">
            Ознакомьтесь с нашими предыдущими и текущими проектами и убедитесь
            сами!
          </p>
        </div>
      </div>
      <div className="max-md:px-4 md:hidden">
        <p className="font-darco text-xl font-bold mt-[10px]">
          Ознакомьтесь с нашими предыдущими и текущими проектами и убедитесь
          сами!
        </p>
      </div>
    </section>
  );
}
