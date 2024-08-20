import React from 'react'

export default function Button({children, text, additionalStyles="", func}) {
    return (
        <button onClick={func} className={`capitalize px-8 mx-auto py-4 bg-red-600 shadow-md text-white transition duration-500 hover:scale-110 ${additionalStyles}`}>
            {children} {text}
        </button>
    )
}
