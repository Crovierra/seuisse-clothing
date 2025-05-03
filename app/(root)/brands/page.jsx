import Image from "next/image"

const page = () => {
  const brands = [
    {id:1, src:"/images/versace-white.png", width:280 ,height:40, alt:"Versace logo" },
    {id:2, src:"/images/zara-white.png", width:110 ,height:40, alt:"Zara logo" },
    {id:3, src:"/images/gucci-white.png", width:300 ,height:40, alt:"Gucci logo" },
    {id:4, src:"/images/prada-white.png", width:300 ,height:40, alt:"Prada logo" },
    {id:5, src:"/images/calvinklein-white.png", width:300 ,height:40, alt:"Calvin Klein logo" },
    {id:6, src:"/images/giordano.png", width:240 ,height:30, alt:"Giordano logo" },
    {id:7, src:"/images/quiksilver.png", width:240 ,height:40, alt:"Quiksilver logo" },
    {id:8, src:"/images/ripcurl.png", width:300 ,height:40, alt:"Ripcurl logo" },
    {id:9, src:"/images/saint_james.png", width:240 ,height:40, alt:"Saint james logo" },
    {id:10, src:"/images/Ellesse-logo.png", width:240 ,height:40, alt:"Ellese logo" },
    {id:11, src:"/images/uniqlo-logo.jpg", width:240 ,height:40, alt:"Uniqlo logo" },
  ]
  return (
    <div className='flex flex-col h-full w-full justify-center items-center gap-4 my-[6%]'>
      <p className="text-2xl font-semibold">BRAND THAT COLLABORATE WITH US</p>
      <div className="bg-teal-950 w-[600px] h-[auto] flex flex-col justify-center items-center hover:shadow-lg">
        {(brands.slice(0,5)).map(item => {
          return (
            <Image 
            key={item.id}
            src={item.src}
            width={item.width}
            height={item.height}
            alt={item.alt}
            className='opacity-100 hover:opacity-60'/>
          )
        })}
        <p className="text-white text-center"><i>These are the top 5 brands.</i></p>
        </div>
        <div className="grid grid-cols-2 w-[400px] gap-4 items-center">
        {(brands.slice(5,11)).map(item => {
          return (
            <Image 
            key={item.id}
            src={item.src}
            width={item.width}
            height={item.height}
            alt={item.alt}
            className='opacity-100 hover:opacity-60 bg-white'/>
          )
        })}
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
        <p>We still have more brands coming. Are you interested ?</p>
        <button className="btn bg-black text-white rounded-2xl px-4 py-1 shadow-md"><a href="/explore">Explore Now</a></button>
        </div>
    </div>
  )
}

export default page
