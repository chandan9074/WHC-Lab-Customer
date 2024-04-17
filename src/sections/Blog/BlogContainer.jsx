import React, { Fragment } from 'react'
import BlogInfoCard from './BlogInfoCard'

function BlogContainer({ blogsData }) {
    return (
        <div className="grid grid-col-1 md:grid-cols-3 gap-6">
            {
                blogsData?.map(data => (
                    <Fragment key={data._id}>
                        <BlogInfoCard data={data} />
                    </Fragment>
                ))
            }
        </div>
    )
}

export default BlogContainer