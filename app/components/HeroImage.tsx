"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import HeroImage from '@/public/hero_image.webp'

function HeroImageContainer() {
    const [activeImageIndex, setActiveImageIndex] = useState(3);
    const images = [HeroImage, '/event2.svg', HeroImage, HeroImage];
    
    // UNCOMMENT THIS TO ENABLE AUTO-SLIDE WITH AN INTERVAL OF 4 SECONDS   

    useEffect(() => {
    //     const interval = setInterval(() => {
    //         setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    //     }, 4000);

    //     return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className='w-full h-100 px-10 pt-10 flex justify-center items-center'>
            <div className='grid grid-cols-6 w-full h-90 gap-3 max-w-340'>
                <div className='relative flex justify-center items-center col-span-4 h-full w-full'>
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`Hero Image ${index + 1}`}
                            fill
                            className={`rounded-3xl object-cover transition-all duration-500 ease-in-out ${activeImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))}
                    <div className='absolute bottom-4 flex justify-center items-center gap-2 px-3 py-2'>
                        <button onClick={() => setActiveImageIndex(0)} className={`rounded-full size-[7px] cursor-pointer ${activeImageIndex === 0 ? 'bg-tertiary-light-gray' : 'bg-tertiary-light-gray/30'}`}></button>
                        <button onClick={() => setActiveImageIndex(1)} className={`rounded-full size-[7px] cursor-pointer ${activeImageIndex === 1 ? 'bg-tertiary-light-gray' : 'bg-tertiary-light-gray/30'}`}></button>
                        <button onClick={() => setActiveImageIndex(2)} className={`rounded-full size-[7px] cursor-pointer ${activeImageIndex === 2 ? 'bg-tertiary-light-gray' : 'bg-tertiary-light-gray/30'}`}></button>
                        <button onClick={() => setActiveImageIndex(3)} className={`rounded-full size-[7px] cursor-pointer ${activeImageIndex === 3 ? 'bg-tertiary-light-gray' : 'bg-tertiary-light-gray/30'}`}></button>
                    </div>
                </div>
                <div className='col-span-2 grid grid-rows-2 gap-3 max-h-full w-full'>
                    <div className='row-span-1 flex justify-center items-center relative'>
                        <Image src={HeroImage} alt="Hero Image" fill className='rounded-3xl object-cover' />
                    </div>
                    <div className='row-span-1 flex justify-center items-center relative bg-tertiary-night-black rounded-3xl'>
                        <Image src={HeroImage} alt="Hero Image" fill className='rounded-3xl object-cover opacity-40' />
                        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[32px] font-medium leading-5'>+2 photos</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroImageContainer