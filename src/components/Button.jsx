import React from 'react'

export default function Button({text, func}) {
    return (
        <button onClick={func} className="capitalize px-8 mx-auto py-4 rounded-md border-2 bg-slate-950 border-blue-400 border-solid blueShadow duration-200">
            {text}
        </button>
    )
}
