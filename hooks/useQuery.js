import {useEffect, useState} from "react"

export default function useQuery() {
    const [queryProduct, setQueryProduct] = useState([])
    const [debounceQuery, setDebounceQuery] = useState("")

    
    function filter(){
        const data = sessionStorage.getItem("products")
        if(debounceQuery !== ""){
            const filterData = JSON.parse(data).filter(item => item.title.toLowerCase().includes(debounceQuery.toLowerCase()))
            setQueryProduct(filterData)
        } else {
            setQueryProduct([])
        }
        
    }

    function handleQuery(e){
        setDebounceQuery(e)
    }


    return {queryProduct, filter, handleQuery, debounceQuery}
}