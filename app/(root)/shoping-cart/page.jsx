"use client"

import { useUser } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const shoppingCart = () => {
    const { currentUser } = useUser()
    const router = useRouter()
    useEffect(()=>{
        if(!currentUser){
            router.push("/login")
        }
    }, [])
  return (
    <div>Shopping Cart</div>
  )
}

export default shoppingCart