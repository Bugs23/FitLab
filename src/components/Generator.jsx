import React, {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/workoutData'
import Button from './Button'
import { generateWorkout } from '../utils/workoutGenerator'

export default function Generator({poison, setPoison, muscles, setMuscles, goal, setGoal, updateWorkout}) {

  const [showModal, setShowModal] = useState(false)

  function toggleModal() {
    setShowModal(!showModal)
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((muscle) => muscle !== muscleGroup))
      return
    }

    if (muscles.length >= 3) {
      return
    }

    if (poison !== "individual") {
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }

    setMuscles([...muscles, muscleGroup])
  }

  function Header({index, title, description}) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-2">
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">{index}</p>
          <h4 className="capitalize text-xl sm:text-2xl md:text-3xl">{title}</h4>
        </div>
        <p className="text-sm sm:text-base mx-auto">{description}</p>
      </div>
    )
  }

  return (
    <SectionWrapper sectionId={"generate"} header={"Create your workout"} title={["TRAIN", "SMART"]}>
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
                setPoison(type)
              }} 
              className={`bg-slate-950 border py-4 rounded-lg duration-200 hover:border-blue-600 capitalize ${type === poison ? "border-blue-600" : "border-blue-400"}`}
            >
              {type.replace("_", " ")}
            </button>
          )
        })}
      </div>
      {/* Choose muscles */}
      <Header index={"02"} title={"Choose muscles"} description={"Select the muscles you want to work"} />
      <div className="bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col">
        <button onClick={toggleModal} className="relative flex items-center justify-center p-3">
          <p className="capitalize">{muscles.length === 0 ? "Select muscle groups" : muscles.join("/")}</p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {/* 
              - If the poison chosen is "individual", set the WORKOUTS index to poison (since the "individual" key is already an array)
              - If the poison chosen isn't "individual" then get an array of the keys in the selected poison so you can map over each key
            */}
            {
              (poison === "individual" ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                return (
                  <button 
                    key={muscleGroupIndex} 
                    className={`${muscles.includes(muscleGroup) ? "text-blue-400" : ""} capitalize p-2 cursor-pointer duration-200`}
                    onClick={() => {updateMuscles(muscleGroup)}}
                  >
                    {muscleGroup}
                  </button>
                )
              })
            }
          </div> 
        )}
      </div>
      {/* Choose your split */}
      <Header index={"03"} title={"Choose your split"} description={"Select your workout split"} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Get the workout type keys from the WORKOUTS object and make buttons for each of them */}
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button 
              key={schemeIndex}
              onClick={() => {
                setGoal(scheme)
              }} 
              className={'bg-slate-950 border  duration-200 hover:border-blue-600 py-3 rounded-lg px-4 ' + (scheme === goal ? ' border-blue-600' : ' border-blue-400')}
            >
              {scheme.replace("_", " ")}
            </button>
          )
        })}
      </div>
      <Button func={updateWorkout} text="Create workout"/>
    </SectionWrapper>
  )
}