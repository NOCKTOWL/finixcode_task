"use client";

import { useState } from "react";
import Image from "next/image";
import InfoTabComp from "./InfoTabComp";
import PlayerTabComponent from "./PlayerTabComp";
import CommentsTabComponent from "./CommentsTabComp";
import PaymentMethodModal from "./PaymentMethodModal";
import ShareIcon from "../../public/share_icon.svg";
import HeartIcon from "../../public/heart_icon.svg";
import HeartActiveIcon from "../../public/heartactive_icon.svg";
import DotMenu from "../../public/dotmenu_icon.svg";

function EventDetails() {
    const [isHeartActive, setIsHeartActive] = useState(false);
    const [activeTab, setActiveTab] = useState<'info' | 'player' | 'comments'>('info');
    const [isPaymentMethodModalOpen, setIsPaymentMethodModalOpen] = useState(false);


    return (
        <div className='w-full px-10 pt-10 flex justify-center items-center'>
            <div className='grid grid-cols-6 w-340'>
                {/* LEFT TITLE LOCATION COLUMN */}
                <div className='col-span-4 w-full flex flex-col pb-15'>
                    <div className="w-full flex justify-between items-start">
                        <div className='flex flex-col gap-3 pb-14'>
                            <h1 className='text-5xl text-tertiary-night-black font-black leading-16'>Road to the Football Finals</h1>
                            <div className='flex flex-col gap-4'>
                                <h2 className='text-2xl text-[#4A4A4A] font-normal leading-[22px]'>Bashundhara Sports Complex</h2>
                                <h2 className='text-2xl text-[#4A4A4A] font-normal leading-[22px]'>Mar 14 from 7:30 PM - 9:30 PM</h2>
                            </div>
                        </div>

                        <div className="flex gap-4 h-max">
                            <div className="flex justify-center items-center p-2 bg-tertiary-light-gray border-[1.18px] border-deep-light-gray rounded-full">
                                <div className='size-[26px] flex justify-center items-center'>
                                    <Image src={ShareIcon} alt="share" />
                                </div>
                            </div>
                            <div className="flex justify-center items-center p-2 bg-tertiary-light-gray border-[1.18px] border-deep-light-gray rounded-full">
                                <div className='size-[26px] flex justify-center items-center'>
                                    <Image src={isHeartActive ? HeartActiveIcon : HeartIcon} alt="heart" onClick={() => setIsHeartActive(!isHeartActive)} className="cursor-pointer drop-shadow-[0px_1.18px_2.35px_rgba(0,0,0,0.1)]"/>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className='size-[26px] flex justify-center items-center'>
                                    <Image src={DotMenu} alt="dot_menu" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-full flex items-center border-b-[1.6px] border-deep-light-gray">
                        <button onClick={() => setActiveTab('info')} className="w-full cursor-pointer">
                            <h1 className={`py-8 text-2xl font-medium leading-5 ${activeTab === 'info' ? "text-secondary-terra-cotta border-b-[1.6px] border-secondary-terra-cotta" : "text-tertiary-night-black"}`}>Info</h1>
                        </button>
                        <button onClick={() => setActiveTab('player')} className="w-full cursor-pointer">
                            <h1 className={`py-8 text-2xl font-medium leading-5 ${activeTab === 'player' ? "text-secondary-terra-cotta border-b-[1.6px] border-secondary-terra-cotta" : "text-tertiary-night-black"}`}>Player</h1>
                        </button>
                        <button onClick={() => setActiveTab('comments')} className="w-full cursor-pointer">
                            <h1 className={`py-8 text-2xl font-medium leading-5 ${activeTab === 'comments' ? "text-secondary-terra-cotta border-b-[1.6px] border-secondary-terra-cotta" : "text-tertiary-night-black"}`}>Comments</h1>
                        </button>
                    </div>
                    {/* TAB CONTENT */}
                    {activeTab === 'info' && <InfoTabComp />}
                    {activeTab === 'player' && <PlayerTabComponent />}
                    {activeTab === 'comments' && <CommentsTabComponent />}
                </div>

                {/* RIGHT SPOTS COLUMN */}
                <div className="w-full col-span-2 flex justify-end items-start">
                    <div className='w-100 bg-white p-6 rounded-2xl flex flex-col gap-6'>
                        <form id="spotsform" action="" className='flex flex-col gap-4 w-full'>
                            <div className='px-4 py-[18px] rounded-2xl border-1 border-deep-light-gray'>
                                <div className='flex justify-between items-center gap-1'> 
                                    <h1 className='text-base font-medium text-secondary-terra-cotta leading-[100%]'>6 spots left</h1>
                                    <h1 className='text-[18px] font-bold text-[#171717] leading-[100%]'>320tk /player <span className='font-normal text-[14px] text-[#808080]'>(both)</span></h1>
                                </div>
                            </div>
                        </form>
                        <button
                            onClick={() => setIsPaymentMethodModalOpen(!isPaymentMethodModalOpen)} type='submit'
                            // form='spotsform' COMMENTED OUT FOR PAYMENT METHOD MODAL
                            className='w-full bg-jithbo-green p-4 rounded-[99px] font-bold text-[18px] leading-[100%] tracking-[0.2px] cursor-pointer hover:brightness-90 transition-all duration-300 ease-in-out'
                        >
                            Join event
                        </button>
                    </div>
                </div>
            </div>
            {isPaymentMethodModalOpen && <PaymentMethodModal modalStatus={setIsPaymentMethodModalOpen} />}
        </div>
    )
}

export default EventDetails