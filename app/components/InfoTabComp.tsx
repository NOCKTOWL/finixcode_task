"use client";

import Image from "next/image";
import Link from "next/link";
import BarsIcon from "../assets/icons/bars_icon.svg";
import CalendarIcon from "../assets/icons/calendar_icon.svg";
import ClockIcon from "../assets/icons/clock_icon.svg";
import VenueIcon from "../assets/icons/venue_icon.svg";
import AlexProfile from "../../public/alex_profile.svg";

export default function InfoTabComp() {
  return (
    <div className='w-full h-full flex flex-col'>
        {/* TAGS */}
        <div className="w-full h-full flex justify-between items-center py-15 border-b-1 border-deep-light-gray">
            <ul className="flex flex-wrap gap-x-3 gap-y-[6px]">
                <li className='px-6 py-5 bg-swimming-blue rounded-[48px] flex justify-center items-center'>
                    <h1 className="text-[#4A4A4A] text-2xl font-normal leading-5">Football</h1>
                </li>
                <li className='px-6 py-5 bg-swimming-blue rounded-[48px] flex justify-center items-center'>
                    <h1 className="text-[#4A4A4A] text-2xl font-normal leading-5">Relay</h1>
                </li>
                <li className='px-6 py-5 bg-[#FFE8F0] rounded-[48px] flex justify-center items-center'>
                    <h1 className="text-[#4A4A4A] text-2xl font-normal leading-[100%]">Female</h1>
                </li>
                <li className='px-6 py-5 bg-[#EFEDFF] rounded-[48px] flex justify-center items-center'>
                    <h1 className="text-[#4A4A4A] text-2xl font-normal leading-[100%]">Age: Below 25</h1>
                </li>
            </ul>
            <div className="flex gap-3 px-[10px] py-[5px]">
                <div className="size-10 flex justify-center items-center">
                    <Image src={BarsIcon} alt="bars" />
                </div>
                <h1 className='text-[#4A4A4A] text-2xl font-normal leading-10'>Beginner</h1>
            </div>
        </div>

        {/* ABOUT THIS EVENT */}
        <div className="w-full h-full flex flex-col gap-10 py-15 border-b-1 border-deep-light-gray">
            <h2 className="text-[32px] font-bold leading-7 text-tertiary-night-black">About this event</h2>
            <div className="flex flex-col gap-3">
                <p className="max-w-[720px] text-tertiary-night-black text-base font-normal leading-6 line-clamp-3">Learn about the capital&apos;s first beavers in 400 years from the Ealing Beaver project, make your own mushroom growing starter kit with urban agriculture experts, before joining Roma the Engineer to get into the nuts and bolts of tomorrow’s high-rise buildings.</p>
                <Link href="#" className="text-primary-blue text-base font-normal leading-6 cursor-pointer underline underline-offset-4">Read more</Link>
            </div>
        </div>

        {/* LOCATION */}
        <div className="w-full h-full flex flex-col gap-10 py-15 border-b-1 border-deep-light-gray">
            <h2 className="text-[32px] font-bold leading-7 text-tertiary-night-black">Location</h2>
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                    <h2 className="text-2xl font-bold text-secondary-gray-blue leading-[100%]">NDE Field</h2>
                    <p className="text-[18px] font-normal text-[#4A4A4A] leading-[100%]">Jean Baptiste Point du Sable Lake Shore Drive, Chicago, Illinois</p>
                </div>
                <button className="px-4 py-[15px] border-1 border-secondary-gray-blue rounded-full text-[18px] font-medium text-secondary-gray-blue leading-[100%]">
                    Open maps
                </button>
            </div>
        </div>

        {/* GOOD TO KNOW */}
        <div className="w-full h-full flex flex-col gap-8 py-15 border-b-1 border-deep-light-gray">
            <h2 className="text-[32px] font-bold leading-[22px] text-tertiary-night-black">Good to know</h2>
            <div className="flex justify-start gap-3">
                {/* ORANGE SECTION */}
                <div className="w-[300px] h-[250px] pl-6 pr-[34px] py-6 bg-secondary-terra-cotta rounded-2xl flex flex-col gap-4">
                    <h1 className="text-2xl font-medium text-offwhite leading-[100%]">Highlights</h1>
                    <div className="flex flex-col gap-[9px]">
                        <div className="flex justify-start items-center gap-2">
                            <div className="size-[18px] flex justify-center items-center">
                                <Image src={CalendarIcon} alt="calendar" className='object-contain'/>
                            </div>
                            <h1 className="text-[18px] font-medium text-offwhite leading-[100%]">Mon, 2 Dec</h1>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <div className="size-[18px] flex justify-center items-center">
                                <Image src={ClockIcon} alt="calendar" className='object-contain'/>
                            </div>
                            <h1 className="text-[18px] font-medium text-offwhite leading-[100%]">7.30 AM - 8.30 AM</h1>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <div className="size-[18px] flex justify-center items-center">
                                <Image src={ClockIcon} alt="calendar" className='object-contain'/>
                            </div>
                            <h1 className="text-[18px] font-medium text-offwhite leading-[100%]">Arrive 15 min before start</h1>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <div className="size-[18px] flex justify-center items-center">
                                <Image src={VenueIcon} alt="calendar" className='object-contain'/>
                            </div>
                            <h1 className="text-[18px] font-medium text-offwhite leading-[100%]">Venue booked</h1>
                        </div>
                    </div>
                </div> 

                {/* GREEN SECTION */}
                <div className="h-[250px] pl-6 pr-[34px] py-6 bg-secondary-pure-green rounded-2xl flex flex-col gap-4">
                    <h1 className="text-2xl font-medium text-offwhite leading-[100%]">Refund & cancellation policy</h1>
                    <ul className="list-disc list-inside text-[18px] font-medium text-offwhite leading-[100%] flex flex-col gap-[6px]">
                        <li>Full refund if host cancels the game</li>
                        <li>Full refund if you cancel 24+ hours in advance </li>
                        <li>Full refund if game is cancelled due to low attendance</li>
                    </ul>
                    <div className="flex justify-end items-center">
                        <h1 className="text-base font-normal text-white leading-[100%]">Learn More</h1>
                    </div>

                </div>
            </div>
        </div>

        {/* HOSTED BY */}
        <div className="w-full h-full flex flex-col gap-8 py-15">
            <h2 className="text-[32px] font-bold leading-7 text-tertiary-night-black">Hosted by</h2>
            <div className="flex justify-between items-center px-6 py-[27px] bg-secondary-gray-blue rounded-2xl">
                <div className="flex justify-start items-center gap-6">
                    <div className="size-24 flex justify-center items-center rounded-full overflow-hidden relative">
                        <Image src={AlexProfile} alt="alex" className='object-contain '/>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                        <h2 className="text-2xl font-bold leading[22px] text-white">Alex Mercer</h2>
                        <div>
                            <div className="flex justify-start gap-1">
                                <p className="w-6 text-base font-medium leading-[22px] text-white">23</p>
                                <p className="text-base font-normal leading-[22px] text-tertiary-light-gray">activies found</p>
                            </div>
                            <div className="flex justify-start gap-1">
                                <p className="w-6 text-base font-medium leading-[22px] text-white">4.5</p>
                                <p className="text-base font-normal leading-[22px] text-tertiary-light-gray">host rating</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="px-[27px] py-[10px] bg-tertiary-light-apricot rounded-full text-base font-medium leading-[22px] text-tertiary-night-black">
                        Message
                    </button>
                    <button className="px-4 py-[10px] border-1 border-tertiary-light-apricot rounded-full text-base font-medium leading-[22px] text-tertiary-light-apricot">
                        View profile
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
