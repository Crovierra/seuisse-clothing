import {useEffect, useState} from "react"
import useProducts from "./useProducts"

export default function usePagination(){
    const [currentPage, setCurrentPage] = useState(1)
    const [limitItem, setLimitItem] = useState(8)
    const [totalPage, setTotalPage] = useState(1)

    const firstIndex = limitItem * (currentPage - 1);
    const maxItem = limitItem * totalPage
    const lastIndex = Math.min(limitItem * currentPage, maxItem);

    useEffect(()=>{
        const pages = Number(sessionStorage.getItem("totalPages"))
        setTotalPage(pages || 1)
    }, [])

    const nextPage = () =>{
        setCurrentPage(prev => {
            const newPage = Math.min(prev + 1, totalPage)
            return newPage
        })
    }

    const prevPage = () =>{
        setCurrentPage(prev => Math.max(prev - 1, 1))
    }

    const pageNumber = (number) =>{
        setCurrentPage(prev => {
            return number
        })
    }

    return {currentPage, nextPage, prevPage, limitItem, setLimitItem, firstIndex, lastIndex, setTotalPage, totalPage, setCurrentPage, pageNumber}
}