'use client'
import Product from '@/components/Product'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [productsInfo, setProductsInfo] = useState([]) // @

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProductsInfo(data))
  }, []) // @

  // const categories = productsInfo.map((product) => product.category)
  // const categories = new Set(productsInfo.map((product) => product.category)) // @ unique values
  const categories = [
    ...new Set(productsInfo.map((product) => product.category)),
  ] // @ convert back to array

  return (
    <div className='p-5'>
      {/* @ show categories */}
      {categories.map((category) => (
        <div key={category} className='mt-10'>
          <h2 className='text-2xl capitalize block'>{category}</h2>

          <div className='flex flex-wrap gap-4'>
            {/* @ show products */}
            {productsInfo
              .filter((product) => product.category === category) // filter products by category
              .map((product) => {
                return (
                  <div key={product.id}>
                    <Product {...product} />
                  </div>
                )
              })}
          </div>
        </div>
      ))}
    </div>
  )
}
