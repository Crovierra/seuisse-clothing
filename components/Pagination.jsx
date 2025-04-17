"use client"
import { useEffect } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const Pagination = ({buttonClass, prevPage, nextPage, currentPage, totalPage, pageNumber}) => {
    const count = Array.from({length:totalPage}, (_, i)=> i+1)
  return (
    <ul className="flex flex-row mt-[1%] justify-center relative bottom-0 gap-4 items-center">
        <li><GrFormPrevious className="text-2xl cursor-pointer" onClick={prevPage}/></li>
        {count.map(number => {
            return <li className="text-lg" key={number}><button onClick={() => pageNumber(number)} className={buttonClass}><span className={currentPage === number ? "rounded-full shadow-md p-2" : null}>{number}</span></button></li>
        })}
        <li><GrFormNext className="text-2xl cursor-pointer" onClick={nextPage}/></li>
    </ul>
  )
}

export default Pagination