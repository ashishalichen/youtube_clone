import React from 'react'
import Button from './Button'

function ButtonList() {
    const listContent = ['All', 'Gaming', 'Live', 'Shorts', 'Video', 'Cricket', 'Football', 'F1', 'Basketball', 'News', 'Songs', 'Trending']

    return (
        <div className='flex justify-center'>
            {
                listContent.map((item, index) => {
                    return <Button key={index} name={item} />
                })
            }
        </div>
    )
}

export default ButtonList