'use client'
import Pagination from '@/components/Pagination'
import ProductCard from '@/components/ProductCard'
import usePagination from '@/hooks/usePagination'
import useProducts from '@/hooks/useProducts'
import { useEffect } from 'react'

const explore = () => {
  const { getProducts, products, setCategoryId, categoryId} = useProducts();
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
    <>
      <p>Explore</p>
      <div className='flex flex-row w-full h-screen gap-4 px-[2%]'>
      <aside className='flex flex-col w-[20%] bg-white rounded-2xl outline-1 p-[2%] shadow-md'>
          <p className='font-semibold text-xl mb-4'>Filters</p>
          <hr></hr>
          <ul className='flex flex-col gap-4 mt-4 text-lg'>
            <li><button className='cursor-pointer text-gray-500' onClick={() => setCategoryId(1)}>Clothes</button></li>
            <li><button className='cursor-pointer text-gray-500' onClick={() => setCategoryId(4)}>Shoes</button></li>
            <li><button className='cursor-pointer text-gray-500' onClick={() => setCategoryId(5)}>Others</button></li>
          </ul>
      </aside>
      <main className='flex flex-col outline-1 p-[1%] rounded-2xl w-[80%]'>
            <div className='flex flex-row justify-between mb-2'>
              <p className='font-semibold text-2xl'>Clothes</p>
              <div className='flex flex-row gap-5'>
              <p className='text-gray-400'>Showing 1-8 of 50 Products</p>
              <p>Sort by : <span className='font-semibold cursor-pointer'>Most Popular</span></p> {/* Change later with feature*/}
              </div>
            </div>
            <div className='grid grid-cols-4 gap-5'>
              {(products.slice(firstIndex, lastIndex)).map(item => {
                return (
                  <ProductCard key={item.id} title={item.title.length > 50 ? item.title.slice(0,50) + ". . ." : item.title} price={item.price} src={item.images[0]} alt={item.slug}/>
                )
              })}
            </div>
            <Pagination buttonClass="cursor-pointer" prevPage={prevPage} nextPage={nextPage} totalPage={totalPage} currentPage={currentPage} pageNumber={pageNumber}/>
      </main>
      </div>
    </>
  )
}

export default explore