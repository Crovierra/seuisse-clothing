"use client"

import Link from "next/link"
import { CustomInput } from "./ui/CustomInput"
import useLogin from "@/hooks/useLogin"
import useRegister from "@/hooks/useRegister"
import { useEffect } from "react"
import { useUser } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"
import { toast } from "sonner"


const AuthForm = ({title}) => {
  const { submitLogin, emailRef, passwordRef, loginErrorMessage, loginLoading } = useLogin();
  const { submitRegister, regisErrorMessage, handleRegister, regisLoading } = useRegister();
  const {currentUser} = useUser();
  const router = useRouter()

  useEffect(()=>{
      if(currentUser){
        router.push("/")
      }
  },[])
  
  useEffect(()=>{
    if(currentUser){
      toast.success("Logged in successfully", {
      description: 'Welcome back! You’re ready to go.',
      duration: 2000
    })
  }
  }, [currentUser])

  return (
    <div>
      {title === "register" ? (
      <form className="flex flex-col justify-center items-center gap-2 h-screen pb-[8%]" action="POST" onSubmit={submitRegister}>
        <CustomInput
        label="Full Name"
        type="text"
        name="name"
        htmlFor="name"
        id="name"
        placeholder="What is your name ?"
        className="w-[400px]"
        onChange={handleRegister}
        />
        <CustomInput
        label="Address"
        type="text"
        name="address"
        htmlFor="address"
        id="address"
        placeholder="Where do you live ?"
        className="w-[400px]"
        onChange={handleRegister}
        />
        <CustomInput
        label="Phone Number"
        type="tel"
        name="phone"
        htmlFor="phone"
        id="phone"
        placeholder="ex :   62809440133"
        className="w-[400px]"
        onChange={handleRegister}
        />
        <CustomInput
        label="Email"
        type="email"
        name="email"
        htmlFor="email"
        id="email"
        placeholder="ex:   seuisse.customer@mail.com"
        className="w-[400px]"
        onChange={handleRegister}
        />
        <CustomInput
        label="Password"
        type="password"
        name="password"
        htmlFor="password"
        id="password"
        placeholder="Create your password"
        className="w-[400px]"
        onChange={handleRegister}
        />
        <p className="mt-2">Already have an account ? <span className="text-blue-500"><Link href="/login">Login</Link></span> here</p>
        <p className="text-red-500">{regisErrorMessage ? regisErrorMessage : null}</p>
        <button className="btn bg-black px-4 py-1 rounded-full text-white hover:opacity-80 shadow-md cursor-pointer mt-4" disabled={regisLoading}>{regisLoading ? "Loading . . " : "Join Now"}</button>
        </form>
      ) : (
        <form className="flex flex-col justify-center items-center gap-2 h-screen pb-[8%]" action="POST" onSubmit={submitLogin}>
        <CustomInput
        label="Email"
        type="email"
        name="email"
        htmlFor="email"
        id="email"
        placeholder="Enter your email"
        className="w-[400px]"
        ref={emailRef}
        />
        <CustomInput
        label="Password"
        type="password"
        name="password"
        htmlFor="password"
        id="password"
        placeholder="Enter your password"
        className="w-[400px]"
        ref={passwordRef}
        />
        <p className="mt-2">Don't have an account ? <span className="text-blue-500"><Link href="/register">Register</Link></span> here</p>
        <p className="text-red-500">{loginErrorMessage ? loginErrorMessage : null}</p>
        <button className="btn bg-black px-4 py-1 rounded-full text-white hover:opacity-80 shadow-md cursor-pointer mt-4" disabled={loginLoading}>{loginLoading ? "Loading . . " : "Get started"}</button>
        </form>
      )}
    </div>
  )
}

export default AuthForm