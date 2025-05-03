"use client"

import { useUser } from "@/contexts/AuthContext"
import { motion } from "framer-motion"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { MdOutlineDiscount } from "react-icons/md";
import { MdOutlineFiberNew } from "react-icons/md";
import { TbBrandSketch } from "react-icons/tb";

const Sidebar = () => {
    const {isOpen, handleSidebar, currentUser, logout, closeSidebar} = useUser()
    const [isClient, setClient] = useState(false)
    const router = useRouter()

    useEffect(()=>{
        if(!currentUser){
            router.push("/")
        }
    })

    useEffect(()=> {
        setClient(true)
    }, [])

    if(!isClient) return null
    
  return (
    <motion.div 
    initial={{ x: "100%" }}
    animate={{ x: isOpen ? "0%" : "100%" }}
    transition={{ type: "tween", duration: 0.3 }}
    className="fixed top-0 right-0 h-full z-1 bg-gray-100 min-sm:hidden">
    <div className="px-[10%] pt-[25%] w-[200px]">
        <button className="mb-[40px] font-bold cursor-pointer" onClick={handleSidebar}><FaArrowRight /></button>
      <ul className="flex flex-col gap-5 items-start">   
        <li>            
            <a className="flex flex-row text-xl gap-4 items-center hover:opacity-70" href={"/explore"} onClick={closeSidebar}><GiClothes /> Shop</a>
        </li>
        <li>            
            <a className="flex flex-row text-xl gap-4 items-center hover:opacity-70" href={"/"} onClick={closeSidebar}><MdOutlineDiscount /> On Sale</a>
        </li>
        <li>            
            <a className="flex flex-row text-xl gap-4 items-center hover:opacity-70" href={"/new-arrivals"} onClick={closeSidebar}><MdOutlineFiberNew /> New Arrivals</a>
        </li>
        <li>            
            <a className="flex flex-row text-xl gap-4 items-center hover:opacity-70" href={"/brands"} onClick={closeSidebar}><TbBrandSketch /> Brands</a>
        </li>
      </ul>
    <ul className="flex flex-col gap-4 fixed bottom-30 right-5 items-end">
        {currentUser ? (
            <li>
            <button className="btn bg-black rounded-full text-white cursor-pointer py-1 px-6 shadow-sm hover:opacity-80" onClick={() => {logout(); closeSidebar()}}>
                Logout</button>
            </li>
        ) : (
            <>
            <li>
            <button className="btn bg-black rounded-full text-white cursor-pointer py-1 px-6 shadow-sm hover:opacity-80" onClick={closeSidebar}>
                <Link href="/login">Login</Link></button>
            </li>
            <li>
            <button className="btn bg-black rounded-full text-white cursor-pointer py-1 px-6 shadow-sm hover:opacity-80" onClick={closeSidebar}>
                <Link href="/register">Register</Link></button>
            </li>
            </>
        )}
    </ul>
    </div>
    </motion.div>
  )
}

export default Sidebar
