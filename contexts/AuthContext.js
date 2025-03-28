"use client"

import {createContext, useContext, useState} from "react"

const UserContext = createContext()

export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(() =>{
        if(typeof window !== 'undefined'){
            const name = sessionStorage.getItem("name")
            const token = sessionStorage.getItem("token")

            return name && token ? name : null
        }
        return null
    })

    const login = (userData) =>{
        setCurrentUser(userData)
        sessionStorage.setItem("name", userData)
    }

    const logout = () =>{
        setCurrentUser(null)
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("name")
    }

    return (
        <UserContext value={{login, logout, currentUser}}>
            {children}
        </UserContext>
    )

}

export const useUser = () => useContext(UserContext)