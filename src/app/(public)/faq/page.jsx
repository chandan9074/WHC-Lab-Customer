'use client'
import PageHeaderWithNameAndBgImage from "@/components/common/PageHeaderWithNameAndBgImage";
import Layouts from "@/layouts";
import Image from "next/image";
import Icons from "../../../../public/assets/Icons";
import { useState } from "react";
import Buttons from "@/components/Buttons";



export default function FAQ() {
    const [collapse, setCollapse] = useState('01')

    // Function to toggle collapse state
    const toggleCollapse = (itemId) => setCollapse(prevState => (prevState === itemId ? null : itemId));

    return (
        <Layouts.Secondary>

            <PageHeaderWithNameAndBgImage pageHeading='FAQ' backgroundImage={'/assets/Images/page_header_bg.png'} />
            <div className="container mx-auto py-6 px-4 flex gap-4 flex-col mb-20">
                {
                    faqData.map((item, index) => (
                        <div onClick={() => toggleCollapse(item.id)} className={` cursor-pointer flex justify-between gap-1 items-start p-4 md:p-8 border ${collapse === item.id ? 'border-brand-blue-500' : 'border-stroke-new '} rounded-2xl`} key={index}>
                            <div className="flex flex-col gap-4">
                                <p className="font-semibold text-sm md:text-[18px] text-brand-blue-500">{item.title}</p>
                                <p className={`text-[#474D66] font-normal text-xs md:text-base transition-all duration-500 ease-in-out overflow-hidden ${collapse === item.id ? 'block' : 'hidden'}`}>{item.description}</p>

                            </div>

                            <Image
                                src={Icons.right_arrow_gray}
                                alt="search"
                                width={1000}
                                height={1000}
                                className={`w-[30px] h-[30px] cursor-pointer transform transition-transform duration-300 ${collapse === item.id ? '-rotate-90' : 'rotate-90'}`}

                            />
                        </div>
                    ))
                }



                <div className={`flex flex-col md:flex-row justify-between gap-10 items-center p-8 border transform transition-colors duration-300 border-stroke-new rounded-2xl`}>
                    <p className="font-semibold text-sm md:text-[18px] text-brand-blue-500">Do all tokens need to be used at onceDo all tokens need to be used at once?</p>
                    <Buttons.PrimaryButton label={'Contact Us'} className='whitespace-nowrap px-14' />
                </div>

            </div>


        </Layouts.Secondary>
    )
}

const faqData = [
    {
        id: '01',
        title: 'Do all tokens need to be used at onceDo all tokens need to be used at once?',
        description: 'Tokens Are Redeemable At Any Time. Simply Write One Of Your Allocated Reference Numbers On The Sample And Send It To Us.Tokens Are Redeemable At Any Time.'
    },
    {
        id: '03',
        title: 'Do all tokens need to be used at onceDo all tokens need to be used at once?',
        description: 'Tokens Are Redeemable At Any Time. Simply Write One Of Your Allocated Reference Numbers On The Sample And Send It To Us.'
    },
    {
        id: '04',
        title: 'Do all tokens need to be used at onceDo all tokens need to be used at once?',
        description: 'Tokens Are Redeemable At Any Time. Simply Write One Of Your Allocated Reference Numbers On The Sample And Send It To Us.'
    },
    {
        id: '05',
        title: 'Do all tokens need to be used at onceDo all tokens need to be used at once?',
        description: 'Tokens Are Redeemable At Any Time. Simply Write One Of Your Allocated Reference Numbers On The Sample And Send It To Us.'
    },
    {
        id: '06',
        title: 'Do all tokens need to be used at onceDo all tokens need to be used at once?',
        description: 'Tokens Are Redeemable At Any Time. Simply Write One Of Your Allocated Reference Numbers On The Sample And Send It To Us.'
    },
    {
        id: '07',
        title: 'Do all tokens need to be used at onceDo all tokens need to be used at once?',
        description: 'Tokens Are Redeemable At Any Time. Simply Write One Of Your Allocated Reference Numbers On The Sample And Send It To Us.'
    },
]