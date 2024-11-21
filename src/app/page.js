import Image from 'next/image'

export default function Home() {
  return (
    <div className='p-5'>
      <div className='w-64'>
        <h2 className='text-2xl'>Mobiles</h2>
        {/* Product */}
        <div className='mt-4 shadow-lg rounded-md bg-slate-800'>
          <div className='w-64'>
            <div className='relative bg-blue-100 w-full h-52'>
              <Image src='/products/iphone.png' alt='Iphone 14 Pro' fill />
            </div>
            <div className='mt-2'>
              <h3 className='font-bold text-lg p-2'>Iphone 14 Pro</h3>
            </div>
            <p className='text-sm mt-1 leading-4 p-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing
            </p>
          </div>
          <div className='flex w-full justify-between items-center px-5 py-3 rounded-xl'>
            <div className='text-2xl font-bold'>$899</div>
            <button className='bg-emerald-400 text-white py-1 px-3 rounded-xl'>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
