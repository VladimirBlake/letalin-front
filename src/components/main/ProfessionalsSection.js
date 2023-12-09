"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useState } from "react";
import Expert1 from "@/images/experts/expert1.png";
import Image from "next/image";
import { experts } from "@/data/Experts";
import ProfessionalsPagination from "./ProfessionalsPagination";

export default function ProfessionalsSection() {
  const slideRef = useRef(null);
  const [currentPage, setPage] = useState(1);
  slideRef.current?.go(currentPage - 1);
  const expertChunks = experts.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 4);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <section className="px-4 pt-16 sm:container sm:mx-auto">
      <h2 className="font-darco font-bold text-2xl">
        Доверьте работу профессионалам!
      </h2>
      <p className="mt-2 mb-4">
        Наши сотрудники — эксперты строительного дела. Средний стаж — более 9
        лет в строительной сфере и проектировке!
      </p>
      <Splide
        options={{
          arrows: false,
          pagination: false,
          perPage: 1,
        }}
        hasTrack={false}
        ref={slideRef}
        onMove={(splide, index) => setPage(index + 1)}
      >
        <SplideTrack>
          {expertChunks.map((chunk, i) => (
            <SplideSlide key={i}>
              <div className="grid grid-cols-[156px,156px] justify-between flex-wrap gap-y-9">
                {chunk.map((expert, i) => (
                  <div key={i}>
                    <Image
                      src={expert.image}
                      alt=""
                      className="w-[156px] h-[156px]"
                    />
                    <p className="font-darco font-bold text-sm text-center mt-2">
                      {expert.name}
                    </p>
                    <p className="text-center text-sm mt-1">{expert.title}</p>
                  </div>
                ))}
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>

        <ProfessionalsPagination
          setPage={setPage}
          currentPage={currentPage}
          pagesNum={4}
        />
      </Splide>
    </section>
  );
}
