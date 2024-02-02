"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import Blueprint from "@/images/projects/blueprint.png";
import Blueprint2 from "@/images/projects/blueprint2.png";

const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function OurProjectsSection() {
  return (
    <section className="relative pt-16 xl:pt-20">
      <Image
        src={Blueprint}
        alt=""
        className="absolute hidden xl:block -z-10 right-0 top-0"
      />
      <Image
        src={Blueprint2}
        alt=""
        className="absolute hidden xl:block -z-10 left-0 top-12"
      />
      <h2 className="text-center font-darco text-2xl mb-5 font-bold xl:text-4xl xl:mb-12">
        Наши проекты
      </h2>
      <div className="w-full h-[250px] md:container md:mx-auto md:h-[400px] xl:w-[880px] xl:h-[560px] mx-auto">
        <Carousel>
          {projects.map((num) => (
            <div
              className={`w-full h-[250px] md:h-[400px] xl:h-[560px] xl:w-[880px] bg-cover`}
              style={{ backgroundImage: `url('/projects/project${num}.png')` }}
              key={num}
            ></div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
