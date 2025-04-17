const ProductCard = ({title, price, src, alt}) => {
  return (
    <div className='flex flex-col shadow-lg w-[400px] h-[500px] rounded-2xl justify-center items-center hover:shadow-md'>
        <img src={src} width={360} height={400} alt={alt} className="rounded-2xl"/>
        <div className="flex flex-col gap-1 w-full px-[5%] mt-[5%]">    
        <h3 className="text-xl font-semibold items-start">{title ? title : "Product Name"}</h3>
        <p className="font-semibold text-xl">{price ? "$ " + price : "$ 120"}</p>
        </div>
    </div>
  )
}

export default ProductCard