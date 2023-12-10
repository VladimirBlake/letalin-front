"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function OurProjectsSection() {
  return (
    <section className="pt-16 xl:pt-20">
      <h2 className="text-center font-darco text-2xl mb-5 font-bold xl:text-4xl xl:mb-12">
        Наши проекты
      </h2>
      <div className="w-full h-[250px] md:container md:mx-auto md:h-[400px] xl:w-[880px] xl:h-[560px] mx-auto">
        <Carousel slideInterval={4000}>
          {projects.map((num) => (
            <div
              className={`w-full h-[250px] md:h-[400px] xl:h-[560px] bg-cover`}
              style={{ backgroundImage: `url('/projects/project${num}.png')` }}
              key={num}
            ></div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
