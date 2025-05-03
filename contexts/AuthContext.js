"use client"

import { useRouter } from "next/navigation"
import {createContext, useContext, useState} from "react"

const UserContext = createContext()

export const UserProvider = ({children}) =>{
    const router = useRouter()
    const [isOpen, setOpen] = useState(false)
    const [currentUser, setCurrentUser] = useState(() =>{
        if(typeof window !== 'undefined'){
            const name = sessionStorage.getItem("name")
            const token = sessionStorage.getItem("token")
            const role = sessionStorage.getItem("role")
            return name && token ? {name, role} : null
        }
        return null
    })

    const login = (userData) =>{
        setCurrentUser(userData)
        sessionStorage.setItem("name", userData.name)
        sessionStorage.setItem("role", userData.role)
    }

    const logout = () =>{
        setCurrentUser(null)
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("name")
        sessionStorage.removeItem("role")
        router.push("/") 
    }

    const handleSidebar = () => {
        setOpen(prev => !prev)
    }

    const closeSidebar = () => {
        setOpen(false)
    }

    return (
        <UserContext value={{login, logout, currentUser, handleSidebar, isOpen, closeSidebar}}>
            {children}
        </UserContext>
    )

}

export const useUser = () => useContext(UserContext)