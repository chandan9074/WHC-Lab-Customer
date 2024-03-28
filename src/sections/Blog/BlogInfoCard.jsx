import { GET_IMAGE_RENDER } from '@/helpers/apiURLS'
import { formatDate } from '@/utils'
import Image from 'next/image'
import React from 'react'

function BlogInfoCard({
    data
}) {
    return (
        <div className='border border-stroke-new rounded-2xl bg-white group'>
            <div className="w-full h-[214px] lg:h-[300px] overflow-hidden rounded-t-2xl">
                <Image
                    src={data?.image}
                    alt="search"
                    width={1000}
                    height={1000}
                    className="w-full h-[214px] lg:h-[300px] object-cover group-hover:scale-110 duration-300"

                />
            </div>

            <div className='p-6 flex flex-col gap-5'>
                <div className='flex justify-between items-center text-sm'>
                    <p className='text-brand-blue-500 bg-stroke-white px-2 py-[1px] rounded'>{data?.category}</p>
                    <p className='text-brand-blue-300'>{formatDate(data?.createdAt)}</p>
                </div>
                <div className='h-12'>
                    <p className='font-montserrat text-base font-semibold clamp cursor-pointer'>{data?.title} {data?.title} {data?.title} {data?.title}</p>
                </div>
                <div className='h-[1px] bg-stroke-new'></div>
                <div className='flex gap-4 items-center'>
                    <Image
                        src={data?.author?.image}
                        alt="search"
                        width={1000}
                        height={1000}
                        className={`w-[48px] h-[48px] cursor-pointer `}

                    />
                    <p className='font-montserrat text-base font-semibold'> {`${data?.author?.firstName} ${data?.author?.lastName}`} </p>
                </div>
            </div>

        </div>
    )
}

export default BlogInfoCard