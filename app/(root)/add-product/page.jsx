"use client"

import React from 'react'

const page = () => {
    async function addNew(){
        try {
            const response = await fetch("https://api.escuelajs.co/api/v1/products/",
                {method: "POST",
                headers: {
                    "Content-Type" : "application/JSON"
                },
                body: JSON.stringify({
                    title: "rstarded",
                    price: 696969,
                    description: "Test dsadasdasd",
                    categoryId: 1,
                    images: ["https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
                })
                }
            )

            alert("Success add")
        } catch (error) {
            console.log("Error :", error)
        }
    }
  return (
    <div>
      <button className='btn bg-black text-white w-[80px] h-[20px] cursor-pointer' onClick={addNew}>Add</button>
    </div>
  )
}

export default page
