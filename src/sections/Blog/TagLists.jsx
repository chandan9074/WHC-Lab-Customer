import Text from '@/components/Text'
import React from 'react'

function TagLists() {
    return (
        <div className='flex flex-col gap-4 p-6 border border-stroke-new rounded-2xl bg-white'>
            <Text.Secondary className='text-xl'>Tags</Text.Secondary>

            <div className='grid grid-cols-2 gap-4'>
                {Array(4).fill().map((_, index) => (
                    <p className='bg-stroke-new-10 bg-opacity-50 text-sm text-brand-blue-800 font-medium rounded-full text-center py-3' key={index}>
                        Adventures
                    </p>
                ))}



            </div>
        </div>
    )
}

export default TagLists