import Image from "next/image";

export default function ServicesItem({
  serviceImg,
  name,
  desc,
  mobileImgHeight,
}) {
  return (
    <div className="border-[#EBEBEB] border-2 p-4 h-auto rounded-xl bg-white">
      <div className="w-full flex items-center justify-center mt-2 xl:h-[75px]">
        <Image
          src={serviceImg}
          alt=""
          className={`w-[55px] xl:w-[75px] h-auto`}
        />
      </div>
      <h3 className="font-darco font-bold text-xl mt-4 xl:text-[22px]">
        {name}
      </h3>
      <p className="text-sm mt-2">{desc}</p>
    </div>
  );
}
