import Image from "next/image";

export default function ServicesItem({
  serviceImg,
  name,
  desc,
  mobileImgHeight,
}) {
  return (
    <div className="border-[#EBEBEB] border-2 p-4 h-auto rounded-xl">
      <div className="w-full flex h-[63px] items-center justify-center mt-2">
        <Image src={serviceImg} alt="" className={`w-[55px] h-auto`} />
      </div>
      <h3 className="font-darco font-bold text-xl mt-4">{name}</h3>
      <p className="text-sm mt-2">{desc}</p>
    </div>
  );
}
