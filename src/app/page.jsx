'use client'
import Product from '@/components/Product'
import { useEffect, useState } from 'react'

export default function Home() {
  const [productsInfo, setProductsInfo] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProductsInfo(data))
  }, [])

  const categories = [
    ...new Set(productsInfo.map((product) => product.category)),
  ]

  let products
  if (searchTerm) {
    products = productsInfo.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  } else products = productsInfo

  return (
    <div className='p-5'>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type='text'
        placeholder='Search for products...'
        className='bg-gray-200 w-full py-2 px-4 rounded-xl text-gray-800'
      />

      {categories.map((category) => (
        <div key={category} className='mt-10'>
          {products.find((product) => product.category === category) && (
            <div>
              <h2 className='text-2xl capitalize block'>{category}</h2>
              <div className='flex flex-wrap gap-4'>
                {products
                  .filter((product) => product.category === category)
                  .map((product) => {
                    return (
                      <div key={product.id}>
                        <Product {...product} />
                      </div>
                    )
                  })}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
