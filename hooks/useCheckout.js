import { useUser } from "@/contexts/AuthContext"
import { useParams } from "next/navigation"
import { useState } from "react"

export const useCheckout = () =>{
    const params = useParams()
    const id = params.id
    

    const {currentUser} = useUser()
    const [quantity, setQuantity] = useState(1)
    const [status, setStatus] = useState({success: "", error: ""})
    const [userItem, setUserItem] = useState([])
    
    async function handleQuantity(e){
        const {value} = e.target
        setQuantity(prevValue => {
            return value
        })
    }

    async function updateCheckout(e){
        const { name, value } = e.target
        setUserItem(prevValue => {
            return {...prevValue, [name]: value}
        })
    }

    const updateQuantity = async (itemId, itemQuantity) => {
        if(currentUser){
            try {
                const item = {id: itemId, quantity: itemQuantity}
                const token = sessionStorage.getItem("token")
                const response = await fetch(`/api/products/checkout`, {
                    method: "PATCH",
                    headers: {
                        "content-type" : "application/json",
                        "Authorization" : `Bearer ${token}`
                    },
                    body: JSON.stringify(item)
                })
                const data = await response.json()
                
                if(!response.ok){
                    throw new Error(data.message)
                }
                
                setUserItem(data)
                
            } catch (error) {
                console.log("Failed to change quantity")
            } finally {
                setQuantity(1)
            }
        }
    }

    async function handleCheckout(){
        if(currentUser){
            try {
                const token = sessionStorage.getItem("token")
                const checkoutItem = {id: id, quantity: quantity}
                const response = await fetch(`/api/products/${id}`, {
                    method: "POST",
                    headers: {
                        "content-type" : "application/json",
                        "Authorization" : `Bearer ${token}`
                    },
                    body: JSON.stringify(checkoutItem)
                })
                const data = await response.json()
                
                if(response.ok){
                    setStatus({success: "Item added to cart", error: ""})
                } else {
                    throw new Error(data.message)
                }
            } catch (err) {
                setStatus({success: "", error: err.message || "Something went wrong"})
            } 
        } else {
            return null
        }
    }

    async function getCheckoutItem(){
        try {
            const token = sessionStorage.getItem("token")
            const response = await fetch("/api/products/checkout", {
                method:"GET",
                headers: {
                    "content-type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                }
            })

            const data = await response.json()
            
            if(!response.ok){
                throw new Error(data.message)
            }
            
            setUserItem(data)

        } catch (error) {
            console.log(error.message)
        }
    }

    async function removeCheckoutItem(id){
        try {
            const token = sessionStorage.getItem("token")
            const response = await fetch(`/api/products/checkout`,{
                method: "DELETE",
                headers: {
                    "content-type" :"application/json",
                    "Authorization" : `Bearer ${token}`
                },
                body: JSON.stringify(id)
            })
            if(!response.ok){
                console.log("Failed to delete item from cart")
            }
            const data = await response.json()
            
            setUserItem(data)
        } catch (error) {
            console.log("Error :", error)
        }
    }

    return {handleCheckout, handleQuantity, status, getCheckoutItem, userItem, removeCheckoutItem,  updateQuantity, updateCheckout, quantity}
}
