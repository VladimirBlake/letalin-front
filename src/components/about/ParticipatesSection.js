export default function ParticipatesSection({ heading, about, reg, level }) {
  return (
    <section className="px-4 xl:px-0 pt-7">
      <h2 className="font-darco text-lg font-bold">{heading}</h2>
      <div className="flex justify-between mt-4">
        <p className="w-[140px] text-sm break-words">{about}</p>
        <p className="w-[77px] text-sm break-words">{reg}</p>
        <p className="w-[74px] text-sm break-words">{level}</p>
      </div>
    </section>
  );
}
