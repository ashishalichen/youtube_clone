import React from 'react'
import Comments from './Comments'
import { COMMENTS } from '../utils/constant'
import CommentsList from './CommentsList'

function CommentsContainer() {
    return (
        <div className='px-20'>
            <h1 className='text-3xl font-semibold'>Comments</h1>
            <CommentsList commentData={COMMENTS} />
        </div>
    )
}

export default CommentsContainer