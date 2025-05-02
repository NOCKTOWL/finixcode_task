"use client"

import Image from 'next/image'
import GroupIcon from '../../public/group_icon.svg'

export default function PlayerTabComponent() {
  return (
    <div className='w-full h-full flex flex-col py-6 gap-6'>
      {/* PLAYERS */}
        <div className='flex justify-between items-center'>
          <h2 className='text-[32px] font-bold leading-7 text-tertiary-night-black'>Players</h2>

          <div className='flex gap-1 '>
            <div className='relative size-8 flex justify-center items-center'>
              <Image src={GroupIcon} alt="group" className='object-contain' />
            </div>
            <h2 className='text-2xl font-normal text-tertiary-night-black'>5/11</h2>
          </div>
        </div>

        {/* PLAYER NAMES LIST */}
        <ul className='flex flex-col gap-3'>
          <li className='p-3 bg-secondary-pure-green rounded-[14px] flex justify-between items-center'>
            <div className='flex justify-start items-center gap-5'>
              <div className='size-[45px] bg-tertiary-light-apricot rounded-full flex justify-center items-center'>
                <h2 className='uppercase text-[18px] font-bold text-secondary-pure-green'>AM</h2>
              </div>
              <h1 className='text-2xl font-medium text-tertiary-light-apricot'>Alex Mercer <span className='text-base font-light'>(Host)</span> </h1>
            </div>
            <button className='bg-white rounded-xl px-3 py-4 text-base font-medium leading-[120%] text-tertiary-night-black'>Message</button>
          </li>
          <li className='p-3 bg-secondary-pure-green rounded-[14px] flex justify-between items-center'>
            <div className='flex justify-start items-center gap-5'>
              <div className='size-[45px] bg-tertiary-light-apricot rounded-full flex justify-center items-center'>
                <h2 className='uppercase text-[18px] font-bold text-secondary-pure-green'>JU</h2>
              </div>
              <h1 className='text-2xl font-medium text-tertiary-light-apricot'>Jamir Uddin</h1>
            </div>
            <button className='bg-white rounded-xl px-3 py-4 text-base font-medium leading-[120%] text-tertiary-night-black'>Message</button>
          </li>
          <li className='p-3 bg-secondary-pure-green rounded-[14px] flex justify-between items-center'>
            <div className='flex justify-start items-center gap-5'>
              <div className='size-[45px] bg-tertiary-light-apricot rounded-full flex justify-center items-center'>
                <h2 className='uppercase text-[18px] font-bold text-secondary-pure-green'>BA</h2>
              </div>
              <h1 className='text-2xl font-medium text-tertiary-light-apricot'>Biplu Ahmed</h1>
            </div>
            <button className='bg-white rounded-xl px-3 py-4 text-base font-medium leading-[120%] text-tertiary-night-black'>Message</button>
          </li>
          <li className='p-3 bg-secondary-pure-green rounded-[14px] flex justify-between items-center'>
            <div className='flex justify-start items-center gap-5'>
              <div className='size-[45px] bg-tertiary-light-apricot rounded-full flex justify-center items-center'>
                <h2 className='uppercase text-[18px] font-bold text-secondary-pure-green'>TB</h2>
              </div>
              <h1 className='text-2xl font-medium text-tertiary-light-apricot'>Topu Barman</h1>
            </div>
            <button className='bg-white rounded-xl px-3 py-4 text-base font-medium leading-[120%] text-tertiary-night-black'>Message</button>
          </li>
          <li className='p-3 bg-secondary-pure-green rounded-[14px] flex justify-between items-center'>
            <div className='flex justify-start items-center gap-5'>
              <div className='size-[45px] bg-tertiary-light-apricot rounded-full flex justify-center items-center'>
                <h2 className='uppercase text-[18px] font-bold text-secondary-pure-green'>RH</h2>
              </div>
              <h1 className='text-2xl font-medium text-tertiary-light-apricot'>Rakib Hossain</h1>
            </div>
            <button className='bg-white rounded-xl px-3 py-4 text-base font-medium leading-[120%] text-tertiary-night-black'>Message</button>
          </li>
        </ul>
    </div>
  )
}
