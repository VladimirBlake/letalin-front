"use client";
import MainForm from "./MainForm";

export default function FormSection() {
  return (
    <section className="px-4 flex flex-col pt-16">
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
