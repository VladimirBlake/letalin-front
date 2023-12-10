import Abstract from "@/images/about-abstract.svg";
import Image from "next/image";

export default function AboutIntroSection() {
  return (
    <section className="mt-16 pt-7 flex flex-col items-center px-4 lg:mt-24 xl:px-0">
      <Image className="w-[260px] h-auto" src={Abstract} alt="" />
      <div className="mt-10">
        <p>
          Компания <span className="font-darco font-bold">ЛЕТАТЛИН</span>{" "}
          работает на рынке инженерного проектирования с 2017 года. За это время
          мы успели разработать и помогли ввести в эксплуатацию более 17
          проектов в сфере молочной промышленности и сельского хозяйства.
        </p>
        <br></br>
        <p>
          В компании <span className="font-darco font-bold">ЛЕТАТЛИН</span>{" "}
          работают сотрудники с более чем 10-ти летним опытом проектирования и
          строительства объектов агропромышленного сектора производственного
          назначения.
        </p>
        <br></br>
        <p>
          Вот уже на протяжении трех лет наша команда успешно развивается,
          реализовывая масштабные проекты в различных отраслях: от молочного
          животноводства до промышленных складов и даже гостиничных комплексов!
        </p>
      </div>
    </section>
  );
}
