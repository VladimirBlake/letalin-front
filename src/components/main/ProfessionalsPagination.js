import Image from "next/image";
import Arrow from "@/images/arrow.svg";

export default function ProfessionalsPagination({
  splideRef,
  pagesNum,
  currentPage,
  setPage,
}) {
  const pages = [];
  for (let i = 0; i < pagesNum; i++) {
    pages.push(i + 1);
  }
  return (
    <div className="flex w-full justify-center items-center mt-4">
      <div
        onClick={() => {
          if (currentPage !== 1) {
            setPage(currentPage - 1);
          }
        }}
        className="rounded-full border-[#EAEAEA] border-[1px] flex justify-center items-center w-7 h-7 mr-2"
      >
        <Image src={Arrow} alt="" />
      </div>
      {pages.map((pageNum) => (
        <div
          className={
            "w-6 text-center" +
            (pageNum === currentPage ? " font-bold text-green" : "")
          }
          onClick={() => setPage(pageNum)}
          key={pageNum}
        >
          {pageNum}
        </div>
      ))}
      <div
        onClick={() => {
          if (currentPage !== 4) {
            setPage(currentPage + 1);
          }
        }}
        className="rounded-full border-[#EAEAEA] border-[1px] flex justify-center items-center w-7 h-7 ml-2"
      >
        <Image src={Arrow} alt="" className="rotate-180" />
      </div>
    </div>
  );
}
