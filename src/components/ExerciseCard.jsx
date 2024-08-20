import React, { useState } from 'react'

export default function ExerciseCard({ exercise, index }) {

    const [setsCompleted, setSetsCompleted] = useState(0)

    function handleSetCount() {
        // Increment setsCompleted until it reaches 5 and then set it back to 0
        setSetsCompleted((setsCompleted + 1) % 6)
    }

    return (
        <div className="p-4 rounded-md flex flex-col gap-4 bg-neutral-900 sm:flex-wrap">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <h4 className="text-5xl sm:inline font-semibold text-red-400">0{index + 1}</h4>
                    <h2 className="text-2xl font-medium capitalize">{exercise.name.replaceAll("_", " ")}</h2>
                    <h3 className="text-red-400 text-xs">Muscle Group</h3>
                    <h5 className="capitalize text-neutral-400 text-md">{exercise.muscles.join(" & ")}</h5>
                </div>
                <div className="flex flex-col">
                    <div className="mb-2">
                    <h3 className="text-red-400 text-xs">Exercise Type</h3>
                    <h5 className="capitalize text-neutral-400 text-md">{exercise.type}</h5>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 sm:place-items-center gap-2">
                {["reps", "rest"].map((info) => {
                    return (
                        <div key={info} className="flex flex-col p-2 border-[1.5px] border-solid border-red-950 w-full">
                            <h3 className='capitalize text-neutral-400 text-sm'>{info === 'reps' ? `${exercise.unit}` : info}</h3>
                            <p className="font-medium">{exercise[info]}</p>
                        </div>
                    )
                })}
                <button onClick={handleSetCount} className="flex flex-col p-2 border-[1.5px] duration-200 border-solid border-red-600 hover:border-red-400 w-full text-neutral-400 text-sm capitlize">
                    Sets Completed
                    <span className="font-medium block text-white text-base">{setsCompleted} / 5</span>
                </button>
            </div>
        </div>
    )
}
