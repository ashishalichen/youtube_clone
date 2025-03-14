import React from 'react'
import Comments from './Comments'

function CommentsList({ commentData }) {

    return (
        commentData.map((comments, index) =>
            <div key={index}>
                <Comments data={comments} />
                <div className='ml-6 border-l-2'>
                    <CommentsList commentData={comments.reply} />
                </div>
            </div>
        )
    )
}

export default CommentsList