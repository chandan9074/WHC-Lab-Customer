import React from 'react'
import Icons from '../../../public/assets/Icons'
import Image from 'next/image'

function SocialMediaShare() {
    return (
        <div className='flex flex-col gap-4 w-full md:w-1/3'>
            <p className='text-sm md:text-base font-medium text-neutral-400'>Share this post</p>
            <div className='flex items-center gap-4'>
                <Image
                    src={Icons.facebook_regular}
                    alt="Icon"
                    width={1000}
                    height={1000}
                    className="w-[40px] h-[40px] p-2 rounded-full bg-stroke-new-10"
                />
                <Image
                    src={Icons.twitter_regular}
                    alt="Icon"
                    width={1000}
                    height={1000}
                    className="w-[40px] h-[40px] p-2 rounded-full bg-stroke-new-10"
                />
                <Image
                    src={Icons.linkedIn_regular}
                    alt="Icon"
                    width={1000}
                    height={1000}
                    className="w-[40px] h-[40px] p-2 rounded-full bg-stroke-new-10"
                />
            </div>
        </div>
    )
}

export default SocialMediaShare