import React from 'react'

export default function Button({children, additionalStyles="", func}) {
    return (
        <button onClick={func} className={`text-white bg-red-700 hover:bg-red-800 py-3 px-8 mx-auto capitalize transition duration-500 shadow-lg hover:scale-105 ${additionalStyles}`}>
            {children}
        </button>
    )
}
