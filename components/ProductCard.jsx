import { MdDelete } from "react-icons/md";

const ProductCard = ({title, price, src, alt, handleDelete, user}) => {
  return (
    <div className='flex flex-col shadow-lg w-[100%] h-[420px] pb-2 rounded-2xl items-center hover:shadow-md'>
        <div className="w-[85%] h-[300px] mt-4 mb-2 overflow-hidden rounded-2xl">
        <img src={src} alt={alt} className="object-cover object-center w-[100%] h-[100%]"/>
        </div>
        <div className="flex flex-col w-full px-[4%] flex-1">
          <h3 className="text-lg font-semibold">
            {title || "Product Name"}
          </h3>
          <p className="font-semibold text-xl mt-auto self-end whitespace-nowrap">
            {price ? "$ " + price : "$ 120"}
          </p>
        </div>
        {user?.role === "admin" ? (
          <MdDelete className="text-xl cursor-pointer" onClick={handleDelete}/>
        ):(
          null
        )}
    </div>
  )
}

export default ProductCard