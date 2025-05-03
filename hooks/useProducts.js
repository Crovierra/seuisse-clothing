import {useState} from "react"
import usePagination from "./usePagination"
import { useUser } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"



export default function useProducts(){
    const router = useRouter()
    const {currentUser} = useUser()
    const { currentPage, limitItem} = usePagination()
    const [products, setProducts] = useState([])
    const [offset, setOffset] = useState(0)
    const [ sortedProduct, setSortProduct] = useState([])
    const [categoryId, setCategoryId] = useState(0)
    const [productById, setProductById] = useState({})
    

    async function sortProducts(){
        let sortedProduct = products.sort(function(a,b){return a.date.getTime() - b.date.getTime()})
        setSortProduct(sortedProduct)
    }

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
            const stringData = JSON.stringify(data)
            sessionStorage.setItem("products", stringData)
            setProducts(data)
            
            const pages = Math.ceil(data.length / limitItem)
            sessionStorage.setItem("totalPages", pages)
        }catch(err){
            console.log("Error fetching products :", err)
        }
    }

    async function deleteProduct(id){
        try {
            if(currentUser.role === "admin"){
                const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`,{
                    method:"DELETE"
                })

                if(response.ok){
                    console.log("Success")
                } else {
                    alert("Failed to delete an item")
                }
                router.push("/explore")
            } else {
                console.log("Method not allowed")
                router.push("/")
            }
        } catch (error) {
            console.log("Failed to delete an item")
        }
    }

    async function getProductById(id){
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`,{
                method:"GET"
            })

            let data = await response.json()
            if(response.ok){
                setProductById(data)
            } else {
                throw new Error(data.message || "Failed to fetch")
            }

            
        } catch (error) {
            console.log("Error :", error.message)
        }
    }

    return {getProducts, products, setOffset, setCategoryId, categoryId, deleteProduct, currentUser, getProductById, productById, sortProducts, sortedProduct}
}