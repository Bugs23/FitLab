import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/workoutData'
import Button from './Button'
import Header from './Header'
import { generateWorkout } from '../utils/workoutGenerator'

export default function Generator({ split, setSplit, muscles, setMuscles, goal, setGoal, updateWorkout, formulating }) {

  const [showModal, setShowModal] = useState(false)

  function toggleModal() {
    setShowModal(!showModal)
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((muscle) => muscle !== muscleGroup))
      return
    }

    if (muscles.length >= 5) {
      return
    }

    if (split !== "individual_muscle") {
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }

    setMuscles([...muscles, muscleGroup])
  }

  return (
    <SectionWrapper sectionId={"generate"} header={"Create your workout"} title={["Train", "Smart"]}>
      {/* Choose your split */}
      <Header index={"01"} title={"Choose your split"} description={"Select your workout split"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Get the workout type keys from the WORKOUTS object and make buttons for each of them */}
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              key={typeIndex}
              onClick={() => {
                setMuscles([])
                setSplit(type)
              }}
              className={`text-white py-4 capitalize transition duration-500 ${type === split ? "ring-2 ring-red-800" : "bg-red-600 hover:scale-110"}`}
            >
              {type.replaceAll("_", " ")}
            </button>
          )
        })}
      </div>
      {/* Choose muscles */}
      <Header index={"02"} title={"Choose muscles"} description={"Select the muscles you want to work"} />
      <div className="bg-red-600 text-white flex flex-col">
        <button onClick={toggleModal} className="relative flex items-center justify-center p-3">
          <span className="capitalize">{muscles.length === 0 ? "Select muscle groups" : muscles.join("/")}</span>
          <i className={`fa-solid fa-caret-down ${showModal && "rotate-180"} absolute right-3 transition`}></i>
        </button>
        {showModal && (
          <div className="flex flex-col px-3 pb-3 bg-neutral-900">
            {/* 
              - If the split chosen is "individual_muscle", set the WORKOUTS index to split (since the "individual_muscle" key is already an array)
              - If the split chosen isn't "individual_muscle" then get an array of the keys in the selected split so you can map over each key
            */}
            {
              (split === "individual_muscle" ? WORKOUTS[split] : Object.keys(WORKOUTS[split])).map((muscleGroup, muscleGroupIndex) => {
                return (
                  <button
                    key={muscleGroupIndex}
                    className={`${muscles.includes(muscleGroup) ? "text-red-600" : ""} capitalize p-2 cursor-pointer duration-200`}
                    onClick={() => { updateMuscles(muscleGroup) }}
                  >
                    {muscleGroup}
                  </button>
                )
              })
            }
          </div>
        )}
      </div>
      {/* Choose your goal */}
      <Header index={"03"} title={"Choose your goal"} description={"Select your workout goal"} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Get the workout type keys from the WORKOUTS object and make buttons for each of them */}
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              key={schemeIndex}
              onClick={() => {
                setGoal(scheme)
              }}
              className={`text-white py-4 capitalize transition duration-500 ${scheme === goal ? "ring-2 ring-red-800" : "bg-red-600 hover:scale-110"}`}

            >
              {scheme === "strength_power" ? scheme.replace("_", " & ") : scheme.replace("_", " ")}
            </button>
          )
        })}
      </div>
      <Button additionalStyles="mb-8" func={updateWorkout} text="Create workout">
        {formulating && 
        <svg className="mr-1 h-5 w-5 animate-spin text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        }
      </Button>
    </SectionWrapper>
  )
}