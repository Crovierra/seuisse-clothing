"use client"

import { useUser } from "@/contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useQuery from "@/hooks/useQuery";


const Navbar = () => {
    const { currentUser, logout, handleSidebar } = useUser();
    const [isClient, setClient] = useState(null)
    const [query, setQuery] = useState("")
    const {filter, queryProduct, handleQuery, debounceQuery} = useQuery()

    useEffect(()=> {
      const timer = setTimeout(()=>{
        handleQuery(query)
      }, 500)

      return () => clearTimeout(timer)
    })

    useEffect(()=>{
      filter()
    },[debounceQuery])
    
    useEffect(() =>{
      setClient(true)
    },[])
    
    if(!isClient) return null;

  return (
    <nav className='flex flex-row justify-between items-center w-full px-[10%] h-[100px] shadow-md max-lg:px-[5%]'>
        <h1 className="text-4xl font-bold"><a href="/">SUISSE</a></h1>
        <ul className='flex flex-row justify-evenly w-[20%] max-md:hidden max-2xl:w-[30%] max-lg:w-[40%] '>
            <li><a href="/explore" className="hover:opacity-75">Shop</a></li>
            <li><a href="/on-sale" className="hover:opacity-75">On Sale</a></li>
            <li><a href="/" className="hover:opacity-75">New Arrivals</a></li>
            <li><a href="/brands" className="hover:opacity-75">Brands</a></li>
        </ul>
        <div className="flex flex-col w-[500px] h-[40px] max-xl:hidden max-2xl:w-[300px] ">
        <input type="text" className="w-[500px] h-[40px] rounded-full bg-gray-100 active:outline-1 px-5 max-sm:hidden max-lg:w-[200px] max-xl:w-[300px] max-2xl:w-[300px] absolute top-8 z-1 max-xl:hidden" onChange={(e) => setQuery(e.target.value)}/>
        {queryProduct.length > 0 ? (
          <div className='flex flex-col w-[600px] bg-white absolute top-14 pt-[35px] pb-[15px] px-[20px] gap-2'>
          {queryProduct.map(item => {
            return (
              <a key={item.id} href={`/products/${item.id}`} className="cursor-pointer">{item.title}</a>
            )
          })}
          </div>
        ) : (
          <>
          </>
        )}        
        </div>
        <ul className='flex flex-row justify-center items-center gap-3 max-sm:gap-4'>
            <li><Link href={currentUser ? "/shopping-cart" : "/login"}><HiOutlineShoppingBag className="text-4xl cursor-pointer hover:opacity-70"/></Link></li>
            {currentUser ? (
            <li>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Image src="/images/blank-profile.png" 
                width={35}
                height={35}
                alt="Profile Icon"
                className="rounded-full cursor-pointer"
                /> 
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>                
                <button onClick={logout} className="w-full">
                <DropdownMenuItem>
                  Log out 
                </DropdownMenuItem>
                </button>
              </DropdownMenuContent>
              </DropdownMenu>
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
            </>
            )}
            <li>
            <button className="btn rounded-full cursor-pointer min-sm:hidden text-3xl font-medium" onClick={handleSidebar}>☰</button>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
      