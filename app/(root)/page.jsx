import Marquee from 'react-fast-marquee'
import ProductCard from '@/components/ProductCard'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>
    <section name="hero" className='bg-[url(/images/efmodel-bg.jpg)] bg-cover bg-center'>
        <div className='flex flex-col justify-start items-start  w-[28%] gap-10 ml-[10%] py-[5%]'>
            <h1 className='text-7xl font-extrabold text-white'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className='opacity-75 text-lg text-white'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style</p>
            <button className='btn bg-black px-6 py-2 rounded-full text-white cursor-pointer w-[200px] h-[45px] shadow-md my-4 hover:opacity-80'>Shop Now</button>
            <div className='flex flex-row justify-evenly w-full'>
                <div>
                <p className='text-5xl font-semibold text-white'>200+</p>
                <p className='opacity-60 text-lg text-white'>International Brands</p>
                </div>
                <div>
                <p className='text-5xl font-semibold text-white'>2,000+</p>
                <p className='opacity-60 text-lg text-white'>International Brands</p>
                </div>
                <div>
                <p className='text-5xl font-semibold text-white'>30,000+</p>
                <p className='opacity-60 text-lg text-white'>International Brands</p>
                </div>
            </div>
        </div>
    </section>
    <section name="brand">
        <div className='flex flex-row bg-black w-full h-[150px] text-white justify-evenly items-center mb-[3%]'>
        <Marquee speed={50} className="w-full">
              <Image src="/images/versace-white.png"
              width={280}
              height={40}
              alt="Versace logo"
              className='opacity-60 hover:opacity-100 mx-7'/>
              <Image src="/images/zara-white.png"
              width={110}
              height={40}
              alt="Zara logo"
              className='opacity-60 hover:opacity-100 mx-7'/>
              <Image src="/images/gucci-white.png"
              width={300}
              height={40}
              alt="Gucci logo"
              className='opacity-60 hover:opacity-100 mx-7'/>
              <Image src="/images/prada-white.png"
              width={300}
              height={40}
              alt="Prada logo"
              className='opacity-60 hover:opacity-100 mx-7'/>
              <Image src="/images/calvinklein-white.png"
              width={300}
              height={40}
              alt="Calvin Klein logo"
              className='opacity-60 hover:opacity-100 mx-7'/>
            </Marquee>
        </div>
    </section>
    <section name="new-arrival">
      <h3 className='text-center text-6xl font-bold mt-[5%]'>NEW ARRIVALS</h3>
      <div className='px-[10%] gap-8 grid grid-cols-4 mt-[2%] max-sm:grid-cols-1'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
    </>
  )
}

export default Home