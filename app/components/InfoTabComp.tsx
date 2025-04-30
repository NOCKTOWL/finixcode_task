"use client";

import Image from "next/image";
import Link from "next/link";
import BarsIcon from "../../public/bars_icon.webp";
import CalendarIcon from "../../public/calendar_icon.webp";
import ClockIcon from "../../public/clock_icon.webp";
import VenueIcon from "../../public/venue_icon.webp";

export default function InfoTabComp() {
  return (
    <div className='w-full h-full flex flex-col'>
        <div className="w-full h-full flex justify-between items-center py-15 border-b-1 border-deep-light-gray">
            <ul className="flex flex-wrap gap-x-3 gap-y-[6px]">
                <li className='px-6 py-5 bg-swimming-blue rounded-[48px] flex justify-center items-center'>
                    <h1 className="text-[#4A4A4A] text-2xl font-normal leading-5">Football</h1>
                </li>
                <li className='px-6 py-5 bg-swimming-blue rounded-[48px] flex justify-center items-center'>
                    <h1 className="text-[#4A4A4A] text-2xl font-normal leading-5">Relay</h1>
                </li>
                <li className='px-6 py-5 bg-[#FFE8F0] rounded-[48px] flex justify-center items-center'>
                    <h1 className="text-[#4A4A4A] text-2xl font-normal leading-5">Female</h1>
                </li>
                <li className='px-6 py-5 bg-[#EFEDFF] rounded-[48px] flex justify-center items-center'>
                    <h1 className="text-[#4A4A4A] text-2xl font-normal leading-5">Age: Below 25</h1>
                </li>
            </ul>
            <div className="flex gap-3 px-[10px] py-[5px]">
                <div className="size-10 flex justify-center items-center">
                    <Image src={BarsIcon} alt="bars" className='w-[24px] h-[24px]'/>
                </div>
                <h1 className='text-[#4A4A4A] text-2xl font-normal leading-10'>Beginner</h1>
            </div>
        </div>
        <div className="w-full h-full flex flex-col gap-10 py-15 border-b-1 border-deep-light-gray">
            <h2 className="text-[32px] font-bold leading-7 text-tertiary-night-black">About this event</h2>
            <div className="flex flex-col gap-3">
                <p className="max-w-[720px] text-tertiary-night-black text-base font-normal leading-6 line-clamp-3">Learn about the capital’s first beavers in 400 years from the Ealing Beaver project, make your own mushroom growing starter kit with urban agriculture experts, before joining Roma the Engineer to get into the nuts and bolts of tomorrow’s high-rise buildings.</p>
                <Link href="#" className="text-primary-blue text-base font-normal leading-6 cursor-pointer underline underline-offset-4">Read more</Link>
            </div>
        </div>
        <div className="w-full h-full flex flex-col gap-10 py-15 border-b-1 border-deep-light-gray">
            <h2 className="text-[32px] font-bold leading-7 text-tertiary-night-black">Location</h2>
            <div className="flex justify-between items-start gap-3">
                <div className="flex flex-col gap-[4px]">
                    <h2 className="text-2xl font-bold text-secondary-gray-blue">NDE Field</h2>
                    <p className="text-[18px] font-normal text-[#4A4A4A]">Jean Baptiste Point du Sable Lake Shore Drive, Chicago, Illinois</p>
                </div>
                <button className="px-4 py-[15px] border-1 border-secondary-gray-blue rounded-[99px] text-[18px] font-medium text-secondary-gray-blue">
                    <h1>Open Maps</h1>
                </button>
            </div>
        </div>

        <div className="w-full h-full flex flex-col gap-8 py-15 border-b-1 border-deep-light-gray">
            <h2 className="text-[32px] font-bold leading-7 text-tertiary-night-black">Good to know</h2>
            <div className="flex gap-3">
                {/* ORANGE SECTION */}
                <div className=" pl-6 pr-[34px] py-6 bg-secondary-terra-cotta rounded-2xl flex flex-col gap-4">
                    <h1 className="text-2xl font-medium text-offwhite">Highlights</h1>
                    <div className="flex flex-col gap-[9px]">
                        <div className="flex justify-start items-center gap-2">
                            <div className="size-[18px] flex justify-center items-center">
                                <Image src={CalendarIcon} alt="calendar" className='object-contain'/>
                            </div>
                            <h1 className="text-[18px] font-medium text-offwhite">Mon, 2 Dec</h1>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <div className="size-[18px] flex justify-center items-center">
                                <Image src={ClockIcon} alt="calendar" className='object-contain'/>
                            </div>
                            <h1 className="text-[18px] font-medium text-offwhite">7.30 AM - 8.30 AM</h1>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <div className="size-[18px] flex justify-center items-center">
                                <Image src={ClockIcon} alt="calendar" className='object-contain'/>
                            </div>
                            <h1 className="text-[18px] font-medium text-offwhite">Arrive 15 min before start</h1>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <div className="size-[18px] flex justify-center items-center">
                                <Image src={VenueIcon} alt="calendar" className='object-contain'/>
                            </div>
                            <h1 className="text-[18px] font-medium text-offwhite">Venue booked</h1>
                        </div>
                    </div>
                </div>

                {/* GREEN SECTION */}
                <div className="pl-6 pr-[34px] py-6 bg-secondary-pure-green rounded-2xl flex flex-col gap-4">
                    <h1 className="text-2xl font-medium text-offwhite">Refund & cancellation policy</h1>
                    <ul className="list-disc list-inside text-[18px] font-medium text-offwhite">
                        <li>Full refund if host cancels the game</li>
                        <li>Full refund if you cancel 24+ hours in advance </li>
                        <li>Full refund if game is cancelled due to low attendance</li>
                    </ul>
                    <div className="flex justify-end items-center">
                        <h1 className="text-base font-normal text-white">Learn More</h1>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
