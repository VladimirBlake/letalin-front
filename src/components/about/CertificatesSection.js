"use client";
import { certificates } from "@/data/Certificates";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { useRef, useState } from "react";
import Pagination from "../main/Pagination";

const certificatesChunks = [
  [certificates[0], certificates[1]],
  [certificates[2], certificates[3]],
  [certificates[4]],
];

export default function CertificatesSection() {
  const [currentPage, setPage] = useState(1);
  const slideRef = useRef(null);
  slideRef.current?.go(currentPage - 1);
  let pages = 3;

  return (
    <section className="px-4 xl:px-0 pt-16 mb-6">
      <h2 className="font-darco font-bold text-2xl mb-5">
        Наши лицензии<br></br> и допуски
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
                    className="w-[156px] h-auto"
                    key={j}
                    src={image}
                    alt=""
                  />
                ))}
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
        <Pagination
          setPage={setPage}
          currentPage={currentPage}
          pagesNum={pages}
        />
      </Splide>
    </section>
  );
}
