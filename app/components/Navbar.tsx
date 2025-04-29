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
    <div>
        <Link href="/" className="flex items-center justify-center gap-2">
            <Image src={Logo} alt="Logo" className="w-[25px] h-[34px]" />
        </Link>
        <div className='flex justify-between gap-2'>
            <input type="date" className='w-[260px] border-[1px] border-tertiary-light-gray px-2 pr-2 pl-4' />
             
            <div className='relative flex justify-between'>
                <input type="text" placeholder='Search' />
                <Image src={Search} alt="Search" className='absolute top-1/2 left-2 -translate-y-1/2' />
            </div>
        </div>
        <div className='flex gap-2 '>
            <div className='flex justify-between items-center h-[50px] bg-light-yellow px-[14px] pl-[12px] pr-[16px] rounded-[99px]'>
                <Image src={Leaderboard} alt="Leaderboard" className='w-[13px] h-[18px]' />
                <h1 className='text-base font-medium'>Leaderboard</h1>
            </div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}
