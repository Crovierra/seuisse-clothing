import {useState} from "react"
import usePagination from "./usePagination"

export default function useProducts(){
    const { currentPage, limitItem} = usePagination()
    const [products, setProducts] = useState([])
    const [offset, setOffset] = useState(0)
    const [categoryId, setCategoryId] = useState(0)

    async function getProducts(){
        try{
            const itemOffset = currentPage * limitItem
            let response;
            if(categoryId === 0){
                response = await fetch(`https://api.escuelajs.co/api/v1/products`)
            } else {
                response = await fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`)
            }
            const data = await response.json();
            setProducts(data)
            const pages = Math.ceil(data.length / limitItem)
            sessionStorage.setItem("totalPages", pages)
        }catch(err){
            console.log("Error fetching products :", err)
        }
    }

    return {getProducts, products, setOffset, setCategoryId, categoryId}
}