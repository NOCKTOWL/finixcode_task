"use client"

import { useState } from "react"
import Logo from "@/public/Logo.svg"
import CalendarIcon from "@/public/calendarblack_icon.svg"
import Search from "@/public/Search_Icon.webp"
import Leaderboard from "@/public/leaderboard_icon.svg"
import Hamburger from "@/public/hamburger_icon.svg"
import Profile from "@/public/profile_icon.svg"
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    const [pickedDate, setPickedDate] = useState("Select Date")
  return (
    <div className='flex justify-between items-center h-[84px] w-full top-0 px-10 py-4 bg-white'>
        {/* LOGO */}

        <Link href="/" className="flex justify-center items-center">
            <Image src={Logo} alt="Logo" />
        </Link>

        {/* DATE AND SEARCH FIELD */}

        <div className='flex justify-between gap-2'>

            {/* DATE PICKER INPUT */}
            <div className='relative flex justify-between w-65 h-13 pl-4 pr-2 py-2 border-1 border-tertiary-light-gray rounded-[99px] [box-shadow:0px_3px_8px_rgba(0,0,0,0.1)]'>
                <input id="datepicker" onChange={(e)=>setPickedDate(e.target.value)} value={pickedDate} type="date" className='z-10 opacity-0 absolute inset-0 w-[260px] p-4 outline-none cursor-pointer '/>
                <label htmlFor="datepicker" className='z-0 w-[260px] flex justify-start items-center text-[#6A6A6A] text-sm font-normal leading-[100%] outline-none cursor-pointer'>{pickedDate}</label>
                <div className='absolute top-1/2 right-2 -translate-y-1/2 bg-jithbo-green rounded-full p-[7px] hover:brightness-95 transition-all duration-300 ease-in-out pointer-events-none cursor-pointer'>
                    <Image src={CalendarIcon} alt="Calendar-Icon" className='text-black ' />
                </div>
            </div>

            {/* SEARCH BAR INPUT */}
            <div className='relative flex justify-between w-65 h-13 pl-4 pr-2 py-2 border-1 border-tertiary-light-gray rounded-[99px] [box-shadow:0px_3px_8px_rgba(0,0,0,0.1)]'>
                <input type="text" placeholder='Search' className='placeholder:text-[#6A6A6A] text-[#6A6A6A] text-sm font-normal leading-[100%] outline-none'/>
                <div className='absolute top-1/2 right-2 -translate-y-1/2 bg-deep-light-gray rounded-full p-[7px] cursor-pointer hover:brightness-95 transition-all duration-300 ease-in-out'>
                    <Image src={Search} alt="Search-Icon" />
                </div>
            </div>
        </div>

        {/* LEADERBOARD, LOGIN/SIGNUP AND PROFILE */}

        <div className='flex gap-2'>
            <div className='flex gap-[5px] justify-between items-center h-[50px] bg-light-yellow py-[14px] pl-3 pr-4 rounded-[99px]'>
                
                <div className='size-5 flex justify-center items-center'>
                    <Image src={Leaderboard} alt="Leaderboard" width={13} height={18} />
                </div>

                <h1 className='text-base font-medium leading-[100%] text-secondary-pure-green'>Leaderboard</h1>
            </div>

            <div className='px-6 py-[14px] rounded-full border-[1px] border-secondary-pure-green flex justify-center items-center'>
                <h1 className='text-secondary-pure-green text-base font-medium leading-5'>Login / Sign up</h1>
            </div>

            <div className='flex gap-[10px] justify-between items-center pl-[10px] pr-2 py-[6px] border-1 rounded-full border-deep-light-gray'>
                <div className='size-[22px] flex justify-center items-center'>
                    <Image src={Hamburger} alt="Hamburger" />
                </div>
                <div className='size-[37px] flex justify-center items-center'>
                    <Image src={Profile} alt="Profile"  />
                </div>
            </div>
        </div>
    </div>
  )
}
