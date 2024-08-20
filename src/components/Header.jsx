import React from 'react'

export default function Header({index, title, description}) {
    return (
        <div className="flex flex-col gap-4">
            <div className="text-center gap-2">
                <p className="text-5xl lg:text-6xl font-semibold text-red-600">{index[0]}{index[1]}</p>
                <h4 className="capitalize text-3xl lg:text-4xl">{title}</h4>
            </div>
            <p className="text-base lg:text-lg mx-auto text-neutral-400">{description}</p>
        </div>
    )
}
