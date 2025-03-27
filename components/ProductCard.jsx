const ProductCard = () => {
  return (
    <div className='flex flex-col shadow-lg w-[400px] h-[500px] rounded-2xl p-4 justify-center items-start hover:shadow-2xl'>
        <div className="bg-amber-200 w-[360px] h-[400px] rounded-2xl"></div>
        <div className="flex flex-col gap-1 mt-[5%] ml-[10%]">    
        <h3 className="text-xl font-semibold">Product Name</h3>
        <p>Rating Icon</p>
        <p>Price $ 120</p>
        </div>
    </div>
  )
}

export default ProductCard