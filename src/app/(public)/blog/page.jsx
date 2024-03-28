import InfoPagesContainer from '@/components/common/InfoPagesContainer'
import PageHeaderWithNameAndBgImage from '@/components/common/PageHeaderWithNameAndBgImage'
import Layouts from '@/layouts'
import React, { Fragment } from 'react'
import Images from '../../../../public/assets/Images'
import BlogInfoCard from '@/sections/Blog/BlogInfoCard'

function page() {
    return (
        <Layouts.Secondary breadcrumb={false}>
            <PageHeaderWithNameAndBgImage pageHeading='Blog' />
            <InfoPagesContainer>
                <div className="grid grid-col-1 md:grid-cols-3 gap-6">
                    {
                        blogsData?.map(data => (
                            <Fragment key={data._id}>
                                <BlogInfoCard data={data} />
                            </Fragment>
                        ))
                    }
                </div>

            </InfoPagesContainer>

        </Layouts.Secondary>
    )
}

export default page


const blogsData = [
    {
        _id: '65f2f25ff2cb7067b2976284',
        title: 'Thermotolerant yeast and efficient fermentation solutions',
        category: 'Business',
        author: {
            _id: '65f282e7ff5a77502038275a',
            firstName: 'Aleksandra',
            lasName: 'Jaworska',
            image: Images.profilePic
        },
        image: Images.our_product_image,
        createdAt: "2024-03-14T12:49:35.129Z",
        updatedAt: "2024-03-14T12:49:51.700Z"
    },
    {
        _id: '65f2f25ff2cb7067b2976283',
        title: 'Five Best New England-style IPAs (NEIPAs)',
        category: 'Business',
        author: {
            _id: '65f282e7ff5a77502038275a',
            firstName: 'Aleksandra',
            lasName: 'Jaworska',
            image: Images.profilePic
        },
        image: Images.our_product_image,
        createdAt: "2024-03-14T12:49:35.129Z",
        updatedAt: "2024-03-14T12:49:51.700Z"
    },
    {
        _id: '65f2f25ff2cb7067b2976243',
        title: 'Beer Basics: How To Identify A Good Beer?',
        category: 'Business',
        author: {
            _id: '65f282e7ff5a77502038275a',
            firstName: 'Aleksandra',
            lasName: 'Jaworska',
            image: Images.profilePic
        },
        image: Images.our_product_image,
        createdAt: "2024-03-14T12:49:35.129Z",
        updatedAt: "2024-03-14T12:49:51.700Z"
    },
    {
        _id: '65f2f25ff2cb7067b29756765',
        title: 'Thermotolerant yeast and efficient fermentation solutions',
        category: 'Business',
        author: {
            _id: '65f282e7ff5a77502038275a',
            firstName: 'Aleksandra',
            lasName: 'Jaworska',
            image: Images.profilePic
        },
        image: Images.our_product_image,
        createdAt: "2024-03-14T12:49:35.129Z",
        updatedAt: "2024-03-14T12:49:51.700Z"
    },
    {
        _id: '65f2f25ff2cb7067b29756764',
        title: 'Thermotolerant yeast and efficient fermentation solutions',
        category: 'Business',
        author: {
            _id: '65f282e7ff5a77502038275a',
            firstName: 'Aleksandra',
            lasName: 'Jaworska',
            image: Images.profilePic
        },
        image: Images.our_product_image,
        createdAt: "2024-03-14T12:49:35.129Z",
        updatedAt: "2024-03-14T12:49:51.700Z"
    },
]

