"use client"

import Cart from "@/components/Cart"
import { useUser } from "@/contexts/AuthContext"
import { useCheckout } from "@/hooks/useCheckout"
import useProducts from "@/hooks/useProducts"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


const page = () =>{
    const {currentUser} = useUser();
    const [isReady, setReady] = useState(false)
    const {getCheckoutItem, userItem, removeCheckoutItem, handleQuantity, updateCheckout} = useCheckout();
    const {getProducts, products} = useProducts();
    const [total, setTotal] = useState({cost: 0, itemAmount:0})
    const [ filterProduct, setFilter ] = useState([])
    const [ filterQuantity, setFilterQuantity] = useState([])   
    const summary = 
        [{label: "Item Amount", value: total.itemAmount},
        {label: "Tax", value: "TBD"},
        {label: "Total Cost", value: "$ " + total.cost }]
    const router = useRouter()

    useEffect(()=>{
        if(!isReady) return;
        const filterId = userItem?.item?.map(i => i.id)
        const filterQuantity = userItem?.item?.map(i => i.quantity)
        setFilterQuantity(filterQuantity)
        const filterProduct = products.filter(item => 
            filterId?.includes(item.id)
        )
        const sum = filterProduct.reduce((acc, item) => {
            const matchingItem = userItem?.item.find(i => i.id === item.id);
            const quantity = matchingItem?.quantity || 1;
            return acc + (item.price * quantity);
        }, 0)
        const itemAmount = userItem.item.reduce((acc, item) => acc + item.quantity, 0)
        setTotal({cost: sum, itemAmount: itemAmount})

        setFilter(filterProduct) 
    },[products, userItem])

    useEffect(() =>{
        const fetchAll = async () =>{
            await getProducts()
            await getCheckoutItem();
            setReady(true)
        }
        if(currentUser) {
            fetchAll();
        } else {
            router.push("/")
        }
    },[currentUser])

    

    return (
    <div className="flex flex-row w-full h-screen gap-4 p-[2%]">
        {filterProduct.length > 0 ? (
        <>
        <main className='grid grid-rows-3 p-[1%] w-[80%] h-[100%]'>
            {(filterProduct.map((item, index) => {
                return (
                    <Cart key={item.id} title={item.title} price={item.price} imgSrc={item.images[0]} imgAlt={item.title} remove={() => removeCheckoutItem(item.id)} itemId={item.id} userItem={userItem}/>       
                )
            }))}
        </main>
        <aside className="flex flex-col w-[20%] h-[40%] justify-between px-[2%] py-[3%] rounded-2xl outline-1 shadow-md">
            <p className="font-semibold text-2xl">Order Summary</p>
            <div className="flex flex-col gap-2">
            {summary.map((item, index) => {
                return (
                    <div className="flex justify-between" key={index}>
                    <p className={index === 2 ? "text-lg font-semibold" : null}>{item.label}</p>
                    <p className={index === 2 ? "text-lg font-semibold" : null}>{item.value}</p>
                    </div>
                )
            })}
            </div>
            <button className="btn"><a href="/" className="text-white bg-black px-4 py-2">Checkout</a></button>
        </aside>
    </>
        ) : (
        <div className="flex flex-col justify-center w-full pb-[5%]">
            <p className="text-center">There is <span className="font-semibold">no product</span> in the cart. Do you want to check out the product that we have ? </p>
            <p className="text-center">Find what you need in <a href="/explore" className="text-blue-500">here</a></p>
        </div>
        )}
    </div>
    )
}

export default page
