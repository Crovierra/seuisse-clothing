"use client"

import { Label } from './ui/label'
import { Input } from './ui/input'
import { useCheckout } from '@/hooks/useCheckout'
import { useEffect, useState } from 'react'


const Cart = ({imgSrc, imgAlt, title, price, remove, itemId, userItem}) => {
  const [qty, setQty] = useState(1)
  const {updateQuantity} = useCheckout()
  const [isMount, setIsMount] = useState(false)

  useEffect(() => {
    const item = userItem?.item?.find(i => i.id === itemId);
    if (item) {
      setQty(item.quantity);
    }
  }, [userItem, itemId]);

  const onQuantityChange = (e) =>{
    const {value} = e.target 
    setQty(Number(value))
  }

  useEffect(()=>{
      if(isMount){
        updateQuantity(itemId,qty)
      } else {
        setIsMount(true)
      }
  },[qty])
  
  return (
    <div className='flex flex-row w-full h-[250px] items-center gap-5'>
        {title ? (
            <img src={imgSrc} alt={imgAlt} className='w-[250px] h-[250px]'/>
        ) : (
        <div className='bg-black rounded-2xl w-[200px] h-[200px]'>
        </div>
        )}
        <div className='flex flex-col justify-center gap-2 w-full'>
            <div>
            <p className='text-2xl fond-semibold'>{title || "Product Name"}</p>
            <p className='text-lg font-semibold'>{"$ " + price || "$ 120"}</p>
            </div>
            <div className='flex flex-col gap-1'>
                <Label htmlFor="quantity">Quantity</Label>
                <Input type="number" placeholder="1" min="1" id="quantity" className="w-[80px]" onChange={onQuantityChange} value={qty}/>
            </div>
            <button className='btn flex justify-center items-center bg-black text-white w-[80px] h-[24px] self-end cursor-pointer' onClick={remove}>Remove</button>
        </div>
    </div>
  )
}

export default Cart