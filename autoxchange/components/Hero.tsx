"use client"

import Image from 'next/image'
import  CustomButton  from './CustomButton'

const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero_title'>
              find, book or rent a car - quick and easily
            </h1>

            <p className='hero__subtitle'>
                Streamline your car rental experience
                with effortless booking process
            </p>

            <CustomButton title="Explore Cars"
                          containerStyles="bg-primary-blue
                          text-white rounded-full mt-10"
                          handleClick={handleScroll}
            />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
            <Image src="/hero.png" alt="Logo Image" fill className= "object-contain"/>

            <div className="hero_image-overlay">
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero