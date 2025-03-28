"use client"

import { useUser } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Wishlist = () => {
    const { currentUser } = useUser()
    const router = useRouter()
    useEffect(()=>{
      if(!currentUser){
        router.push("/login")
      }
    }, [])
  return (
    <div>WishList</div>
  )
}

export default Wishlist