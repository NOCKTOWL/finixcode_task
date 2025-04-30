"use client"

import React from 'react'
import Logo from "@/public/Logo.webp"
import Search from "@/public/Search_Icon.webp"
import Leaderboard from "@/public/leaderboard_icon.webp"
import Hamburger from "@/public/hamburger_icon.webp"
import Profile from "@/public/profile_icon.webp"
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center h-[84px] w-full top-0 px-10 py-4 bg-white'>
        {/* LOGO */}

        <Link href="/" className="flex items-center justify-center gap-2">
            <Image src={Logo} alt="Logo" className="w-[25px] h-[34px]" />
        </Link>

        {/* DATE AND SEARCH FIELD */}

        <div className='flex justify-between gap-2'>
            <input type="date" className='w-[260px] border-[1px] border-tertiary-light-gray px-2 pr-2 pl-4 outline-none' />
             
            <div className='relative flex justify-between w-65 h-13 pl-4 pr-2 py-2 border-1 border-tertiary-light-gray rounded-[99px]'>
                <input type="text" placeholder='Search' className='placeholder:text-[#6A6A6A] text-sm outline-none'/>
                <div className='absolute top-1/2 right-2 -translate-y-1/2 bg-deep-light-gray rounded-full p-[7px] cursor-pointer hover:brightness-95 transition-all duration-300 ease-in-out'>
                    <Image src={Search} alt="Search" className='flex' />
                </div>
            </div>
        </div>

        {/* LEADERBOARD, LOGIN/SIGNUP AND PROFILE */}

        <div className='flex gap-2 text-secondary-pure-green'>
            <div className='flex gap-[5px] justify-between items-center h-[50px] bg-light-yellow py-[14px] pl-3 pr-4 rounded-[99px]'>
                
                <div className='size-5 flex justify-center items-center'>
                    <Image src={Leaderboard} alt="Leaderboard" width={13} height={18} />
                </div>

                <h1 className='text-base font-medium'>Leaderboard</h1>
            </div>

            <div className='px-6 py-[14px] rounded-[99px] border-[1px] border-secondary-pure-green flex justify-center items-center'>
                <h1 className='text-secondary-pure-green text-base font-medium leading-5'>Login / Sign up</h1>
            </div>

            <div className='flex gap-[10px] justify-between items-center h-[50px] pl-[10px] pr-2 py-[6px] border-1 rounded-[99px] border-deep-light-gray'>
                <div className='size-[22px] flex justify-center items-center'>
                    <Image src={Hamburger} alt="Hamburger" className='w-[13px] h-[9px]' />
                </div>
                <div className='size-[37px] flex justify-center items-center'>
                    <Image src={Profile} alt="Profile" className='size-[30px]' />
                </div>
            </div>
        </div>
    </div>
  )
}
