"use client"

import { useUser } from "@/contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
    const { currentUser, logout } = useUser();
    const [isClient, setClient] = useState(null)

    useEffect(() =>{
        setClient(true)
    },[])

    if(!isClient) return null;
    
    //Add framer motion to logout

  return (
    <nav className='flex flex-row justify-between items-center w-full px-[10%] h-[100px] shadow-md'>
        <h1 className="text-4xl font-bold"><a href="/">SUISSE</a></h1>
        <ul className='flex flex-row justify-evenly w-[20%] max-sm:hidden'>
            <li><a href="/explore" className="hover:opacity-75">Shop</a></li>
            <li><a href="/" className="hover:opacity-75">On Sale</a></li>
            <li><a href="/" className="hover:opacity-75">New Arrivals</a></li>
            <li><a href="/" className="hover:opacity-75">Brands</a></li>
        </ul>
        <input type="text" className="w-[600px] h-[40px] rounded-full bg-gray-100 active:outline-1 px-5 max-sm:hidden"/>
        <ul className='flex flex-row justify-center items-center gap-3 max-sm:gap-1'>
            <li><HiOutlineShoppingBag className="text-4xl cursor-pointer hover:opacity-70"/></li>
            {currentUser ? (
            <li>
                <Image src="/images/blank-profile.png" 
                width={35}
                height={35}
                alt="Profile Icon"
                className="rounded-full cursor-pointer"
                onClick={logout}/>
            </li>
            ) : (
            <>
            <li>
            <button className="btn bg-black rounded-full text-white cursor-pointer py-1 px-6 shadow-sm hover:opacity-80 max-sm:hidden">
                <Link href="/login">Login</Link></button>
            </li>
            <li>
            <button className="btn bg-black rounded-full text-white cursor-pointer py-1 px-6 shadow-sm hover:opacity-80 max-sm:hidden">
                <Link href="/register">Register</Link></button>
            </li>
            <li>
            <button className="btn rounded-full cursor-pointer min-sm:hidden text-4xl font-medium">☰</button>
            </li>
            </>
            )}
        </ul>
    </nav>
  )
}

export default Navbar