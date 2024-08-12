import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/workoutGenerator'

function App() {
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState("individual")
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState(["strength_power"])

  function updateWorkout() {
    // If the button's clicked and no muscles have been selected (the length of the array is 0), don't generate a new workout
    if (muscles.length < 1) {
      return
    }

    let newWorkout = generateWorkout({poison, muscles, goal})
    console.log(newWorkout)

    setWorkout(newWorkout)

    window.location.href = "#workout"
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator 
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {/* Only render the workout section if workout state exists */}
      {workout && <Workout workout={workout} />}
    </main>
  )
}

export default App
