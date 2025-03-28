import useLoading  from "./useLoading";
import {useUser} from "@/contexts/AuthContext"
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function useLogin(){
    const [loginErrorMessage, setErrorMessage] = useState(null)
    const { login } = useUser();
    const {setLoading} = useLoading();
    const router = useRouter();

    const emailRef = useRef();
    const passwordRef = useRef();

    

    async function submitLogin(e){
        e.preventDefault();
        const user = {
            email: emailRef.current?.value || "",
            password: passwordRef.current?.value || ""
        }
        try {
            setLoading(true)
            const response = await fetch("/api/user/login",
                {
                    method: "POST",
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify(user)
                }
            )
            
            const data = await response.json()
            
            if(!response.ok){
                throw new Error(data.message)
            }
            
            if(response.ok){
                sessionStorage.setItem("token",data.accessToken)
                login(data.name)
                alert("Success")
                router.push("/")
            }
        } catch(error) {
            setErrorMessage(error.message)
        } finally {
            setLoading(false)
        }
    }

    return {submitLogin, emailRef, passwordRef, loginErrorMessage}
}