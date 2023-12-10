"use client";
import { certificates } from "@/data/Certificates";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { useRef, useState } from "react";
import Pagination from "../main/Pagination";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function CertificatesSection() {
  const [currentPage, setPage] = useState(1);
  const slideRef = useRef(null);
  slideRef.current?.go(currentPage - 1);

  const { width, height } = useWindowDimensions();

  let chunks = 2;

  if (width >= 640) {
    chunks = 3;
  }
  if (width >= 1024) {
    chunks = 5;
  }

  let certificatesChunks = certificates.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunks);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  let pages = certificatesChunks.length;

  return (
    <section className="px-4 xl:px-0 md:container md:mx-auto pt-16 mb-6 xl:mb-10">
      <h2 className="font-darco font-bold text-2xl mb-5 md:text-3xl xl:text-4xl xl:mb-9">
        Наши <span className="hidden xl:inline-block">сертификаты,</span>{" "}
        лицензии<br className="md:hidden"></br> и допуски
      </h2>
      <Splide
        options={{
          arrows: false,
          pagination: false,
          perPage: 1,
        }}
        ref={slideRef}
        hasTrack={false}
        onMove={(splide, index) => setPage(index + 1)}
      >
        <SplideTrack>
          {certificatesChunks.map((chunk, i) => (
            <SplideSlide key={i}>
              <div className="flex justify-between">
                {chunk.map((image, j) => (
                  <Image
                    className="w-[156px] h-auto xl:w-[224px]"
                    key={j}
                    src={image}
                    alt=""
                  />
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
