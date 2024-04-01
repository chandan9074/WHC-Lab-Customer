import { formatDate } from '@/utils'
import React from 'react'
import Images from '../../../public/assets/Images'
import Text from '@/components/Text'
import Image from 'next/image'

function RecentPost() {
    return (
        <div className='p-6 border border-stroke-new rounded-2xl bg-white flex flex-col gap-8 md:gap-9'>
            <Text.Secondary>Recent Post</Text.Secondary>

            <div className='flex flex-col gap-6'>
                {Array(4).fill().map((_, index) => (
                    <div className='flex gap-3 items-start' key={index}>
                        <Image
                            src={Images.productImage}
                            alt="Icon"
                            width={1000}
                            height={1000}
                            className="w-[50px] h-[100%]"

                        />
                        <div>
                            <p className='text-base font-medium clamp cursor-pointer text-brand-blue-800'>Five Best New England-style IPAs (NEIPAs)</p>
                            <p className='text-neutral-400'>{formatDate('2024-03-14T12:49:35.129Z')}</p>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default RecentPost