"use client";
import Abstract2 from "@/images/form-abstract2.svg";
import Image from "next/image";
import MainForm from "./MainForm";

export default function FormSection() {
  return (
    <section className="px-4 flex pt-16 sm:container sm:mx-auto lg:gap-x-16">
      <Image src={Abstract2} alt="" className="hidden lg:block" />
      <div>
        <h2 className="font-darco font-bold text-2xl">Остались вопросы?</h2>
        <p className="mt-1">
          Давайте обсудим! Оставьте заявку на бесплатную консультацию и мы
          свяжемся с вами.
        </p>
        <MainForm />
      </div>
    </section>
  );
}
