import Image from 'next/image'
import { useContext } from 'react'
import { ProductsContext } from './ProductsContext'

const Product = ({ id, name, price, picture, description }) => {
  const { setSelectedProducts } = useContext(ProductsContext) // @

  // @
  const addProduct = (id) => {
    setSelectedProducts((prev) => [...prev, id])
  }

  return (
    <div key={id} className='w-64'>
      <div className='bg-slate-800 shadow-lg mt-4 rounded-md'>
        <div className='w-64'>
          <div className='relative bg-blue-100 w-full h-52'>
            <Image src={picture} alt={name} fill />
          </div>
          <div className='mt-2'>
            <h3 className='p-2 font-bold text-lg'>{name}</h3>
          </div>
          <p className='mt-1 p-2 text-sm leading-4'>{description}</p>
        </div>
        <div className='flex justify-between items-center px-5 py-3 rounded-xl w-full'>
          <div className='font-bold text-2xl'>${price}</div>

          {/* @ */}
          <button
            onClick={addProduct}
            className='bg-emerald-400 px-3 py-1 rounded-xl text-white'
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
