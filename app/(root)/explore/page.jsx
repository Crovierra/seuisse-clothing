'use client'
import Pagination from '@/components/Pagination'
import ProductCard from '@/components/ProductCard'
import usePagination from '@/hooks/usePagination'
import useProducts from '@/hooks/useProducts'
import { useEffect } from 'react'

const explore = () => {
  const { getProducts, products, setCategoryId, categoryId, deleteProduct, currentUser} = useProducts();
  const {currentPage, setLimitItem, limitItem, firstIndex, lastIndex, nextPage, prevPage, totalPage, setCurrentPage, setTotalPage, pageNumber} = usePagination()



  useEffect(() =>{
    setCurrentPage(1)    
    getProducts();
  },[categoryId])

  useEffect(()=>{
    const pages = Math.ceil(products.length / limitItem)
    setTotalPage(pages)
  })

  return (
    <div className='w-full h-full'>
      <p className='font-semibold text-2xl text-center py-[2%]'>Explore</p>
      <div className='flex flex-row w-full h-full gap-4 px-[2%] max-md:justify-center'>
      <aside className='flex flex-col w-[20%] bg-white rounded-2xl outline-1 p-[2%] shadow-md max-md:hidden'>
          <p className='font-semibold text-xl mb-4'>Filters</p>
          <hr></hr>
          <ul className='flex flex-col gap-4 mt-4 text-lg'>
            <li><button className='cursor-pointer text-gray-500' onClick={() => setCategoryId(1)}>Clothes</button></li>
            <li><button className='cursor-pointer text-gray-500' onClick={() => setCategoryId(4)}>Shoes</button></li>
            <li><button className='cursor-pointer text-gray-500' onClick={() => setCategoryId(5)}>Others</button></li>
          </ul>
      </aside>
      <main className='flex flex-col outline-1 p-[1%] rounded-2xl w-[80%] h-full'>
            <div className='flex flex-row justify-between mb-2 max-sm:p-[2%] max-md:p-[4%]'>
              <p className='font-semibold text-2xl max-md:hidden'>Clothes</p>
              <div className='flex flex-row gap-5'>
              <p className='text-gray-400'>{`Showing 1-${limitItem} of ${products.length} Products`}</p>
              <p className='max-md:hidden'>Sort by : <span className='font-semibold cursor-pointer max-sm:hidden'>Most Popular</span></p> {/* Change later with feature*/}
              </div>
            </div>
            <div className='grid grid-cols-4 gap-5 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 max-sm:p-[5%]'>
              {(products.slice(firstIndex, lastIndex)).map(item => {
                return (
                  <a key={item.id} href={`/products/${item.id}`}>
                    <ProductCard  title={item.title.length > 50 ? item.title.slice(0,50) + " . . ." : item.title} price={item.price} src={item.images[0]} alt={item.slug} handleDelete={() => deleteProduct(item.id)} user={currentUser}/>
                  </a>
                )
              })}
            </div>
            <div className='flex flex-col justify-center relative bottom-0 my-[20px]'>
            <Pagination buttonClass="cursor-pointer" prevPage={prevPage} nextPage={nextPage} totalPage={totalPage} currentPage={currentPage} pageNumber={pageNumber}/>
            </div>
      </main>
      </div>
    </div>
  )
}

export default explore