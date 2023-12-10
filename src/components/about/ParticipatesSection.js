export default function ParticipatesSection({ heading, about, reg, level }) {
  return (
    <section className="px-4 xl:px-0 pt-7 sm:container sm:mx-auto xl:pt-12">
      <h2 className="font-darco text-lg font-bold md:text-xl xl:text-3xl">
        {heading}
      </h2>
      <div className="flex justify-between text-sm mt-4 xl:text-xl">
        <div className="xl:w-5/12 xl:border-r-2 xl:border-r-[#E1E1E1]">
          <p className="w-[140px] break-words sm:w-52 xl:w-[420px]">{about}</p>
        </div>
        <div className="xl:w-4/12 xl:flex xl:justify-center xl:border-r-2 xl:border-r-[#E1E1E1]">
          <p className="w-[77px] break-words sm:w-28 xl:w-[240px]">{reg}</p>
        </div>
        <div className="xl:w-3/12 xl:flex xl:justify-center">
          <p className="w-[74px] break-words sm:w-28 xl:w-[190px]">{level}</p>
        </div>
      </div>
    </section>
  );
}
