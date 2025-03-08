import React from 'react'

function Button({ name }) {
    return (
        <div>
            <button className='bg-gray-100 hover:bg-gray-300 transform transition duration-300 py-1 px-3 m-2 rounded'>
                {name}
            </button>
        </div>
    )
}

export default Button