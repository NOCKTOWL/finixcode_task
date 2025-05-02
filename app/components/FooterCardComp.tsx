"use client"

import { useState } from "react";
import Image from "next/image";
import HeartIcon from "../assets/icons/heart_icon.svg";
import HeartActiveIcon from "../assets/icons/heartactive_icon.svg";
import BarsFullIcon from "../assets/icons/barsfull_icon.svg";
import LocationIcon from "../assets/icons/location_icon.svg";
import Ellipse from "@/public/ellipse.svg";
import TakaIcon from "../assets/icons/taka_icon.svg";

export default function FooterCardComp({ image, title, date, startEndTime, location, spotsLeft, attending, price }: { image: string, title: string, date: string, startEndTime:string, location: string, spotsLeft: string, attending: string, price: number }) {
    const [isHeartActive, setIsHeartActive] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    return (
        <div className="col-span-1 flex flex-col border-[1.25px] border-deep-light-gray rounded-[20px] overflow-hidden">
            {/* EVENT CARD THUMBNAIL */}
            <div className="relative h-29 w-full flex justify-center">
                <Image src={image} alt="event image" fill className="object-cover" />
                <div className='absolute bottom-0 flex justify-center items-center gap-2 px-[15px] py-[10px]'>
                <button onClick={() => setActiveImageIndex(0)} className={`rounded-full size-[7px] cursor-pointer ${activeImageIndex === 0 ? 'bg-tertiary-light-gray' : 'bg-tertiary-light-gray/30'}`}></button>
                    <button onClick={() => setActiveImageIndex(1)} className={`rounded-full size-[7px] cursor-pointer ${activeImageIndex === 1 ? 'bg-tertiary-light-gray' : 'bg-tertiary-light-gray/30'}`}></button>
                    <button onClick={() => setActiveImageIndex(2)} className={`rounded-full size-[7px] cursor-pointer ${activeImageIndex === 2 ? 'bg-tertiary-light-gray' : 'bg-tertiary-light-gray/30'}`}></button>
                    <button onClick={() => setActiveImageIndex(3)} className={`rounded-full size-[7px] cursor-pointer ${activeImageIndex === 3 ? 'bg-tertiary-light-gray' : 'bg-tertiary-light-gray/30'}`}></button>
                </div>
                <div className="size-[30px] absolute top-4 left-80 xl:top-5 2xl:top-4 xl:left-[393px] 2xl:left-134">
                    <Image src={isHeartActive ? HeartActiveIcon : HeartIcon} alt="heart" onClick={() => setIsHeartActive(!isHeartActive)} fill className="object-cover cursor-pointer drop-shadow-[0px_1.18px_2.35px_rgba(0,0,0,0.1)]" />
                </div>
            </div>

            {/* EVENT DETAILS SECTION */}
            <div className="flex flex-col gap-1 p-4 h-[218px]">
                {/* EVENT DETAIL TAGS */}
                <div className="w-full h-max flex justify-between items-center">
                    <ul className="flex flex-wrap gap-1">
                        <li className='px-[10px] py-2 bg-[#D9F2E6] rounded-3xl flex justify-center items-center'>
                            <h1 className="text-[#4A4A4A] text-xs font-normal leading-[10px]">Football</h1>
                        </li>
                        <li className='px-[10px] py-2 bg-[#EFEDFF] rounded-3xl flex justify-center items-center'>
                            <h1 className="text-[#4A4A4A] text-xs font-normal leading-[10px]">Below 25y</h1>
                        </li>
                    </ul>
                    <div className="flex gap-[6px] px-[5px] py-[2.5px]">
                        <div className="size-5 flex justify-center items-center">
                            <Image src={BarsFullIcon} alt="bars-advanced" />
                        </div>
                        <h1 className='text-[#4A4A4A] text-xs font-normal leading-5'>Advanced</h1>
                    </div>
                </div>

                {/* TEXT CONTENTS */}
                <div className="flex flex-col h-full justify-between">
                    <div className="flex flex-col gap-1">
                        <div className="h-8 flex justify-start items-center"> 
                            <h1 className="text-secondary-pure-green text-2xl font-medium leading-[100%] ">{title}</h1>
                        </div>
                        <div>
                            <div aria-label="date_time" className="flex justify-start">
                                <div className="flex justify-start items-center gap-[10px]">
                                    <h2 className="text-tertiary-night-black text-[14px] font-normal leading-[100%]">{date}</h2>
                                    <Image src={Ellipse} alt="ellipse" width={3} height={3} />
                                    <h2 className="text-tertiary-night-black text-[14px] font-normal leading-[100%]">{startEndTime}</h2>
                                </div>
                            </div>
                            <div aria-label="location" className="flex justify-start items-center gap-[5px]">
                                <div className="size-[18px] flex justify-center items-center">
                                    <Image src={LocationIcon} alt="location" />
                                </div>
                                <h2 className="text-tertiary-night-black text-[14px] font-normal leading-[100%]">{location}</h2>
                            </div>  
                        </div>
                    </div>

                    <div className="">
                        <div className="flex justify-between items-end">
                            {/* ATTENDING */}
                            <h2 className="text-tertiary-night-black text-[14px] font-normal leading-[100%]">{attending}</h2>

                            {/* SPOTS LEFT AND PRICE */}
                            <div className="flex flex-col items-end gap-1">
                                <h2 className="text-[#AA3333] text-[14px] font-normal leading-[100%]">{spotsLeft}</h2>
                                <div className="flex justify-center items-center gap-[2px]">
                                    <div className="size-[26px] flex justify-center items-center">
                                        <Image src={TakaIcon} alt="taka" />
                                    </div>
                                    <h2 className="text-tertiary-night-black text-2xl font-normal leading-[100%]">{price}<span className="text-[#808080] text-[18px] font-normal leading-[100%]">/person</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
