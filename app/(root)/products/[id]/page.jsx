"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCheckout } from "@/hooks/useCheckout"
import useProducts from "@/hooks/useProducts"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"


const page = () => {
    const {getProductById, productById} = useProducts();
    const {handleQuantity, handleCheckout, status} = useCheckout();
    const [activeImage, getActiveImage] = useState(0);
    const [isClient, setClient] = useState(false)
    const params = useParams();
    const id = params.id

    async function handleActive(id){
        getActiveImage(id)
    }

    useEffect(() => {
        if(status.success){
            toast.success(status.success, {
                duration: 1000
            })
        }

        if(status.error){
            toast.error(status.error, {
                duration: 1000
            })
        }
    }, [status])

    useEffect(() =>{
        getProductById(id);
        setClient(true)
    }, [])

    if(!isClient){
        return null
    }

  return (
    <div className="flex flex-col w-full h-screen p-[2%] gap-2">
      <p className="font-semibold"><a href="/explore">Home</a><span className="font-normal text-gray-500"> / {productById.title}</span></p>
      <div className="flex flex-row">
        <div className="w-[20%] flex flex-col justify-center items-center py-[2%] gap-4">
            {productById?.images?.map((item, index)=>{
                return (
                    <img key={index} className="bg-black w-[60px] h-[60px] cursor-pointer hover:scale-[1.1] rounded-2xl shadow-md" src={item} alt={`Product Image ${index}`}
                    onClick={() => handleActive(index)}/>
                )
            })
            }   
        </div>
        <div className="w-[40%] px-[2%]">
            <img className="w-[650px] h-[800px] rounded-2xl object-contain" src={productById?.images?.[activeImage]}/>
        </div>
        <div className="w-[40%] p-[2%] flex flex-col gap-4 items-right justify-center">
            <div className="flex flex-col">
            <h3 className="text-5xl font-semibold">{productById.title || "Product Name"}</h3>
            <p className="text-4xl font-semibold">{`$ ` + productById.price || "$ 120"}</p>
            </div>
            <p>{productById.description || "Description"}</p>
            <div className="flex flex-col gap-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input type="number" id="quantity" placeholder="1" min="1" className="w-[120px]" onChange={handleQuantity}/>
            </div>
            <div className="flex flex-row mt-[10%]">
            <button className="btn w-[120px] cursor-pointer"><a className="bg-green-400 text-white px-4 py-2" onClick={handleCheckout}>Add To Cart</a></button>
            <button className="btn w-[100px] cursor-pointer"><a className="bg-black text-white px-4 py-2">Buy Now</a></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
