import { useState } from "react";
import useLoading from "./useLoading";
import { useRouter } from "next/navigation";


export default function useRegister(){
    const [newUser, setNewUser]=useState({
        name:"",
    })    
    
    function handleRegister(e){
        const {name, value} = e.target
        setNewUser(prevValue =>{
            return {...prevValue, [name]:value}
        })
    }

    const [regisErrorMessage, setErrorMessage] = useState(null)
    const {setLoading} = useLoading();
    const router = useRouter()
    async function submitRegister(e){
        e.preventDefault()
        try {
            setLoading(true)
            const response = await fetch("/api/user/register",{
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(newUser)
            })
            
            const data = await response.json()

            if(!response.ok){
                throw new Error(data.message)
            }

            if(response.ok){
                alert("Success")
                router.push("/login")
            }
        } catch (error) {
            setErrorMessage(error.message)
        } finally {
            setLoading(false)
        }
    }

    return {submitRegister, regisErrorMessage, handleRegister}
}   