import React from 'react'

function Comments({ data }) {
    const { name, comments, reply } = data


    return (
        <div className='flex flex-row p-5 bg-gray-200 rounded-2xl m-2 '>
            <img
                className='w-12 h-12 mx-2'
                src={'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'}
            />
            <div>
                <h2 className='font-bold'>{name}</h2>
                <p>{comments}</p>
            </div>
            {/* <div>{reply}</div> */}
        </div>
    )
}

export default Comments