"use client";
import Abstract1 from "@/images/form-abstract1.svg";
import Abstract2 from "@/images/form-abstract2.svg";
import Image from "next/image";
import MainForm from "./MainForm";

export default function FormSection() {
  return (
    <section className="px-4 flex pt-16 sm:max-lg:container sm:mx-auto lg:gap-x-16 xl:gap-x-0 xl:pl-0 xl:pr-4 xl:justify-between">
      <div className="flex">
        <Image src={Abstract1} alt="" className="hidden xl:block" />
        <Image src={Abstract2} alt="" className="hidden lg:block" />
      </div>
      <div className="xl:mr-[calc((100vw-1280px)/2)]">
        <h2 className="font-darco font-bold text-2xl xl:text-4xl">
          Остались вопросы?
        </h2>
        <p className="mt-1 xl:mt-3 xl:w-[450px]">
          Давайте обсудим! Оставьте заявку на бесплатную консультацию и мы
          свяжемся с вами.
        </p>
        <MainForm />
      </div>
    </section>
  );
}
