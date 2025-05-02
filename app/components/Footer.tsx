"use client";

import Image from "next/image";
import FooterCardComp from "./FooterCardComp";
import ChevronLeft from "@/public/chevron_left.svg";

export default function Footer() {
    const FooterCardDetails = [
        {
            id: 1,
            image: "/event1.svg",
            title: "Legends Rise on the Field",
            date: "Thu, Dec 5",
            startEndTime: "12:30 AM - 12:30 PM",
            location: "Bashundhara Sports Complex",
            spotsLeft: "2 spots left",
            attending: "6/8 attending",
            price: "320",
        },
        {
            id: 2,
            image: "/event2.svg",
            title: "Chasing Glory: Football Showdown",
            date: "Thu, Dec 5",
            startEndTime: "12:30 AM - 12:30 PM",
            location: "Bashundhara Sports Complex",
            spotsLeft: "2 spots left",
            attending: "6/8 attending",
            price: "320",
        },
        {
            id: 3,
            image: "/event1.svg",
            title: "United We Play, United Win",
            date: "Thu, Dec 5",
            startEndTime: "12:30 AM - 12:30 PM",
            location: "Bashundhara Sports Complex",
            spotsLeft: "2 spots left",
            attending: "6/8 attending",
            price: "320",
        },

    ];

    return (
        <div className='w-full flex flex-col gap-3 justify-center items-center p-10 bg-white'>
            {/* TOP HALF */}
            <div className="w-full flex gap-3">
                <div className="w-full flex justify-between items-center">
                    <h2 className='text-[#261B36] text-2xl font-bold leading-8'>Other events you may like</h2>
                    <div className="flex gap-4">
                        <div className="size-12 flex justify-center items-center bg-light-yellow rounded-full cursor-pointer hover:brightness-95 transition-all duration-300 ease-in-out">
                            <div className="size-6 flex justify-center items-center ">
                                <Image src={ChevronLeft} alt="chevron left"  />
                            </div>
                        </div>
                        <div className="size-12 flex justify-center items-center bg-light-yellow rounded-full cursor-pointer hover:brightness-95 transition-all duration-300 ease-in-out">
                            <div className="size-6 flex justify-center items-center ">
                                <Image src={ChevronLeft} alt="chevron left" className='scale-x-[-1]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Half */}
            <div className="w-full grid grid-cols-3 gap-4">
                {FooterCardDetails.map((card) => (
                    <FooterCardComp key={card.id} image={card.image} title={card.title} date={card.date} startEndTime={card.startEndTime} location={card.location} spotsLeft={card.spotsLeft} attending={card.attending} price={card.price} />
                ))}
            </div>
        </div>
    )
}
