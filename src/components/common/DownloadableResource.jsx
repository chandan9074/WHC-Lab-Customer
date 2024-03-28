import Image from 'next/image'
import React from 'react'
import Icons from '../../../public/assets/Icons'

function DownloadableResource({
    text = "Downloadable Resources"
}) {
    return (
        <div className='flex items-center gap-3 cursor-pointer'>
            <Image
                src={Icons.download}
                width={1000}
                height={1000}
                alt="download"
                className="w-5 h-5 md:w-6 md:h-6"
            />
            <p className='text-brand-blue-500 text-base font-medium font-montserrat'>{text}</p>
        </div>
    )
}

export default DownloadableResource