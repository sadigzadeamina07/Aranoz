import React from 'react'

function Hero() {
  return (
    <div className="bg-[#ecfdff]">
    <div className='max-w-[1200px] mx-auto  py-5'>
<div className="grid  justify-center  items-center md:h-[80vh]   grid-cols-1 md:grid-cols-2" >
<div className='flex flex-col  gap-5 '>
<h3 className='font-bold text-6xl w-90 md:w-80'>Cloth & 
    Wood  Sofa</h3>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa iste quos inventore labore commodi ex corrupti laborum quasi, dolorem rem! Laudantium modi ad laboriosam ea nam sequi nihil unde tempore.</p>
<button className='w-[150px] capitalize text-white  px-7 py-5 rounded-xl font-semibold text-lg ' style={{background:' linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 115, 199, 1) 50%, rgba(83, 237, 222, 1) 100%)'}}>Buy now</button>
</div>
<img src="/banner_img.png" className='object-cover' alt="" />
</div>
    </div>
    </div>

  )
}

export default Hero