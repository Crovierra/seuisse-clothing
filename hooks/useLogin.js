import {useUser} from "@/contexts/AuthContext"
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function useLogin(){
    const [loginErrorMessage, setErrorMessage] = useState(null)
    const [loginLoading, setLoginLoading] = useState(false)
    const { login } = useUser();
    
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
            setLoginLoading(true)
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
                login({name: data.name, role:data.role})
                router.push("/")
            }
        } catch(error) {
            setErrorMessage(error.message)
        } finally {
            setLoginLoading(false)
        }
    }

    return {submitLogin, emailRef, passwordRef, loginErrorMessage, loginLoading}
}