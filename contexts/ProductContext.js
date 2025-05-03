"use client"

import {createContext, useContext, useState} from "react"

const ProductContext = createContext()

export const ProductProvider = ({children}) => {
    const [storedProducts, setStoredProducts] = useState(() => {
        if(typeof window !== "undefined"){
            const data = sessionStorage.getItem("products")
            return data ? data : []
        }
        return []
    })

    return (
        <ProductContext value={{storedProducts}}>
            {children}
        </ProductContext>
    )
}

export const useProduct = () => useContext(ProductContext)