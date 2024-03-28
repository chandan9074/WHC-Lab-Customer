import InfoPagesContainer from '@/components/common/InfoPagesContainer'
import PageHeaderWithNameAndBgImage from '@/components/common/PageHeaderWithNameAndBgImage'
import Layouts from '@/layouts'
import React from 'react'
import DownloadableResource from '@/components/common/DownloadableResource'

function DistilledResources() {
    return (
        <Layouts.Secondary breadcrumb={false}>
            <PageHeaderWithNameAndBgImage pageHeading='DISTILLING RESOURCES' />
            <InfoPagesContainer>
                <div className='flex flex-col gap-6'>
                    <h3 className='text-xl md:text-2xl font-bold text-brand-blue-500'>
                        DISTILLING RESOURCES
                    </h3>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {
                            Array(8).fill().map((_, index) => (
                                <DownloadableResource text='Downloadable Distilled Resources' key={index} />
                            ))
                        }

                    </div>
                </div>
            </InfoPagesContainer>
        </Layouts.Secondary>
    )
}

export default DistilledResources