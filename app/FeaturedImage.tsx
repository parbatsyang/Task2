import React from 'react'
import Image from "next/image"


const FeatureImage = () => {
  return (
    <div className='bg-[#8ed8e3]'>
        <div className='container mx-auto flex justify-center md:h-[800px] max-w-[1240px]'>
            <img src="./shoppingwomen.jpg" alt="featureImage" />
            </div>
            <div className='absolute top-[100px] left-0 ms-2 md:top-[200px] md:left-[250px] '>
              <h1 className=' text-lg font-semibold md:text-6xl md:font-senif '>Let's <br/>Explore <br/> <span className='hover:-translate-y-1 hover:scale-110'>UNIQUE CLOTHES.</span></h1>
            </div>
    </div>
  )
}

export default FeatureImage
