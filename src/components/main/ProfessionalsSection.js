"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useState } from "react";
import Image from "next/image";
import { experts } from "@/data/Experts";
import Pagination from "./Pagination";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function ProfessionalsSection() {
  const slideRef = useRef(null);
  const [width] = useWindowDimensions();
  const [currentPage, setPage] = useState(1);
  slideRef.current?.go(currentPage - 1);

  let chunks = 4;
  let pages = 4;

  if (width >= 768) {
    chunks = 6;
    pages = 3;
  }

  let expertChunks = experts.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunks);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  if (width >= 1024) {
    expertChunks = [experts];
  }

  return (
    <section className="px-4 pt-16 sm:container sm:mx-auto xl:px-0 xl:pt-[100px]">
      <h2 className="font-darco font-bold text-2xl lg:text-3xl xl:text-4xl">
        Доверьте работу профессионалам!
      </h2>
      <p className="mt-2 mb-4 lg:text-lg xl:text-base xl:w-[500px] xl:mt-5 xl:mb-9">
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
              <div className="grid grid-cols-[156px,156px] md:grid-cols-[156px,156px,156px] lg:flex justify-between lg:justify-center lg:gap-x-12 xl:gap-x-8 flex-wrap gap-y-9">
                {chunk.map((expert, i) => (
                  <div key={i} className="lg:w-[156px] xl:w-[224px]">
                    <Image
                      src={expert.image}
                      alt=""
                      className="w-[156px] h-[156px] xl:w-[224px] xl:h-[224px]"
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

        {width < 1024 && (
          <Pagination
            setPage={setPage}
            currentPage={currentPage}
            pagesNum={pages}
          />
        )}
      </Splide>
    </section>
  );
}
