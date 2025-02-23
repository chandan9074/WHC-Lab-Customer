import React from 'react'
import NextBreadcrumb from './Breadcrumb'

function PageHeaderWithNameAndBgImage({
    pageHeading,
    backgroundImage = '/assets/Images/page_header_bg.png'
}) {
    return (
        <>
            <div className="h-52 bg-cover bg-no-repeat bg-center relative"
                style={{
                    backgroundImage:
                        `url(${backgroundImage})`,
                }}
            >
                <div className="absolute inset-0 bg-overlay flex justify-center flex-col" style={{ backgroundColor: 'rgba(11, 40, 72, 0.60)' }}>
                    <p className="container mx-auto px-6 sm:px-0 text-white font-bold text-2xl md:text-5xl font-montserrat leading-normal">{pageHeading}</p>
                </div>

            </div>
            <NextBreadcrumb />
        </>
    )
}

export default PageHeaderWithNameAndBgImage