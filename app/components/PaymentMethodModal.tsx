"use client"

import Image from 'next/image'
import MoneyIcon from '../../public/money_icon.svg'
import CloseIcon from '../../public/close_icon.svg'
import BkashIcon from '../../public/bkash_icon.svg'
import CashIcon from '../../public/cash_icon.svg'

export default function PaymentMethodModal({ modalStatus }: { modalStatus: (status: boolean) => void }) {

  return (
    <div className='fixed w-full h-screen top-0 left-0 bg-black/50'>
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 bg-secondary-pure-green p-8 rounded-3xl'>
            <div className='flex flex-col gap-4'>
                {/* TOP MONEY ICON */}
                <div className='flex justify-between items-start'>
                    <div className='size-7 invisible'>
                    </div>
                    <div className='size-35 flex justify-center items-center'>
                        <Image src={MoneyIcon} alt="money" className='object-contain' />
                    </div>
                    <button onClick={()=> modalStatus(false)} className='size-7 flex justify-center items-center cursor-pointer'>
                        <Image src={CloseIcon} alt="close" className='object-contain' />
                    </button>
                </div>
                
                {/* PAYMENT METHODS */}
                <div className='flex flex-col gap-8'>
                    <h1 className='text-[32px] font-bold text-tertiary-light-apricot text-center'>Choose Payment Method</h1>
                    
                    {/* BKASH OPTION */}
                    <div className='flex flex-col'>
                        <div className='flex justify-start items-start gap-[14px]'>
                            {/*
                                WENT FOR TWO DIFFERENT CUSTOM RADIO BUTTON APPROACHES.
                                1. ONE IS TAILWIND CSS BASED (bKash)
                                2. OTHER ONE IS CUSTOM CSS BASED (Cash)
                                THEY LOOK AND WORK EXACTLY THE SAME WAY. JUST WANTED TO SHOWCASE BOTH APPROACHES.
                            */}
                            <div className='size-7 flex justify-center items-center'>

                                {/* THIS APPROACH IS COMPLETELY TAILWIND BASED */}
                                <input type="radio" name='payment-method' value="bKash" id='bKash' className='peer size-[18px] appearance-none relative bg-white border-2 border-[#D4D4D4] checked:border-jithbo-green rounded-full outline-none' />
                                <div className="invisible peer-checked:visible peer-checked: absolute size-[9px] rounded-full bg-jithbo-green"></div>
                            </div>
                            <label htmlFor='bKash' className='flex flex-col cursor-pointer'>
                                <div className='flex justify-start items-center gap-2'>
                                    <h2 className='text-xl font-medium text-white'>bKash</h2>
                                    <div className='size-[22px] flex justify-center items-center'>
                                        <Image src={BkashIcon} alt="bkash" className='object-contain' />
                                    </div>
                                </div>
                                <p className='text-base font-normal text-white'>Send the payment now via bKash to confirm your spot instantly.</p>
                            </label>
                        </div>
                    </div>
            
                        
                    {/* CASH OPTION */}
                    <div className='flex flex-col'>
                        <div className='flex justify-start items-start gap-[14px]'>
                            <div className='size-7 flex justify-center items-center'>

                                {/* THIS APPROACH IS CUSTOM CSS BASED */}
                                <input type="radio" name='payment-method' value="cash" id='cash' className='custom-radio-button' />
                            </div>
                            <label htmlFor='cash' className='flex flex-col cursor-pointer'>
                                <div className='flex justify-start items-center gap-2'>
                                    <h2 className='text-xl font-medium text-white'>Cash</h2>
                                    <div className='size-[22px] flex justify-center items-center'>
                                        <Image src={CashIcon} alt="cash" className='object-contain' />
                                    </div>
                                </div>
                                <p className='text-base font-normal text-white'>Pay the event fee directly to the host before the game starts.</p>
                            </label>
                        </div>
                    </div>

                    <button className='p-4 bg-[#2B2B2B] rounded-full text-[18px] font-bold text-white cursor-pointer'>Continue</button>
                </div>
            </div>
        </div>
    </div>
  )
}
