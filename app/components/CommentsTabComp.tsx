"use client";

import Image from "next/image";
import DotMenu from "../../public/dotmenu_icon.svg";
import DotMenuGreen from "../../public/dotmenugreen_icon.svg";
import ReplyIcon from "../../public/reply_icon.svg";

export default function CommentsTabComponent() {
  return (
    <div className='w-full h-full flex flex-col pt-5 mt-5 gap-10 bg-white rounded-[30px]'>
      {/* COMMENTS SECTION */}
      <div className='px-5 flex flex-col gap-6'>
        <div className='flex flex-col gap-6'>
          {/* ALEX FIRST COMMENT */}
          <div className="flex flex-col gap-4">
            <div className='p-[18px] bg-secondary-pure-green flex flex-col gap-3 rounded-2xl'>
              <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center gap-[10px]'>
                  <div className='size-10 bg-tertiary-light-apricot rounded-full flex justify-center items-center'>
                    <h2 className='uppercase text-[18px] font-bold text-secondary-pure-green leading-6'>AM</h2>
                  </div>
                  <h1 className='text-2xl font-medium text-tertiary-light-apricot'>Alex Mercer</h1>
                </div>
                
                <div className='flex justify-between items-center gap-[14px]'>
                  <h2 className="text-[18px] font-normal text-tertiary-light-apricot">14 min</h2>
                  <div className='size-[22px] flex justify-center items-center'>
                      <Image src={DotMenu} alt="share" />
                  </div>
                </div>
              </div>
              
              <h2 className='text-xl font-normal text-white'>Looking forward to the game! What&apos;s the final player count?</h2>
            </div>

            <div className="py-[2.4px]">
              <button className="flex gap-2">
                <div className="size-[26px] flex justify-center items-center">
                  <Image src={ReplyIcon} alt="reply" />
                </div>
                <h2 className="text-[18px] font-medium text-[#808080]">Reply</h2>
              </button>
            </div>  
          </div>

          {/* RIFAT FIRST REPLY */}
          <div className="flex flex-col space-y-3 custom-dashed-border">
            
            <div className="pl-7"> 
              <div className="p-[18px] flex flex-col gap-3 bg-tertiary-light-apricot rounded-2xl">
                <div className='flex justify-between items-center'>
                  <div className='flex justify-start items-center gap-[10px]'>
                    <div className='size-10 bg-secondary-pure-green rounded-full flex justify-center items-center'>
                      <h2 className='uppercase text-[18px] font-bold text-tertiary-light-apricot leading-6'>RK</h2>
                    </div>
                    <h1 className='text-2xl font-medium text-secondary-pure-green'>Rifat Khan</h1>
                  </div>
                  
                  <div className='flex justify-between items-center gap-[14px]'>
                    <h2 className="text-[18px] font-normal text-secondary-pure-green">14 min</h2>
                    <div className='size-[22px] flex justify-center items-center' >
                        <Image src={DotMenuGreen} alt="share" />
                    </div>
                  </div>
                </div>
                
                <h2 className='text-xl font-normal text-tertiary-night-black'>missing few players</h2>
              </div>
            </div>
            
            <div className="pl-7">
              <div className="p-[18px] flex flex-col gap-3 bg-tertiary-light-apricot rounded-2xl">
                <div className='flex justify-between items-center'>
                  <div className='flex justify-start items-center gap-[10px]'>
                    <div className='size-10 bg-secondary-pure-green rounded-full flex justify-center items-center'>
                      <h2 className='uppercase text-[18px] font-bold text-tertiary-light-apricot leading-6'>RK</h2>
                    </div>
                    <h1 className='text-2xl font-medium text-secondary-pure-green'>Rifat Khan</h1>
                  </div>
                  
                  <div className='flex justify-between items-center gap-[14px]'>
                    <h2 className="text-[18px] font-normal text-secondary-pure-green">14 min</h2>
                    <div className='size-[22px] flex justify-center items-center'>
                        <Image src={DotMenuGreen} alt="share" />
                    </div>
                  </div>
                </div>
                
                <h2 className='text-xl font-normal text-tertiary-night-black'>got any friends?</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {/* ALEX SECOND COMMENT */}
          <div className="flex flex-col gap-4">
            <div className='p-[18px] bg-secondary-pure-green flex flex-col gap-3 rounded-2xl'>
              <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center gap-[10px]'>
                  <div className='size-10 bg-tertiary-light-apricot rounded-full flex justify-center items-center'>
                    <h2 className='uppercase text-[18px] font-bold text-secondary-pure-green leading-6'>AM</h2>
                  </div>
                  <h1 className='text-2xl font-medium text-tertiary-light-apricot'>Alex Mercer</h1>
                </div>
                
                <div className='flex justify-between items-center gap-[14px]'>
                  <h2 className="text-[18px] font-normal text-tertiary-light-apricot">14 min</h2>
                  <div className='size-[22px] flex justify-center items-center'>
                      <Image src={DotMenu} alt="share" />
                  </div>
                </div>
              </div>
              
              <h2 className='text-xl font-normal text-white'>Looking forward to the game! What&apos;s the final player count?</h2>
            </div>

            <div className="py-[2.4px]">
              <button className="flex gap-2">
                <div className="size-[26px] flex justify-center items-center">
                  <Image src={ReplyIcon} alt="reply" />
                </div>
                <h2 className="text-[18px] font-medium text-[#808080]">Reply</h2>
              </button>
            </div>  
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          {/* ALEX THIRD COMMENT */}
          <div className="flex flex-col gap-4">
            <div className='p-[18px] bg-secondary-pure-green flex flex-col gap-3 rounded-2xl'>
              <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center gap-[10px]'>
                  <div className='size-10 bg-tertiary-light-apricot rounded-full flex justify-center items-center'>
                    <h2 className='uppercase text-[18px] font-bold text-secondary-pure-green leading-6'>AM</h2>
                  </div>
                  <h1 className='text-2xl font-medium text-tertiary-light-apricot'>Alex Mercer</h1>
                </div>
                
                <div className='flex justify-between items-center gap-[14px]'>
                  <h2 className="text-[18px] font-normal text-tertiary-light-apricot">14 min</h2>
                  <div className='size-[22px] flex justify-center items-center'>
                      <Image src={DotMenu} alt="share" />
                  </div>
                </div>
              </div>
              
              <h2 className='text-xl font-normal text-white'>Looking forward to the game! What&apos;s the final player count?</h2>
            </div>

            <div className="py-[2.4px]">
              <button className="flex gap-2">
                <div className="size-[26px] flex justify-center items-center">
                  <Image src={ReplyIcon} alt="reply" />
                </div>
                <h2 className="text-[18px] font-medium text-[#808080]">Reply</h2>
              </button>
            </div>  
          </div>

          {/* RIFAT LAST REPLY */}
          <div className="flex flex-col space-y-3 custom-dashed-border">
            
            <div className="pl-7"> 
              <div className="p-[18px] flex flex-col gap-3 bg-tertiary-light-apricot rounded-2xl">
                <div className='flex justify-between items-center'>
                  <div className='flex justify-start items-center gap-[10px]'>
                    <div className='size-10 bg-secondary-pure-green rounded-full flex justify-center items-center'>
                      <h2 className='uppercase text-[18px] font-bold text-tertiary-light-apricot leading-6'>RK</h2>
                    </div>
                    <h1 className='text-2xl font-medium text-secondary-pure-green'>Rifat Khan</h1>
                  </div>
                  
                  <div className='flex justify-between items-center gap-[14px]'>
                    <h2 className="text-[18px] font-normal text-secondary-pure-green">14 min</h2>
                    <div className='size-[22px] flex justify-center items-center' >
                        <Image src={DotMenuGreen} alt="share" />
                    </div>
                  </div>
                </div>
                
                <h2 className='text-xl font-normal text-tertiary-night-black'>got any friends?</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WRITE A COMMENT */}
      <div className="flex justify-center items-center p-6">
        <input type="text" placeholder="Write a comment" className="w-full px-6 py-5 border-1 border-[#C0C0C0] rounded-full text-[18px] font-medium leading-[18px] text-[#]"/>
      </div>
    </div>
  )
}
