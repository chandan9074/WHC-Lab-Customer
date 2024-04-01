import Text from '@/components/Text'
import { formatDate } from '@/utils'
import Image from 'next/image'
import React from 'react'
import Icons from '../../../../public/assets/Icons'

function CommentList() {
    return (
        <div>
            <Text.Secondary>Comment</Text.Secondary>

            {Array(4).fill().map((_, index) => (

                <div className='py-5 md:py-6 flex gap-5' key={index}>
                    <Image
                        src={Icons.user_avatar}
                        alt="Icon"
                        width={1000}
                        height={1000}
                        className="w-[50px] h-[50px] rounded-full"

                    />
                    <div className='flex flex-col gap-1'>
                        <p className='text-brand-blue-500 text-base font-medium'>Ralph Edwards</p>
                        <p className='text-brand-blue-800 text-sm font-normal'>{formatDate('2024-03-14T12:49:35.129Z')}</p>
                        <p className='text-brand-blue-400 text-base font-normal mt-2'>
                            So when your site is looked for on the search engine it will be very easy to come across as it will come up as one of the first. This will bring many more people to your web site as well as increase your Google PageRank.
                        </p>
                    </div>

                </div>
            ))}


        </div>
    )
}

export default CommentList