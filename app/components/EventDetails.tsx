import React from 'react'

function EventDetails() {
  return (
    <div className='w-full px-10 pt-10 flex justify-center items-center'>
        <div className='grid grid-cols-2 gap-15'>
            <div className=''>
                <h1>Road to the Football Finals</h1>
                <p>Bashundhara Sports Complex</p>
                <p>Mar 14 from 7:30 PM - 9:30 PM</p>
            </div>
            <div className='w-100 bg-white p-6 rounded-2xl flex flex-col gap-6'>
                <form id="spotsform" action="" className='flex flex-col gap-4 w-full'>
                    <div className='px-4 py-[18px] rounded-2xl border-1 border-deep-light-gray'>
                        <div className='flex justify-between items-center gap-1'>
                            <h1 className='text-base font-medium text-secondary-terra-cotta'>6 spots left</h1>
                            <h1 className='text-[18px] font-bold text-[#171717]'>320tk /player <span className='font-normal text-[14px]'>(both)</span></h1>
                        </div>
                    </div>
                </form>
                <button type='submit' form='spotsform' className='w-full bg-jithbo-green p-4 rounded-[99px] font-bold text-[18px] tracking-[0.2px]'>Join event</button>
            </div>
        </div>
    </div>
  )
}

export default EventDetails