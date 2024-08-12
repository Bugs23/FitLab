import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout({workout}) {
  return (
    <SectionWrapper sectionId={"workout"} header={"Designed for your goals"} title={["YOUR", "ROUTINE"]}>
      <div className="flex flex-col gap-4">
        {workout.map((exercise, index) => {
          return (
            <ExerciseCard key={index} index={index} exercise={exercise}/>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
